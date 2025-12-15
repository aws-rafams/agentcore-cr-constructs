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

import {
  CreateEvaluatorCommandInput,
  DeleteEvaluatorCommandInput,
  UpdateEvaluatorCommandInput,
} from '@aws-sdk/client-bedrock-agentcore-control';
import { Arn, ArnFormat, IResource, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IEvaluatorConfig } from './evaluator-config';
import { EvaluatorPerms } from './perms';

/******************************************************************************
 *                              CONSTANTS
 *****************************************************************************/

/**
 * The evaluation level that determines the scope of evaluation.
 */
export enum EvaluationLevel {
  /**
   * Evaluate individual tool invocations
   */
  TOOL_CALL = 'TOOL_CALL',
  /**
   * Evaluate single request-response interactions
   */
  TRACE = 'TRACE',
  /**
   * Evaluate entire conversation sessions
   */
  SESSION = 'SESSION',
}

/******************************************************************************
 *                                Interface
 *****************************************************************************/
/**
 * Interface for Evaluator resources
 */
export interface IEvaluator extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the created evaluator.
   * @attribute
   * @example 'arn:aws:bedrock-agentcore:${region}:${accountId}:evaluator/${evaluatorId}'
   */
  readonly evaluatorArn: string;

  /**
   * The unique identifier of the created evaluator.
   * @attribute
   * @example 'Evaluator_50f7o-vr90ob_ize'
   */
  readonly evaluatorId: string;

  /**
   * The name of the evaluator. Must be unique within your account.
   * @attribute
   */
  readonly evaluatorName?: string;

  /**
   * The evaluation level that determines the scope of evaluation.
   * @attribute
   */
  readonly level?: EvaluationLevel;

  /**
   * The description of the evaluator that explains its purpose and evaluation criteria.
   * @attribute
   * @default - No description
   */
  readonly description?: string;

  /**
   * The status of the evaluator creation operation.
   * @attribute
   */
  readonly status?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grant the given principal identity permissions to perform actions on this evaluator.
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant;
}

/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for an Evaluator.
 * Contains methods and attributes valid for Evaluators either created with CDK or imported.
 */
export abstract class EvaluatorBase extends Resource implements IEvaluator {
  public abstract readonly evaluatorArn: string;
  public abstract readonly evaluatorId: string;
  public abstract readonly evaluatorName?: string;
  public abstract readonly level?: EvaluationLevel;
  public abstract readonly description?: string;
  public abstract readonly evaluatorConfig?: IEvaluatorConfig;
  public abstract readonly status?: string;
  public abstract readonly updatedAt?: string;
  public abstract readonly createdAt?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grants Evaluator IAM actions to the IAM Principal
   * @param grantee - The IAM principal to grant permissions to
   * @param actions - The actions to grant
   * @returns An IAM Grant object representing the granted permissions
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.evaluatorArn],
      scope: this,
    });
  }

  /**
   * Grants permission to run an evaluation using an evaluator
   */
  grantEvaluate(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, [EvaluatorPerms.EVALUATE]);
  }
}

/******************************************************************************
 *                        PROPS FOR NEW CONSTRUCT
 *****************************************************************************/
/**
 * Properties for creating an Evaluator resource
 */
export interface EvaluatorProps {
  /**
   * The name of the evaluator. Must be unique within your account.
   */
  readonly name: string;

  /**
   * The evaluation level that determines the scope of evaluation.
   */
  readonly level: EvaluationLevel;

  /**
   * The description of the evaluator that explains its purpose and evaluation criteria.
   * @default - No description
   */
  readonly description?: string;

  /**
   * The evaluator configuration that defines how the evaluator operates.
   * @default - No configuration
   */
  readonly evaluatorConfig: IEvaluatorConfig;
}

/******************************************************************************
 *                      ATTRS FOR IMPORTED CONSTRUCT
 *****************************************************************************/
/**
 * Attributes for specifying an imported Evaluator.
 */
export interface EvaluatorAttributes {
  /**
   * The ARN of an existing Evaluator.
   * @attribute
   */
  readonly evaluatorArn: string;
  /**
   * The evaluation level of an existing Evaluator.
   * @attribute
   */
  readonly evaluationLevel?: EvaluationLevel;
  /**
   * The description of an existing Evaluator.
   * @attribute
   */
  readonly description?: string;
  /**
   * The name of an existing Evaluator.
   * @attribute
   */
  readonly name?: string;
}

/******************************************************************************
 *                                Class
 *****************************************************************************/
/**
 * An evaluator is a component that assesses and scores agent interactions at different levels
 * (tool calls, traces, or sessions) to provide insights into agent performance and behavior.
 */
export class Evaluator extends EvaluatorBase {
  // ------------------------------------------------------
  // STATIC METHODS
  // ------------------------------------------------------
  public static fromEvaluatorAttrs(scope: Construct, id: string, attrs: EvaluatorAttributes): IEvaluator {
    class Import extends EvaluatorBase {
      public readonly evaluatorArn = attrs.evaluatorArn;
      public readonly evaluatorId = Arn.split(this.evaluatorArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName!;
      public readonly level = attrs.evaluationLevel;
      public readonly description = attrs.description;
      public readonly evaluatorName = attrs.name;
      public readonly evaluatorConfig = undefined;
      public readonly status = undefined;
      public readonly updatedAt = undefined;
      public readonly createdAt = undefined;
    }

    return new Import(scope, id);
  }
  // ------------------------------------------------------
  // BUILT-IN EVALUATORS
  // ------------------------------------------------------
  /**
   * Built-in evaluator for correctness - evaluates whether the information in the agent's response is factually accurate
   */
  public static readonly CORRECTNESS = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Correctness',
    evaluatorId: 'Builtin.Correctness',
    evaluatorName: 'Builtin.Correctness',
    description:
      "Response Quality Metric. Evaluates whether the information in the agent's response is factually accurate",
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for faithfulness - evaluates whether information in the response is supported by provided context/sources
   */
  public static readonly FAITHFULNESS = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Faithfulness',
    evaluatorId: 'Builtin.Faithfulness',
    evaluatorName: 'Builtin.Faithfulness',
    description:
      'Response Quality Metric. Evaluates whether information in the response is supported by provided context/sources',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for helpfulness - evaluates from user's perspective how useful and valuable the agent's response is
   */
  public static readonly HELPFULNESS = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Helpfulness',
    evaluatorId: 'Builtin.Helpfulness',
    evaluatorName: 'Builtin.Helpfulness',
    description:
      "Response Quality Metric. Evaluates from user's perspective how useful and valuable the agent's response is",
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for response relevance - evaluates whether the response appropriately addresses the user's query
   */
  public static readonly RESPONSE_RELEVANCE = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.ResponseRelevance',
    evaluatorId: 'Builtin.ResponseRelevance',
    evaluatorName: 'Builtin.ResponseRelevance',
    description: "Response Quality Metric. Evaluates whether the response appropriately addresses the user's query",
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for conciseness - evaluates whether the response is appropriately brief without missing key information
   */
  public static readonly CONCISENESS = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Conciseness',
    evaluatorId: 'Builtin.Conciseness',
    evaluatorName: 'Builtin.Conciseness',
    description:
      'Response Quality Metric. Evaluates whether the response is appropriately brief without missing key information',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for coherence - evaluates whether the response is logically structured and coherent
   */
  public static readonly COHERENCE = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Coherence',
    evaluatorId: 'Builtin.Coherence',
    evaluatorName: 'Builtin.Coherence',
    description: 'Response Quality Metric. Evaluates whether the response is logically structured and coherent',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for instruction following - measures how well the agent follows the provided system instructions
   */
  public static readonly INSTRUCTION_FOLLOWING = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.InstructionFollowing',
    evaluatorId: 'Builtin.InstructionFollowing',
    evaluatorName: 'Builtin.InstructionFollowing',
    description: 'Response Quality Metric. Measures how well the agent follows the provided system instructions',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for refusal - detects when agent evades questions or directly refuses to answer
   */
  public static readonly REFUSAL = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Refusal',
    evaluatorId: 'Builtin.Refusal',
    evaluatorName: 'Builtin.Refusal',
    description: 'Response Quality Metric. Detects when agent evades questions or directly refuses to answer',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for goal success rate - evaluates whether the conversation successfully meets the user's goals
   */
  public static readonly GOAL_SUCCESS_RATE = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.GoalSuccessRate',
    evaluatorId: 'Builtin.GoalSuccessRate',
    evaluatorName: 'Builtin.GoalSuccessRate',
    description: "Task Completion Metric. Evaluates whether the conversation successfully meets the user's goals",
    level: EvaluationLevel.SESSION,
  };

  /**
   * Built-in evaluator for tool selection accuracy - evaluates whether the agent selected the appropriate tool for the task
   */
  public static readonly TOOL_SELECTION_ACCURACY = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.ToolSelectionAccuracy',
    evaluatorId: 'Builtin.ToolSelectionAccuracy',
    evaluatorName: 'Builtin.ToolSelectionAccuracy',
    description: 'Component Level Metric. Evaluates whether the agent selected the appropriate tool for the task',
    level: EvaluationLevel.TOOL_CALL,
  };

  /**
   * Built-in evaluator for tool parameter accuracy - evaluates how accurately the agent extracts parameters from user queries
   */
  public static readonly TOOL_PARAMETER_ACCURACY = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.ToolParameterAccuracy',
    evaluatorId: 'Builtin.ToolParameterAccuracy',
    evaluatorName: 'Builtin.ToolParameterAccuracy',
    description: 'Component Level Metric. Evaluates how accurately the agent extracts parameters from user queries',
    level: EvaluationLevel.TOOL_CALL,
  };

  /**
   * Built-in evaluator for harmfulness - evaluates whether the response contains harmful content
   */
  public static readonly HARMFULNESS = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Harmfulness',
    evaluatorId: 'Builtin.Harmfulness',
    evaluatorName: 'Builtin.Harmfulness',
    description: 'Safety Metric. Evaluates whether the response contains harmful content',
    level: EvaluationLevel.TRACE,
  };

  /**
   * Built-in evaluator for stereotyping - detects content that makes generalizations about individuals or groups
   */
  public static readonly STEREOTYPING = {
    evaluatorArn: 'arn:aws:bedrock-agentcore:::evaluator/Builtin.Stereotyping',
    evaluatorId: 'Builtin.Stereotyping',
    evaluatorName: 'Builtin.Stereotyping',
    description: 'Safety Metric. Detects content that makes generalizations about individuals or groups',
    level: EvaluationLevel.TRACE,
  };

  // ------------------------------------------------------
  // Attributes
  // ------------------------------------------------------
  public readonly evaluatorArn: string;
  public readonly evaluatorId: string;
  public readonly evaluatorName: string;
  public readonly level: EvaluationLevel;
  public readonly description?: string;
  public readonly evaluatorConfig?: IEvaluatorConfig;
  public readonly status?: string;
  public readonly updatedAt?: string;
  public readonly createdAt?: string;

  // ------------------------------------------------------
  // Internal Only
  // ------------------------------------------------------
  private readonly __resource: cr.AwsCustomResource;

  // ------------------------------------------------------
  // CONSTRUCTOR
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: EvaluatorProps) {
    super(scope, id);
    this.evaluatorName = props.name;
    this.level = props.level;
    this.description = props.description;

    this.__resource = new cr.AwsCustomResource(this, 'Resource', {
      onCreate: {
        service: 'bedrock-agentcore-control',
        action: 'CreateEvaluatorCommand',
        parameters: {
          evaluatorName: this.evaluatorName,
          level: this.level,
          description: this.description,
          evaluatorConfig: props.evaluatorConfig?.__render(),
        } as CreateEvaluatorCommandInput,
        physicalResourceId: cr.PhysicalResourceId.fromResponse('evaluatorId'),
      },
      onUpdate: {
        service: 'bedrock-agentcore-control',
        action: 'UpdateEvaluatorCommand',
        parameters: {
          evaluatorId: new cr.PhysicalResourceIdReference().toString(),
          description: this.description,
          evaluatorConfig: props.evaluatorConfig?.__render(),
        } as UpdateEvaluatorCommandInput,
      },
      onDelete: {
        service: 'bedrock-agentcore-control',
        action: 'DeleteEvaluatorCommand',
        parameters: {
          evaluatorId: new cr.PhysicalResourceIdReference().toString(),
        } as DeleteEvaluatorCommandInput,
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ['bedrock-agentcore:*', 'iam:PassRole'],
          resources: ['*'],
        }),
      ]),
    });

    this.evaluatorArn = this.__resource.getResponseField('evaluatorArn');
    this.evaluatorId = this.__resource.getResponseField('evaluatorId');
    this.evaluatorName = this.__resource.getResponseField('name');
    this.status = this.__resource.getResponseField('status');
  }
}
