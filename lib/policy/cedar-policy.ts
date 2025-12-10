import { PolicyDefinition } from '@aws-sdk/client-bedrock-agentcore-control';
import { IGateway, IGatewayTarget } from '@aws-cdk/aws-bedrock-agentcore-alpha';

export interface IPolicyDefinition {
  /**
   * Renders the Policy
   */
  __render(): PolicyDefinition;
}

export enum CedarEffect {
  /**
   * Allows access
   */
  PERMIT = 'permit',
  /**
   * Denies access
   */
  FORBID = 'forbid',
}

export enum PrincipalEntityType {
  AGENTCORE_OAUTH_USER = 'AgentCore::OAuthUser',
}

export enum ActionEntityType {
  AGENTCORE_ACTION = 'AgentCore::Action',
}

export enum ResourceEntityType {
  AGENTCORE_GATEWAY = 'AgentCore::Gateway',
}

export enum CedarConditionType {
  WHEN = 'when',
  UNLESS = 'unless',
}

/**
 * Represents a Cedar policy principal expression
 * Used to specify who is making the request
 */
export interface CedarPrincipalExpression {
  readonly expression: string;
}

/**
 * Represents a Cedar policy action expression
 * Used to specify what action is being performed
 */
export interface CedarActionExpression {
  readonly expression: string;
}

/**
 * Represents a Cedar policy resource expression
 * Used to specify which resource is being accessed
 */
export interface CedarResourceExpression {
  readonly expression: string;
}

/**
 * Factory class for creating Cedar principal expressions
 */
export class CedarPrincipal {
  /**
   * Creates a principal expression for a specific OAuth user
   * @param userId The unique identifier of the OAuth user
   */
  static specificOAuthUser(userId: string): CedarPrincipalExpression {
    return {
      expression: `principal == AgentCore::OAuthUser::"${userId}"`,
    };
  }

  /**
   * Creates a principal expression matching any OAuth user
   */
  static anyOAuthUser(): CedarPrincipalExpression {
    return this.anyOfType(PrincipalEntityType.AGENTCORE_OAUTH_USER);
  }

  /**
   * Creates a principal expression for any principal of the specified type
   * @param principalType Optional principal entity type to match
   */
  static anyOfType(principalType?: PrincipalEntityType): CedarPrincipalExpression {
    const expression = principalType ? `principal is ${principalType}` : 'principal';
    return {
      expression,
    };
  }
}

/**
 * Factory class for creating Cedar action expressions
 */
export class CedarAction {
  /**
   * Creates an action expression for a specific tool
   * @param toolName The name of the specific tool/action
   */
  static specificTool(target: IGatewayTarget, toolName: string): CedarActionExpression {
    return {
      expression: `action == AgentCore::Action::"${target.name}___${toolName}"`,
    };
  }

  /**
   * Creates an action expression matching any of the specified tools
   * @param toolNames Array of tool names to match
   */
  static anyOfTools(toolNames: string[]): CedarActionExpression {
    return {
      expression: `action in [${toolNames.map((toolName) => `AgentCore::Action::"${toolName}"`).join(', ')}]`,
    };
  }

  /**
   * Creates an action expression for any action of the specified type
   * @param actionType Optional action entity type to match
   */
  static anyOfType(actionType?: ActionEntityType): CedarActionExpression {
    const expression = actionType ? `action is ${actionType}` : 'action';
    return {
      expression,
    };
  }

  private constructor() {}
}

/**
 * Factory class for creating Cedar resource expressions
 */
export class CedarResource {
  /**
   * Creates a resource expression for a specific gateway
   * @param gateway The gateway instance to reference
   */
  static gateway(gateway: IGateway): CedarResourceExpression {
    return this.specificOfType(ResourceEntityType.AGENTCORE_GATEWAY, gateway.gatewayArn);
  }

  /**
   * Creates a resource expression for a specific resource
   * @param resourceType The type of resource
   * @param resourceName The unique identifier of the resource
   */
  static specificOfType(resourceType: ResourceEntityType, resourceName: string): CedarResourceExpression {
    return {
      expression: `resource == ${resourceType}::"${resourceName}"`,
    };
  }

  /**
   * Creates a resource expression for any resource of the specified type
   * @param resourceType Optional resource entity type to match
   */
  static anyOfType(resourceType?: ResourceEntityType): CedarResourceExpression {
    const expression = resourceType ? `resource is ${resourceType}` : 'resource';
    return {
      expression,
    };
  }

  private constructor() {}
}

/**
 * Defines the structure of a Cedar policy statement
 * Contains all components needed to create a complete Cedar policy
 */
export interface CedarPolicyStatement {
  /**
   * The effect of the policy (permit or forbid)
   */
  effect: CedarEffect;
  /**
   * WHO is making the request
   *
   * @default CedarPrincipal.anyOAuthUser()
   */
  principal?: CedarPrincipalExpression;
  /**
   * WHAT action they want to perform (required)
   */
  action: CedarActionExpression;
  /**
   * WHICH resource they want to access (required)
   */
  resource: CedarResourceExpression;
  /**
   * Additional conditions that must be true for the policy to apply
   */
  when?: string[];
  /**
   * Conditions that must be false for the policy to apply
   */
  unless?: string[];
}

/**
 * Represents a complete Cedar policy that can be rendered for AWS
 */
export class CedarPolicy implements IPolicyDefinition {
  readonly statement: string;

  protected constructor(statement: string) {
    this.statement = statement;
  }

  /**
   * Creates a Cedar policy from a raw Cedar statement string
   * @param statement The raw Cedar policy statement
   */
  static fromStatement(statement: string): CedarPolicy {
    return new CedarPolicy(statement);
  }

  /**
   * Creates a Cedar policy from a structured policy statement
   * @param policyStatement The structured policy components
   */
  static fromPolicyStatement(policyStatement: CedarPolicyStatement): CedarPolicy {
    let statement = `${policyStatement.effect}(`;

    if (policyStatement.principal) {
      statement += `\n  ${policyStatement.principal.expression ?? CedarPrincipal.anyOAuthUser()},`;
    }

    statement += `\n  ${policyStatement.action.expression},`;
    statement += `\n  ${policyStatement.resource.expression}`;

    statement += '\n)';

    if (policyStatement.when) {
      statement += `\n when {\n  ${policyStatement.when.join('\n  ')}\n}`;
    }
    if (policyStatement.unless) {
      statement += `\n unless {\n  ${policyStatement.unless.join('\n  ')}\n}`;
    }

    statement += ';';

    return new CedarPolicy(statement);
  }

  __render(): PolicyDefinition {
    return {
      cedar: {
        statement: this.statement,
      },
    };
  }
}
