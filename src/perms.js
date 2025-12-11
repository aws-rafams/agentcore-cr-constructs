"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyPerms = exports.PolicyEnginePerms = void 0;
var PolicyEnginePerms;
(function (PolicyEnginePerms) {
    /******************************************************************************
     *                         Data Plane Permissions
     *****************************************************************************/
    /**
     * Grants permission to create a new policy within a policy engine.
     */
    PolicyEnginePerms.CREATE_POLICY = 'bedrock-agentcore:CreatePolicy';
    /**
     * Grants permission to retrieve a policy.
     */
    PolicyEnginePerms.GET_POLICY = 'bedrock-agentcore:GetPolicy';
    // ------------------------------------------------------
    // POLICY GENERATIONS
    // @see https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-core-concepts.html#concept-policy-authoring-service
    // ------------------------------------------------------
    /**
     * Grants permission to retrieve status and results of a policy generation request.
     */
    PolicyEnginePerms.GET_POLICY_GENERATION = 'bedrock-agentcore:GetPolicyGeneration';
    /**
     * Grants permission to list policy generation requests
     */
    PolicyEnginePerms.LIST_POLICY_GENERATIONS = 'bedrock-agentcore:ListPolicyGenerations';
    /**
     * Grants permission to start an AI-powered policy generation request.
     */
    PolicyEnginePerms.START_POLICY_GENERATION = 'bedrock-agentcore:StartPolicyGeneration';
    /**
     * Grants permission to everything releated to Policy Generation
     */
    PolicyEnginePerms.POLICY_GENERATION = [PolicyEnginePerms.START_POLICY_GENERATION, PolicyEnginePerms.GET_POLICY_GENERATION, PolicyEnginePerms.LIST_POLICY_GENERATIONS];
    // ------------------------------------------------------
    // Evaluations
    // ------------------------------------------------------
    /**
     * Grants permission to evaluate Cedar policies for authorization requests.
     */
    PolicyEnginePerms.AUTHORIZE = 'bedrock-agentcore:AuthorizeAction';
    /**
     * Grants permission to perform partial evaluation of Cedar policies to authorize
     * a caller to list tools they are allowed to call.
     */
    PolicyEnginePerms.PARTIALLY_AUHORIZE = 'bedrock-agentcore:PartiallyAuthorizeActions';
    /******************************************************************************
     *                         Control Plane Permissions
     *****************************************************************************/
    PolicyEnginePerms.CREATE_POLICY_ENGINE = 'bedrock-agentcore:CreatePolicyEngine';
    PolicyEnginePerms.GET_POLICY_ENGINE = 'bedrock-agentcore:GetPolicyEngine';
    PolicyEnginePerms.DELETE_POLICY_ENGINE = 'bedrock-agentcore:DeletePolicyEngine';
    PolicyEnginePerms.UPDATE_POLICY_ENGINE = 'bedrock-agentcore:UpdatePolicyEngine';
})(PolicyEnginePerms || (exports.PolicyEnginePerms = PolicyEnginePerms = {}));
var PolicyPerms;
(function (PolicyPerms) {
    /******************************************************************************
     *                         Data Plane Permissions
     *****************************************************************************/
    /**
     * Grants permission to evaluate Cedar policies for authorization requests.
     */
    PolicyPerms.AUTHORIZE = 'bedrock-agentcore:AuthorizeAction';
    /**
     * Grants permission to perform partial evaluation of Cedar policies to authorize
     * a caller to list tools they are allowed to call.
     */
    PolicyPerms.PARTIALLY_AUHORIZE = 'bedrock-agentcore:PartiallyAuthorizeActions';
    /******************************************************************************
     *                         Control Plane Permissions
     *****************************************************************************/
    PolicyPerms.CREATE_POLICY = 'bedrock-agentcore:CreatePolicy';
    PolicyPerms.GET_POLICY = 'bedrock-agentcore:GetPolicy';
    PolicyPerms.DELETE_POLICY = 'bedrock-agentcore:DeletePolicy';
    PolicyPerms.UPDATE_POLICY = 'bedrock-agentcore:UpdatePolicy';
})(PolicyPerms || (exports.PolicyPerms = PolicyPerms = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7OztBQUVILElBQWlCLGlCQUFpQixDQXNEakM7QUF0REQsV0FBaUIsaUJBQWlCO0lBQ2hDOzttRkFFK0U7SUFFL0U7O09BRUc7SUFDVSwrQkFBYSxHQUFHLGdDQUFnQyxDQUFDO0lBQzlEOztPQUVHO0lBQ1UsNEJBQVUsR0FBRyw2QkFBNkIsQ0FBQztJQUN4RCx5REFBeUQ7SUFDekQscUJBQXFCO0lBQ3JCLGdJQUFnSTtJQUNoSSx5REFBeUQ7SUFDekQ7O09BRUc7SUFDVSx1Q0FBcUIsR0FBRyx1Q0FBdUMsQ0FBQztJQUM3RTs7T0FFRztJQUNVLHlDQUF1QixHQUFHLHlDQUF5QyxDQUFDO0lBQ2pGOztPQUVHO0lBQ1UseUNBQXVCLEdBQUcseUNBQXlDLENBQUM7SUFDakY7O09BRUc7SUFDVSxtQ0FBaUIsR0FBRyxDQUFDLGtCQUFBLHVCQUF1QixFQUFFLGtCQUFBLHFCQUFxQixFQUFFLGtCQUFBLHVCQUF1QixDQUFDLENBQUM7SUFFM0cseURBQXlEO0lBQ3pELGNBQWM7SUFDZCx5REFBeUQ7SUFDekQ7O09BRUc7SUFDVSwyQkFBUyxHQUFHLG1DQUFtQyxDQUFDO0lBQzdEOzs7T0FHRztJQUNVLG9DQUFrQixHQUFHLDZDQUE2QyxDQUFDO0lBRWhGOzttRkFFK0U7SUFDbEUsc0NBQW9CLEdBQUcsc0NBQXNDLENBQUM7SUFDOUQsbUNBQWlCLEdBQUcsbUNBQW1DLENBQUM7SUFDeEQsc0NBQW9CLEdBQUcsc0NBQXNDLENBQUM7SUFDOUQsc0NBQW9CLEdBQUcsc0NBQXNDLENBQUM7QUFDN0UsQ0FBQyxFQXREZ0IsaUJBQWlCLGlDQUFqQixpQkFBaUIsUUFzRGpDO0FBRUQsSUFBaUIsV0FBVyxDQXNCM0I7QUF0QkQsV0FBaUIsV0FBVztJQUMxQjs7bUZBRStFO0lBRS9FOztPQUVHO0lBQ1UscUJBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUM3RDs7O09BR0c7SUFDVSw4QkFBa0IsR0FBRyw2Q0FBNkMsQ0FBQztJQUVoRjs7bUZBRStFO0lBQ2xFLHlCQUFhLEdBQUcsZ0NBQWdDLENBQUM7SUFDakQsc0JBQVUsR0FBRyw2QkFBNkIsQ0FBQztJQUMzQyx5QkFBYSxHQUFHLGdDQUFnQyxDQUFDO0lBQ2pELHlCQUFhLEdBQUcsZ0NBQWdDLENBQUM7QUFDaEUsQ0FBQyxFQXRCZ0IsV0FBVywyQkFBWCxXQUFXLFFBc0IzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogIENvcHlyaWdodCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpLiBZb3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiAgd2l0aCB0aGUgTGljZW5zZS4gQSBjb3B5IG9mIHRoZSBMaWNlbnNlIGlzIGxvY2F0ZWQgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBvciBpbiB0aGUgJ2xpY2Vuc2UnIGZpbGUgYWNjb21wYW55aW5nIHRoaXMgZmlsZS4gVGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICdBUyBJUycgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFU1xuICogIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG4gKiAgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgUG9saWN5RW5naW5lUGVybXMge1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIERhdGEgUGxhbmUgUGVybWlzc2lvbnNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHcmFudHMgcGVybWlzc2lvbiB0byBjcmVhdGUgYSBuZXcgcG9saWN5IHdpdGhpbiBhIHBvbGljeSBlbmdpbmUuXG4gICAqL1xuICBleHBvcnQgY29uc3QgQ1JFQVRFX1BPTElDWSA9ICdiZWRyb2NrLWFnZW50Y29yZTpDcmVhdGVQb2xpY3knO1xuICAvKipcbiAgICogR3JhbnRzIHBlcm1pc3Npb24gdG8gcmV0cmlldmUgYSBwb2xpY3kuXG4gICAqL1xuICBleHBvcnQgY29uc3QgR0VUX1BPTElDWSA9ICdiZWRyb2NrLWFnZW50Y29yZTpHZXRQb2xpY3knO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUE9MSUNZIEdFTkVSQVRJT05TXG4gIC8vIEBzZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2JlZHJvY2stYWdlbnRjb3JlL2xhdGVzdC9kZXZndWlkZS9wb2xpY3ktY29yZS1jb25jZXB0cy5odG1sI2NvbmNlcHQtcG9saWN5LWF1dGhvcmluZy1zZXJ2aWNlXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogR3JhbnRzIHBlcm1pc3Npb24gdG8gcmV0cmlldmUgc3RhdHVzIGFuZCByZXN1bHRzIG9mIGEgcG9saWN5IGdlbmVyYXRpb24gcmVxdWVzdC5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBHRVRfUE9MSUNZX0dFTkVSQVRJT04gPSAnYmVkcm9jay1hZ2VudGNvcmU6R2V0UG9saWN5R2VuZXJhdGlvbic7XG4gIC8qKlxuICAgKiBHcmFudHMgcGVybWlzc2lvbiB0byBsaXN0IHBvbGljeSBnZW5lcmF0aW9uIHJlcXVlc3RzXG4gICAqL1xuICBleHBvcnQgY29uc3QgTElTVF9QT0xJQ1lfR0VORVJBVElPTlMgPSAnYmVkcm9jay1hZ2VudGNvcmU6TGlzdFBvbGljeUdlbmVyYXRpb25zJztcbiAgLyoqXG4gICAqIEdyYW50cyBwZXJtaXNzaW9uIHRvIHN0YXJ0IGFuIEFJLXBvd2VyZWQgcG9saWN5IGdlbmVyYXRpb24gcmVxdWVzdC5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBTVEFSVF9QT0xJQ1lfR0VORVJBVElPTiA9ICdiZWRyb2NrLWFnZW50Y29yZTpTdGFydFBvbGljeUdlbmVyYXRpb24nO1xuICAvKipcbiAgICogR3JhbnRzIHBlcm1pc3Npb24gdG8gZXZlcnl0aGluZyByZWxlYXRlZCB0byBQb2xpY3kgR2VuZXJhdGlvblxuICAgKi9cbiAgZXhwb3J0IGNvbnN0IFBPTElDWV9HRU5FUkFUSU9OID0gW1NUQVJUX1BPTElDWV9HRU5FUkFUSU9OLCBHRVRfUE9MSUNZX0dFTkVSQVRJT04sIExJU1RfUE9MSUNZX0dFTkVSQVRJT05TXTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gRXZhbHVhdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBHcmFudHMgcGVybWlzc2lvbiB0byBldmFsdWF0ZSBDZWRhciBwb2xpY2llcyBmb3IgYXV0aG9yaXphdGlvbiByZXF1ZXN0cy5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBBVVRIT1JJWkUgPSAnYmVkcm9jay1hZ2VudGNvcmU6QXV0aG9yaXplQWN0aW9uJztcbiAgLyoqXG4gICAqIEdyYW50cyBwZXJtaXNzaW9uIHRvIHBlcmZvcm0gcGFydGlhbCBldmFsdWF0aW9uIG9mIENlZGFyIHBvbGljaWVzIHRvIGF1dGhvcml6ZVxuICAgKiBhIGNhbGxlciB0byBsaXN0IHRvb2xzIHRoZXkgYXJlIGFsbG93ZWQgdG8gY2FsbC5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBQQVJUSUFMTFlfQVVIT1JJWkUgPSAnYmVkcm9jay1hZ2VudGNvcmU6UGFydGlhbGx5QXV0aG9yaXplQWN0aW9ucyc7XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBDb250cm9sIFBsYW5lIFBlcm1pc3Npb25zXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgZXhwb3J0IGNvbnN0IENSRUFURV9QT0xJQ1lfRU5HSU5FID0gJ2JlZHJvY2stYWdlbnRjb3JlOkNyZWF0ZVBvbGljeUVuZ2luZSc7XG4gIGV4cG9ydCBjb25zdCBHRVRfUE9MSUNZX0VOR0lORSA9ICdiZWRyb2NrLWFnZW50Y29yZTpHZXRQb2xpY3lFbmdpbmUnO1xuICBleHBvcnQgY29uc3QgREVMRVRFX1BPTElDWV9FTkdJTkUgPSAnYmVkcm9jay1hZ2VudGNvcmU6RGVsZXRlUG9saWN5RW5naW5lJztcbiAgZXhwb3J0IGNvbnN0IFVQREFURV9QT0xJQ1lfRU5HSU5FID0gJ2JlZHJvY2stYWdlbnRjb3JlOlVwZGF0ZVBvbGljeUVuZ2luZSc7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUG9saWN5UGVybXMge1xuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgIERhdGEgUGxhbmUgUGVybWlzc2lvbnNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKlxuICAgKiBHcmFudHMgcGVybWlzc2lvbiB0byBldmFsdWF0ZSBDZWRhciBwb2xpY2llcyBmb3IgYXV0aG9yaXphdGlvbiByZXF1ZXN0cy5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBBVVRIT1JJWkUgPSAnYmVkcm9jay1hZ2VudGNvcmU6QXV0aG9yaXplQWN0aW9uJztcbiAgLyoqXG4gICAqIEdyYW50cyBwZXJtaXNzaW9uIHRvIHBlcmZvcm0gcGFydGlhbCBldmFsdWF0aW9uIG9mIENlZGFyIHBvbGljaWVzIHRvIGF1dGhvcml6ZVxuICAgKiBhIGNhbGxlciB0byBsaXN0IHRvb2xzIHRoZXkgYXJlIGFsbG93ZWQgdG8gY2FsbC5cbiAgICovXG4gIGV4cG9ydCBjb25zdCBQQVJUSUFMTFlfQVVIT1JJWkUgPSAnYmVkcm9jay1hZ2VudGNvcmU6UGFydGlhbGx5QXV0aG9yaXplQWN0aW9ucyc7XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICBDb250cm9sIFBsYW5lIFBlcm1pc3Npb25zXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgZXhwb3J0IGNvbnN0IENSRUFURV9QT0xJQ1kgPSAnYmVkcm9jay1hZ2VudGNvcmU6Q3JlYXRlUG9saWN5JztcbiAgZXhwb3J0IGNvbnN0IEdFVF9QT0xJQ1kgPSAnYmVkcm9jay1hZ2VudGNvcmU6R2V0UG9saWN5JztcbiAgZXhwb3J0IGNvbnN0IERFTEVURV9QT0xJQ1kgPSAnYmVkcm9jay1hZ2VudGNvcmU6RGVsZXRlUG9saWN5JztcbiAgZXhwb3J0IGNvbnN0IFVQREFURV9QT0xJQ1kgPSAnYmVkcm9jay1hZ2VudGNvcmU6VXBkYXRlUG9saWN5Jztcbn1cbiJdfQ==