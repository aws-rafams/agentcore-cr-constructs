import { awscdk } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
const CDK_VERSION = '2.232.1';
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'agentcore-experimental-constructs',
  author: 'Rafael Mosca',
  authorAddress: 'rafams@amazon.co.uk',
  copyrightPeriod: '2025-',
  copyrightOwner: 'Amazon.com, Inc. or its affiliates. All Rights Reserved.',
  repositoryUrl: 'https://github.com/aws-rafams/agentcore-cr-constructs',
  docgen: true,

  cdkVersion: CDK_VERSION,
  jsiiVersion: '~5.9.0',
  packageManager: NodePackageManager.YARN_CLASSIC,
  projenrcTs: true,
  description: `Experimental Construct Library for Amazon Bedrock AgentCore using Custom Resources .
    For quick experimentation, Not for production use. Breaking changes expected when official 
    L1 constructs are released and abstraction is re-implemented in\`@aws-cdk/aws-bedrock-agentcore-alpha\``,
  deps: [],
  peerDeps: [
    `@aws-cdk/aws-bedrock-agentcore-alpha@${CDK_VERSION}-alpha.0`,
    `@aws-cdk/aws-bedrock-alpha@${CDK_VERSION}-alpha.0`,
  ],
  bundledDeps: ['@aws-sdk/client-bedrock-agentcore-control'],
  devDeps: [
    `@aws-cdk/aws-lambda-python-alpha@${CDK_VERSION}-alpha.0`,
    `@aws-cdk/aws-bedrock-agentcore-alpha@${CDK_VERSION}-alpha.0`,
    `@aws-cdk/aws-bedrock-alpha@${CDK_VERSION}-alpha.0`,
  ],
  testdir: 'test',
  srcdir: 'src',
  gitignore: ['*.DS_STORE', '!.node-version', '.vscode', '/src/*/*.js', '/src/*/*.d.ts'],
  stability: 'experimental',
  keywords: ['aws', 'cdk', 'constructs', 'agentcore'],
  publishTasks: true,
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  releaseEnvironment: 'ConstructPublishing',
  packageName: 'agentcore-experimental-constructs',
});

project.synth();
