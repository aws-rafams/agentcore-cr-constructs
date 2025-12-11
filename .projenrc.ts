import { awscdk } from 'projen';
const CDK_VERSION = '2.232.1';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Rafael Mosca',
  authorAddress: 'rafams@amazon.co.uk',
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.7.0',
  name: 'agentcore-experimental-constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rafams/agentcore-cr-constructs.git',
  description: `Experimental Construct Library for Amazon Bedrock AgentCore using Custom Resources .
    For quick experimentation, Not for production use. Breaking changes expected when official 
    L1 constructs are released and abstraction is re-implemented in\`@aws-cdk/aws-bedrock-agentcore-alpha\``,
  packageName: 'agentcore-experimental-constructs',
  deps: [`@aws-cdk/aws-bedrock-agentcore-alpha@${CDK_VERSION}-alpha.0`],
  bundledDeps: ['@aws-sdk/client-bedrock-agentcore-control'],
  devDeps: [`@aws-cdk/aws-lambda-python-alpha@${CDK_VERSION}-alpha.0`],
  testdir: 'test',
  srcdir: 'lib',

  publishTasks: true,
});

project.synth();
