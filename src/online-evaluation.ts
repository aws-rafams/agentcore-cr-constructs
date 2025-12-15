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
  CreateOnlineEvaluationConfigCommandInput,
  DeleteOnlineEvaluationConfigCommandInput,
  UpdateOnlineEvaluationConfigCommandInput,
} from '@aws-sdk/client-bedrock-agentcore-control';
import { Arn, ArnFormat, IResource, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IEvaluator } from './evaluator';
import { IBedrockAgentRuntime } from '@aws-cdk/aws-bedrock-agentcore-alpha';

/******************************************************************************
 *                            TRACE DATA SOURCE
 *****************************************************************************/
/**
 * Static class for creating trace data sources
 */
export class TraceDataSource {
  /**
   * Create a trace data source from specific CloudWatch Log Groups
   */
  public static fromCloudWatchLogs(logGroups: logs.ILogGroup[], serviceNames: string[]) {
    return {
      cloudWatchLogs: {
        logGroups: logGroups.map((lg) => lg.logGroupName),
        serviceNames,
      },
    };
  }

  /**
   * Create a trace data source from specific Agent Endpoint Logs
   */
  public static fromAgentEndpointLogs(agentEndpoint: IBedrockAgentRuntime, serviceNames: string[]) {
    const agentLogGroup = logs.LogGroup.fromLogGroupName(
      agentEndpoint.stack,
      'AgentEndpointLogGroup',
      `/aws/bedrock-agentcore/runtimes/${agentEndpoint.agentRuntimeId}-${
        agentEndpoint.agentRuntimeVersion ?? 'DEFAULT'
      }`
    );
    return {
      agentEndpointLogs: {
        agentLogGroup,
        serviceNames,
      },
    };
  }
}

/******************************************************************************
 *                                FILTER
 *****************************************************************************/
export interface Filter {
  // Filter properties would be defined based on AWS API requirements
  readonly [key: string]: any;
}

/******************************************************************************
 *                            SESSION CONFIG
 *****************************************************************************/
export interface SessionConfig {
  // Session configuration properties would be defined based on AWS API requirements
  readonly [key: string]: any;
}

/******************************************************************************
 *                                 RULE
 *****************************************************************************/
export interface Rule {
  /**
   * The percentage of agent traces to sample for evaluation, ranging from 0.01% to 100%.
   */
  readonly samplingPercentage: number;

  /**
   * The list of filters that determine which agent traces should be included in the evaluation.
   */
  readonly filters?: Filter[];

  /**
   * The session configuration that defines timeout settings for detecting when agent sessions are complete.
   */
  readonly sessionConfig?: SessionConfig;
}

/******************************************************************************
 *                            EVALUATOR REFERENCE
 *****************************************************************************/
export interface EvaluatorReference {
  /**
   * The evaluator to reference
   */
  readonly evaluator: IEvaluator;
}

/******************************************************************************
 *                                Interface
 *****************************************************************************/
/**
 * Interface for Online Evaluation resources
 */
export interface IOnlineEvaluation extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the created online evaluation configuration.
   * arn:${partition}:bedrock-agentcore:${region}:${account}:online-evaluation-config/${onlineEvaluationConfigId}
   * @attribute
   */
  readonly onlineEvaluationArn: string;

  /**
   * The unique identifier for the created online evaluation configuration.
   * @attribute
   */
  readonly onlineEvaluationId: string;

  /**
   * The name of the online evaluation configuration.
   * @attribute
   */
  readonly onlineEvaluationConfigName?: string;

  /**
   * The description of the online evaluation configuration.
   * @attribute
   */
  readonly description?: string;

  /**
   * The status of the online evaluation configuration.
   * @attribute
   */
  readonly status?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grant the given principal identity permissions to perform actions on this online evaluation.
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant;
}

/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for an OnlineEvaluation.
 * Contains methods and attributes valid for OnlineEvaluations either created with CDK or imported.
 */
export abstract class OnlineEvaluationBase extends Resource implements IOnlineEvaluation {
  public abstract readonly onlineEvaluationArn: string;
  public abstract readonly onlineEvaluationId: string;
  public abstract readonly onlineEvaluationConfigName?: string;
  public abstract readonly description?: string;
  public abstract readonly status?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grants Online Evaluation IAM actions to the IAM Principal
   * @param grantee - The IAM principal to grant permissions to
   * @param actions - The actions to grant
   * @returns An IAM Grant object representing the granted permissions
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.onlineEvaluationArn],
      scope: this,
    });
  }
}

/******************************************************************************
 *                        PROPS FOR NEW CONSTRUCT
 *****************************************************************************/
/**
 * Properties for creating an OnlineEvaluation resource
 */
export interface OnlineEvaluationProps {
  /**
   * The name of the online evaluation configuration. Must be unique within your account.
   */
  readonly onlineEvaluationConfigName: string;

  /**
   * The description of the online evaluation configuration that explains its monitoring purpose and scope.
   * @default - No description
   */
  readonly description?: string;

  /**
   * Whether to enable the online evaluation configuration immediately upon creation.
   */
  readonly enableOnCreate: boolean;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants permissions to read from CloudWatch logs,
   * write evaluation results, and invoke Amazon Bedrock models for evaluation.
   * If not provided, a new role will be created.
   * @default - A new role will be created
   */
  readonly evaluationExecutionRole?: iam.IRole;

  /**
   * The list of evaluators to apply during online evaluation.
   */
  readonly evaluators: EvaluatorReference[];

  /**
   * The evaluation rule that defines sampling configuration, filters, and session detection settings.
   */
  readonly rule: Rule;

  /**
   * The data source for trace data.
   */
  readonly dataSource: any;
}

/******************************************************************************
 *                      ATTRS FOR IMPORTED CONSTRUCT
 *****************************************************************************/
/**
 * Attributes for specifying an imported Online Evaluation.
 */
export interface OnlineEvaluationAttributes {
  /**
   * The ARN of an existing Online Evaluation.
   * @attribute
   */
  readonly onlineEvaluationArn: string;
}

/******************************************************************************
 *                                Class
 *****************************************************************************/
/**
 * An online evaluation configuration that monitors and evaluates agent interactions in real-time
 * using specified evaluators and sampling rules.
 */
export class OnlineEvaluation extends OnlineEvaluationBase {
  // ------------------------------------------------------
  // STATIC METHODS
  // ------------------------------------------------------
  public static fromOnlineEvaluationArn(scope: Construct, id: string, onlineEvaluationArn: string): IOnlineEvaluation {
    const onlineEvaluationId = Arn.split(onlineEvaluationArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName!;
    class Import extends OnlineEvaluationBase {
      public readonly onlineEvaluationArn = onlineEvaluationArn;
      public readonly onlineEvaluationId = onlineEvaluationId;
      public readonly onlineEvaluationConfigName = onlineEvaluationId.split('-')[0];
      public readonly description = undefined;
      public readonly enableOnCreate = undefined;
      public readonly status = undefined;
      public readonly createdAt = undefined;
      public readonly updatedAt = undefined;
    }

    return new Import(scope, id);
  }

  // ------------------------------------------------------
  // Attributes
  // ------------------------------------------------------
  public readonly onlineEvaluationArn: string;
  public readonly onlineEvaluationId: string;
  public readonly onlineEvaluationConfigName: string;
  public readonly description?: string;
  public readonly enableOnCreate?: boolean;
  public readonly status?: string;
  public readonly createdAt?: string;
  public readonly updatedAt?: string;
  public readonly evaluationExecutionRole: iam.IRole;

  // ------------------------------------------------------
  // Internal Only
  // ------------------------------------------------------
  private readonly __resource: cr.AwsCustomResource;

  // ------------------------------------------------------
  // CONSTRUCTOR
  // ------------------------------------------------------
  constructor(scope: Construct, id: string, props: OnlineEvaluationProps) {
    super(scope, id);
    this.onlineEvaluationConfigName = props.onlineEvaluationConfigName;
    this.description = props.description;
    this.enableOnCreate = props.enableOnCreate;

    // Create execution role if not provided
    this.evaluationExecutionRole =
      props.evaluationExecutionRole ??
      new iam.Role(this, 'ExecutionRole', {
        assumedBy: new iam.ServicePrincipal('bedrock-agentcore.amazonaws.com', {
          conditions: {
            StringEquals: {
              'aws:ResourceAccount': this.stack.account,
              'aws:SourceAccount': this.stack.account,
            },
            ArnLike: {
              'aws:SourceArn': [
                this.stack.formatArn({
                  service: 'bedrock-agentcore',
                  resource: 'evaluator',
                  resourceName: '*',
                }),
                this.stack.formatArn({
                  service: 'bedrock-agentcore',
                  resource: 'online-evaluation-config',
                  resourceName: '*',
                }),
              ],
            },
          },
        }),
        managedPolicies: [
          iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchLogsFullAccess'),
          iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonBedrockFullAccess'),
        ],
      });

    this.__resource = new cr.AwsCustomResource(this, 'Resource', {
      onCreate: {
        service: 'bedrock-agentcore-control',
        action: 'CreateOnlineEvaluationConfigCommand',
        parameters: {
          onlineEvaluationConfigName: this.onlineEvaluationConfigName,
          description: this.description,
          enableOnCreate: this.enableOnCreate,
          evaluationExecutionRoleArn: this.evaluationExecutionRole.roleArn,
          evaluators: props.evaluators.map((ref) => ({ evaluatorId: ref.evaluator.evaluatorId })),
          rule: {
            samplingConfig: {
              samplingPercentage: props.rule.samplingPercentage,
            },
            filters: props.rule.filters,
            sessionConfig: props.rule.sessionConfig,
          },
          dataSourceConfig: props.dataSource,
        } as CreateOnlineEvaluationConfigCommandInput,
        physicalResourceId: cr.PhysicalResourceId.fromResponse('onlineEvaluationId'),
      },
      onUpdate: {
        service: 'bedrock-agentcore-control',
        action: 'UpdateOnlineEvaluationConfigCommand',
        parameters: {
          onlineEvaluationConfigId: new cr.PhysicalResourceIdReference().toString(),
          description: this.description,
          evaluationExecutionRoleArn: this.evaluationExecutionRole.roleArn,
          enableOnCreate: this.enableOnCreate,
          evaluators: props.evaluators.map((ref) => ({ evaluatorId: ref.evaluator.evaluatorId })),
          rule: {
            samplingConfig: {
              samplingPercentage: props.rule.samplingPercentage,
            },
            filters: props.rule.filters,
            sessionConfig: props.rule.sessionConfig,
          },
          dataSourceConfig: props.dataSource,
        } as UpdateOnlineEvaluationConfigCommandInput,
      },
      onDelete: {
        service: 'bedrock-agentcore-control',
        action: 'DeleteOnlineEvaluationConfigCommand',
        parameters: {
          onlineEvaluationConfigId: new cr.PhysicalResourceIdReference().toString(),
        } as DeleteOnlineEvaluationConfigCommandInput,
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ['bedrock-agentcore:*', 'iam:PassRole'],
          resources: ['*'],
        }),
      ]),
    });

    this.onlineEvaluationArn = this.__resource.getResponseField('onlineEvaluationArn');
    this.onlineEvaluationId = this.__resource.getResponseField('onlineEvaluationId');
    this.status = this.__resource.getResponseField('status');
    this.createdAt = this.__resource.getResponseField('createdAt');
    this.updatedAt = this.__resource.getResponseField('updatedAt');
  }
}
