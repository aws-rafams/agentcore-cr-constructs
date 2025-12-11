import { IGateway, IGatewayTarget } from '@aws-cdk/aws-bedrock-agentcore-alpha';
import { PolicyDefinition } from '@aws-sdk/client-bedrock-agentcore-control';
export interface IPolicyDefinition {
    /**
     * Renders the Policy
     */
    /** @internal */
    __render(): PolicyDefinition;
}
export declare enum CedarEffect {
    /**
     * Allows access
     */
    PERMIT = "permit",
    /**
     * Denies access
     */
    FORBID = "forbid"
}
export declare enum PrincipalEntityType {
    AGENTCORE_OAUTH_USER = "AgentCore::OAuthUser"
}
export declare enum ActionEntityType {
    AGENTCORE_ACTION = "AgentCore::Action"
}
export declare enum ResourceEntityType {
    AGENTCORE_GATEWAY = "AgentCore::Gateway"
}
export declare enum CedarConditionType {
    WHEN = "when",
    UNLESS = "unless"
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
export declare class CedarPrincipal {
    /**
     * Creates a principal expression for a specific OAuth user
     * @param userId The unique identifier of the OAuth user
     */
    static specificOAuthUser(userId: string): CedarPrincipalExpression;
    /**
     * Creates a principal expression matching any OAuth user
     */
    static anyOAuthUser(): CedarPrincipalExpression;
    /**
     * Creates a principal expression for any principal of the specified type
     * @param principalType Optional principal entity type to match
     */
    static anyOfType(principalType?: PrincipalEntityType): CedarPrincipalExpression;
}
/**
 * Factory class for creating Cedar action expressions
 */
export declare class CedarAction {
    /**
     * Creates an action expression for a specific tool
     * @param toolName The name of the specific tool/action
     */
    static specificTool(target: IGatewayTarget, toolName: string): CedarActionExpression;
    /**
     * Creates an action expression matching any of the specified tools
     * @param toolNames Array of tool names to match
     */
    static anyOfTools(toolNames: string[]): CedarActionExpression;
    /**
     * Creates an action expression for any action of the specified type
     * @param actionType Optional action entity type to match
     */
    static anyOfType(actionType?: ActionEntityType): CedarActionExpression;
    private constructor();
}
/**
 * Factory class for creating Cedar resource expressions
 */
export declare class CedarResource {
    /**
     * Creates a resource expression for a specific gateway
     * @param gateway The gateway instance to reference
     */
    static gateway(gateway: IGateway): CedarResourceExpression;
    /**
     * Creates a resource expression for a specific resource
     * @param resourceType The type of resource
     * @param resourceName The unique identifier of the resource
     */
    static specificOfType(resourceType: ResourceEntityType, resourceName: string): CedarResourceExpression;
    /**
     * Creates a resource expression for any resource of the specified type
     * @param resourceType Optional resource entity type to match
     */
    static anyOfType(resourceType?: ResourceEntityType): CedarResourceExpression;
    private constructor();
}
/**
 * Defines the structure of a Cedar policy statement
 * Contains all components needed to create a complete Cedar policy
 */
export interface CedarPolicyStatement {
    /**
     * The effect of the policy (permit or forbid)
     */
    readonly effect: CedarEffect;
    /**
     * WHO is making the request
     *
     * @default CedarPrincipal.anyOAuthUser()
     */
    readonly principal?: CedarPrincipalExpression;
    /**
     * WHAT action they want to perform (required)
     */
    readonly action: CedarActionExpression;
    /**
     * WHICH resource they want to access (required)
     */
    readonly resource: CedarResourceExpression;
    /**
     * Additional conditions that must be true for the policy to apply
     */
    readonly when?: string[];
    /**
     * Conditions that must be false for the policy to apply
     */
    readonly unless?: string[];
}
/**
 * Represents a complete Cedar policy that can be rendered for AWS
 */
export declare class CedarPolicy implements IPolicyDefinition {
    /**
     * Creates a Cedar policy from a raw Cedar statement string
     * @param statement The raw Cedar policy statement
     */
    static fromStatement(statement: string): CedarPolicy;
    /**
     * Creates a Cedar policy from a structured policy statement
     * @param policyStatement The structured policy components
     */
    static fromPolicyStatement(policyStatement: CedarPolicyStatement): CedarPolicy;
    readonly statement: string;
    protected constructor(statement: string);
    /** @internal */
    __render(): PolicyDefinition;
}
