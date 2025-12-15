import { App, CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Evaluator, EvaluationLevel, EvaluatorConfig, RatingScale } from '../src';
import { BedrockFoundationModel } from '@aws-cdk/aws-bedrock-alpha';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const myEvaluator = new Evaluator(this, 'MyEvaluator', {
      name: 'MyEvaluator',
      description: 'Evaluates custom stuff',
      level: EvaluationLevel.TRACE,
      evaluatorConfig: EvaluatorConfig.fromLLMAsAJudge({
        model: BedrockFoundationModel.AMAZON_NOVA_PRO_V1,
        inferenceParameters: {
          temperature: 0.0,
        },
        ratingScale: RatingScale.numerical([
          {
            value: 0,
            label: 'Not At All',
            definition: "Almost all information in the assistant's response conflicts with the conversation history.",
          },
          {
            value: 0.25,
            label: 'Not Generally',
            definition: "Most of the information in the assistant's response conflicts with the conversation history.",
          },
          {
            value: 0.5,
            label: 'Neutral/Mixed',
            definition:
              "Approximately half of the information in the assistant's response conflicts with the conversation history.",
          },
          {
            value: 0.75,
            label: 'Generally Yes',
            definition: "Information in the assistant's response rarely conflicts with the conversation history.",
          },
          {
            value: 1,
            label: 'Completely Yes',
            definition:
              "The assistant's response does not contain any information conflicting the conversation history. If the AI assistant's response is chit chat, it is 'Completely Yes'.",
          },
        ]),
        instructions:
          "You are an objective judge evaluating an AI assistant's response quality as to faithfulness, i.e. judge whether the AI assistant's response conflicts with the conversation history. The conversation history has multiple turns including:\n - User messages (User:)\n - Assistant responses (Assistant:)\n - API calls/actions taken by the assistant (Action:)\n - Tool outputs (Tool:)\nFocus your evaluation on the last assistant message in the conversation history.\n\n## Conversation History\n{context}\n\n## Assistant's Response\n{assistant_turn}",
      }),
    });

    new CfnOutput(this, 'MyEvaluatorArn', {
      value: myEvaluator.evaluatorArn,
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};

const app = new App();

new MyStack(app, 'agentcore-evaluator-dev-3', { env: devEnv });

app.synth();
