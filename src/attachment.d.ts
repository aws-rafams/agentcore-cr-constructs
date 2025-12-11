import { IPolicyEngine } from './policy-engine';
export declare enum GatewayPolicyEngineAttachmentMode {
    /**
     *  In LOG_ONLY mode, the policy engine evaluates and logs whether the action would be allowed or denied without enforcing the decision
     */
    LOG_ONLY = "LOG_ONLY",
    /**
     * In ENFORCE mode, the policy engine evaluates the action and enforces decisions by allowing or denying agent operations
     */
    ENFORCE = "ENFORCE"
}
export interface GatewayPolicyEngineAttachmentProps {
    /**
     * The mode in which the policy engine is attached to the gateway.
     */
    readonly attachmentMode: GatewayPolicyEngineAttachmentMode;
    /**
     * The policy engine to attach to the gateway.
     */
    readonly policyEngine: IPolicyEngine;
}
