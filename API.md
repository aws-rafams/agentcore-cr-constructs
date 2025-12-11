# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Policy <a name="Policy" id="agentcore-experimental-constructs.policy.Policy"></a>

A Cedar policy is a declarative statement that permits or forbids access to gateway tools.

Each policy specifies who (principal) can perform what action (tool invocation) on which
resource (gateway) under what conditions. Policies are evaluated for every tool invocation request.

> [https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-policies.html](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-policies.html)

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.Policy.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.Policy(scope: Construct, id: string, props: PolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.Initializer.parameter.props">props</a></code> | <code>agentcore-experimental-constructs.policy.PolicyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.policy.Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.policy.Policy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.policy.Policy.Initializer.parameter.props"></a>

- *Type:* agentcore-experimental-constructs.policy.PolicyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.grant">grant</a></code> | Grants Policy IAM actions to the IAM Principal. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.policy.Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.policy.Policy.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.policy.Policy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.Policy.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.Policy.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.Policy.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.policy.Policy.isConstruct"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.Policy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.policy.Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.policy.Policy.isOwnedResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.Policy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.Policy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.policy.Policy.isResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.Policy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.Policy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.policyEngine">policyEngine</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyEngine</code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.policyDefinition">policyDefinition</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyDefinition</code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.policy.Policy.property.validationMode">validationMode</a></code> | <code>agentcore-experimental-constructs.policy.ValidationMode</code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.Policy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.Policy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.policy.Policy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.policy.Policy.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyEngine

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.policy.Policy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="agentcore-experimental-constructs.policy.Policy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.Policy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.policy.Policy.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyDefinition

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.Policy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.Policy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.policy.Policy.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* agentcore-experimental-constructs.policy.ValidationMode

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---


### PolicyBase <a name="PolicyBase" id="agentcore-experimental-constructs.policy.PolicyBase"></a>

- *Implements:* agentcore-experimental-constructs.policy.IPolicy

Abstract base class for a Policy.

Contains methods and attributes valid for Memories either created with CDK or imported.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.PolicyBase.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.PolicyBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="agentcore-experimental-constructs.policy.PolicyBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.grant">grant</a></code> | Grants Policy IAM actions to the IAM Principal. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.policy.PolicyBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.policy.PolicyBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.policy.PolicyBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.PolicyBase.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.PolicyBase.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.PolicyBase.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.policy.PolicyBase.isConstruct"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.policy.PolicyBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.policy.PolicyBase.isOwnedResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.policy.PolicyBase.isResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.policyEngine">policyEngine</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyEngine</code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.policyDefinition">policyDefinition</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyDefinition</code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBase.property.validationMode">validationMode</a></code> | <code>agentcore-experimental-constructs.policy.ValidationMode</code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.PolicyBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.PolicyBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.PolicyBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.policy.PolicyBase.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.policy.PolicyBase.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyEngine

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.policy.PolicyBase.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="agentcore-experimental-constructs.policy.PolicyBase.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.PolicyBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.policy.PolicyBase.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyDefinition

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.PolicyBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.PolicyBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.policy.PolicyBase.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* agentcore-experimental-constructs.policy.ValidationMode

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---


### PolicyEngine <a name="PolicyEngine" id="agentcore-experimental-constructs.policy.PolicyEngine"></a>

A policy engine is a collection of policies that evaluates and authorizes agent tool calls.

When associated with a gateway, the policy engine intercepts all agent requests and determines
whether to allow or deny each action based on the defined policies.

> [https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-engine.html](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-engine.html)

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.PolicyEngine.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.PolicyEngine(scope: Construct, id: string, props: PolicyEngineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.props">props</a></code> | <code>agentcore-experimental-constructs.policy.PolicyEngineProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.policy.PolicyEngine.Initializer.parameter.props"></a>

- *Type:* agentcore-experimental-constructs.policy.PolicyEngineProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.grant">grant</a></code> | Grants Policy Engine IAM actions to the IAM Principal. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.policy.PolicyEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.policy.PolicyEngine.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.policy.PolicyEngine.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.policy.PolicyEngine.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.policy.PolicyEngine.addPolicy.parameter.props"></a>

- *Type:* agentcore-experimental-constructs.policy.PolicyBaseProps

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.PolicyEngine.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy Engine IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.PolicyEngine.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.PolicyEngine.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.policy.PolicyEngine.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.PolicyEngine.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.fromPolicyEngineArn">fromPolicyEngineArn</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.policy.PolicyEngine.isConstruct"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngine.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.policy.PolicyEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.policy.PolicyEngine.isOwnedResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngine.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyEngine.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.policy.PolicyEngine.isResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngine.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyEngine.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyEngineArn` <a name="fromPolicyEngineArn" id="agentcore-experimental-constructs.policy.PolicyEngine.fromPolicyEngineArn"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngine.fromPolicyEngineArn(scope: Construct, id: string, policyEngineArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.policy.PolicyEngine.fromPolicyEngineArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.policy.PolicyEngine.fromPolicyEngineArn.parameter.id"></a>

- *Type:* string

---

###### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.policy.PolicyEngine.fromPolicyEngineArn.parameter.policyEngineArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngine.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.PolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.PolicyEngine.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.PolicyEngine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.policy.PolicyEngine.property.policyEngineName"></a>

```typescript
public readonly policyEngineName: string;
```

- *Type:* string

The customer-assigned name of the policy engine.

This matches the name provided in the creation process.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.PolicyEngine.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyEngine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy engine's purpose and scope (1-4,096 characters).

This helps administrators understand the policy engine's role in the overall governance strategy.
Document which Gateway this engine will be associated with, what types of tools or workflows it
governs, and the team or service responsible for maintaining it. Clear descriptions are essential
when managing multiple policy engines across different services or environments.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.PolicyEngine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.PolicyEngine.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---


### PolicyEngineBase <a name="PolicyEngineBase" id="agentcore-experimental-constructs.policy.PolicyEngineBase"></a>

- *Implements:* agentcore-experimental-constructs.policy.IPolicyEngine

Abstract base class for a PolicyEngine.

Contains methods and attributes valid for Memories either created with CDK or imported.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.PolicyEngineBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="agentcore-experimental-constructs.policy.PolicyEngineBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.grant">grant</a></code> | Grants Policy Engine IAM actions to the IAM Principal. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.policy.PolicyEngineBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.policy.PolicyEngineBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.policy.PolicyEngineBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.policy.PolicyEngineBase.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.policy.PolicyEngineBase.addPolicy.parameter.props"></a>

- *Type:* agentcore-experimental-constructs.policy.PolicyBaseProps

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.PolicyEngineBase.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy Engine IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.PolicyEngineBase.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.PolicyEngineBase.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.policy.PolicyEngineBase.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.PolicyEngineBase.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isConstruct"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngineBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isOwnedResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngineBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isResource"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.PolicyEngineBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.policy.PolicyEngineBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.policyEngineName"></a>

```typescript
public readonly policyEngineName: string;
```

- *Type:* string

The customer-assigned name of the policy engine.

This matches the name provided in the creation process.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy engine's purpose and scope (1-4,096 characters).

This helps administrators understand the policy engine's role in the overall governance strategy.
Document which Gateway this engine will be associated with, what types of tools or workflows it
governs, and the team or service responsible for maintaining it. Clear descriptions are essential
when managing multiple policy engines across different services or environments.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.PolicyEngineBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---


## Structs <a name="Structs" id="Structs"></a>

### CedarActionExpression <a name="CedarActionExpression" id="agentcore-experimental-constructs.policy.CedarActionExpression"></a>

Represents a Cedar policy action expression Used to specify what action is being performed.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.CedarActionExpression.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const cedarActionExpression: policy.CedarActionExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarActionExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.policy.CedarActionExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### CedarPolicyStatement <a name="CedarPolicyStatement" id="agentcore-experimental-constructs.policy.CedarPolicyStatement"></a>

Defines the structure of a Cedar policy statement Contains all components needed to create a complete Cedar policy.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const cedarPolicyStatement: policy.CedarPolicyStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.action">action</a></code> | <code>agentcore-experimental-constructs.policy.CedarActionExpression</code> | WHAT action they want to perform (required). |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.effect">effect</a></code> | <code>agentcore-experimental-constructs.policy.CedarEffect</code> | The effect of the policy (permit or forbid). |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.resource">resource</a></code> | <code>agentcore-experimental-constructs.policy.CedarResourceExpression</code> | WHICH resource they want to access (required). |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.principal">principal</a></code> | <code>agentcore-experimental-constructs.policy.CedarPrincipalExpression</code> | WHO is making the request. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.unless">unless</a></code> | <code>string[]</code> | Conditions that must be false for the policy to apply. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicyStatement.property.when">when</a></code> | <code>string[]</code> | Additional conditions that must be true for the policy to apply. |

---

##### `action`<sup>Required</sup> <a name="action" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.action"></a>

```typescript
public readonly action: CedarActionExpression;
```

- *Type:* agentcore-experimental-constructs.policy.CedarActionExpression

WHAT action they want to perform (required).

---

##### `effect`<sup>Required</sup> <a name="effect" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.effect"></a>

```typescript
public readonly effect: CedarEffect;
```

- *Type:* agentcore-experimental-constructs.policy.CedarEffect

The effect of the policy (permit or forbid).

---

##### `resource`<sup>Required</sup> <a name="resource" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.resource"></a>

```typescript
public readonly resource: CedarResourceExpression;
```

- *Type:* agentcore-experimental-constructs.policy.CedarResourceExpression

WHICH resource they want to access (required).

---

##### `principal`<sup>Optional</sup> <a name="principal" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.principal"></a>

```typescript
public readonly principal: CedarPrincipalExpression;
```

- *Type:* agentcore-experimental-constructs.policy.CedarPrincipalExpression
- *Default:* CedarPrincipal.anyOAuthUser()

WHO is making the request.

---

##### `unless`<sup>Optional</sup> <a name="unless" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.unless"></a>

```typescript
public readonly unless: string[];
```

- *Type:* string[]

Conditions that must be false for the policy to apply.

---

##### `when`<sup>Optional</sup> <a name="when" id="agentcore-experimental-constructs.policy.CedarPolicyStatement.property.when"></a>

```typescript
public readonly when: string[];
```

- *Type:* string[]

Additional conditions that must be true for the policy to apply.

---

### CedarPrincipalExpression <a name="CedarPrincipalExpression" id="agentcore-experimental-constructs.policy.CedarPrincipalExpression"></a>

Represents a Cedar policy principal expression Used to specify who is making the request.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.CedarPrincipalExpression.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const cedarPrincipalExpression: policy.CedarPrincipalExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPrincipalExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.policy.CedarPrincipalExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### CedarResourceExpression <a name="CedarResourceExpression" id="agentcore-experimental-constructs.policy.CedarResourceExpression"></a>

Represents a Cedar policy resource expression Used to specify which resource is being accessed.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.CedarResourceExpression.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const cedarResourceExpression: policy.CedarResourceExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarResourceExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.policy.CedarResourceExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### PolicyBaseProps <a name="PolicyBaseProps" id="agentcore-experimental-constructs.policy.PolicyBaseProps"></a>

Properties for creating a Policyresource.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.PolicyBaseProps.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const policyBaseProps: policy.PolicyBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBaseProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBaseProps.property.policyDefinition">policyDefinition</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyDefinition</code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBaseProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyBaseProps.property.validationMode">validationMode</a></code> | <code>agentcore-experimental-constructs.policy.ValidationMode</code> | The validation mode for the policy creation. |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.policy.PolicyBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy.

This name identifies the policy.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.policy.PolicyBaseProps.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyDefinition

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyBaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.policy.PolicyBaseProps.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* agentcore-experimental-constructs.policy.ValidationMode
- *Default:* ValidationMode.FAIL_ON_ANY_FINDINGS

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

### PolicyEngineAttributes <a name="PolicyEngineAttributes" id="agentcore-experimental-constructs.policy.PolicyEngineAttributes"></a>

Attributes for specifying an imported Policy Engine .

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.PolicyEngineAttributes.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const policyEngineAttributes: policy.PolicyEngineAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineAttributes.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The ARN of an existing Policy Engine. |

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.policy.PolicyEngineAttributes.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The ARN of an existing Policy Engine.

---

### PolicyEngineProps <a name="PolicyEngineProps" id="agentcore-experimental-constructs.policy.PolicyEngineProps"></a>

Properties for creating a PolicyEngineresource.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.PolicyEngineProps.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const policyEngineProps: policy.PolicyEngineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyEngineProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.policy.PolicyEngineProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy engine.

This name identifies the policy engine.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyEngineProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A human-readable description of the policy engine's purpose and scope (1-4,096 characters).

This helps administrators understand the policy engine's role in the overall governance strategy.
Document which Gateway this engine will be associated with, what types of tools or workflows it
governs, and the team or service responsible for maintaining it. Clear descriptions are essential
when managing multiple policy engines across different services or environments.

---

### PolicyProps <a name="PolicyProps" id="agentcore-experimental-constructs.policy.PolicyProps"></a>

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.policy.PolicyProps.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

const policyProps: policy.PolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyProps.property.policyDefinition">policyDefinition</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyDefinition</code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyProps.property.validationMode">validationMode</a></code> | <code>agentcore-experimental-constructs.policy.ValidationMode</code> | The validation mode for the policy creation. |
| <code><a href="#agentcore-experimental-constructs.policy.PolicyProps.property.policyEngine">policyEngine</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyEngine</code> | The policy engine this policy should be associated to. |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.policy.PolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy.

This name identifies the policy.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.policy.PolicyProps.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyDefinition

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.PolicyProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.policy.PolicyProps.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* agentcore-experimental-constructs.policy.ValidationMode
- *Default:* ValidationMode.FAIL_ON_ANY_FINDINGS

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.policy.PolicyProps.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyEngine

The policy engine this policy should be associated to.

---

## Classes <a name="Classes" id="Classes"></a>

### CedarAction <a name="CedarAction" id="agentcore-experimental-constructs.policy.CedarAction"></a>

Factory class for creating Cedar action expressions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarAction.anyOfTools">anyOfTools</a></code> | Creates an action expression matching any of the specified tools. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarAction.anyOfType">anyOfType</a></code> | Creates an action expression for any action of the specified type. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarAction.specificTool">specificTool</a></code> | Creates an action expression for a specific tool. |

---

##### `anyOfTools` <a name="anyOfTools" id="agentcore-experimental-constructs.policy.CedarAction.anyOfTools"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarAction.anyOfTools(toolNames: string[])
```

Creates an action expression matching any of the specified tools.

###### `toolNames`<sup>Required</sup> <a name="toolNames" id="agentcore-experimental-constructs.policy.CedarAction.anyOfTools.parameter.toolNames"></a>

- *Type:* string[]

Array of tool names to match.

---

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.policy.CedarAction.anyOfType"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarAction.anyOfType(actionType?: ActionEntityType)
```

Creates an action expression for any action of the specified type.

###### `actionType`<sup>Optional</sup> <a name="actionType" id="agentcore-experimental-constructs.policy.CedarAction.anyOfType.parameter.actionType"></a>

- *Type:* agentcore-experimental-constructs.policy.ActionEntityType

Optional action entity type to match.

---

##### `specificTool` <a name="specificTool" id="agentcore-experimental-constructs.policy.CedarAction.specificTool"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarAction.specificTool(target: IGatewayTarget, toolName: string)
```

Creates an action expression for a specific tool.

###### `target`<sup>Required</sup> <a name="target" id="agentcore-experimental-constructs.policy.CedarAction.specificTool.parameter.target"></a>

- *Type:* @aws-cdk/aws-bedrock-agentcore-alpha.IGatewayTarget

---

###### `toolName`<sup>Required</sup> <a name="toolName" id="agentcore-experimental-constructs.policy.CedarAction.specificTool.parameter.toolName"></a>

- *Type:* string

The name of the specific tool/action.

---



### CedarPolicy <a name="CedarPolicy" id="agentcore-experimental-constructs.policy.CedarPolicy"></a>

- *Implements:* agentcore-experimental-constructs.policy.IPolicyDefinition

Represents a complete Cedar policy that can be rendered for AWS.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.CedarPolicy.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.CedarPolicy(statement: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicy.Initializer.parameter.statement">statement</a></code> | <code>string</code> | *No description.* |

---

##### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.policy.CedarPolicy.Initializer.parameter.statement"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicy.fromPolicyStatement">fromPolicyStatement</a></code> | Creates a Cedar policy from a structured policy statement. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicy.fromStatement">fromStatement</a></code> | Creates a Cedar policy from a raw Cedar statement string. |

---

##### `fromPolicyStatement` <a name="fromPolicyStatement" id="agentcore-experimental-constructs.policy.CedarPolicy.fromPolicyStatement"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarPolicy.fromPolicyStatement(policyStatement: CedarPolicyStatement)
```

Creates a Cedar policy from a structured policy statement.

###### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="agentcore-experimental-constructs.policy.CedarPolicy.fromPolicyStatement.parameter.policyStatement"></a>

- *Type:* agentcore-experimental-constructs.policy.CedarPolicyStatement

The structured policy components.

---

##### `fromStatement` <a name="fromStatement" id="agentcore-experimental-constructs.policy.CedarPolicy.fromStatement"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarPolicy.fromStatement(statement: string)
```

Creates a Cedar policy from a raw Cedar statement string.

###### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.policy.CedarPolicy.fromStatement.parameter.statement"></a>

- *Type:* string

The raw Cedar policy statement.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPolicy.property.statement">statement</a></code> | <code>string</code> | *No description.* |

---

##### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.policy.CedarPolicy.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---


### CedarPrincipal <a name="CedarPrincipal" id="agentcore-experimental-constructs.policy.CedarPrincipal"></a>

Factory class for creating Cedar principal expressions.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.policy.CedarPrincipal.Initializer"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

new policy.CedarPrincipal()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPrincipal.anyOAuthUser">anyOAuthUser</a></code> | Creates a principal expression matching any OAuth user. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPrincipal.anyOfType">anyOfType</a></code> | Creates a principal expression for any principal of the specified type. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarPrincipal.specificOAuthUser">specificOAuthUser</a></code> | Creates a principal expression for a specific OAuth user. |

---

##### `anyOAuthUser` <a name="anyOAuthUser" id="agentcore-experimental-constructs.policy.CedarPrincipal.anyOAuthUser"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarPrincipal.anyOAuthUser()
```

Creates a principal expression matching any OAuth user.

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.policy.CedarPrincipal.anyOfType"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarPrincipal.anyOfType(principalType?: PrincipalEntityType)
```

Creates a principal expression for any principal of the specified type.

###### `principalType`<sup>Optional</sup> <a name="principalType" id="agentcore-experimental-constructs.policy.CedarPrincipal.anyOfType.parameter.principalType"></a>

- *Type:* agentcore-experimental-constructs.policy.PrincipalEntityType

Optional principal entity type to match.

---

##### `specificOAuthUser` <a name="specificOAuthUser" id="agentcore-experimental-constructs.policy.CedarPrincipal.specificOAuthUser"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarPrincipal.specificOAuthUser(userId: string)
```

Creates a principal expression for a specific OAuth user.

###### `userId`<sup>Required</sup> <a name="userId" id="agentcore-experimental-constructs.policy.CedarPrincipal.specificOAuthUser.parameter.userId"></a>

- *Type:* string

The unique identifier of the OAuth user.

---



### CedarResource <a name="CedarResource" id="agentcore-experimental-constructs.policy.CedarResource"></a>

Factory class for creating Cedar resource expressions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarResource.anyOfType">anyOfType</a></code> | Creates a resource expression for any resource of the specified type. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarResource.gateway">gateway</a></code> | Creates a resource expression for a specific gateway. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarResource.specificOfType">specificOfType</a></code> | Creates a resource expression for a specific resource. |

---

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.policy.CedarResource.anyOfType"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarResource.anyOfType(resourceType?: ResourceEntityType)
```

Creates a resource expression for any resource of the specified type.

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="agentcore-experimental-constructs.policy.CedarResource.anyOfType.parameter.resourceType"></a>

- *Type:* agentcore-experimental-constructs.policy.ResourceEntityType

Optional resource entity type to match.

---

##### `gateway` <a name="gateway" id="agentcore-experimental-constructs.policy.CedarResource.gateway"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarResource.gateway(gateway: IGateway)
```

Creates a resource expression for a specific gateway.

###### `gateway`<sup>Required</sup> <a name="gateway" id="agentcore-experimental-constructs.policy.CedarResource.gateway.parameter.gateway"></a>

- *Type:* @aws-cdk/aws-bedrock-agentcore-alpha.IGateway

The gateway instance to reference.

---

##### `specificOfType` <a name="specificOfType" id="agentcore-experimental-constructs.policy.CedarResource.specificOfType"></a>

```typescript
import { policy } from 'agentcore-experimental-constructs'

policy.CedarResource.specificOfType(resourceType: ResourceEntityType, resourceName: string)
```

Creates a resource expression for a specific resource.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="agentcore-experimental-constructs.policy.CedarResource.specificOfType.parameter.resourceType"></a>

- *Type:* agentcore-experimental-constructs.policy.ResourceEntityType

The type of resource.

---

###### `resourceName`<sup>Required</sup> <a name="resourceName" id="agentcore-experimental-constructs.policy.CedarResource.specificOfType.parameter.resourceName"></a>

- *Type:* string

The unique identifier of the resource.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IPolicy <a name="IPolicy" id="agentcore-experimental-constructs.policy.IPolicy"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* agentcore-experimental-constructs.policy.Policy, agentcore-experimental-constructs.policy.PolicyBase, agentcore-experimental-constructs.policy.IPolicy

Interface for Policy resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.grant">grant</a></code> | Grant the given principal identity permissions to perform actions on this memory. |

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.IPolicy.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grant the given principal identity permissions to perform actions on this memory.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.IPolicy.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.IPolicy.grant.parameter.actions"></a>

- *Type:* string[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.policyEngine">policyEngine</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyEngine</code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.policyDefinition">policyDefinition</a></code> | <code>agentcore-experimental-constructs.policy.IPolicyDefinition</code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicy.property.validationMode">validationMode</a></code> | <code>agentcore-experimental-constructs.policy.ValidationMode</code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.IPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.IPolicy.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.IPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.policy.IPolicy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

*Example*

```typescript
'arn:${Partition}:bedrock-agentcore:${Region}:${Account}:policy-engine/${PolicyEngineId}/policy/${PolicyId}'
```


##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.policy.IPolicy.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyEngine

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.policy.IPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

*Example*

```typescript
'policy_lp4d4-4wf8gkrvj_'
```


##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.IPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.IPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.policy.IPolicy.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* agentcore-experimental-constructs.policy.IPolicyDefinition

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.IPolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.IPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.policy.IPolicy.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* agentcore-experimental-constructs.policy.ValidationMode

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

### IPolicyDefinition <a name="IPolicyDefinition" id="agentcore-experimental-constructs.policy.IPolicyDefinition"></a>

- *Implemented By:* agentcore-experimental-constructs.policy.CedarPolicy, agentcore-experimental-constructs.policy.IPolicyDefinition



### IPolicyEngine <a name="IPolicyEngine" id="agentcore-experimental-constructs.policy.IPolicyEngine"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* agentcore-experimental-constructs.policy.PolicyEngine, agentcore-experimental-constructs.policy.PolicyEngineBase, agentcore-experimental-constructs.policy.IPolicyEngine

Interface for Policy Engine resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.grant">grant</a></code> | Grant the given principal identity permissions to perform actions on this memory. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.policy.IPolicyEngine.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.policy.IPolicyEngine.addPolicy.parameter.props"></a>

- *Type:* agentcore-experimental-constructs.policy.PolicyBaseProps

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.policy.IPolicyEngine.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grant the given principal identity permissions to perform actions on this memory.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.IPolicyEngine.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.policy.IPolicyEngine.grant.parameter.actions"></a>

- *Type:* string[]

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.policy.IPolicyEngine.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.policy.IPolicyEngine.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.policy.IPolicyEngine.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.interfaces.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed in a Stack (those created by
creating new class instances like `new Role()`, `new Bucket()`, etc.), this
is always the same as the environment of the stack they belong to.

For referenced resources (those obtained from referencing methods like
`Role.fromRoleArn()`, `Bucket.fromBucketName()`, etc.), they might be
different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

*Example*

```typescript
'arn:aws:bedrock-agentcore:${region}:${accountId}:policy-engine/${policyEngineId}
```


##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

*Example*

```typescript
'PolicyEngine_50f7o-vr90ob_ize'
```


##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.policyEngineName"></a>

```typescript
public readonly policyEngineName: string;
```

- *Type:* string

The customer-assigned name of the policy engine.

This matches the name provided in the creation process.

---

*Example*

```typescript
'PolicyEngine_50f7o'
```


##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A human-readable description of the policy engine's purpose and scope (1-4,096 characters).

This helps administrators understand the policy engine's role in the overall governance strategy.
Document which Gateway this engine will be associated with, what types of tools or workflows it
governs, and the team or service responsible for maintaining it. Clear descriptions are essential
when managing multiple policy engines across different services or environments.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.policy.IPolicyEngine.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

## Enums <a name="Enums" id="Enums"></a>

### ActionEntityType <a name="ActionEntityType" id="agentcore-experimental-constructs.policy.ActionEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.ActionEntityType.AGENTCORE_ACTION">AGENTCORE_ACTION</a></code> | *No description.* |

---

##### `AGENTCORE_ACTION` <a name="AGENTCORE_ACTION" id="agentcore-experimental-constructs.policy.ActionEntityType.AGENTCORE_ACTION"></a>

---


### CedarConditionType <a name="CedarConditionType" id="agentcore-experimental-constructs.policy.CedarConditionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarConditionType.WHEN">WHEN</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.policy.CedarConditionType.UNLESS">UNLESS</a></code> | *No description.* |

---

##### `WHEN` <a name="WHEN" id="agentcore-experimental-constructs.policy.CedarConditionType.WHEN"></a>

---


##### `UNLESS` <a name="UNLESS" id="agentcore-experimental-constructs.policy.CedarConditionType.UNLESS"></a>

---


### CedarEffect <a name="CedarEffect" id="agentcore-experimental-constructs.policy.CedarEffect"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.CedarEffect.PERMIT">PERMIT</a></code> | Allows access. |
| <code><a href="#agentcore-experimental-constructs.policy.CedarEffect.FORBID">FORBID</a></code> | Denies access. |

---

##### `PERMIT` <a name="PERMIT" id="agentcore-experimental-constructs.policy.CedarEffect.PERMIT"></a>

Allows access.

---


##### `FORBID` <a name="FORBID" id="agentcore-experimental-constructs.policy.CedarEffect.FORBID"></a>

Denies access.

---


### PrincipalEntityType <a name="PrincipalEntityType" id="agentcore-experimental-constructs.policy.PrincipalEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.PrincipalEntityType.AGENTCORE_OAUTH_USER">AGENTCORE_OAUTH_USER</a></code> | *No description.* |

---

##### `AGENTCORE_OAUTH_USER` <a name="AGENTCORE_OAUTH_USER" id="agentcore-experimental-constructs.policy.PrincipalEntityType.AGENTCORE_OAUTH_USER"></a>

---


### ResourceEntityType <a name="ResourceEntityType" id="agentcore-experimental-constructs.policy.ResourceEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.ResourceEntityType.AGENTCORE_GATEWAY">AGENTCORE_GATEWAY</a></code> | *No description.* |

---

##### `AGENTCORE_GATEWAY` <a name="AGENTCORE_GATEWAY" id="agentcore-experimental-constructs.policy.ResourceEntityType.AGENTCORE_GATEWAY"></a>

---


### ValidationMode <a name="ValidationMode" id="agentcore-experimental-constructs.policy.ValidationMode"></a>

The validation mode for the policy creation.

Determines how Cedar analyzer
validation results are handled during policy creation.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.policy.ValidationMode.FAIL_ON_ANY_FINDINGS">FAIL_ON_ANY_FINDINGS</a></code> | Runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance. |
| <code><a href="#agentcore-experimental-constructs.policy.ValidationMode.IGNORE_ALL_FINDINGS">IGNORE_ALL_FINDINGS</a></code> | Runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving. |

---

##### `FAIL_ON_ANY_FINDINGS` <a name="FAIL_ON_ANY_FINDINGS" id="agentcore-experimental-constructs.policy.ValidationMode.FAIL_ON_ANY_FINDINGS"></a>

Runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance.

---


##### `IGNORE_ALL_FINDINGS` <a name="IGNORE_ALL_FINDINGS" id="agentcore-experimental-constructs.policy.ValidationMode.IGNORE_ALL_FINDINGS"></a>

Runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving.

Use this
mode only when you understand and accept the analyzer findings.

---

