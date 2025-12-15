import * as path from 'path';
import { Gateway, ToolSchema } from '@aws-cdk/aws-bedrock-agentcore-alpha';
import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { UserPoolClient } from 'aws-cdk-lib/aws-cognito';
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
} from '../src';

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

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const app = new App();

new MyStack(app, 'agentcore-policy-dev', { env: devEnv });

app.synth();
