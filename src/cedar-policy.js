"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CedarPolicy = exports.CedarResource = exports.CedarAction = exports.CedarPrincipal = exports.CedarConditionType = exports.ResourceEntityType = exports.ActionEntityType = exports.PrincipalEntityType = exports.CedarEffect = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
var CedarEffect;
(function (CedarEffect) {
    /**
     * Allows access
     */
    CedarEffect["PERMIT"] = "permit";
    /**
     * Denies access
     */
    CedarEffect["FORBID"] = "forbid";
})(CedarEffect || (exports.CedarEffect = CedarEffect = {}));
var PrincipalEntityType;
(function (PrincipalEntityType) {
    PrincipalEntityType["AGENTCORE_OAUTH_USER"] = "AgentCore::OAuthUser";
})(PrincipalEntityType || (exports.PrincipalEntityType = PrincipalEntityType = {}));
var ActionEntityType;
(function (ActionEntityType) {
    ActionEntityType["AGENTCORE_ACTION"] = "AgentCore::Action";
})(ActionEntityType || (exports.ActionEntityType = ActionEntityType = {}));
var ResourceEntityType;
(function (ResourceEntityType) {
    ResourceEntityType["AGENTCORE_GATEWAY"] = "AgentCore::Gateway";
})(ResourceEntityType || (exports.ResourceEntityType = ResourceEntityType = {}));
var CedarConditionType;
(function (CedarConditionType) {
    CedarConditionType["WHEN"] = "when";
    CedarConditionType["UNLESS"] = "unless";
})(CedarConditionType || (exports.CedarConditionType = CedarConditionType = {}));
/**
 * Factory class for creating Cedar principal expressions
 */
class CedarPrincipal {
    /**
     * Creates a principal expression for a specific OAuth user
     * @param userId The unique identifier of the OAuth user
     */
    static specificOAuthUser(userId) {
        return {
            expression: `principal == AgentCore::OAuthUser::"${userId}"`,
        };
    }
    /**
     * Creates a principal expression matching any OAuth user
     */
    static anyOAuthUser() {
        return this.anyOfType(PrincipalEntityType.AGENTCORE_OAUTH_USER);
    }
    /**
     * Creates a principal expression for any principal of the specified type
     * @param principalType Optional principal entity type to match
     */
    static anyOfType(principalType) {
        const expression = principalType ? `principal is ${principalType}` : 'principal';
        return {
            expression,
        };
    }
}
exports.CedarPrincipal = CedarPrincipal;
_a = JSII_RTTI_SYMBOL_1;
CedarPrincipal[_a] = { fqn: "agentcore-experimental-constructs.CedarPrincipal", version: "0.1.3" };
/**
 * Factory class for creating Cedar action expressions
 */
class CedarAction {
    /**
     * Creates an action expression for a specific tool
     * @param toolName The name of the specific tool/action
     */
    static specificTool(target, toolName) {
        return {
            expression: `action == AgentCore::Action::"${target.name}___${toolName}"`,
        };
    }
    /**
     * Creates an action expression matching any of the specified tools
     * @param toolNames Array of tool names to match
     */
    static anyOfTools(toolNames) {
        return {
            expression: `action in [${toolNames.map((toolName) => `AgentCore::Action::"${toolName}"`).join(', ')}]`,
        };
    }
    /**
     * Creates an action expression for any action of the specified type
     * @param actionType Optional action entity type to match
     */
    static anyOfType(actionType) {
        const expression = actionType ? `action is ${actionType}` : 'action';
        return {
            expression,
        };
    }
    constructor() { }
}
exports.CedarAction = CedarAction;
_b = JSII_RTTI_SYMBOL_1;
CedarAction[_b] = { fqn: "agentcore-experimental-constructs.CedarAction", version: "0.1.3" };
/**
 * Factory class for creating Cedar resource expressions
 */
class CedarResource {
    /**
     * Creates a resource expression for a specific gateway
     * @param gateway The gateway instance to reference
     */
    static gateway(gateway) {
        return this.specificOfType(ResourceEntityType.AGENTCORE_GATEWAY, gateway.gatewayArn);
    }
    /**
     * Creates a resource expression for a specific resource
     * @param resourceType The type of resource
     * @param resourceName The unique identifier of the resource
     */
    static specificOfType(resourceType, resourceName) {
        return {
            expression: `resource == ${resourceType}::"${resourceName}"`,
        };
    }
    /**
     * Creates a resource expression for any resource of the specified type
     * @param resourceType Optional resource entity type to match
     */
    static anyOfType(resourceType) {
        const expression = resourceType ? `resource is ${resourceType}` : 'resource';
        return {
            expression,
        };
    }
    constructor() { }
}
exports.CedarResource = CedarResource;
_c = JSII_RTTI_SYMBOL_1;
CedarResource[_c] = { fqn: "agentcore-experimental-constructs.CedarResource", version: "0.1.3" };
/**
 * Represents a complete Cedar policy that can be rendered for AWS
 */
class CedarPolicy {
    /**
     * Creates a Cedar policy from a raw Cedar statement string
     * @param statement The raw Cedar policy statement
     */
    static fromStatement(statement) {
        return new CedarPolicy(statement);
    }
    /**
     * Creates a Cedar policy from a structured policy statement
     * @param policyStatement The structured policy components
     */
    static fromPolicyStatement(policyStatement) {
        let statement = `${policyStatement.effect}(`;
        if (policyStatement.principal) {
            statement += `\n  ${policyStatement.principal.expression ?? CedarPrincipal.anyOAuthUser()},`;
        }
        statement += `\n  ${policyStatement.action.expression},`;
        statement += `\n  ${policyStatement.resource.expression}`;
        statement += '\n)';
        if (policyStatement.when) {
            statement += `\n when {\n  ${policyStatement.when.join('\n  ')}\n}`;
        }
        if (policyStatement.unless) {
            statement += `\n unless {\n  ${policyStatement.unless.join('\n  ')}\n}`;
        }
        statement += ';';
        return new CedarPolicy(statement);
    }
    constructor(statement) {
        this.statement = statement;
    }
    /** @internal */
    __render() {
        return {
            cedar: {
                statement: this.statement,
            },
        };
    }
}
exports.CedarPolicy = CedarPolicy;
_d = JSII_RTTI_SYMBOL_1;
CedarPolicy[_d] = { fqn: "agentcore-experimental-constructs.CedarPolicy", version: "0.1.3" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VkYXItcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2VkYXItcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBWUEsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ3JCOztPQUVHO0lBQ0gsZ0NBQWlCLENBQUE7SUFDakI7O09BRUc7SUFDSCxnQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBVFcsV0FBVywyQkFBWCxXQUFXLFFBU3RCO0FBRUQsSUFBWSxtQkFFWDtBQUZELFdBQVksbUJBQW1CO0lBQzdCLG9FQUE2QyxDQUFBO0FBQy9DLENBQUMsRUFGVyxtQkFBbUIsbUNBQW5CLG1CQUFtQixRQUU5QjtBQUVELElBQVksZ0JBRVg7QUFGRCxXQUFZLGdCQUFnQjtJQUMxQiwwREFBc0MsQ0FBQTtBQUN4QyxDQUFDLEVBRlcsZ0JBQWdCLGdDQUFoQixnQkFBZ0IsUUFFM0I7QUFFRCxJQUFZLGtCQUVYO0FBRkQsV0FBWSxrQkFBa0I7SUFDNUIsOERBQXdDLENBQUE7QUFDMUMsQ0FBQyxFQUZXLGtCQUFrQixrQ0FBbEIsa0JBQWtCLFFBRTdCO0FBRUQsSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLG1DQUFhLENBQUE7SUFDYix1Q0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsa0JBQWtCLGtDQUFsQixrQkFBa0IsUUFHN0I7QUEwQkQ7O0dBRUc7QUFDSCxNQUFhLGNBQWM7SUFDekI7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQWM7UUFDckMsT0FBTztZQUNMLFVBQVUsRUFBRSx1Q0FBdUMsTUFBTSxHQUFHO1NBQzdELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsWUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFNBQVMs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Q0QsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsU0FBUyxJQUFJLGtCQUFrQixlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFFLENBQUM7UUFFRCxTQUFTLElBQUksR0FBRyxDQUFDO1FBRWpCLE9BQU8sSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUlELFlBQXNCLFNBQWlCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsUUFBUTtRQUNOLE9BQU87WUFDTCxLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0FBbERILGtDQW1EQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbmltcG9ydCB7IElHYXRld2F5LCBJR2F0ZXdheVRhcmdldCB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1iZWRyb2NrLWFnZW50Y29yZS1hbHBoYSc7XG5pbXBvcnQgeyBQb2xpY3lEZWZpbml0aW9uIH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LWJlZHJvY2stYWdlbnRjb3JlLWNvbnRyb2wnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb2xpY3lEZWZpbml0aW9uIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIFBvbGljeVxuICAgKi9cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfX3JlbmRlcigpOiBQb2xpY3lEZWZpbml0aW9uO1xufVxuXG5leHBvcnQgZW51bSBDZWRhckVmZmVjdCB7XG4gIC8qKlxuICAgKiBBbGxvd3MgYWNjZXNzXG4gICAqL1xuICBQRVJNSVQgPSAncGVybWl0JyxcbiAgLyoqXG4gICAqIERlbmllcyBhY2Nlc3NcbiAgICovXG4gIEZPUkJJRCA9ICdmb3JiaWQnLFxufVxuXG5leHBvcnQgZW51bSBQcmluY2lwYWxFbnRpdHlUeXBlIHtcbiAgQUdFTlRDT1JFX09BVVRIX1VTRVIgPSAnQWdlbnRDb3JlOjpPQXV0aFVzZXInLFxufVxuXG5leHBvcnQgZW51bSBBY3Rpb25FbnRpdHlUeXBlIHtcbiAgQUdFTlRDT1JFX0FDVElPTiA9ICdBZ2VudENvcmU6OkFjdGlvbicsXG59XG5cbmV4cG9ydCBlbnVtIFJlc291cmNlRW50aXR5VHlwZSB7XG4gIEFHRU5UQ09SRV9HQVRFV0FZID0gJ0FnZW50Q29yZTo6R2F0ZXdheScsXG59XG5cbmV4cG9ydCBlbnVtIENlZGFyQ29uZGl0aW9uVHlwZSB7XG4gIFdIRU4gPSAnd2hlbicsXG4gIFVOTEVTUyA9ICd1bmxlc3MnLFxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBDZWRhciBwb2xpY3kgcHJpbmNpcGFsIGV4cHJlc3Npb25cbiAqIFVzZWQgdG8gc3BlY2lmeSB3aG8gaXMgbWFraW5nIHRoZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VkYXJQcmluY2lwYWxFeHByZXNzaW9uIHtcbiAgcmVhZG9ubHkgZXhwcmVzc2lvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBDZWRhciBwb2xpY3kgYWN0aW9uIGV4cHJlc3Npb25cbiAqIFVzZWQgdG8gc3BlY2lmeSB3aGF0IGFjdGlvbiBpcyBiZWluZyBwZXJmb3JtZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZWRhckFjdGlvbkV4cHJlc3Npb24ge1xuICByZWFkb25seSBleHByZXNzaW9uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIENlZGFyIHBvbGljeSByZXNvdXJjZSBleHByZXNzaW9uXG4gKiBVc2VkIHRvIHNwZWNpZnkgd2hpY2ggcmVzb3VyY2UgaXMgYmVpbmcgYWNjZXNzZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZWRhclJlc291cmNlRXhwcmVzc2lvbiB7XG4gIHJlYWRvbmx5IGV4cHJlc3Npb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGNsYXNzIGZvciBjcmVhdGluZyBDZWRhciBwcmluY2lwYWwgZXhwcmVzc2lvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIENlZGFyUHJpbmNpcGFsIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcmluY2lwYWwgZXhwcmVzc2lvbiBmb3IgYSBzcGVjaWZpYyBPQXV0aCB1c2VyXG4gICAqIEBwYXJhbSB1c2VySWQgVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBPQXV0aCB1c2VyXG4gICAqL1xuICBzdGF0aWMgc3BlY2lmaWNPQXV0aFVzZXIodXNlcklkOiBzdHJpbmcpOiBDZWRhclByaW5jaXBhbEV4cHJlc3Npb24ge1xuICAgIHJldHVybiB7XG4gICAgICBleHByZXNzaW9uOiBgcHJpbmNpcGFsID09IEFnZW50Q29yZTo6T0F1dGhVc2VyOjpcIiR7dXNlcklkfVwiYCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwcmluY2lwYWwgZXhwcmVzc2lvbiBtYXRjaGluZyBhbnkgT0F1dGggdXNlclxuICAgKi9cbiAgc3RhdGljIGFueU9BdXRoVXNlcigpOiBDZWRhclByaW5jaXBhbEV4cHJlc3Npb24ge1xuICAgIHJldHVybiB0aGlzLmFueU9mVHlwZShQcmluY2lwYWxFbnRpdHlUeXBlLkFHRU5UQ09SRV9PQVVUSF9VU0VSKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcHJpbmNpcGFsIGV4cHJlc3Npb24gZm9yIGFueSBwcmluY2lwYWwgb2YgdGhlIHNwZWNpZmllZCB0eXBlXG4gICAqIEBwYXJhbSBwcmluY2lwYWxUeXBlIE9wdGlvbmFsIHByaW5jaXBhbCBlbnRpdHkgdHlwZSB0byBtYXRjaFxuICAgKi9cbiAgc3RhdGljIGFueU9mVHlwZShwcmluY2lwYWxUeXBlPzogUHJpbmNpcGFsRW50aXR5VHlwZSk6IENlZGFyUHJpbmNpcGFsRXhwcmVzc2lvbiB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHByaW5jaXBhbFR5cGUgPyBgcHJpbmNpcGFsIGlzICR7cHJpbmNpcGFsVHlwZX1gIDogJ3ByaW5jaXBhbCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cHJlc3Npb24sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEZhY3RvcnkgY2xhc3MgZm9yIGNyZWF0aW5nIENlZGFyIGFjdGlvbiBleHByZXNzaW9uc1xuICovXG5leHBvcnQgY2xhc3MgQ2VkYXJBY3Rpb24ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhY3Rpb24gZXhwcmVzc2lvbiBmb3IgYSBzcGVjaWZpYyB0b29sXG4gICAqIEBwYXJhbSB0b29sTmFtZSBUaGUgbmFtZSBvZiB0aGUgc3BlY2lmaWMgdG9vbC9hY3Rpb25cbiAgICovXG4gIHN0YXRpYyBzcGVjaWZpY1Rvb2wodGFyZ2V0OiBJR2F0ZXdheVRhcmdldCwgdG9vbE5hbWU6IHN0cmluZyk6IENlZGFyQWN0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV4cHJlc3Npb246IGBhY3Rpb24gPT0gQWdlbnRDb3JlOjpBY3Rpb246OlwiJHt0YXJnZXQubmFtZX1fX18ke3Rvb2xOYW1lfVwiYCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYWN0aW9uIGV4cHJlc3Npb24gbWF0Y2hpbmcgYW55IG9mIHRoZSBzcGVjaWZpZWQgdG9vbHNcbiAgICogQHBhcmFtIHRvb2xOYW1lcyBBcnJheSBvZiB0b29sIG5hbWVzIHRvIG1hdGNoXG4gICAqL1xuICBzdGF0aWMgYW55T2ZUb29scyh0b29sTmFtZXM6IHN0cmluZ1tdKTogQ2VkYXJBY3Rpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwcmVzc2lvbjogYGFjdGlvbiBpbiBbJHt0b29sTmFtZXMubWFwKCh0b29sTmFtZSkgPT4gYEFnZW50Q29yZTo6QWN0aW9uOjpcIiR7dG9vbE5hbWV9XCJgKS5qb2luKCcsICcpfV1gLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhY3Rpb24gZXhwcmVzc2lvbiBmb3IgYW55IGFjdGlvbiBvZiB0aGUgc3BlY2lmaWVkIHR5cGVcbiAgICogQHBhcmFtIGFjdGlvblR5cGUgT3B0aW9uYWwgYWN0aW9uIGVudGl0eSB0eXBlIHRvIG1hdGNoXG4gICAqL1xuICBzdGF0aWMgYW55T2ZUeXBlKGFjdGlvblR5cGU/OiBBY3Rpb25FbnRpdHlUeXBlKTogQ2VkYXJBY3Rpb25FeHByZXNzaW9uIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gYWN0aW9uVHlwZSA/IGBhY3Rpb24gaXMgJHthY3Rpb25UeXBlfWAgOiAnYWN0aW9uJztcbiAgICByZXR1cm4ge1xuICAgICAgZXhwcmVzc2lvbixcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogRmFjdG9yeSBjbGFzcyBmb3IgY3JlYXRpbmcgQ2VkYXIgcmVzb3VyY2UgZXhwcmVzc2lvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIENlZGFyUmVzb3VyY2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHJlc291cmNlIGV4cHJlc3Npb24gZm9yIGEgc3BlY2lmaWMgZ2F0ZXdheVxuICAgKiBAcGFyYW0gZ2F0ZXdheSBUaGUgZ2F0ZXdheSBpbnN0YW5jZSB0byByZWZlcmVuY2VcbiAgICovXG4gIHN0YXRpYyBnYXRld2F5KGdhdGV3YXk6IElHYXRld2F5KTogQ2VkYXJSZXNvdXJjZUV4cHJlc3Npb24ge1xuICAgIHJldHVybiB0aGlzLnNwZWNpZmljT2ZUeXBlKFJlc291cmNlRW50aXR5VHlwZS5BR0VOVENPUkVfR0FURVdBWSwgZ2F0ZXdheS5nYXRld2F5QXJuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVzb3VyY2UgZXhwcmVzc2lvbiBmb3IgYSBzcGVjaWZpYyByZXNvdXJjZVxuICAgKiBAcGFyYW0gcmVzb3VyY2VUeXBlIFRoZSB0eXBlIG9mIHJlc291cmNlXG4gICAqIEBwYXJhbSByZXNvdXJjZU5hbWUgVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgc3RhdGljIHNwZWNpZmljT2ZUeXBlKHJlc291cmNlVHlwZTogUmVzb3VyY2VFbnRpdHlUeXBlLCByZXNvdXJjZU5hbWU6IHN0cmluZyk6IENlZGFyUmVzb3VyY2VFeHByZXNzaW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwcmVzc2lvbjogYHJlc291cmNlID09ICR7cmVzb3VyY2VUeXBlfTo6XCIke3Jlc291cmNlTmFtZX1cImAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcmVzb3VyY2UgZXhwcmVzc2lvbiBmb3IgYW55IHJlc291cmNlIG9mIHRoZSBzcGVjaWZpZWQgdHlwZVxuICAgKiBAcGFyYW0gcmVzb3VyY2VUeXBlIE9wdGlvbmFsIHJlc291cmNlIGVudGl0eSB0eXBlIHRvIG1hdGNoXG4gICAqL1xuICBzdGF0aWMgYW55T2ZUeXBlKHJlc291cmNlVHlwZT86IFJlc291cmNlRW50aXR5VHlwZSk6IENlZGFyUmVzb3VyY2VFeHByZXNzaW9uIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gcmVzb3VyY2VUeXBlID8gYHJlc291cmNlIGlzICR7cmVzb3VyY2VUeXBlfWAgOiAncmVzb3VyY2UnO1xuICAgIHJldHVybiB7XG4gICAgICBleHByZXNzaW9uLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBzdHJ1Y3R1cmUgb2YgYSBDZWRhciBwb2xpY3kgc3RhdGVtZW50XG4gKiBDb250YWlucyBhbGwgY29tcG9uZW50cyBuZWVkZWQgdG8gY3JlYXRlIGEgY29tcGxldGUgQ2VkYXIgcG9saWN5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VkYXJQb2xpY3lTdGF0ZW1lbnQge1xuICAvKipcbiAgICogVGhlIGVmZmVjdCBvZiB0aGUgcG9saWN5IChwZXJtaXQgb3IgZm9yYmlkKVxuICAgKi9cbiAgcmVhZG9ubHkgZWZmZWN0OiBDZWRhckVmZmVjdDtcbiAgLyoqXG4gICAqIFdITyBpcyBtYWtpbmcgdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQGRlZmF1bHQgQ2VkYXJQcmluY2lwYWwuYW55T0F1dGhVc2VyKClcbiAgICovXG4gIHJlYWRvbmx5IHByaW5jaXBhbD86IENlZGFyUHJpbmNpcGFsRXhwcmVzc2lvbjtcbiAgLyoqXG4gICAqIFdIQVQgYWN0aW9uIHRoZXkgd2FudCB0byBwZXJmb3JtIChyZXF1aXJlZClcbiAgICovXG4gIHJlYWRvbmx5IGFjdGlvbjogQ2VkYXJBY3Rpb25FeHByZXNzaW9uO1xuICAvKipcbiAgICogV0hJQ0ggcmVzb3VyY2UgdGhleSB3YW50IHRvIGFjY2VzcyAocmVxdWlyZWQpXG4gICAqL1xuICByZWFkb25seSByZXNvdXJjZTogQ2VkYXJSZXNvdXJjZUV4cHJlc3Npb247XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIGNvbmRpdGlvbnMgdGhhdCBtdXN0IGJlIHRydWUgZm9yIHRoZSBwb2xpY3kgdG8gYXBwbHlcbiAgICovXG4gIHJlYWRvbmx5IHdoZW4/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIENvbmRpdGlvbnMgdGhhdCBtdXN0IGJlIGZhbHNlIGZvciB0aGUgcG9saWN5IHRvIGFwcGx5XG4gICAqL1xuICByZWFkb25seSB1bmxlc3M/OiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgY29tcGxldGUgQ2VkYXIgcG9saWN5IHRoYXQgY2FuIGJlIHJlbmRlcmVkIGZvciBBV1NcbiAqL1xuZXhwb3J0IGNsYXNzIENlZGFyUG9saWN5IGltcGxlbWVudHMgSVBvbGljeURlZmluaXRpb24ge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIENlZGFyIHBvbGljeSBmcm9tIGEgcmF3IENlZGFyIHN0YXRlbWVudCBzdHJpbmdcbiAgICogQHBhcmFtIHN0YXRlbWVudCBUaGUgcmF3IENlZGFyIHBvbGljeSBzdGF0ZW1lbnRcbiAgICovXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudDogc3RyaW5nKTogQ2VkYXJQb2xpY3kge1xuICAgIHJldHVybiBuZXcgQ2VkYXJQb2xpY3koc3RhdGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgQ2VkYXIgcG9saWN5IGZyb20gYSBzdHJ1Y3R1cmVkIHBvbGljeSBzdGF0ZW1lbnRcbiAgICogQHBhcmFtIHBvbGljeVN0YXRlbWVudCBUaGUgc3RydWN0dXJlZCBwb2xpY3kgY29tcG9uZW50c1xuICAgKi9cbiAgc3RhdGljIGZyb21Qb2xpY3lTdGF0ZW1lbnQocG9saWN5U3RhdGVtZW50OiBDZWRhclBvbGljeVN0YXRlbWVudCk6IENlZGFyUG9saWN5IHtcbiAgICBsZXQgc3RhdGVtZW50ID0gYCR7cG9saWN5U3RhdGVtZW50LmVmZmVjdH0oYDtcblxuICAgIGlmIChwb2xpY3lTdGF0ZW1lbnQucHJpbmNpcGFsKSB7XG4gICAgICBzdGF0ZW1lbnQgKz0gYFxcbiAgJHtwb2xpY3lTdGF0ZW1lbnQucHJpbmNpcGFsLmV4cHJlc3Npb24gPz8gQ2VkYXJQcmluY2lwYWwuYW55T0F1dGhVc2VyKCl9LGA7XG4gICAgfVxuXG4gICAgc3RhdGVtZW50ICs9IGBcXG4gICR7cG9saWN5U3RhdGVtZW50LmFjdGlvbi5leHByZXNzaW9ufSxgO1xuICAgIHN0YXRlbWVudCArPSBgXFxuICAke3BvbGljeVN0YXRlbWVudC5yZXNvdXJjZS5leHByZXNzaW9ufWA7XG5cbiAgICBzdGF0ZW1lbnQgKz0gJ1xcbiknO1xuXG4gICAgaWYgKHBvbGljeVN0YXRlbWVudC53aGVuKSB7XG4gICAgICBzdGF0ZW1lbnQgKz0gYFxcbiB3aGVuIHtcXG4gICR7cG9saWN5U3RhdGVtZW50LndoZW4uam9pbignXFxuICAnKX1cXG59YDtcbiAgICB9XG4gICAgaWYgKHBvbGljeVN0YXRlbWVudC51bmxlc3MpIHtcbiAgICAgIHN0YXRlbWVudCArPSBgXFxuIHVubGVzcyB7XFxuICAke3BvbGljeVN0YXRlbWVudC51bmxlc3Muam9pbignXFxuICAnKX1cXG59YDtcbiAgICB9XG5cbiAgICBzdGF0ZW1lbnQgKz0gJzsnO1xuXG4gICAgcmV0dXJuIG5ldyBDZWRhclBvbGljeShzdGF0ZW1lbnQpO1xuICB9XG5cbiAgcmVhZG9ubHkgc3RhdGVtZW50OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHN0YXRlbWVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9fcmVuZGVyKCk6IFBvbGljeURlZmluaXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBjZWRhcjoge1xuICAgICAgICBzdGF0ZW1lbnQ6IHRoaXMuc3RhdGVtZW50LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXX0=