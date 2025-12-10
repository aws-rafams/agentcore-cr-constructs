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

import { Arn, ArnFormat, IResource, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cr from 'aws-cdk-lib/custom-resources';
import {
  CreatePolicyEngineCommandInput,
  DeletePolicyEngineCommandInput,
  UpdatePolicyEngineCommandInput,
} from '@aws-sdk/client-bedrock-agentcore-control';
import { Construct } from 'constructs';
import { PolicyEnginePerms } from './perms';
import { Policy, PolicyBaseProps } from './policy';

/******************************************************************************
 *                              CONSTANTS
 *****************************************************************************/

/******************************************************************************
 *                                Interface
 *****************************************************************************/
/**
 * Interface for Policy Engine resources
 */
export interface IPolicyEngine extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the created policy engine. This globally unique identifier
   * can be used for cross-service references and IAM policy statements.
   * @attribute
   * @example 'arn:aws:bedrock-agentcore:${region}:${accountId}:policy-engine/${policyEngineId}
   */
  readonly policyEngineArn: string;

  /**
   * The unique identifier for the created policy engine. This system-generated identifier consists
   * of the policy engine name plus a 10-character generated suffix.
   * @attribute
   * @example 'PolicyEngine_50f7o-vr90ob_ize'
   */
  readonly policyEngineId: string;

  /**
   * The customer-assigned name of the policy engine. This matches the name provided in the creation process.
   * @attribute
   * @example 'PolicyEngine_50f7o'
   */
  readonly policyEngineName: string;

  /**
   * A human-readable description of the policy engine's purpose and scope (1-4,096 characters).
   * This helps administrators understand the policy engine's role in the overall governance strategy.
   * Document which Gateway this engine will be associated with, what types of tools or workflows it
   * governs, and the team or service responsible for maintaining it. Clear descriptions are essential
   * when managing multiple policy engines across different services or environments.
   * @attribute
   * @default - No description
   */
  readonly description?: string;

  /**
   * The status of the policy engine.
   * @attribute
   */
  readonly status?: string;

  /**
   * Timestamp when the policy engine was last updated.
   * @attribute
   */
  readonly updatedAt?: string;

  /**
   * Timestamp when the policy engine was created.
   * @attribute
   */
  readonly createdAt?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grant the given principal identity permissions to perform actions on this memory.
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant;

  /**
   * Grant the given identity permissions to perform policy evaluations on this policy engine.
   */
  grantPolicyEvaluation(grantee: iam.IGrantable): iam.Grant;

  // ------------------------------------------------------
  // Policy Methods
  // ------------------------------------------------------
  addPolicy(props: PolicyBaseProps): Policy;
}

/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for a PolicyEngine.
 * Contains methods and attributes valid for Memories either created with CDK or imported.
 */
export abstract class PolicyEngineBase extends Resource implements IPolicyEngine {
  public abstract readonly policyEngineArn: string;
  public abstract readonly policyEngineId: string;
  public abstract readonly policyEngineName: string;
  public abstract readonly description?: string;
  public abstract readonly status?: string;
  public abstract readonly updatedAt?: string;
  public abstract readonly createdAt?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grants Policy Engine IAM actions to the IAM Principal
   * @param grantee - The IAM principal to grant permissions to
   * @param actions - The actions to grant
   * @returns An IAM Grant object representing the granted permissions
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.policyEngineArn],
      scope: this,
    });
  }

  grantPolicyEvaluation(grantee: iam.IGrantable): iam.Grant {
    return this.grant(grantee, [
      PolicyEnginePerms.AUTHORIZE,
      PolicyEnginePerms.GET_POLICY_ENGINE,
      PolicyEnginePerms.PARTIALLY_AUHORIZE,
    ]);
  }

  // ------------------------------------------------------
  // Policy Methods
  // ------------------------------------------------------
  addPolicy(props: PolicyBaseProps): Policy {
    return new Policy(this, `Policy-${props.name}`, {
      ...props,
      policyEngine: this,
    });
  }

  // ------------------------------------------------------
  // Metrics Methods
  // ------------------------------------------------------
  /**
   * Return the given named metric for this memory.
   *
   * By default, the metric will be calculated as a sum over a period of 5 minutes.
   * You can customize this by using the `statistic` and `period` properties.
   */
  //   public metric(metricName: string, dimensions: DimensionsMap, props?: MetricOptions): Metric {
  //     const metricProps: MetricProps = {
  //       namespace: 'AWS/Bedrock-AgentCore',
  //       metricName,
  //       dimensionsMap: { ...dimensions, Resource: this.policyEngineId },
  //       ...props,
  //     };
  //     return this.configureMetric(metricProps);
  //   }

  //   /**
  //    * Internal method to create a metric.
  //    */
  //   private configureMetric(props: MetricProps) {
  //     return new Metric({
  //       ...props,
  //       region: props?.region ?? this.stack.region,
  //       account: props?.account ?? this.stack.account,
  //     });
  //   }
}

/******************************************************************************
 *                        PROPS FOR NEW CONSTRUCT
 *****************************************************************************/
/**
 * Properties for creating a PolicyEngineresource
 */
export interface PolicyEngineProps {
  /**
   * The customer-assigned immutable name for the policy engine. This name identifies the policy engine.
   * Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
   * The name can have up to 48 characters.
   */
  readonly name: string;
  /**
   * A human-readable description of the policy engine's purpose and scope (1-4,096 characters).
   * This helps administrators understand the policy engine's role in the overall governance strategy.
   * Document which Gateway this engine will be associated with, what types of tools or workflows it
   * governs, and the team or service responsible for maintaining it. Clear descriptions are essential
   * when managing multiple policy engines across different services or environments.
   *
   * @default - No description
   */
  readonly description?: string;
}

/******************************************************************************
 *                      ATTRS FOR IMPORTED CONSTRUCT
 *****************************************************************************/
/**
 * Attributes for specifying an imported Policy Engine .
 */
export interface PolicyEngineAttributes {
  /**
   * The ARN of an existing Policy Engine.
   * @attribute
   */
  readonly policyEngineArn: string;
}

/******************************************************************************
 *                                Class
 *****************************************************************************/
/**
 * A policy engine is a collection of policies that evaluates and authorizes agent tool calls.
 * When associated with a gateway, the policy engine intercepts all agent requests and determines
 * whether to allow or deny each action based on the defined policies.
 *
 * @see https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-engine.html
 */
export class PolicyEngine extends PolicyEngineBase {
  // ------------------------------------------------------
  // STATIC METHODS
  // ------------------------------------------------------
  public static fromPolicyEngineArn(scope: Construct, id: string, policyEngineArn: string): IPolicyEngine {
    const policyEngineId = Arn.split(policyEngineArn, ArnFormat.SLASH_RESOURCE_NAME).resourceName!;
    class Import extends PolicyEngineBase {
      public readonly policyEngineArn = policyEngineArn;
      public readonly policyEngineId = policyEngineId;
      // Extract base name without the generated suffix
      public readonly policyEngineName = policyEngineId.split('-')[0];

      public readonly description = undefined;
      public readonly status = undefined;
      public readonly updatedAt = undefined;
      public readonly createdAt = undefined;
    }

    return new Import(scope, id);
  }
  public readonly policyEngineArn: string;
  public readonly policyEngineId: string;
  public readonly policyEngineName: string;
  public readonly description?: string;
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
  constructor(scope: Construct, id: string, props: PolicyEngineProps) {
    super(scope, id);
    this.policyEngineName = props.name;
    this.description = props.description;

    this.__resource = new cr.AwsCustomResource(this, 'Resource', {
      onCreate: {
        service: 'bedrock-agentcore-control',
        action: 'CreatePolicyEngineCommand',
        parameters: {
          name: this.policyEngineName,
          description: this.description,
        } as CreatePolicyEngineCommandInput,
        physicalResourceId: cr.PhysicalResourceId.fromResponse('policyEngineId'),
      },
      onUpdate: {
        service: 'bedrock-agentcore-control',
        action: 'UpdatePolicyEngineCommand',
        parameters: {
          policyEngineId: new cr.PhysicalResourceIdReference().toString(),
          description: this.description,
        } as UpdatePolicyEngineCommandInput,
      },
      onDelete: {
        service: 'bedrock-agentcore-control',
        action: 'DeletePolicyEngineCommand',
        parameters: {
          policyEngineId: new cr.PhysicalResourceIdReference().toString(),
        } as DeletePolicyEngineCommandInput,
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ['bedrock-agentcore:*', 'iam:PassRole'],
          resources: ['*'],
        }),
      ]),
    });

    this.policyEngineArn = this.__resource.getResponseField('policyEngineArn');
    this.policyEngineId = this.__resource.getResponseField('policyEngineId');
    this.policyEngineName = this.__resource.getResponseField('name');
    this.status = this.__resource.getResponseField('status');
    this.updatedAt = this.__resource.getResponseField('updatedAt');
    this.createdAt = this.__resource.getResponseField('createdAt');
    this.description = props.description;
  }
}
