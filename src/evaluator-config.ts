/**
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance
 *  with the License. A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions
 *  and limitations under the License.
 */

import { EvaluatorConfig as CfnEvaluatorConfig } from '@aws-sdk/client-bedrock-agentcore-control';
import { RatingScale as CfnRatingScale } from '@aws-sdk/client-bedrock-agentcore-control';
import { IBedrockInvokable } from '@aws-cdk/aws-bedrock-alpha';
import { Arn, ArnFormat } from 'aws-cdk-lib';

export interface NumericalMemberDefinition {
  /**
   * The numeric score value (e.g., 1, 2, 3, 4, 5)
   */
  readonly value: number;
  /**
   * Short label for the rating level (e.g., "Poor", "Good", "Excellent")
   */
  readonly label: string;
  /**
   * Detailed description of what this rating represents
   */
  readonly definition: string;
}

export interface CategoricalMemberDefinition {
  /**
   * Short label for the category (e.g., "Not At All", "Completely Yes")
   */
  readonly label: string;
  /**
   * Detailed description of what this category represents
   */
  readonly definition: string;
}

/**
 * Factory class for creating evaluator rating scales that define how LLM judges score performance
 */
export class RatingScale {
  readonly cfnRatingScale: CfnRatingScale;

  /**
   * Creates a numerical rating scale with numeric values (e.g., 1-5 scale)
   * @param scales Array of numerical scale definitions with values, labels, and descriptions
   */
  static numerical(scales: NumericalMemberDefinition[]): RatingScale {
    return new RatingScale({ numerical: scales } as CfnRatingScale);
  }

  /**
   * Creates a categorical rating scale with string values (e.g., "Poor", "Good", "Excellent")
   * @param scales Array of categorical scale definitions with labels and descriptions
   */
  static categorical(scales: CategoricalMemberDefinition[]): RatingScale {
    return new RatingScale({ categorical: scales } as CfnRatingScale);
  }

  protected constructor(cfnRatingScale: CfnRatingScale) {
    this.cfnRatingScale = cfnRatingScale;
  }
}

export interface IEvaluatorConfig {
  /**
   * Renders the EvaluatorConfig
   */
  /** @internal */
  __render(): CfnEvaluatorConfig;
}

/**
 * Properties for creating an LLM-as-a-Judge evaluator configuration
 */
export interface LLMAsAJudgeProps {
  /**
   * The evaluation instructions that guide the language model in assessing agent performance
   */
  readonly instructions: string;

  /**
   * The foundation model to use for evaluation
   */
  readonly model: IBedrockInvokable;

  /**
   * The rating scale that defines how the evaluator should score agent performance
   */
  readonly ratingScale: RatingScale;

  /**
   * Optional inference parameters for the model
   */
  readonly inferenceParameters?: {
    readonly temperature?: number;
    readonly topP?: number;
    readonly maxTokens?: number;
    readonly stopSequences?: string[];
  };
}

/**
 * Factory class for creating evaluator configurations
 */
export class EvaluatorConfig {
  /**
   * Creates an LLM-as-a-Judge evaluator configuration
   */
  static fromLLMAsAJudge(props: LLMAsAJudgeProps): IEvaluatorConfig {
    return new LLMAsAJudgeConfig(props);
  }

  private constructor() {}
}

/**
 * LLM-as-a-Judge evaluator configuration implementation
 */
class LLMAsAJudgeConfig implements IEvaluatorConfig {
  constructor(private readonly props: LLMAsAJudgeProps) {}

  /** @internal */
  __render(): CfnEvaluatorConfig {
    return {
      llmAsAJudge: {
        instructions: this.props.instructions,
        ratingScale: this.props.ratingScale.cfnRatingScale,
        modelConfig: {
          bedrockEvaluatorModelConfig: {
            modelId: Arn.split(this.props.model.invokableArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName!,
            inferenceConfig: {
              temperature: this.props.inferenceParameters?.temperature,
              topP: this.props.inferenceParameters?.topP,
              maxTokens: this.props.inferenceParameters?.maxTokens,
              stopSequences: this.props.inferenceParameters?.stopSequences,
            },
            //additionalModelRequestFields: {},
          },
        },
      },
    };
  }
}
