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

export namespace PolicyEnginePerms {
  /******************************************************************************
   *                         Data Plane Permissions
   *****************************************************************************/

  /**
   * Grants permission to create a new policy within a policy engine.
   */
  export const CREATE_POLICY = 'bedrock-agentcore:CreatePolicy';
  /**
   * Grants permission to retrieve a policy.
   */
  export const GET_POLICY = 'bedrock-agentcore:GetPolicy';
  // ------------------------------------------------------
  // POLICY GENERATIONS
  // @see https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-core-concepts.html#concept-policy-authoring-service
  // ------------------------------------------------------
  /**
   * Grants permission to retrieve status and results of a policy generation request.
   */
  export const GET_POLICY_GENERATION = 'bedrock-agentcore:GetPolicyGeneration';
  /**
   * Grants permission to list policy generation requests
   */
  export const LIST_POLICY_GENERATIONS = 'bedrock-agentcore:ListPolicyGenerations';
  /**
   * Grants permission to start an AI-powered policy generation request.
   */
  export const START_POLICY_GENERATION = 'bedrock-agentcore:StartPolicyGeneration';
  /**
   * Grants permission to everything releated to Policy Generation
   */
  export const POLICY_GENERATION = [START_POLICY_GENERATION, GET_POLICY_GENERATION, LIST_POLICY_GENERATIONS];

  // ------------------------------------------------------
  // Evaluations
  // ------------------------------------------------------
  /**
   * Grants permission to evaluate Cedar policies for authorization requests.
   */
  export const AUTHORIZE = 'bedrock-agentcore:AuthorizeAction';
  /**
   * Grants permission to perform partial evaluation of Cedar policies to authorize
   * a caller to list tools they are allowed to call.
   */
  export const PARTIALLY_AUHORIZE = 'bedrock-agentcore:PartiallyAuthorizeActions';

  /******************************************************************************
   *                         Control Plane Permissions
   *****************************************************************************/
  export const CREATE_POLICY_ENGINE = 'bedrock-agentcore:CreatePolicyEngine';
  export const GET_POLICY_ENGINE = 'bedrock-agentcore:GetPolicyEngine';
  export const DELETE_POLICY_ENGINE = 'bedrock-agentcore:DeletePolicyEngine';
  export const UPDATE_POLICY_ENGINE = 'bedrock-agentcore:UpdatePolicyEngine';
}

export namespace PolicyPerms {
  /******************************************************************************
   *                         Data Plane Permissions
   *****************************************************************************/

  /**
   * Grants permission to evaluate Cedar policies for authorization requests.
   */
  export const AUTHORIZE = 'bedrock-agentcore:AuthorizeAction';
  /**
   * Grants permission to perform partial evaluation of Cedar policies to authorize
   * a caller to list tools they are allowed to call.
   */
  export const PARTIALLY_AUHORIZE = 'bedrock-agentcore:PartiallyAuthorizeActions';

  /******************************************************************************
   *                         Control Plane Permissions
   *****************************************************************************/
  export const CREATE_POLICY = 'bedrock-agentcore:CreatePolicy';
  export const GET_POLICY = 'bedrock-agentcore:GetPolicy';
  export const DELETE_POLICY = 'bedrock-agentcore:DeletePolicy';
  export const UPDATE_POLICY = 'bedrock-agentcore:UpdatePolicy';
}
