"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policy = exports.PolicyBase = exports.ValidationMode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const iam = require("aws-cdk-lib/aws-iam");
const cr = require("aws-cdk-lib/custom-resources");
/******************************************************************************
 *                              CONSTANTS
 *****************************************************************************/
/**
 * The validation mode for the policy creation. Determines how Cedar analyzer
 * validation results are handled during policy creation.
 */
var ValidationMode;
(function (ValidationMode) {
    /**
     * Runs the Cedar analyzer to validate the policy against the Cedar schema and
     * tool context, failing creation if the analyzer detects any validation issues
     * to ensure strict conformance.
     */
    ValidationMode["FAIL_ON_ANY_FINDINGS"] = "FAIL_ON_ANY_FINDINGS";
    /**
     * Runs the Cedar analyzer but allows policy creation even if validation issues
     * are detected, useful for testing or when the policy schema is evolving. Use this
     * mode only when you understand and accept the analyzer findings.
     */
    ValidationMode["IGNORE_ALL_FINDINGS"] = "IGNORE_ALL_FINDINGS";
})(ValidationMode || (exports.ValidationMode = ValidationMode = {}));
/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for a Policy.
 * Contains methods and attributes valid for Memories either created with CDK or imported.
 */
class PolicyBase extends aws_cdk_lib_1.Resource {
    // ------------------------------------------------------
    // Permission Methods
    // ------------------------------------------------------
    /**
     * Grants Policy IAM actions to the IAM Principal
     * @param grantee - The IAM principal to grant permissions to
     * @param actions - The actions to grant
     * @returns An IAM Grant object representing the granted permissions
     */
    grant(grantee, actions) {
        return iam.Grant.addToPrincipal({
            grantee,
            actions,
            resourceArns: [this.policyArn],
            scope: this,
        });
    }
}
exports.PolicyBase = PolicyBase;
_a = JSII_RTTI_SYMBOL_1;
PolicyBase[_a] = { fqn: "agentcore-experimental-constructs.PolicyBase", version: "0.1.3" };
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
class Policy extends PolicyBase {
    // ------------------------------------------------------
    // CONSTRUCTOR
    // ------------------------------------------------------
    constructor(scope, id, props) {
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
                },
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
                },
            },
            onDelete: {
                service: 'bedrock-agentcore-control',
                action: 'DeletePolicyCommand',
                parameters: {
                    policyEngineId: cr.PhysicalResourceId.fromResponse('policyEngineId'),
                    policyId: new cr.PhysicalResourceIdReference().toString(),
                },
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
exports.Policy = Policy;
_b = JSII_RTTI_SYMBOL_1;
Policy[_b] = { fqn: "agentcore-experimental-constructs.Policy", version: "0.1.3" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBa0JBLDZDQUFrRDtBQUNsRCwyQ0FBMkM7QUFDM0MsbURBQW1EO0FBS25EOzsrRUFFK0U7QUFDL0U7OztHQUdHO0FBQ0gsSUFBWSxjQWFYO0FBYkQsV0FBWSxjQUFjO0lBQ3hCOzs7O09BSUc7SUFDSCwrREFBNkMsQ0FBQTtJQUM3Qzs7OztPQUlHO0lBQ0gsNkRBQTJDLENBQUE7QUFDN0MsQ0FBQyxFQWJXLGNBQWMsOEJBQWQsY0FBYyxRQWF6QjtBQTZFRDs7K0VBRStFO0FBQy9FOzs7R0FHRztBQUNILE1BQXNCLFVBQVcsU0FBUSxzQkFBUTtJQVkvQyx5REFBeUQ7SUFDekQscUJBQXFCO0lBQ3JCLHlEQUF5RDtJQUN6RDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxPQUF1QixFQUFFLE9BQWlCO1FBQzlDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDOUIsT0FBTztZQUNQLE9BQU87WUFDUCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzlCLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUE1QkgsZ0NBNkJDOzs7QUE2Q0Q7OytFQUUrRTtBQUMvRTs7Ozs7O0dBTUc7QUFDSCxNQUFhLE1BQU8sU0FBUSxVQUFVO0lBZ0JwQyx5REFBeUQ7SUFDekQsY0FBYztJQUNkLHlEQUF5RDtJQUN6RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIseURBQXlEO1FBQ3pELDhCQUE4QjtRQUM5Qix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FB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LmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS4gWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogIHdpdGggdGhlIExpY2Vuc2UuIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgb3IgaW4gdGhlICdsaWNlbnNlJyBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAnQVMgSVMnIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVNcbiAqICBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuICogIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBDcmVhdGVQb2xpY3lDb21tYW5kSW5wdXQsXG4gIERlbGV0ZVBvbGljeUNvbW1hbmRJbnB1dCxcbiAgVXBkYXRlUG9saWN5Q29tbWFuZElucHV0LFxufSBmcm9tICdAYXdzLXNkay9jbGllbnQtYmVkcm9jay1hZ2VudGNvcmUtY29udHJvbCc7XG5pbXBvcnQgeyBJUmVzb3VyY2UsIFJlc291cmNlIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuaW1wb3J0ICogYXMgY3IgZnJvbSAnYXdzLWNkay1saWIvY3VzdG9tLXJlc291cmNlcyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCB7IElQb2xpY3lEZWZpbml0aW9uIH0gZnJvbSAnLi9jZWRhci1wb2xpY3knO1xuaW1wb3J0IHsgSVBvbGljeUVuZ2luZSB9IGZyb20gJy4vcG9saWN5LWVuZ2luZSc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OU1RBTlRTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKipcbiAqIFRoZSB2YWxpZGF0aW9uIG1vZGUgZm9yIHRoZSBwb2xpY3kgY3JlYXRpb24uIERldGVybWluZXMgaG93IENlZGFyIGFuYWx5emVyXG4gKiB2YWxpZGF0aW9uIHJlc3VsdHMgYXJlIGhhbmRsZWQgZHVyaW5nIHBvbGljeSBjcmVhdGlvbi5cbiAqL1xuZXhwb3J0IGVudW0gVmFsaWRhdGlvbk1vZGUge1xuICAvKipcbiAgICogUnVucyB0aGUgQ2VkYXIgYW5hbHl6ZXIgdG8gdmFsaWRhdGUgdGhlIHBvbGljeSBhZ2FpbnN0IHRoZSBDZWRhciBzY2hlbWEgYW5kXG4gICAqIHRvb2wgY29udGV4dCwgZmFpbGluZyBjcmVhdGlvbiBpZiB0aGUgYW5hbHl6ZXIgZGV0ZWN0cyBhbnkgdmFsaWRhdGlvbiBpc3N1ZXNcbiAgICogdG8gZW5zdXJlIHN0cmljdCBjb25mb3JtYW5jZS5cbiAgICovXG4gIEZBSUxfT05fQU5ZX0ZJTkRJTkdTID0gJ0ZBSUxfT05fQU5ZX0ZJTkRJTkdTJyxcbiAgLyoqXG4gICAqIFJ1bnMgdGhlIENlZGFyIGFuYWx5emVyIGJ1dCBhbGxvd3MgcG9saWN5IGNyZWF0aW9uIGV2ZW4gaWYgdmFsaWRhdGlvbiBpc3N1ZXNcbiAgICogYXJlIGRldGVjdGVkLCB1c2VmdWwgZm9yIHRlc3Rpbmcgb3Igd2hlbiB0aGUgcG9saWN5IHNjaGVtYSBpcyBldm9sdmluZy4gVXNlIHRoaXNcbiAgICogbW9kZSBvbmx5IHdoZW4geW91IHVuZGVyc3RhbmQgYW5kIGFjY2VwdCB0aGUgYW5hbHl6ZXIgZmluZGluZ3MuXG4gICAqL1xuICBJR05PUkVfQUxMX0ZJTkRJTkdTID0gJ0lHTk9SRV9BTExfRklORElOR1MnLFxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludGVyZmFjZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIFBvbGljeSByZXNvdXJjZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUG9saWN5IGV4dGVuZHMgSVJlc291cmNlIHtcbiAgLyoqXG4gICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiB0aGUgY3JlYXRlZCBwb2xpY3kgZW5naW5lLiBUaGlzIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyXG4gICAqIGNhbiBiZSB1c2VkIGZvciBjcm9zcy1zZXJ2aWNlIHJlZmVyZW5jZXMgYW5kIElBTSBwb2xpY3kgc3RhdGVtZW50cy5cbiAgICogQGF0dHJpYnV0ZVxuICAgKiBAZXhhbXBsZSAnYXJuOiR7UGFydGl0aW9ufTpiZWRyb2NrLWFnZW50Y29yZToke1JlZ2lvbn06JHtBY2NvdW50fTpwb2xpY3ktZW5naW5lLyR7UG9saWN5RW5naW5lSWR9L3BvbGljeS8ke1BvbGljeUlkfSdcbiAgICovXG4gIHJlYWRvbmx5IHBvbGljeUFybjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjcmVhdGVkIHBvbGljeSBlbmdpbmUuIFRoaXMgc3lzdGVtLWdlbmVyYXRlZCBpZGVudGlmaWVyIGNvbnNpc3RzXG4gICAqIG9mIHRoZSBwb2xpY3kgZW5naW5lIG5hbWUgcGx1cyBhIDEwLWNoYXJhY3RlciBnZW5lcmF0ZWQgc3VmZml4LlxuICAgKiBAYXR0cmlidXRlXG4gICAqIEBleGFtcGxlICdwb2xpY3lfbHA0ZDQtNHdmOGdrcnZqXydcbiAgICovXG4gIHJlYWRvbmx5IHBvbGljeUlkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb2xpY3kgZW5naW5lIHRoaXMgcG9saWN5IGlzIGFzc29jaWF0ZWQgdG8uXG4gICAqL1xuICByZWFkb25seSBwb2xpY3lFbmdpbmU6IElQb2xpY3lFbmdpbmU7XG5cbiAgLyoqXG4gICAqIEEgaHVtYW4tcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhlIHBvbGljeeKAmXMgcHVycG9zZSBhbmQgZnVuY3Rpb25hbGl0eSAoMS00LDA5NiBjaGFyYWN0ZXJzKS5cbiAgICogVGhpcyBoZWxwcyBwb2xpY3kgYWRtaW5pc3RyYXRvcnMgdW5kZXJzdGFuZCB0aGUgcG9saWN54oCZcyBpbnRlbnQsIGJ1c2luZXNzIHJ1bGVzLCBhbmQgb3BlcmF0aW9uYWwgc2NvcGUuXG4gICAqIFVzZSB0aGlzIGZpZWxkIHRvIGRvY3VtZW50IHdoeSB0aGUgcG9saWN5IGV4aXN0cywgd2hhdCBidXNpbmVzcyByZXF1aXJlbWVudCBpdCBhZGRyZXNzZXMsXG4gICAqIGFuZCBhbnkgc3BlY2lhbCBjb25zaWRlcmF0aW9ucyBmb3IgbWFpbnRlbmFuY2UuXG4gICAqIEBhdHRyaWJ1dGVcbiAgICogQGRlZmF1bHQgLSBObyBkZXNjcmlwdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb2xpY3kgc3RhdGVtZW50IChlLmcuIENlZGFyIFBvbGljeSkgdGhhdCBkZWZpbmVzIHRoZSBhdXRob3JpemF0aW9uIGxvZ2ljLlxuICAgKi9cbiAgcmVhZG9ubHkgcG9saWN5RGVmaW5pdGlvbj86IElQb2xpY3lEZWZpbml0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFsaWRhdGlvbiBtb2RlIGZvciB0aGUgcG9saWN5IGNyZWF0aW9uLiBEZXRlcm1pbmVzIGhvdyBDZWRhciBhbmFseXplciB2YWxpZGF0aW9uXG4gICAqIHJlc3VsdHMgYXJlIGhhbmRsZWQgZHVyaW5nIHBvbGljeSBjcmVhdGlvbi5cbiAgICovXG4gIHJlYWRvbmx5IHZhbGlkYXRpb25Nb2RlPzogVmFsaWRhdGlvbk1vZGU7XG5cbiAgLyoqXG4gICAqIFRoZSBzdGF0dXMgb2YgdGhlIHBvbGljeSBlbmdpbmUuXG4gICAqIEBhdHRyaWJ1dGVcbiAgICovXG4gIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcblxuICAvKipcbiAgICogVGltZXN0YW1wIHdoZW4gdGhlIHBvbGljeSBlbmdpbmUgd2FzIGxhc3QgdXBkYXRlZC5cbiAgICogQGF0dHJpYnV0ZVxuICAgKi9cbiAgcmVhZG9ubHkgdXBkYXRlZEF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaW1lc3RhbXAgd2hlbiB0aGUgcG9saWN5IGVuZ2luZSB3YXMgY3JlYXRlZC5cbiAgICogQGF0dHJpYnV0ZVxuICAgKi9cbiAgcmVhZG9ubHkgY3JlYXRlZEF0Pzogc3RyaW5nO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQZXJtaXNzaW9uIE1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBHcmFudCB0aGUgZ2l2ZW4gcHJpbmNpcGFsIGlkZW50aXR5IHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gYWN0aW9ucyBvbiB0aGlzIG1lbW9yeS5cbiAgICovXG4gIGdyYW50KGdyYW50ZWU6IGlhbS5JR3JhbnRhYmxlLCBhY3Rpb25zOiBzdHJpbmdbXSk6IGlhbS5HcmFudDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICBBQlNUUkFDVCBCQVNFIENMQVNTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIGEgUG9saWN5LlxuICogQ29udGFpbnMgbWV0aG9kcyBhbmQgYXR0cmlidXRlcyB2YWxpZCBmb3IgTWVtb3JpZXMgZWl0aGVyIGNyZWF0ZWQgd2l0aCBDREsgb3IgaW1wb3J0ZWQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb2xpY3lCYXNlIGV4dGVuZHMgUmVzb3VyY2UgaW1wbGVtZW50cyBJUG9saWN5IHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHBvbGljeUFybjogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgcG9saWN5SWQ6IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHBvbGljeU5hbWU6IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHBvbGljeURlZmluaXRpb24/OiBJUG9saWN5RGVmaW5pdGlvbjtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHZhbGlkYXRpb25Nb2RlPzogVmFsaWRhdGlvbk1vZGU7XG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBwb2xpY3lFbmdpbmU6IElQb2xpY3lFbmdpbmU7XG4gIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHVwZGF0ZWRBdD86IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGNyZWF0ZWRBdD86IHN0cmluZztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGVybWlzc2lvbiBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogR3JhbnRzIFBvbGljeSBJQU0gYWN0aW9ucyB0byB0aGUgSUFNIFByaW5jaXBhbFxuICAgKiBAcGFyYW0gZ3JhbnRlZSAtIFRoZSBJQU0gcHJpbmNpcGFsIHRvIGdyYW50IHBlcm1pc3Npb25zIHRvXG4gICAqIEBwYXJhbSBhY3Rpb25zIC0gVGhlIGFjdGlvbnMgdG8gZ3JhbnRcbiAgICogQHJldHVybnMgQW4gSUFNIEdyYW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGdyYW50ZWQgcGVybWlzc2lvbnNcbiAgICovXG4gIGdyYW50KGdyYW50ZWU6IGlhbS5JR3JhbnRhYmxlLCBhY3Rpb25zOiBzdHJpbmdbXSk6IGlhbS5HcmFudCB7XG4gICAgcmV0dXJuIGlhbS5HcmFudC5hZGRUb1ByaW5jaXBhbCh7XG4gICAgICBncmFudGVlLFxuICAgICAgYWN0aW9ucyxcbiAgICAgIHJlc291cmNlQXJuczogW3RoaXMucG9saWN5QXJuXSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgIH0pO1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIFBST1BTIEZPUiBORVcgQ09OU1RSVUNUXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGNyZWF0aW5nIGEgUG9saWN5cmVzb3VyY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb2xpY3lCYXNlUHJvcHMge1xuICAvKipcbiAgICogVGhlIGN1c3RvbWVyLWFzc2lnbmVkIGltbXV0YWJsZSBuYW1lIGZvciB0aGUgcG9saWN5LiBUaGlzIG5hbWUgaWRlbnRpZmllcyB0aGUgcG9saWN5LlxuICAgKiBNdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuIFZhbGlkIGNoYXJhY3RlcnMgYXJlIGEteiwgQS1aLCAwLTksIGFuZCBfICh1bmRlcnNjb3JlKS5cbiAgICogVGhlIG5hbWUgY2FuIGhhdmUgdXAgdG8gNDggY2hhcmFjdGVycy5cbiAgICovXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgaHVtYW4tcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhlIHBvbGljeeKAmXMgcHVycG9zZSBhbmQgZnVuY3Rpb25hbGl0eSAoMS00LDA5NiBjaGFyYWN0ZXJzKS5cbiAgICogVGhpcyBoZWxwcyBwb2xpY3kgYWRtaW5pc3RyYXRvcnMgdW5kZXJzdGFuZCB0aGUgcG9saWN54oCZcyBpbnRlbnQsIGJ1c2luZXNzIHJ1bGVzLCBhbmQgb3BlcmF0aW9uYWwgc2NvcGUuXG4gICAqIFVzZSB0aGlzIGZpZWxkIHRvIGRvY3VtZW50IHdoeSB0aGUgcG9saWN5IGV4aXN0cywgd2hhdCBidXNpbmVzcyByZXF1aXJlbWVudCBpdCBhZGRyZXNzZXMsXG4gICAqIGFuZCBhbnkgc3BlY2lhbCBjb25zaWRlcmF0aW9ucyBmb3IgbWFpbnRlbmFuY2UuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gTm8gZGVzY3JpcHRpb25cbiAgICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9saWN5IHN0YXRlbWVudCAoZS5nLiBDZWRhciBQb2xpY3kpIHRoYXQgZGVmaW5lcyB0aGUgYXV0aG9yaXphdGlvbiBsb2dpYy5cbiAgICovXG4gIHJlYWRvbmx5IHBvbGljeURlZmluaXRpb246IElQb2xpY3lEZWZpbml0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgdmFsaWRhdGlvbiBtb2RlIGZvciB0aGUgcG9saWN5IGNyZWF0aW9uLiBEZXRlcm1pbmVzIGhvdyBDZWRhciBhbmFseXplciB2YWxpZGF0aW9uXG4gICAqIHJlc3VsdHMgYXJlIGhhbmRsZWQgZHVyaW5nIHBvbGljeSBjcmVhdGlvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgVmFsaWRhdGlvbk1vZGUuRkFJTF9PTl9BTllfRklORElOR1NcbiAgICovXG4gIHJlYWRvbmx5IHZhbGlkYXRpb25Nb2RlPzogVmFsaWRhdGlvbk1vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9saWN5UHJvcHMgZXh0ZW5kcyBQb2xpY3lCYXNlUHJvcHMge1xuICAvKipcbiAgICogVGhlIHBvbGljeSBlbmdpbmUgdGhpcyBwb2xpY3kgc2hvdWxkIGJlIGFzc29jaWF0ZWQgdG8uXG4gICAqL1xuICByZWFkb25seSBwb2xpY3lFbmdpbmU6IElQb2xpY3lFbmdpbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFzc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqXG4gKiBBIENlZGFyIHBvbGljeSBpcyBhIGRlY2xhcmF0aXZlIHN0YXRlbWVudCB0aGF0IHBlcm1pdHMgb3IgZm9yYmlkcyBhY2Nlc3MgdG8gZ2F0ZXdheSB0b29scy5cbiAqIEVhY2ggcG9saWN5IHNwZWNpZmllcyB3aG8gKHByaW5jaXBhbCkgY2FuIHBlcmZvcm0gd2hhdCBhY3Rpb24gKHRvb2wgaW52b2NhdGlvbikgb24gd2hpY2hcbiAqIHJlc291cmNlIChnYXRld2F5KSB1bmRlciB3aGF0IGNvbmRpdGlvbnMuIFBvbGljaWVzIGFyZSBldmFsdWF0ZWQgZm9yIGV2ZXJ5IHRvb2wgaW52b2NhdGlvbiByZXF1ZXN0LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2JlZHJvY2stYWdlbnRjb3JlL2xhdGVzdC9kZXZndWlkZS9wb2xpY3ktY3JlYXRlLXBvbGljaWVzLmh0bWxcbiAqL1xuZXhwb3J0IGNsYXNzIFBvbGljeSBleHRlbmRzIFBvbGljeUJhc2Uge1xuICBwdWJsaWMgcmVhZG9ubHkgcG9saWN5QXJuOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBwb2xpY3lJZDogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBwb2xpY3lEZWZpbml0aW9uPzogSVBvbGljeURlZmluaXRpb247XG4gIHB1YmxpYyByZWFkb25seSBwb2xpY3lFbmdpbmU6IElQb2xpY3lFbmdpbmU7XG4gIHB1YmxpYyByZWFkb25seSB2YWxpZGF0aW9uTW9kZT86IFZhbGlkYXRpb25Nb2RlO1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgdXBkYXRlZEF0Pzogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgY3JlYXRlZEF0Pzogc3RyaW5nO1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSW50ZXJuYWwgT25seVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpdmF0ZSByZWFkb25seSBfX3Jlc291cmNlOiBjci5Bd3NDdXN0b21SZXNvdXJjZTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ09OU1RSVUNUT1JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBQb2xpY3lQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTZXQgcHJvcGVydGllcyBhbmQgZGVmYXVsdHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnBvbGljeU5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLnBvbGljeURlZmluaXRpb24gPSBwcm9wcy5wb2xpY3lEZWZpbml0aW9uO1xuICAgIHRoaXMudmFsaWRhdGlvbk1vZGUgPSBwcm9wcy52YWxpZGF0aW9uTW9kZSA/PyBWYWxpZGF0aW9uTW9kZS5GQUlMX09OX0FOWV9GSU5ESU5HUztcbiAgICB0aGlzLnBvbGljeUVuZ2luZSA9IHByb3BzLnBvbGljeUVuZ2luZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEN1c3RvbSBSZXNvdXJjZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX19yZXNvdXJjZSA9IG5ldyBjci5Bd3NDdXN0b21SZXNvdXJjZSh0aGlzLCAnUmVzb3VyY2UnLCB7XG4gICAgICBvbkNyZWF0ZToge1xuICAgICAgICBzZXJ2aWNlOiAnYmVkcm9jay1hZ2VudGNvcmUtY29udHJvbCcsXG4gICAgICAgIGFjdGlvbjogJ0NyZWF0ZVBvbGljeUNvbW1hbmQnLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgbmFtZTogdGhpcy5wb2xpY3lOYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGRlZmluaXRpb246IHRoaXMucG9saWN5RGVmaW5pdGlvbi5fX3JlbmRlcigpLFxuICAgICAgICAgIHZhbGlkYXRpb25Nb2RlOiB0aGlzLnZhbGlkYXRpb25Nb2RlLFxuICAgICAgICAgIHBvbGljeUVuZ2luZUlkOiB0aGlzLnBvbGljeUVuZ2luZS5wb2xpY3lFbmdpbmVJZCxcbiAgICAgICAgfSBhcyBDcmVhdGVQb2xpY3lDb21tYW5kSW5wdXQsXG4gICAgICAgIHBoeXNpY2FsUmVzb3VyY2VJZDogY3IuUGh5c2ljYWxSZXNvdXJjZUlkLmZyb21SZXNwb25zZSgncG9saWN5SWQnKSxcbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZToge1xuICAgICAgICBzZXJ2aWNlOiAnYmVkcm9jay1hZ2VudGNvcmUtY29udHJvbCcsXG4gICAgICAgIGFjdGlvbjogJ1VwZGF0ZVBvbGljeUNvbW1hbmQnLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgcG9saWN5RW5naW5lSWQ6IHRoaXMucG9saWN5RW5naW5lLnBvbGljeUVuZ2luZUlkLFxuICAgICAgICAgIHBvbGljeUlkOiBuZXcgY3IuUGh5c2ljYWxSZXNvdXJjZUlkUmVmZXJlbmNlKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICBkZWZpbml0aW9uOiB0aGlzLnBvbGljeURlZmluaXRpb24uX19yZW5kZXIoKSxcbiAgICAgICAgICB2YWxpZGF0aW9uTW9kZTogdGhpcy52YWxpZGF0aW9uTW9kZSxcbiAgICAgICAgfSBhcyBVcGRhdGVQb2xpY3lDb21tYW5kSW5wdXQsXG4gICAgICB9LFxuICAgICAgb25EZWxldGU6IHtcbiAgICAgICAgc2VydmljZTogJ2JlZHJvY2stYWdlbnRjb3JlLWNvbnRyb2wnLFxuICAgICAgICBhY3Rpb246ICdEZWxldGVQb2xpY3lDb21tYW5kJyxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIHBvbGljeUVuZ2luZUlkOiBjci5QaHlzaWNhbFJlc291cmNlSWQuZnJvbVJlc3BvbnNlKCdwb2xpY3lFbmdpbmVJZCcpLFxuICAgICAgICAgIHBvbGljeUlkOiBuZXcgY3IuUGh5c2ljYWxSZXNvdXJjZUlkUmVmZXJlbmNlKCkudG9TdHJpbmcoKSxcbiAgICAgICAgfSBhcyBEZWxldGVQb2xpY3lDb21tYW5kSW5wdXQsXG4gICAgICB9LFxuICAgICAgcG9saWN5OiBjci5Bd3NDdXN0b21SZXNvdXJjZVBvbGljeS5mcm9tU3RhdGVtZW50cyhbXG4gICAgICAgIG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcbiAgICAgICAgICBhY3Rpb25zOiBbJ2JlZHJvY2stYWdlbnRjb3JlOionLCAnaWFtOlBhc3NSb2xlJ10sXG4gICAgICAgICAgcmVzb3VyY2VzOiBbJyonXSxcbiAgICAgICAgfSksXG4gICAgICBdKSxcbiAgICB9KTtcblxuICAgIHRoaXMucG9saWN5QXJuID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3BvbGljeUFybicpO1xuICAgIHRoaXMucG9saWN5SWQgPSB0aGlzLl9fcmVzb3VyY2UuZ2V0UmVzcG9uc2VGaWVsZCgncG9saWN5SWQnKTtcbiAgICB0aGlzLnBvbGljeU5hbWUgPSB0aGlzLl9fcmVzb3VyY2UuZ2V0UmVzcG9uc2VGaWVsZCgnbmFtZScpO1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3N0YXR1cycpO1xuICAgIHRoaXMudXBkYXRlZEF0ID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3VwZGF0ZWRBdCcpO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ2NyZWF0ZWRBdCcpO1xuICB9XG59XG4iXX0=