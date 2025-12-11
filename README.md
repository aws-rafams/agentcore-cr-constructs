# AgentCore Experimental Constructs

![Experimental](https://img.shields.io/badge/status-experimental-orange.svg)
![CDK Version](https://img.shields.io/badge/CDK-v2.232.1-blue.svg)
![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)

Experimental Construct Library for Amazon Bedrock AgentCore using Custom Resources.

⚠️ **For quick experimentation, Not for production use.** Breaking changes expected when official L1 constructs are released and abstraction is re-implemented in `@aws-cdk/aws-bedrock-agentcore-alpha`.

## Overview

This library provides experimental CDK constructs for Amazon Bedrock AgentCore services, including:

- **Gateway**: Create and manage AgentCore gateways with Lambda targets
- **Policy Engine**: Define and manage Cedar-based authorization policies
- **Cedar Policy Builder**: Fluent API for creating Cedar policy statements

## Installation

```bash
npm install agentcore-experimental-constructs
```

## Usage Examples

### Basic Gateway with Lambda Target

```typescript
import { App, Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { Gateway, ToolSchema } from '@aws-cdk/aws-bedrock-agentcore-alpha';
import { Construct } from 'constructs';
import * as path from 'path';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Create a gateway
    const gateway = new Gateway(this, 'Gateway', {
      gatewayName: 'test-gateway',
      description: 'Test gateway',
    });

    // Create a Lambda function
    const lambda = new Function(this, 'Lambda', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda'),
    });

    // Add Lambda as a target to the gateway
    const lambdaTarget = gateway.addLambdaTarget('lambda', {
      gatewayTargetName: 'weather-lambda',
      lambdaFunction: lambda,
      toolSchema: ToolSchema.fromLocalAsset(path.join(__dirname, 'lambda', 'lambda_tool_schema.json')),
    });

    new CfnOutput(this, 'GatewayArn', { value: gateway.gatewayArn });
    new CfnOutput(this, 'GatewayUrl', { value: gateway.gatewayUrl! });
  }
}
```

### Policy Engine with Cedar Policies

```typescript
import {
  CedarPolicy,
  CedarAction,
  CedarEffect,
  CedarPrincipal,
  CedarResource,
  PolicyEngine,
  ValidationMode,
} from 'agentcore-experimental-constructs';

export class PolicyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // Create a policy engine
    const engine = new PolicyEngine(this, 'PolicyEngine', {
      name: 'test_policy_engine',
      description: 'Test policy engine',
    });

    // Add a Cedar policy
    engine.addPolicy({
      name: 'test_policy',
      description: 'Test policy',
      policyDefinition: CedarPolicy.fromPolicyStatement({
        effect: CedarEffect.PERMIT,
        principal: CedarPrincipal.anyOAuthUser(),
        action: CedarAction.specificTool(lambdaTarget, 'getWeather'),
        resource: CedarResource.gateway(gateway),
        when: ['principal.hasTag("username")'],
        unless: ['context.input.city == "London"'],
      }),
      validationMode: ValidationMode.IGNORE_ALL_FINDINGS,
    });

    new CfnOutput(this, 'EngineArn', { value: engine.policyEngineArn });
    new CfnOutput(this, 'EngineId', { value: engine.policyEngineId });
  }
}
```

### Complete Example

```typescript
import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import {
  CedarPolicy,
  CedarAction,
  CedarEffect,
  CedarPrincipal,
  CedarResource,
  PolicyEngine,
  ValidationMode,
} from 'agentcore-experimental-constructs';
import { Gateway, ToolSchema } from '@aws-cdk/aws-bedrock-agentcore-alpha';
import * as path from 'path';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const gateway = new Gateway(this, 'Gateway', {
      gatewayName: 'test-gateway',
      description: 'Test gateway',
    });

    const lambda = new Function(this, 'Lambda', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda'),
    });

    const lambdaTarget = gateway.addLambdaTarget('lambda', {
      gatewayTargetName: 'weather-lambda',
      lambdaFunction: lambda,
      toolSchema: ToolSchema.fromLocalAsset(path.join(__dirname, 'lambda', 'lambda_tool_schema.json')),
    });

    const engine = new PolicyEngine(this, 'PolicyEngine', {
      name: 'test_policy_engine',
      description: 'Test policy engine',
    });

    engine.addPolicy({
      name: 'test_policy',
      description: 'Test policy',
      policyDefinition: CedarPolicy.fromPolicyStatement({
        effect: CedarEffect.PERMIT,
        principal: CedarPrincipal.anyOAuthUser(),
        action: CedarAction.specificTool(lambdaTarget, 'getWeather'),
        resource: CedarResource.gateway(gateway),
        when: ['principal.hasTag("username")'],
        unless: ['context.input.city == "London"'],
      }),
      validationMode: ValidationMode.IGNORE_ALL_FINDINGS,
    });

    new CfnOutput(this, 'GatewayArn', { value: gateway.gatewayArn });
    new CfnOutput(this, 'GatewayUrl', { value: gateway.gatewayUrl! });
    new CfnOutput(this, 'EngineArn', { value: engine.policyEngineArn });
    new CfnOutput(this, 'EngineId', { value: engine.policyEngineId });
  }
}

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const app = new App();
new MyStack(app, 'agentcore-policy-dev', { env: devEnv });
app.synth();
```

## API Reference

### Gateway
- Create AgentCore gateways
- Add Lambda targets with tool schemas
- Configure gateway settings

### PolicyEngine
- Create and manage policy engines
- Add Cedar-based authorization policies
- Configure validation modes

### Cedar Policy Builder
- Fluent API for creating Cedar policies
- Support for principals, actions, resources
- Conditional logic with `when` and `unless` clauses

## Limitations

- **Experimental**: API may change without notice
- **Custom Resources**: Uses CloudFormation custom resources for AWS API calls
- **Region Support**: Limited to regions where AgentCore is available
- **Breaking Changes**: Expected when official L1 constructs are released

## Contributing

This is an experimental library. Contributions are welcome but expect significant changes as the official CDK constructs become available.

## License

Apache 2.0