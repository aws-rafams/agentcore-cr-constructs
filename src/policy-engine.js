"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyEngine = exports.PolicyEngineBase = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const iam = require("aws-cdk-lib/aws-iam");
const cr = require("aws-cdk-lib/custom-resources");
const perms_1 = require("./perms");
const policy_1 = require("./policy");
/******************************************************************************
 *                        ABSTRACT BASE CLASS
 *****************************************************************************/
/**
 * Abstract base class for a PolicyEngine.
 * Contains methods and attributes valid for Memories either created with CDK or imported.
 */
class PolicyEngineBase extends aws_cdk_lib_1.Resource {
    // ------------------------------------------------------
    // Permission Methods
    // ------------------------------------------------------
    /**
     * Grants Policy Engine IAM actions to the IAM Principal
     * @param grantee - The IAM principal to grant permissions to
     * @param actions - The actions to grant
     * @returns An IAM Grant object representing the granted permissions
     */
    grant(grantee, actions) {
        return iam.Grant.addToPrincipal({
            grantee,
            actions,
            resourceArns: [this.policyEngineArn],
            scope: this,
        });
    }
    grantPolicyEvaluation(grantee) {
        return this.grant(grantee, [
            perms_1.PolicyEnginePerms.AUTHORIZE,
            perms_1.PolicyEnginePerms.GET_POLICY_ENGINE,
            perms_1.PolicyEnginePerms.PARTIALLY_AUHORIZE,
        ]);
    }
    // ------------------------------------------------------
    // Policy Methods
    // ------------------------------------------------------
    addPolicy(props) {
        return new policy_1.Policy(this, `Policy-${props.name}`, {
            ...props,
            policyEngine: this,
        });
    }
}
exports.PolicyEngineBase = PolicyEngineBase;
_a = JSII_RTTI_SYMBOL_1;
PolicyEngineBase[_a] = { fqn: "agentcore-experimental-constructs.PolicyEngineBase", version: "0.1.3" };
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
class PolicyEngine extends PolicyEngineBase {
    // ------------------------------------------------------
    // STATIC METHODS
    // ------------------------------------------------------
    static fromPolicyEngineArn(scope, id, policyEngineArn) {
        const policyEngineId = aws_cdk_lib_1.Arn.split(policyEngineArn, aws_cdk_lib_1.ArnFormat.SLASH_RESOURCE_NAME).resourceName;
        class Import extends PolicyEngineBase {
            constructor() {
                super(...arguments);
                this.policyEngineArn = policyEngineArn;
                this.policyEngineId = policyEngineId;
                // Extract base name without the generated suffix
                this.policyEngineName = policyEngineId.split('-')[0];
                this.description = undefined;
                this.status = undefined;
                this.updatedAt = undefined;
                this.createdAt = undefined;
            }
        }
        return new Import(scope, id);
    }
    // ------------------------------------------------------
    // CONSTRUCTOR
    // ------------------------------------------------------
    constructor(scope, id, props) {
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
                },
                physicalResourceId: cr.PhysicalResourceId.fromResponse('policyEngineId'),
            },
            onUpdate: {
                service: 'bedrock-agentcore-control',
                action: 'UpdatePolicyEngineCommand',
                parameters: {
                    policyEngineId: new cr.PhysicalResourceIdReference().toString(),
                    description: this.description,
                },
            },
            onDelete: {
                service: 'bedrock-agentcore-control',
                action: 'DeletePolicyEngineCommand',
                parameters: {
                    policyEngineId: new cr.PhysicalResourceIdReference().toString(),
                },
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
exports.PolicyEngine = PolicyEngine;
_b = JSII_RTTI_SYMBOL_1;
PolicyEngine[_b] = { fqn: "agentcore-experimental-constructs.PolicyEngine", version: "0.1.3" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9saWN5LWVuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvbGljeS1lbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFrQkEsNkNBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQyxtREFBbUQ7QUFFbkQsbUNBQTRDO0FBQzVDLHFDQUFtRDtBQW9GbkQ7OytFQUUrRTtBQUMvRTs7O0dBR0c7QUFDSCxNQUFzQixnQkFBaUIsU0FBUSxzQkFBUTtJQVNyRCx5REFBeUQ7SUFDekQscUJBQXFCO0lBQ3JCLHlEQUF5RDtJQUN6RDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxPQUF1QixFQUFFLE9BQWlCO1FBQzlDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7WUFDOUIsT0FBTztZQUNQLE9BQU87WUFDUCxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3BDLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQixDQUFDLE9BQXVCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDekIseUJBQWlCLENBQUMsU0FBUztZQUMzQix5QkFBaUIsQ0FBQyxpQkFBaUI7WUFDbkMseUJBQWlCLENBQUMsa0JBQWtCO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsaUJBQWlCO0lBQ2pCLHlEQUF5RDtJQUN6RCxTQUFTLENBQUMsS0FBc0I7UUFDOUIsT0FBTyxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUMsR0FBRyxLQUFLO1lBQ1IsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUEzQ0gsNENBMEVDOzs7QUF5Q0Q7OytFQUUrRTtBQUMvRTs7Ozs7O0dBTUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxnQkFBZ0I7SUFDaEQs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QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDOztBQWhGSCxvQ0FpRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBDb3B5cmlnaHQgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKS4gWW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogIHdpdGggdGhlIExpY2Vuc2UuIEEgY29weSBvZiB0aGUgTGljZW5zZSBpcyBsb2NhdGVkIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgb3IgaW4gdGhlICdsaWNlbnNlJyBmaWxlIGFjY29tcGFueWluZyB0aGlzIGZpbGUuIFRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAnQVMgSVMnIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVNcbiAqICBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuICogIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBDcmVhdGVQb2xpY3lFbmdpbmVDb21tYW5kSW5wdXQsXG4gIERlbGV0ZVBvbGljeUVuZ2luZUNvbW1hbmRJbnB1dCxcbiAgVXBkYXRlUG9saWN5RW5naW5lQ29tbWFuZElucHV0LFxufSBmcm9tICdAYXdzLXNkay9jbGllbnQtYmVkcm9jay1hZ2VudGNvcmUtY29udHJvbCc7XG5pbXBvcnQgeyBBcm4sIEFybkZvcm1hdCwgSVJlc291cmNlLCBSZXNvdXJjZSB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGlhbSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtaWFtJztcbmltcG9ydCAqIGFzIGNyIGZyb20gJ2F3cy1jZGstbGliL2N1c3RvbS1yZXNvdXJjZXMnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBQb2xpY3lFbmdpbmVQZXJtcyB9IGZyb20gJy4vcGVybXMnO1xuaW1wb3J0IHsgUG9saWN5LCBQb2xpY3lCYXNlUHJvcHMgfSBmcm9tICcuL3BvbGljeSc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OU1RBTlRTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnRlcmZhY2VcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKlxuICogSW50ZXJmYWNlIGZvciBQb2xpY3kgRW5naW5lIHJlc291cmNlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIElQb2xpY3lFbmdpbmUgZXh0ZW5kcyBJUmVzb3VyY2Uge1xuICAvKipcbiAgICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lIChBUk4pIG9mIHRoZSBjcmVhdGVkIHBvbGljeSBlbmdpbmUuIFRoaXMgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJcbiAgICogY2FuIGJlIHVzZWQgZm9yIGNyb3NzLXNlcnZpY2UgcmVmZXJlbmNlcyBhbmQgSUFNIHBvbGljeSBzdGF0ZW1lbnRzLlxuICAgKiBAYXR0cmlidXRlXG4gICAqIEBleGFtcGxlICdhcm46YXdzOmJlZHJvY2stYWdlbnRjb3JlOiR7cmVnaW9ufToke2FjY291bnRJZH06cG9saWN5LWVuZ2luZS8ke3BvbGljeUVuZ2luZUlkfVxuICAgKi9cbiAgcmVhZG9ubHkgcG9saWN5RW5naW5lQXJuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGNyZWF0ZWQgcG9saWN5IGVuZ2luZS4gVGhpcyBzeXN0ZW0tZ2VuZXJhdGVkIGlkZW50aWZpZXIgY29uc2lzdHNcbiAgICogb2YgdGhlIHBvbGljeSBlbmdpbmUgbmFtZSBwbHVzIGEgMTAtY2hhcmFjdGVyIGdlbmVyYXRlZCBzdWZmaXguXG4gICAqIEBhdHRyaWJ1dGVcbiAgICogQGV4YW1wbGUgJ1BvbGljeUVuZ2luZV81MGY3by12cjkwb2JfaXplJ1xuICAgKi9cbiAgcmVhZG9ubHkgcG9saWN5RW5naW5lSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1c3RvbWVyLWFzc2lnbmVkIG5hbWUgb2YgdGhlIHBvbGljeSBlbmdpbmUuIFRoaXMgbWF0Y2hlcyB0aGUgbmFtZSBwcm92aWRlZCBpbiB0aGUgY3JlYXRpb24gcHJvY2Vzcy5cbiAgICogQGF0dHJpYnV0ZVxuICAgKiBAZXhhbXBsZSAnUG9saWN5RW5naW5lXzUwZjdvJ1xuICAgKi9cbiAgcmVhZG9ubHkgcG9saWN5RW5naW5lTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGh1bWFuLXJlYWRhYmxlIGRlc2NyaXB0aW9uIG9mIHRoZSBwb2xpY3kgZW5naW5lJ3MgcHVycG9zZSBhbmQgc2NvcGUgKDEtNCwwOTYgY2hhcmFjdGVycykuXG4gICAqIFRoaXMgaGVscHMgYWRtaW5pc3RyYXRvcnMgdW5kZXJzdGFuZCB0aGUgcG9saWN5IGVuZ2luZSdzIHJvbGUgaW4gdGhlIG92ZXJhbGwgZ292ZXJuYW5jZSBzdHJhdGVneS5cbiAgICogRG9jdW1lbnQgd2hpY2ggR2F0ZXdheSB0aGlzIGVuZ2luZSB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCwgd2hhdCB0eXBlcyBvZiB0b29scyBvciB3b3JrZmxvd3MgaXRcbiAgICogZ292ZXJucywgYW5kIHRoZSB0ZWFtIG9yIHNlcnZpY2UgcmVzcG9uc2libGUgZm9yIG1haW50YWluaW5nIGl0LiBDbGVhciBkZXNjcmlwdGlvbnMgYXJlIGVzc2VudGlhbFxuICAgKiB3aGVuIG1hbmFnaW5nIG11bHRpcGxlIHBvbGljeSBlbmdpbmVzIGFjcm9zcyBkaWZmZXJlbnQgc2VydmljZXMgb3IgZW52aXJvbm1lbnRzLlxuICAgKiBAYXR0cmlidXRlXG4gICAqIEBkZWZhdWx0IC0gTm8gZGVzY3JpcHRpb25cbiAgICovXG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBwb2xpY3kgZW5naW5lLlxuICAgKiBAYXR0cmlidXRlXG4gICAqL1xuICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRpbWVzdGFtcCB3aGVuIHRoZSBwb2xpY3kgZW5naW5lIHdhcyBsYXN0IHVwZGF0ZWQuXG4gICAqIEBhdHRyaWJ1dGVcbiAgICovXG4gIHJlYWRvbmx5IHVwZGF0ZWRBdD86IHN0cmluZztcblxuICAvKipcbiAgICogVGltZXN0YW1wIHdoZW4gdGhlIHBvbGljeSBlbmdpbmUgd2FzIGNyZWF0ZWQuXG4gICAqIEBhdHRyaWJ1dGVcbiAgICovXG4gIHJlYWRvbmx5IGNyZWF0ZWRBdD86IHN0cmluZztcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUGVybWlzc2lvbiBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogR3JhbnQgdGhlIGdpdmVuIHByaW5jaXBhbCBpZGVudGl0eSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIGFjdGlvbnMgb24gdGhpcyBtZW1vcnkuXG4gICAqL1xuICBncmFudChncmFudGVlOiBpYW0uSUdyYW50YWJsZSwgYWN0aW9uczogc3RyaW5nW10pOiBpYW0uR3JhbnQ7XG5cbiAgLyoqXG4gICAqIEdyYW50IHRoZSBnaXZlbiBpZGVudGl0eSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIHBvbGljeSBldmFsdWF0aW9ucyBvbiB0aGlzIHBvbGljeSBlbmdpbmUuXG4gICAqL1xuICBncmFudFBvbGljeUV2YWx1YXRpb24oZ3JhbnRlZTogaWFtLklHcmFudGFibGUpOiBpYW0uR3JhbnQ7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBvbGljeSBNZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZGRQb2xpY3kocHJvcHM6IFBvbGljeUJhc2VQcm9wcyk6IFBvbGljeTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICBBQlNUUkFDVCBCQVNFIENMQVNTXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIGEgUG9saWN5RW5naW5lLlxuICogQ29udGFpbnMgbWV0aG9kcyBhbmQgYXR0cmlidXRlcyB2YWxpZCBmb3IgTWVtb3JpZXMgZWl0aGVyIGNyZWF0ZWQgd2l0aCBDREsgb3IgaW1wb3J0ZWQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb2xpY3lFbmdpbmVCYXNlIGV4dGVuZHMgUmVzb3VyY2UgaW1wbGVtZW50cyBJUG9saWN5RW5naW5lIHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHBvbGljeUVuZ2luZUFybjogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgcG9saWN5RW5naW5lSWQ6IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHBvbGljeUVuZ2luZU5hbWU6IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgc3RhdHVzPzogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgdXBkYXRlZEF0Pzogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgY3JlYXRlZEF0Pzogc3RyaW5nO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQZXJtaXNzaW9uIE1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBHcmFudHMgUG9saWN5IEVuZ2luZSBJQU0gYWN0aW9ucyB0byB0aGUgSUFNIFByaW5jaXBhbFxuICAgKiBAcGFyYW0gZ3JhbnRlZSAtIFRoZSBJQU0gcHJpbmNpcGFsIHRvIGdyYW50IHBlcm1pc3Npb25zIHRvXG4gICAqIEBwYXJhbSBhY3Rpb25zIC0gVGhlIGFjdGlvbnMgdG8gZ3JhbnRcbiAgICogQHJldHVybnMgQW4gSUFNIEdyYW50IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGdyYW50ZWQgcGVybWlzc2lvbnNcbiAgICovXG4gIGdyYW50KGdyYW50ZWU6IGlhbS5JR3JhbnRhYmxlLCBhY3Rpb25zOiBzdHJpbmdbXSk6IGlhbS5HcmFudCB7XG4gICAgcmV0dXJuIGlhbS5HcmFudC5hZGRUb1ByaW5jaXBhbCh7XG4gICAgICBncmFudGVlLFxuICAgICAgYWN0aW9ucyxcbiAgICAgIHJlc291cmNlQXJuczogW3RoaXMucG9saWN5RW5naW5lQXJuXSxcbiAgICAgIHNjb3BlOiB0aGlzLFxuICAgIH0pO1xuICB9XG5cbiAgZ3JhbnRQb2xpY3lFdmFsdWF0aW9uKGdyYW50ZWU6IGlhbS5JR3JhbnRhYmxlKTogaWFtLkdyYW50IHtcbiAgICByZXR1cm4gdGhpcy5ncmFudChncmFudGVlLCBbXG4gICAgICBQb2xpY3lFbmdpbmVQZXJtcy5BVVRIT1JJWkUsXG4gICAgICBQb2xpY3lFbmdpbmVQZXJtcy5HRVRfUE9MSUNZX0VOR0lORSxcbiAgICAgIFBvbGljeUVuZ2luZVBlcm1zLlBBUlRJQUxMWV9BVUhPUklaRSxcbiAgICBdKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQb2xpY3kgTWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkUG9saWN5KHByb3BzOiBQb2xpY3lCYXNlUHJvcHMpOiBQb2xpY3kge1xuICAgIHJldHVybiBuZXcgUG9saWN5KHRoaXMsIGBQb2xpY3ktJHtwcm9wcy5uYW1lfWAsIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgcG9saWN5RW5naW5lOiB0aGlzLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1ldHJpY3MgTWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZ2l2ZW4gbmFtZWQgbWV0cmljIGZvciB0aGlzIG1lbW9yeS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIG1ldHJpYyB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgYSBzdW0gb3ZlciBhIHBlcmlvZCBvZiA1IG1pbnV0ZXMuXG4gICAqIFlvdSBjYW4gY3VzdG9taXplIHRoaXMgYnkgdXNpbmcgdGhlIGBzdGF0aXN0aWNgIGFuZCBgcGVyaW9kYCBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgLy8gICBwdWJsaWMgbWV0cmljKG1ldHJpY05hbWU6IHN0cmluZywgZGltZW5zaW9uczogRGltZW5zaW9uc01hcCwgcHJvcHM/OiBNZXRyaWNPcHRpb25zKTogTWV0cmljIHtcbiAgLy8gICAgIGNvbnN0IG1ldHJpY1Byb3BzOiBNZXRyaWNQcm9wcyA9IHtcbiAgLy8gICAgICAgbmFtZXNwYWNlOiAnQVdTL0JlZHJvY2stQWdlbnRDb3JlJyxcbiAgLy8gICAgICAgbWV0cmljTmFtZSxcbiAgLy8gICAgICAgZGltZW5zaW9uc01hcDogeyAuLi5kaW1lbnNpb25zLCBSZXNvdXJjZTogdGhpcy5wb2xpY3lFbmdpbmVJZCB9LFxuICAvLyAgICAgICAuLi5wcm9wcyxcbiAgLy8gICAgIH07XG4gIC8vICAgICByZXR1cm4gdGhpcy5jb25maWd1cmVNZXRyaWMobWV0cmljUHJvcHMpO1xuICAvLyAgIH1cblxuICAvLyAgIC8qKlxuICAvLyAgICAqIEludGVybmFsIG1ldGhvZCB0byBjcmVhdGUgYSBtZXRyaWMuXG4gIC8vICAgICovXG4gIC8vICAgcHJpdmF0ZSBjb25maWd1cmVNZXRyaWMocHJvcHM6IE1ldHJpY1Byb3BzKSB7XG4gIC8vICAgICByZXR1cm4gbmV3IE1ldHJpYyh7XG4gIC8vICAgICAgIC4uLnByb3BzLFxuICAvLyAgICAgICByZWdpb246IHByb3BzPy5yZWdpb24gPz8gdGhpcy5zdGFjay5yZWdpb24sXG4gIC8vICAgICAgIGFjY291bnQ6IHByb3BzPy5hY2NvdW50ID8/IHRoaXMuc3RhY2suYWNjb3VudCxcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogICAgICAgICAgICAgICAgICAgICAgICBQUk9QUyBGT1IgTkVXIENPTlNUUlVDVFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBjcmVhdGluZyBhIFBvbGljeUVuZ2luZXJlc291cmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9saWN5RW5naW5lUHJvcHMge1xuICAvKipcbiAgICogVGhlIGN1c3RvbWVyLWFzc2lnbmVkIGltbXV0YWJsZSBuYW1lIGZvciB0aGUgcG9saWN5IGVuZ2luZS4gVGhpcyBuYW1lIGlkZW50aWZpZXMgdGhlIHBvbGljeSBlbmdpbmUuXG4gICAqIE11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci4gVmFsaWQgY2hhcmFjdGVycyBhcmUgYS16LCBBLVosIDAtOSwgYW5kIF8gKHVuZGVyc2NvcmUpLlxuICAgKiBUaGUgbmFtZSBjYW4gaGF2ZSB1cCB0byA0OCBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogQSBodW1hbi1yZWFkYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGUgcG9saWN5IGVuZ2luZSdzIHB1cnBvc2UgYW5kIHNjb3BlICgxLTQsMDk2IGNoYXJhY3RlcnMpLlxuICAgKiBUaGlzIGhlbHBzIGFkbWluaXN0cmF0b3JzIHVuZGVyc3RhbmQgdGhlIHBvbGljeSBlbmdpbmUncyByb2xlIGluIHRoZSBvdmVyYWxsIGdvdmVybmFuY2Ugc3RyYXRlZ3kuXG4gICAqIERvY3VtZW50IHdoaWNoIEdhdGV3YXkgdGhpcyBlbmdpbmUgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGgsIHdoYXQgdHlwZXMgb2YgdG9vbHMgb3Igd29ya2Zsb3dzIGl0XG4gICAqIGdvdmVybnMsIGFuZCB0aGUgdGVhbSBvciBzZXJ2aWNlIHJlc3BvbnNpYmxlIGZvciBtYWludGFpbmluZyBpdC4gQ2xlYXIgZGVzY3JpcHRpb25zIGFyZSBlc3NlbnRpYWxcbiAgICogd2hlbiBtYW5hZ2luZyBtdWx0aXBsZSBwb2xpY3kgZW5naW5lcyBhY3Jvc3MgZGlmZmVyZW50IHNlcnZpY2VzIG9yIGVudmlyb25tZW50cy5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBObyBkZXNjcmlwdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgIEFUVFJTIEZPUiBJTVBPUlRFRCBDT05TVFJVQ1RcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKlxuICogQXR0cmlidXRlcyBmb3Igc3BlY2lmeWluZyBhbiBpbXBvcnRlZCBQb2xpY3kgRW5naW5lIC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb2xpY3lFbmdpbmVBdHRyaWJ1dGVzIHtcbiAgLyoqXG4gICAqIFRoZSBBUk4gb2YgYW4gZXhpc3RpbmcgUG9saWN5IEVuZ2luZS5cbiAgICogQGF0dHJpYnV0ZVxuICAgKi9cbiAgcmVhZG9ubHkgcG9saWN5RW5naW5lQXJuOiBzdHJpbmc7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFzc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqXG4gKiBBIHBvbGljeSBlbmdpbmUgaXMgYSBjb2xsZWN0aW9uIG9mIHBvbGljaWVzIHRoYXQgZXZhbHVhdGVzIGFuZCBhdXRob3JpemVzIGFnZW50IHRvb2wgY2FsbHMuXG4gKiBXaGVuIGFzc29jaWF0ZWQgd2l0aCBhIGdhdGV3YXksIHRoZSBwb2xpY3kgZW5naW5lIGludGVyY2VwdHMgYWxsIGFnZW50IHJlcXVlc3RzIGFuZCBkZXRlcm1pbmVzXG4gKiB3aGV0aGVyIHRvIGFsbG93IG9yIGRlbnkgZWFjaCBhY3Rpb24gYmFzZWQgb24gdGhlIGRlZmluZWQgcG9saWNpZXMuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vYmVkcm9jay1hZ2VudGNvcmUvbGF0ZXN0L2Rldmd1aWRlL3BvbGljeS1jcmVhdGUtZW5naW5lLmh0bWxcbiAqL1xuZXhwb3J0IGNsYXNzIFBvbGljeUVuZ2luZSBleHRlbmRzIFBvbGljeUVuZ2luZUJhc2Uge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gU1RBVElDIE1FVEhPRFNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBzdGF0aWMgZnJvbVBvbGljeUVuZ2luZUFybihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwb2xpY3lFbmdpbmVBcm46IHN0cmluZyk6IElQb2xpY3lFbmdpbmUge1xuICAgIGNvbnN0IHBvbGljeUVuZ2luZUlkID0gQXJuLnNwbGl0KHBvbGljeUVuZ2luZUFybiwgQXJuRm9ybWF0LlNMQVNIX1JFU09VUkNFX05BTUUpLnJlc291cmNlTmFtZSE7XG4gICAgY2xhc3MgSW1wb3J0IGV4dGVuZHMgUG9saWN5RW5naW5lQmFzZSB7XG4gICAgICBwdWJsaWMgcmVhZG9ubHkgcG9saWN5RW5naW5lQXJuID0gcG9saWN5RW5naW5lQXJuO1xuICAgICAgcHVibGljIHJlYWRvbmx5IHBvbGljeUVuZ2luZUlkID0gcG9saWN5RW5naW5lSWQ7XG4gICAgICAvLyBFeHRyYWN0IGJhc2UgbmFtZSB3aXRob3V0IHRoZSBnZW5lcmF0ZWQgc3VmZml4XG4gICAgICBwdWJsaWMgcmVhZG9ubHkgcG9saWN5RW5naW5lTmFtZSA9IHBvbGljeUVuZ2luZUlkLnNwbGl0KCctJylbMF07XG5cbiAgICAgIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHB1YmxpYyByZWFkb25seSBzdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICBwdWJsaWMgcmVhZG9ubHkgdXBkYXRlZEF0ID0gdW5kZWZpbmVkO1xuICAgICAgcHVibGljIHJlYWRvbmx5IGNyZWF0ZWRBdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEltcG9ydChzY29wZSwgaWQpO1xuICB9XG4gIHB1YmxpYyByZWFkb25seSBwb2xpY3lFbmdpbmVBcm46IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IHBvbGljeUVuZ2luZUlkOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBwb2xpY3lFbmdpbmVOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1cz86IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IHVwZGF0ZWRBdD86IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0ZWRBdD86IHN0cmluZztcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEludGVybmFsIE9ubHlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaXZhdGUgcmVhZG9ubHkgX19yZXNvdXJjZTogY3IuQXdzQ3VzdG9tUmVzb3VyY2U7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENPTlNUUlVDVE9SXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUG9saWN5RW5naW5lUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIHRoaXMucG9saWN5RW5naW5lTmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuXG4gICAgdGhpcy5fX3Jlc291cmNlID0gbmV3IGNyLkF3c0N1c3RvbVJlc291cmNlKHRoaXMsICdSZXNvdXJjZScsIHtcbiAgICAgIG9uQ3JlYXRlOiB7XG4gICAgICAgIHNlcnZpY2U6ICdiZWRyb2NrLWFnZW50Y29yZS1jb250cm9sJyxcbiAgICAgICAgYWN0aW9uOiAnQ3JlYXRlUG9saWN5RW5naW5lQ29tbWFuZCcsXG4gICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLnBvbGljeUVuZ2luZU5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgIH0gYXMgQ3JlYXRlUG9saWN5RW5naW5lQ29tbWFuZElucHV0LFxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQ6IGNyLlBoeXNpY2FsUmVzb3VyY2VJZC5mcm9tUmVzcG9uc2UoJ3BvbGljeUVuZ2luZUlkJyksXG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IHtcbiAgICAgICAgc2VydmljZTogJ2JlZHJvY2stYWdlbnRjb3JlLWNvbnRyb2wnLFxuICAgICAgICBhY3Rpb246ICdVcGRhdGVQb2xpY3lFbmdpbmVDb21tYW5kJyxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIHBvbGljeUVuZ2luZUlkOiBuZXcgY3IuUGh5c2ljYWxSZXNvdXJjZUlkUmVmZXJlbmNlKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgfSBhcyBVcGRhdGVQb2xpY3lFbmdpbmVDb21tYW5kSW5wdXQsXG4gICAgICB9LFxuICAgICAgb25EZWxldGU6IHtcbiAgICAgICAgc2VydmljZTogJ2JlZHJvY2stYWdlbnRjb3JlLWNvbnRyb2wnLFxuICAgICAgICBhY3Rpb246ICdEZWxldGVQb2xpY3lFbmdpbmVDb21tYW5kJyxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIHBvbGljeUVuZ2luZUlkOiBuZXcgY3IuUGh5c2ljYWxSZXNvdXJjZUlkUmVmZXJlbmNlKCkudG9TdHJpbmcoKSxcbiAgICAgICAgfSBhcyBEZWxldGVQb2xpY3lFbmdpbmVDb21tYW5kSW5wdXQsXG4gICAgICB9LFxuICAgICAgcG9saWN5OiBjci5Bd3NDdXN0b21SZXNvdXJjZVBvbGljeS5mcm9tU3RhdGVtZW50cyhbXG4gICAgICAgIG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcbiAgICAgICAgICBhY3Rpb25zOiBbJ2JlZHJvY2stYWdlbnRjb3JlOionLCAnaWFtOlBhc3NSb2xlJ10sXG4gICAgICAgICAgcmVzb3VyY2VzOiBbJyonXSxcbiAgICAgICAgfSksXG4gICAgICBdKSxcbiAgICB9KTtcblxuICAgIHRoaXMucG9saWN5RW5naW5lQXJuID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3BvbGljeUVuZ2luZUFybicpO1xuICAgIHRoaXMucG9saWN5RW5naW5lSWQgPSB0aGlzLl9fcmVzb3VyY2UuZ2V0UmVzcG9uc2VGaWVsZCgncG9saWN5RW5naW5lSWQnKTtcbiAgICB0aGlzLnBvbGljeUVuZ2luZU5hbWUgPSB0aGlzLl9fcmVzb3VyY2UuZ2V0UmVzcG9uc2VGaWVsZCgnbmFtZScpO1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3N0YXR1cycpO1xuICAgIHRoaXMudXBkYXRlZEF0ID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ3VwZGF0ZWRBdCcpO1xuICAgIHRoaXMuY3JlYXRlZEF0ID0gdGhpcy5fX3Jlc291cmNlLmdldFJlc3BvbnNlRmllbGQoJ2NyZWF0ZWRBdCcpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgfVxufVxuIl19