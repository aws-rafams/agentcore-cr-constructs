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
  CreatePolicyCommandInput,
  DeletePolicyCommandInput,
  UpdatePolicyCommandInput,
} from '@aws-sdk/client-bedrock-agentcore-control';
import { IResource, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { IPolicyDefinition } from './cedar-policy';
import { IPolicyEngine } from './policy-engine';

/******************************************************************************
 *                              CONSTANTS
 *****************************************************************************/
/**
 * The validation mode for the policy creation. Determines how Cedar analyzer
 * validation results are handled during policy creation.
 */
export enum ValidationMode {
  /**
   * Runs the Cedar analyzer to validate the policy against the Cedar schema and
   * tool context, failing creation if the analyzer detects any validation issues
   * to ensure strict conformance.
   */
  FAIL_ON_ANY_FINDINGS = 'FAIL_ON_ANY_FINDINGS',
  /**
   * Runs the Cedar analyzer but allows policy creation even if validation issues
   * are detected, useful for testing or when the policy schema is evolving. Use this
   * mode only when you understand and accept the analyzer findings.
   */
  IGNORE_ALL_FINDINGS = 'IGNORE_ALL_FINDINGS',
}
/******************************************************************************
 *                                Interface
 *****************************************************************************/
/**
 * Interface for Policy resources
 */
export interface IPolicy extends IResource {
  /**
   * The Amazon Resource Name (ARN) of the created policy engine. This globally unique identifier
   * can be used for cross-service references and IAM policy statements.
   * @attribute
   * @example 'arn:${Partition}:bedrock-agentcore:${Region}:${Account}:policy-engine/${PolicyEngineId}/policy/${PolicyId}'
   */
  readonly policyArn: string;

  /**
   * The unique identifier for the created policy engine. This system-generated identifier consists
   * of the policy engine name plus a 10-character generated suffix.
   * @attribute
   * @example 'policy_lp4d4-4wf8gkrvj_'
   */
  readonly policyId: string;

  /**
   * The policy engine this policy is associated to.
   */
  readonly policyEngine: IPolicyEngine;

  /**
   * A human-readable description of the policy’s purpose and functionality (1-4,096 characters).
   * This helps policy administrators understand the policy’s intent, business rules, and operational scope.
   * Use this field to document why the policy exists, what business requirement it addresses,
   * and any special considerations for maintenance.
   * @attribute
   * @default - No description
   */
  readonly description?: string;

  /**
   * The policy statement (e.g. Cedar Policy) that defines the authorization logic.
   */
  readonly policyDefinition?: IPolicyDefinition;

  /**
   * The validation mode for the policy creation. Determines how Cedar analyzer validation
   * results are handled during policy creation.
   */
  readonly validationMode?: ValidationMode;

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
}

/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for a Policy.
 * Contains methods and attributes valid for Memories either created with CDK or imported.
 */
export abstract class PolicyBase extends Resource implements IPolicy {
  public abstract readonly policyArn: string;
  public abstract readonly policyId: string;
  public abstract readonly policyName: string;
  public abstract readonly policyDefinition?: IPolicyDefinition;
  public abstract readonly validationMode?: ValidationMode;
  public abstract readonly policyEngine: IPolicyEngine;
  public abstract readonly description?: string;
  public abstract readonly status?: string;
  public abstract readonly updatedAt?: string;
  public abstract readonly createdAt?: string;

  // ------------------------------------------------------
  // Permission Methods
  // ------------------------------------------------------
  /**
   * Grants Policy IAM actions to the IAM Principal
   * @param grantee - The IAM principal to grant permissions to
   * @param actions - The actions to grant
   * @returns An IAM Grant object representing the granted permissions
   */
  grant(grantee: iam.IGrantable, actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee,
      actions,
      resourceArns: [this.policyArn],
      scope: this,
    });
  }
}
/******************************************************************************
 *                        PROPS FOR NEW CONSTRUCT
 *****************************************************************************/
/**
 * Properties for creating a Policyresource
 */
export interface PolicyBaseProps {
  /**
   * The customer-assigned immutable name for the policy. This name identifies the policy.
   * Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
   * The name can have up to 48 characters.
   */
  readonly name: string;
  /**
   * A human-readable description of the policy’s purpose and functionality (1-4,096 characters).
   * This helps policy administrators understand the policy’s intent, business rules, and operational scope.
   * Use this field to document why the policy exists, what business requirement it addresses,
   * and any special considerations for maintenance.
   *
   * @default - No description
   */
  readonly description?: string;

  /**
   * The policy statement (e.g. Cedar Policy) that defines the authorization logic.
   */
  readonly policyDefinition: IPolicyDefinition;

  /**
   * The validation mode for the policy creation. Determines how Cedar analyzer validation
   * results are handled during policy creation.
   *
   * @default ValidationMode.FAIL_ON_ANY_FINDINGS
   */
  readonly validationMode?: ValidationMode;
}

export interface PolicyProps extends PolicyBaseProps {
  /**
   * The policy engine this policy should be associated to.
   */
  readonly policyEngine: IPolicyEngine;
}

/******************************************************************************
 *                                Class
 *****************************************************************************/
/**
 * A Cedar policy is a declarative statement that permits or forbids access to gateway tools.
 * Each policy specifies who (principal) can perform what action (tool invocation) on which
 * resource (gateway) under what conditions. Policies are evaluated for every tool invocation request.
 *
 * @see https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-policies.html
 */
export class Policy extends PolicyBase {
  public readonly policyArn: string;
  public readonly policyId: string;
  public readonly policyName: string;
  public readonly description?: string;
  public readonly policyDefinition?: IPolicyDefinition;
  public readonly policyEngine: IPolicyEngine;
  public readonly validationMode?: ValidationMode;
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
  constructor(scope: Construct, id: string, props: PolicyProps) {
    super(scope, id);

    // ------------------------------------------------------
    // Set properties and defaults
    // ------------------------------------------------------
    this.policyName = props.name;
    this.description = props.description;
    this.policyDefinition = props.policyDefinition;
    this.validationMode = props.validationMode ?? ValidationMode.FAIL_ON_ANY_FINDINGS;
    this.policyEngine = props.policyEngine;

    // ------------------------------------------------------
    // Custom Resource
    // ------------------------------------------------------
    this.__resource = new cr.AwsCustomResource(this, 'Resource', {
      onCreate: {
        service: 'bedrock-agentcore-control',
        action: 'CreatePolicyCommand',
        parameters: {
          name: this.policyName,
          description: this.description,
          definition: this.policyDefinition.__render(),
          validationMode: this.validationMode,
          policyEngineId: this.policyEngine.policyEngineId,
        } as CreatePolicyCommandInput,
        physicalResourceId: cr.PhysicalResourceId.fromResponse('policyId'),
      },
      onUpdate: {
        service: 'bedrock-agentcore-control',
        action: 'UpdatePolicyCommand',
        parameters: {
          policyEngineId: this.policyEngine.policyEngineId,
          policyId: new cr.PhysicalResourceIdReference().toString(),
          definition: this.policyDefinition.__render(),
          validationMode: this.validationMode,
        } as UpdatePolicyCommandInput,
      },
      onDelete: {
        service: 'bedrock-agentcore-control',
        action: 'DeletePolicyCommand',
        parameters: {
          policyEngineId: this.policyEngine.policyEngineId,
          policyId: new cr.PhysicalResourceIdReference().toString(),
        } as DeletePolicyCommandInput,
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ['bedrock-agentcore:*', 'iam:PassRole'],
          resources: ['*'],
        }),
      ]),
    });

    this.policyArn = this.__resource.getResponseField('policyArn');
    this.policyId = this.__resource.getResponseField('policyId');
    this.policyName = this.__resource.getResponseField('name');
    this.status = this.__resource.getResponseField('status');
    this.updatedAt = this.__resource.getResponseField('updatedAt');
    this.createdAt = this.__resource.getResponseField('createdAt');
  }
}
