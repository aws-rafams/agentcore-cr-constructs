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
import { IResource, Resource } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
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
    /**
     * Grant the given principal identity permissions to perform actions on this memory.
     */
    grant(grantee: iam.IGrantable, actions: string[]): iam.Grant;
    /**
     * Grant the given identity permissions to perform policy evaluations on this policy engine.
     */
    grantPolicyEvaluation(grantee: iam.IGrantable): iam.Grant;
    addPolicy(props: PolicyBaseProps): Policy;
}
/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for a PolicyEngine.
 * Contains methods and attributes valid for Memories either created with CDK or imported.
 */
export declare abstract class PolicyEngineBase extends Resource implements IPolicyEngine {
    abstract readonly policyEngineArn: string;
    abstract readonly policyEngineId: string;
    abstract readonly policyEngineName: string;
    abstract readonly description?: string;
    abstract readonly status?: string;
    abstract readonly updatedAt?: string;
    abstract readonly createdAt?: string;
    /**
     * Grants Policy Engine IAM actions to the IAM Principal
     * @param grantee - The IAM principal to grant permissions to
     * @param actions - The actions to grant
     * @returns An IAM Grant object representing the granted permissions
     */
    grant(grantee: iam.IGrantable, actions: string[]): iam.Grant;
    grantPolicyEvaluation(grantee: iam.IGrantable): iam.Grant;
    addPolicy(props: PolicyBaseProps): Policy;
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
export declare class PolicyEngine extends PolicyEngineBase {
    static fromPolicyEngineArn(scope: Construct, id: string, policyEngineArn: string): IPolicyEngine;
    readonly policyEngineArn: string;
    readonly policyEngineId: string;
    readonly policyEngineName: string;
    readonly description?: string;
    readonly status?: string;
    readonly updatedAt?: string;
    readonly createdAt?: string;
    private readonly __resource;
    constructor(scope: Construct, id: string, props: PolicyEngineProps);
}
