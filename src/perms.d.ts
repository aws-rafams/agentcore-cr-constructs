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
export declare namespace PolicyEnginePerms {
    /******************************************************************************
     *                         Data Plane Permissions
     *****************************************************************************/
    /**
     * Grants permission to create a new policy within a policy engine.
     */
    const CREATE_POLICY = "bedrock-agentcore:CreatePolicy";
    /**
     * Grants permission to retrieve a policy.
     */
    const GET_POLICY = "bedrock-agentcore:GetPolicy";
    /**
     * Grants permission to retrieve status and results of a policy generation request.
     */
    const GET_POLICY_GENERATION = "bedrock-agentcore:GetPolicyGeneration";
    /**
     * Grants permission to list policy generation requests
     */
    const LIST_POLICY_GENERATIONS = "bedrock-agentcore:ListPolicyGenerations";
    /**
     * Grants permission to start an AI-powered policy generation request.
     */
    const START_POLICY_GENERATION = "bedrock-agentcore:StartPolicyGeneration";
    /**
     * Grants permission to everything releated to Policy Generation
     */
    const POLICY_GENERATION: string[];
    /**
     * Grants permission to evaluate Cedar policies for authorization requests.
     */
    const AUTHORIZE = "bedrock-agentcore:AuthorizeAction";
    /**
     * Grants permission to perform partial evaluation of Cedar policies to authorize
     * a caller to list tools they are allowed to call.
     */
    const PARTIALLY_AUHORIZE = "bedrock-agentcore:PartiallyAuthorizeActions";
    /******************************************************************************
     *                         Control Plane Permissions
     *****************************************************************************/
    const CREATE_POLICY_ENGINE = "bedrock-agentcore:CreatePolicyEngine";
    const GET_POLICY_ENGINE = "bedrock-agentcore:GetPolicyEngine";
    const DELETE_POLICY_ENGINE = "bedrock-agentcore:DeletePolicyEngine";
    const UPDATE_POLICY_ENGINE = "bedrock-agentcore:UpdatePolicyEngine";
}
export declare namespace PolicyPerms {
    /******************************************************************************
     *                         Data Plane Permissions
     *****************************************************************************/
    /**
     * Grants permission to evaluate Cedar policies for authorization requests.
     */
    const AUTHORIZE = "bedrock-agentcore:AuthorizeAction";
    /**
     * Grants permission to perform partial evaluation of Cedar policies to authorize
     * a caller to list tools they are allowed to call.
     */
    const PARTIALLY_AUHORIZE = "bedrock-agentcore:PartiallyAuthorizeActions";
    /******************************************************************************
     *                         Control Plane Permissions
     *****************************************************************************/
    const CREATE_POLICY = "bedrock-agentcore:CreatePolicy";
    const GET_POLICY = "bedrock-agentcore:GetPolicy";
    const DELETE_POLICY = "bedrock-agentcore:DeletePolicy";
    const UPDATE_POLICY = "bedrock-agentcore:UpdatePolicy";
}
