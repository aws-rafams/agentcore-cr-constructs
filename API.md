# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Policy <a name="Policy" id="agentcore-experimental-constructs.Policy"></a>

A Cedar policy is a declarative statement that permits or forbids access to gateway tools.

Each policy specifies who (principal) can perform what action (tool invocation) on which
resource (gateway) under what conditions. Policies are evaluated for every tool invocation request.

> [https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-policies.html](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-policies.html)

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.Policy.Initializer"></a>

```typescript
import { Policy } from 'agentcore-experimental-constructs'

new Policy(scope: Construct, id: string, props: PolicyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.Policy.Initializer.parameter.props">props</a></code> | <code><a href="#agentcore-experimental-constructs.PolicyProps">PolicyProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.Policy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.Policy.Initializer.parameter.props"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PolicyProps">PolicyProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.Policy.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.Policy.grant">grant</a></code> | Grants Policy IAM actions to the IAM Principal. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.Policy.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.Policy.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.Policy.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.Policy.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.Policy.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.Policy.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.Policy.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.Policy.isConstruct"></a>

```typescript
import { Policy } from 'agentcore-experimental-constructs'

Policy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.Policy.isOwnedResource"></a>

```typescript
import { Policy } from 'agentcore-experimental-constructs'

Policy.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.Policy.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.Policy.isResource"></a>

```typescript
import { Policy } from 'agentcore-experimental-constructs'

Policy.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.Policy.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.policyEngine">policyEngine</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a></code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.Policy.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.Policy.property.policyDefinition">policyDefinition</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a></code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.Policy.property.validationMode">validationMode</a></code> | <code><a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a></code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.Policy.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.Policy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.Policy.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.Policy.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.Policy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="agentcore-experimental-constructs.Policy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.Policy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.Policy.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.Policy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.Policy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.Policy.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* <a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a>

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---


### PolicyBase <a name="PolicyBase" id="agentcore-experimental-constructs.PolicyBase"></a>

- *Implements:* <a href="#agentcore-experimental-constructs.IPolicy">IPolicy</a>

Abstract base class for a Policy.

Contains methods and attributes valid for Memories either created with CDK or imported.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.PolicyBase.Initializer"></a>

```typescript
import { PolicyBase } from 'agentcore-experimental-constructs'

new PolicyBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.PolicyBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.PolicyBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="agentcore-experimental-constructs.PolicyBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.grant">grant</a></code> | Grants Policy IAM actions to the IAM Principal. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.PolicyBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.PolicyBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.PolicyBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.PolicyBase.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.PolicyBase.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.PolicyBase.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.PolicyBase.isConstruct"></a>

```typescript
import { PolicyBase } from 'agentcore-experimental-constructs'

PolicyBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.PolicyBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.PolicyBase.isOwnedResource"></a>

```typescript
import { PolicyBase } from 'agentcore-experimental-constructs'

PolicyBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.PolicyBase.isResource"></a>

```typescript
import { PolicyBase } from 'agentcore-experimental-constructs'

PolicyBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.policyEngine">policyEngine</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a></code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.policyDefinition">policyDefinition</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a></code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.PolicyBase.property.validationMode">validationMode</a></code> | <code><a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a></code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.PolicyBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.PolicyBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.PolicyBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.PolicyBase.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.PolicyBase.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.PolicyBase.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="agentcore-experimental-constructs.PolicyBase.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.PolicyBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the policy’s purpose and functionality (1-4,096 characters).

This helps policy administrators understand the policy’s intent, business rules, and operational scope.
Use this field to document why the policy exists, what business requirement it addresses,
and any special considerations for maintenance.

---

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.PolicyBase.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.PolicyBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.PolicyBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.PolicyBase.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* <a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a>

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---


### PolicyEngine <a name="PolicyEngine" id="agentcore-experimental-constructs.PolicyEngine"></a>

A policy engine is a collection of policies that evaluates and authorizes agent tool calls.

When associated with a gateway, the policy engine intercepts all agent requests and determines
whether to allow or deny each action based on the defined policies.

> [https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-engine.html](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/policy-create-engine.html)

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.PolicyEngine.Initializer"></a>

```typescript
import { PolicyEngine } from 'agentcore-experimental-constructs'

new PolicyEngine(scope: Construct, id: string, props: PolicyEngineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.props">props</a></code> | <code><a href="#agentcore-experimental-constructs.PolicyEngineProps">PolicyEngineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.PolicyEngine.Initializer.parameter.props"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PolicyEngineProps">PolicyEngineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.grant">grant</a></code> | Grants Policy Engine IAM actions to the IAM Principal. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.PolicyEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.PolicyEngine.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.PolicyEngine.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.PolicyEngine.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.PolicyEngine.addPolicy.parameter.props"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PolicyBaseProps">PolicyBaseProps</a>

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.PolicyEngine.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy Engine IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.PolicyEngine.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.PolicyEngine.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.PolicyEngine.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.PolicyEngine.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.fromPolicyEngineArn">fromPolicyEngineArn</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.PolicyEngine.isConstruct"></a>

```typescript
import { PolicyEngine } from 'agentcore-experimental-constructs'

PolicyEngine.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.PolicyEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.PolicyEngine.isOwnedResource"></a>

```typescript
import { PolicyEngine } from 'agentcore-experimental-constructs'

PolicyEngine.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyEngine.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.PolicyEngine.isResource"></a>

```typescript
import { PolicyEngine } from 'agentcore-experimental-constructs'

PolicyEngine.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyEngine.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPolicyEngineArn` <a name="fromPolicyEngineArn" id="agentcore-experimental-constructs.PolicyEngine.fromPolicyEngineArn"></a>

```typescript
import { PolicyEngine } from 'agentcore-experimental-constructs'

PolicyEngine.fromPolicyEngineArn(scope: Construct, id: string, policyEngineArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.PolicyEngine.fromPolicyEngineArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.PolicyEngine.fromPolicyEngineArn.parameter.id"></a>

- *Type:* string

---

###### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.PolicyEngine.fromPolicyEngineArn.parameter.policyEngineArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngine.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.PolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.PolicyEngine.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.PolicyEngine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.PolicyEngine.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.PolicyEngine.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.PolicyEngine.property.policyEngineName"></a>

```typescript
public readonly policyEngineName: string;
```

- *Type:* string

The customer-assigned name of the policy engine.

This matches the name provided in the creation process.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.PolicyEngine.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyEngine.property.description"></a>

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

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.PolicyEngine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.PolicyEngine.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---


### PolicyEngineBase <a name="PolicyEngineBase" id="agentcore-experimental-constructs.PolicyEngineBase"></a>

- *Implements:* <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

Abstract base class for a PolicyEngine.

Contains methods and attributes valid for Memories either created with CDK or imported.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.PolicyEngineBase.Initializer"></a>

```typescript
import { PolicyEngineBase } from 'agentcore-experimental-constructs'

new PolicyEngineBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="agentcore-experimental-constructs.PolicyEngineBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.grant">grant</a></code> | Grants Policy Engine IAM actions to the IAM Principal. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `toString` <a name="toString" id="agentcore-experimental-constructs.PolicyEngineBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="agentcore-experimental-constructs.PolicyEngineBase.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="agentcore-experimental-constructs.PolicyEngineBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.PolicyEngineBase.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.PolicyEngineBase.addPolicy.parameter.props"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PolicyBaseProps">PolicyBaseProps</a>

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.PolicyEngineBase.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grants Policy Engine IAM actions to the IAM Principal.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.PolicyEngineBase.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The IAM principal to grant permissions to.

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.PolicyEngineBase.grant.parameter.actions"></a>

- *Type:* string[]

The actions to grant.

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.PolicyEngineBase.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.PolicyEngineBase.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="agentcore-experimental-constructs.PolicyEngineBase.isConstruct"></a>

```typescript
import { PolicyEngineBase } from 'agentcore-experimental-constructs'

PolicyEngineBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="agentcore-experimental-constructs.PolicyEngineBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="agentcore-experimental-constructs.PolicyEngineBase.isOwnedResource"></a>

```typescript
import { PolicyEngineBase } from 'agentcore-experimental-constructs'

PolicyEngineBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyEngineBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="agentcore-experimental-constructs.PolicyEngineBase.isResource"></a>

```typescript
import { PolicyEngineBase } from 'agentcore-experimental-constructs'

PolicyEngineBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="agentcore-experimental-constructs.PolicyEngineBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineBase.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.PolicyEngineBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.PolicyEngineBase.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.PolicyEngineBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the created policy engine.

This globally unique identifier
can be used for cross-service references and IAM policy statements.

---

##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineId"></a>

```typescript
public readonly policyEngineId: string;
```

- *Type:* string

The unique identifier for the created policy engine.

This system-generated identifier consists
of the policy engine name plus a 10-character generated suffix.

---

##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.PolicyEngineBase.property.policyEngineName"></a>

```typescript
public readonly policyEngineName: string;
```

- *Type:* string

The customer-assigned name of the policy engine.

This matches the name provided in the creation process.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.PolicyEngineBase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyEngineBase.property.description"></a>

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

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.PolicyEngineBase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.PolicyEngineBase.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---


## Structs <a name="Structs" id="Structs"></a>

### CedarActionExpression <a name="CedarActionExpression" id="agentcore-experimental-constructs.CedarActionExpression"></a>

Represents a Cedar policy action expression Used to specify what action is being performed.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.CedarActionExpression.Initializer"></a>

```typescript
import { CedarActionExpression } from 'agentcore-experimental-constructs'

const cedarActionExpression: CedarActionExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarActionExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.CedarActionExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### CedarPolicyStatement <a name="CedarPolicyStatement" id="agentcore-experimental-constructs.CedarPolicyStatement"></a>

Defines the structure of a Cedar policy statement Contains all components needed to create a complete Cedar policy.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.CedarPolicyStatement.Initializer"></a>

```typescript
import { CedarPolicyStatement } from 'agentcore-experimental-constructs'

const cedarPolicyStatement: CedarPolicyStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.action">action</a></code> | <code><a href="#agentcore-experimental-constructs.CedarActionExpression">CedarActionExpression</a></code> | WHAT action they want to perform (required). |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.effect">effect</a></code> | <code><a href="#agentcore-experimental-constructs.CedarEffect">CedarEffect</a></code> | The effect of the policy (permit or forbid). |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.resource">resource</a></code> | <code><a href="#agentcore-experimental-constructs.CedarResourceExpression">CedarResourceExpression</a></code> | WHICH resource they want to access (required). |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.principal">principal</a></code> | <code><a href="#agentcore-experimental-constructs.CedarPrincipalExpression">CedarPrincipalExpression</a></code> | WHO is making the request. |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.unless">unless</a></code> | <code>string[]</code> | Conditions that must be false for the policy to apply. |
| <code><a href="#agentcore-experimental-constructs.CedarPolicyStatement.property.when">when</a></code> | <code>string[]</code> | Additional conditions that must be true for the policy to apply. |

---

##### `action`<sup>Required</sup> <a name="action" id="agentcore-experimental-constructs.CedarPolicyStatement.property.action"></a>

```typescript
public readonly action: CedarActionExpression;
```

- *Type:* <a href="#agentcore-experimental-constructs.CedarActionExpression">CedarActionExpression</a>

WHAT action they want to perform (required).

---

##### `effect`<sup>Required</sup> <a name="effect" id="agentcore-experimental-constructs.CedarPolicyStatement.property.effect"></a>

```typescript
public readonly effect: CedarEffect;
```

- *Type:* <a href="#agentcore-experimental-constructs.CedarEffect">CedarEffect</a>

The effect of the policy (permit or forbid).

---

##### `resource`<sup>Required</sup> <a name="resource" id="agentcore-experimental-constructs.CedarPolicyStatement.property.resource"></a>

```typescript
public readonly resource: CedarResourceExpression;
```

- *Type:* <a href="#agentcore-experimental-constructs.CedarResourceExpression">CedarResourceExpression</a>

WHICH resource they want to access (required).

---

##### `principal`<sup>Optional</sup> <a name="principal" id="agentcore-experimental-constructs.CedarPolicyStatement.property.principal"></a>

```typescript
public readonly principal: CedarPrincipalExpression;
```

- *Type:* <a href="#agentcore-experimental-constructs.CedarPrincipalExpression">CedarPrincipalExpression</a>
- *Default:* CedarPrincipal.anyOAuthUser()

WHO is making the request.

---

##### `unless`<sup>Optional</sup> <a name="unless" id="agentcore-experimental-constructs.CedarPolicyStatement.property.unless"></a>

```typescript
public readonly unless: string[];
```

- *Type:* string[]

Conditions that must be false for the policy to apply.

---

##### `when`<sup>Optional</sup> <a name="when" id="agentcore-experimental-constructs.CedarPolicyStatement.property.when"></a>

```typescript
public readonly when: string[];
```

- *Type:* string[]

Additional conditions that must be true for the policy to apply.

---

### CedarPrincipalExpression <a name="CedarPrincipalExpression" id="agentcore-experimental-constructs.CedarPrincipalExpression"></a>

Represents a Cedar policy principal expression Used to specify who is making the request.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.CedarPrincipalExpression.Initializer"></a>

```typescript
import { CedarPrincipalExpression } from 'agentcore-experimental-constructs'

const cedarPrincipalExpression: CedarPrincipalExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPrincipalExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.CedarPrincipalExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### CedarResourceExpression <a name="CedarResourceExpression" id="agentcore-experimental-constructs.CedarResourceExpression"></a>

Represents a Cedar policy resource expression Used to specify which resource is being accessed.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.CedarResourceExpression.Initializer"></a>

```typescript
import { CedarResourceExpression } from 'agentcore-experimental-constructs'

const cedarResourceExpression: CedarResourceExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarResourceExpression.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Required</sup> <a name="expression" id="agentcore-experimental-constructs.CedarResourceExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### PolicyBaseProps <a name="PolicyBaseProps" id="agentcore-experimental-constructs.PolicyBaseProps"></a>

Properties for creating a Policyresource.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.PolicyBaseProps.Initializer"></a>

```typescript
import { PolicyBaseProps } from 'agentcore-experimental-constructs'

const policyBaseProps: PolicyBaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyBaseProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy. |
| <code><a href="#agentcore-experimental-constructs.PolicyBaseProps.property.policyDefinition">policyDefinition</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a></code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.PolicyBaseProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.PolicyBaseProps.property.validationMode">validationMode</a></code> | <code><a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a></code> | The validation mode for the policy creation. |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.PolicyBaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy.

This name identifies the policy.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.PolicyBaseProps.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyBaseProps.property.description"></a>

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

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.PolicyBaseProps.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* <a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a>
- *Default:* ValidationMode.FAIL_ON_ANY_FINDINGS

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

### PolicyEngineAttributes <a name="PolicyEngineAttributes" id="agentcore-experimental-constructs.PolicyEngineAttributes"></a>

Attributes for specifying an imported Policy Engine .

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.PolicyEngineAttributes.Initializer"></a>

```typescript
import { PolicyEngineAttributes } from 'agentcore-experimental-constructs'

const policyEngineAttributes: PolicyEngineAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineAttributes.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The ARN of an existing Policy Engine. |

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.PolicyEngineAttributes.property.policyEngineArn"></a>

```typescript
public readonly policyEngineArn: string;
```

- *Type:* string

The ARN of an existing Policy Engine.

---

### PolicyEngineProps <a name="PolicyEngineProps" id="agentcore-experimental-constructs.PolicyEngineProps"></a>

Properties for creating a PolicyEngineresource.

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.PolicyEngineProps.Initializer"></a>

```typescript
import { PolicyEngineProps } from 'agentcore-experimental-constructs'

const policyEngineProps: PolicyEngineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy engine. |
| <code><a href="#agentcore-experimental-constructs.PolicyEngineProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.PolicyEngineProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy engine.

This name identifies the policy engine.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyEngineProps.property.description"></a>

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

### PolicyProps <a name="PolicyProps" id="agentcore-experimental-constructs.PolicyProps"></a>

#### Initializer <a name="Initializer" id="agentcore-experimental-constructs.PolicyProps.Initializer"></a>

```typescript
import { PolicyProps } from 'agentcore-experimental-constructs'

const policyProps: PolicyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.PolicyProps.property.name">name</a></code> | <code>string</code> | The customer-assigned immutable name for the policy. |
| <code><a href="#agentcore-experimental-constructs.PolicyProps.property.policyDefinition">policyDefinition</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a></code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.PolicyProps.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.PolicyProps.property.validationMode">validationMode</a></code> | <code><a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a></code> | The validation mode for the policy creation. |
| <code><a href="#agentcore-experimental-constructs.PolicyProps.property.policyEngine">policyEngine</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a></code> | The policy engine this policy should be associated to. |

---

##### `name`<sup>Required</sup> <a name="name" id="agentcore-experimental-constructs.PolicyProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The customer-assigned immutable name for the policy.

This name identifies the policy.
Must start with a letter. Valid characters are a-z, A-Z, 0-9, and _ (underscore).
The name can have up to 48 characters.

---

##### `policyDefinition`<sup>Required</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.PolicyProps.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.PolicyProps.property.description"></a>

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

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.PolicyProps.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* <a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a>
- *Default:* ValidationMode.FAIL_ON_ANY_FINDINGS

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.PolicyProps.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

The policy engine this policy should be associated to.

---

## Classes <a name="Classes" id="Classes"></a>

### CedarAction <a name="CedarAction" id="agentcore-experimental-constructs.CedarAction"></a>

Factory class for creating Cedar action expressions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarAction.anyOfTools">anyOfTools</a></code> | Creates an action expression matching any of the specified tools. |
| <code><a href="#agentcore-experimental-constructs.CedarAction.anyOfType">anyOfType</a></code> | Creates an action expression for any action of the specified type. |
| <code><a href="#agentcore-experimental-constructs.CedarAction.specificTool">specificTool</a></code> | Creates an action expression for a specific tool. |

---

##### `anyOfTools` <a name="anyOfTools" id="agentcore-experimental-constructs.CedarAction.anyOfTools"></a>

```typescript
import { CedarAction } from 'agentcore-experimental-constructs'

CedarAction.anyOfTools(toolNames: string[])
```

Creates an action expression matching any of the specified tools.

###### `toolNames`<sup>Required</sup> <a name="toolNames" id="agentcore-experimental-constructs.CedarAction.anyOfTools.parameter.toolNames"></a>

- *Type:* string[]

Array of tool names to match.

---

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.CedarAction.anyOfType"></a>

```typescript
import { CedarAction } from 'agentcore-experimental-constructs'

CedarAction.anyOfType(actionType?: ActionEntityType)
```

Creates an action expression for any action of the specified type.

###### `actionType`<sup>Optional</sup> <a name="actionType" id="agentcore-experimental-constructs.CedarAction.anyOfType.parameter.actionType"></a>

- *Type:* <a href="#agentcore-experimental-constructs.ActionEntityType">ActionEntityType</a>

Optional action entity type to match.

---

##### `specificTool` <a name="specificTool" id="agentcore-experimental-constructs.CedarAction.specificTool"></a>

```typescript
import { CedarAction } from 'agentcore-experimental-constructs'

CedarAction.specificTool(target: IGatewayTarget, toolName: string)
```

Creates an action expression for a specific tool.

###### `target`<sup>Required</sup> <a name="target" id="agentcore-experimental-constructs.CedarAction.specificTool.parameter.target"></a>

- *Type:* @aws-cdk/aws-bedrock-agentcore-alpha.IGatewayTarget

---

###### `toolName`<sup>Required</sup> <a name="toolName" id="agentcore-experimental-constructs.CedarAction.specificTool.parameter.toolName"></a>

- *Type:* string

The name of the specific tool/action.

---



### CedarPolicy <a name="CedarPolicy" id="agentcore-experimental-constructs.CedarPolicy"></a>

- *Implements:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

Represents a complete Cedar policy that can be rendered for AWS.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.CedarPolicy.Initializer"></a>

```typescript
import { CedarPolicy } from 'agentcore-experimental-constructs'

new CedarPolicy(statement: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPolicy.Initializer.parameter.statement">statement</a></code> | <code>string</code> | *No description.* |

---

##### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.CedarPolicy.Initializer.parameter.statement"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPolicy.fromPolicyStatement">fromPolicyStatement</a></code> | Creates a Cedar policy from a structured policy statement. |
| <code><a href="#agentcore-experimental-constructs.CedarPolicy.fromStatement">fromStatement</a></code> | Creates a Cedar policy from a raw Cedar statement string. |

---

##### `fromPolicyStatement` <a name="fromPolicyStatement" id="agentcore-experimental-constructs.CedarPolicy.fromPolicyStatement"></a>

```typescript
import { CedarPolicy } from 'agentcore-experimental-constructs'

CedarPolicy.fromPolicyStatement(policyStatement: CedarPolicyStatement)
```

Creates a Cedar policy from a structured policy statement.

###### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="agentcore-experimental-constructs.CedarPolicy.fromPolicyStatement.parameter.policyStatement"></a>

- *Type:* <a href="#agentcore-experimental-constructs.CedarPolicyStatement">CedarPolicyStatement</a>

The structured policy components.

---

##### `fromStatement` <a name="fromStatement" id="agentcore-experimental-constructs.CedarPolicy.fromStatement"></a>

```typescript
import { CedarPolicy } from 'agentcore-experimental-constructs'

CedarPolicy.fromStatement(statement: string)
```

Creates a Cedar policy from a raw Cedar statement string.

###### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.CedarPolicy.fromStatement.parameter.statement"></a>

- *Type:* string

The raw Cedar policy statement.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPolicy.property.statement">statement</a></code> | <code>string</code> | *No description.* |

---

##### `statement`<sup>Required</sup> <a name="statement" id="agentcore-experimental-constructs.CedarPolicy.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---


### CedarPrincipal <a name="CedarPrincipal" id="agentcore-experimental-constructs.CedarPrincipal"></a>

Factory class for creating Cedar principal expressions.

#### Initializers <a name="Initializers" id="agentcore-experimental-constructs.CedarPrincipal.Initializer"></a>

```typescript
import { CedarPrincipal } from 'agentcore-experimental-constructs'

new CedarPrincipal()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarPrincipal.anyOAuthUser">anyOAuthUser</a></code> | Creates a principal expression matching any OAuth user. |
| <code><a href="#agentcore-experimental-constructs.CedarPrincipal.anyOfType">anyOfType</a></code> | Creates a principal expression for any principal of the specified type. |
| <code><a href="#agentcore-experimental-constructs.CedarPrincipal.specificOAuthUser">specificOAuthUser</a></code> | Creates a principal expression for a specific OAuth user. |

---

##### `anyOAuthUser` <a name="anyOAuthUser" id="agentcore-experimental-constructs.CedarPrincipal.anyOAuthUser"></a>

```typescript
import { CedarPrincipal } from 'agentcore-experimental-constructs'

CedarPrincipal.anyOAuthUser()
```

Creates a principal expression matching any OAuth user.

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.CedarPrincipal.anyOfType"></a>

```typescript
import { CedarPrincipal } from 'agentcore-experimental-constructs'

CedarPrincipal.anyOfType(principalType?: PrincipalEntityType)
```

Creates a principal expression for any principal of the specified type.

###### `principalType`<sup>Optional</sup> <a name="principalType" id="agentcore-experimental-constructs.CedarPrincipal.anyOfType.parameter.principalType"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PrincipalEntityType">PrincipalEntityType</a>

Optional principal entity type to match.

---

##### `specificOAuthUser` <a name="specificOAuthUser" id="agentcore-experimental-constructs.CedarPrincipal.specificOAuthUser"></a>

```typescript
import { CedarPrincipal } from 'agentcore-experimental-constructs'

CedarPrincipal.specificOAuthUser(userId: string)
```

Creates a principal expression for a specific OAuth user.

###### `userId`<sup>Required</sup> <a name="userId" id="agentcore-experimental-constructs.CedarPrincipal.specificOAuthUser.parameter.userId"></a>

- *Type:* string

The unique identifier of the OAuth user.

---



### CedarResource <a name="CedarResource" id="agentcore-experimental-constructs.CedarResource"></a>

Factory class for creating Cedar resource expressions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarResource.anyOfType">anyOfType</a></code> | Creates a resource expression for any resource of the specified type. |
| <code><a href="#agentcore-experimental-constructs.CedarResource.gateway">gateway</a></code> | Creates a resource expression for a specific gateway. |
| <code><a href="#agentcore-experimental-constructs.CedarResource.specificOfType">specificOfType</a></code> | Creates a resource expression for a specific resource. |

---

##### `anyOfType` <a name="anyOfType" id="agentcore-experimental-constructs.CedarResource.anyOfType"></a>

```typescript
import { CedarResource } from 'agentcore-experimental-constructs'

CedarResource.anyOfType(resourceType?: ResourceEntityType)
```

Creates a resource expression for any resource of the specified type.

###### `resourceType`<sup>Optional</sup> <a name="resourceType" id="agentcore-experimental-constructs.CedarResource.anyOfType.parameter.resourceType"></a>

- *Type:* <a href="#agentcore-experimental-constructs.ResourceEntityType">ResourceEntityType</a>

Optional resource entity type to match.

---

##### `gateway` <a name="gateway" id="agentcore-experimental-constructs.CedarResource.gateway"></a>

```typescript
import { CedarResource } from 'agentcore-experimental-constructs'

CedarResource.gateway(gateway: IGateway)
```

Creates a resource expression for a specific gateway.

###### `gateway`<sup>Required</sup> <a name="gateway" id="agentcore-experimental-constructs.CedarResource.gateway.parameter.gateway"></a>

- *Type:* @aws-cdk/aws-bedrock-agentcore-alpha.IGateway

The gateway instance to reference.

---

##### `specificOfType` <a name="specificOfType" id="agentcore-experimental-constructs.CedarResource.specificOfType"></a>

```typescript
import { CedarResource } from 'agentcore-experimental-constructs'

CedarResource.specificOfType(resourceType: ResourceEntityType, resourceName: string)
```

Creates a resource expression for a specific resource.

###### `resourceType`<sup>Required</sup> <a name="resourceType" id="agentcore-experimental-constructs.CedarResource.specificOfType.parameter.resourceType"></a>

- *Type:* <a href="#agentcore-experimental-constructs.ResourceEntityType">ResourceEntityType</a>

The type of resource.

---

###### `resourceName`<sup>Required</sup> <a name="resourceName" id="agentcore-experimental-constructs.CedarResource.specificOfType.parameter.resourceName"></a>

- *Type:* string

The unique identifier of the resource.

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IPolicy <a name="IPolicy" id="agentcore-experimental-constructs.IPolicy"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#agentcore-experimental-constructs.Policy">Policy</a>, <a href="#agentcore-experimental-constructs.PolicyBase">PolicyBase</a>, <a href="#agentcore-experimental-constructs.IPolicy">IPolicy</a>

Interface for Policy resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.IPolicy.grant">grant</a></code> | Grant the given principal identity permissions to perform actions on this memory. |

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.IPolicy.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grant the given principal identity permissions to perform actions on this memory.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.IPolicy.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.IPolicy.grant.parameter.actions"></a>

- *Type:* string[]

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.policyArn">policyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.policyEngine">policyEngine</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a></code> | The policy engine this policy is associated to. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.policyId">policyId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy’s purpose and functionality (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.policyDefinition">policyDefinition</a></code> | <code><a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a></code> | The policy statement (e.g. Cedar Policy) that defines the authorization logic. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |
| <code><a href="#agentcore-experimental-constructs.IPolicy.property.validationMode">validationMode</a></code> | <code><a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a></code> | The validation mode for the policy creation. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.IPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.IPolicy.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.IPolicy.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="agentcore-experimental-constructs.IPolicy.property.policyArn"></a>

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


##### `policyEngine`<sup>Required</sup> <a name="policyEngine" id="agentcore-experimental-constructs.IPolicy.property.policyEngine"></a>

```typescript
public readonly policyEngine: IPolicyEngine;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

The policy engine this policy is associated to.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="agentcore-experimental-constructs.IPolicy.property.policyId"></a>

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


##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.IPolicy.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.IPolicy.property.description"></a>

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

##### `policyDefinition`<sup>Optional</sup> <a name="policyDefinition" id="agentcore-experimental-constructs.IPolicy.property.policyDefinition"></a>

```typescript
public readonly policyDefinition: IPolicyDefinition;
```

- *Type:* <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>

The policy statement (e.g. Cedar Policy) that defines the authorization logic.

---

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.IPolicy.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.IPolicy.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="agentcore-experimental-constructs.IPolicy.property.validationMode"></a>

```typescript
public readonly validationMode: ValidationMode;
```

- *Type:* <a href="#agentcore-experimental-constructs.ValidationMode">ValidationMode</a>

The validation mode for the policy creation.

Determines how Cedar analyzer validation
results are handled during policy creation.

---

### IPolicyDefinition <a name="IPolicyDefinition" id="agentcore-experimental-constructs.IPolicyDefinition"></a>

- *Implemented By:* <a href="#agentcore-experimental-constructs.CedarPolicy">CedarPolicy</a>, <a href="#agentcore-experimental-constructs.IPolicyDefinition">IPolicyDefinition</a>



### IPolicyEngine <a name="IPolicyEngine" id="agentcore-experimental-constructs.IPolicyEngine"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#agentcore-experimental-constructs.PolicyEngine">PolicyEngine</a>, <a href="#agentcore-experimental-constructs.PolicyEngineBase">PolicyEngineBase</a>, <a href="#agentcore-experimental-constructs.IPolicyEngine">IPolicyEngine</a>

Interface for Policy Engine resources.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.addPolicy">addPolicy</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.grant">grant</a></code> | Grant the given principal identity permissions to perform actions on this memory. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.grantPolicyEvaluation">grantPolicyEvaluation</a></code> | Grant the given identity permissions to perform policy evaluations on this policy engine. |

---

##### `addPolicy` <a name="addPolicy" id="agentcore-experimental-constructs.IPolicyEngine.addPolicy"></a>

```typescript
public addPolicy(props: PolicyBaseProps): Policy
```

###### `props`<sup>Required</sup> <a name="props" id="agentcore-experimental-constructs.IPolicyEngine.addPolicy.parameter.props"></a>

- *Type:* <a href="#agentcore-experimental-constructs.PolicyBaseProps">PolicyBaseProps</a>

---

##### `grant` <a name="grant" id="agentcore-experimental-constructs.IPolicyEngine.grant"></a>

```typescript
public grant(grantee: IGrantable, actions: string[]): Grant
```

Grant the given principal identity permissions to perform actions on this memory.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.IPolicyEngine.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="agentcore-experimental-constructs.IPolicyEngine.grant.parameter.actions"></a>

- *Type:* string[]

---

##### `grantPolicyEvaluation` <a name="grantPolicyEvaluation" id="agentcore-experimental-constructs.IPolicyEngine.grantPolicyEvaluation"></a>

```typescript
public grantPolicyEvaluation(grantee: IGrantable): Grant
```

Grant the given identity permissions to perform policy evaluations on this policy engine.

###### `grantee`<sup>Required</sup> <a name="grantee" id="agentcore-experimental-constructs.IPolicyEngine.grantPolicyEvaluation.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.env">env</a></code> | <code>aws-cdk-lib.interfaces.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.policyEngineArn">policyEngineArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.policyEngineId">policyEngineId</a></code> | <code>string</code> | The unique identifier for the created policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.policyEngineName">policyEngineName</a></code> | <code>string</code> | The customer-assigned name of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.createdAt">createdAt</a></code> | <code>string</code> | Timestamp when the policy engine was created. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.description">description</a></code> | <code>string</code> | A human-readable description of the policy engine's purpose and scope (1-4,096 characters). |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.status">status</a></code> | <code>string</code> | The status of the policy engine. |
| <code><a href="#agentcore-experimental-constructs.IPolicyEngine.property.updatedAt">updatedAt</a></code> | <code>string</code> | Timestamp when the policy engine was last updated. |

---

##### `node`<sup>Required</sup> <a name="node" id="agentcore-experimental-constructs.IPolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="agentcore-experimental-constructs.IPolicyEngine.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="agentcore-experimental-constructs.IPolicyEngine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `policyEngineArn`<sup>Required</sup> <a name="policyEngineArn" id="agentcore-experimental-constructs.IPolicyEngine.property.policyEngineArn"></a>

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


##### `policyEngineId`<sup>Required</sup> <a name="policyEngineId" id="agentcore-experimental-constructs.IPolicyEngine.property.policyEngineId"></a>

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


##### `policyEngineName`<sup>Required</sup> <a name="policyEngineName" id="agentcore-experimental-constructs.IPolicyEngine.property.policyEngineName"></a>

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


##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="agentcore-experimental-constructs.IPolicyEngine.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

Timestamp when the policy engine was created.

---

##### `description`<sup>Optional</sup> <a name="description" id="agentcore-experimental-constructs.IPolicyEngine.property.description"></a>

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

##### `status`<sup>Optional</sup> <a name="status" id="agentcore-experimental-constructs.IPolicyEngine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the policy engine.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="agentcore-experimental-constructs.IPolicyEngine.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

Timestamp when the policy engine was last updated.

---

## Enums <a name="Enums" id="Enums"></a>

### ActionEntityType <a name="ActionEntityType" id="agentcore-experimental-constructs.ActionEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.ActionEntityType.AGENTCORE_ACTION">AGENTCORE_ACTION</a></code> | *No description.* |

---

##### `AGENTCORE_ACTION` <a name="AGENTCORE_ACTION" id="agentcore-experimental-constructs.ActionEntityType.AGENTCORE_ACTION"></a>

---


### CedarConditionType <a name="CedarConditionType" id="agentcore-experimental-constructs.CedarConditionType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarConditionType.WHEN">WHEN</a></code> | *No description.* |
| <code><a href="#agentcore-experimental-constructs.CedarConditionType.UNLESS">UNLESS</a></code> | *No description.* |

---

##### `WHEN` <a name="WHEN" id="agentcore-experimental-constructs.CedarConditionType.WHEN"></a>

---


##### `UNLESS` <a name="UNLESS" id="agentcore-experimental-constructs.CedarConditionType.UNLESS"></a>

---


### CedarEffect <a name="CedarEffect" id="agentcore-experimental-constructs.CedarEffect"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.CedarEffect.PERMIT">PERMIT</a></code> | Allows access. |
| <code><a href="#agentcore-experimental-constructs.CedarEffect.FORBID">FORBID</a></code> | Denies access. |

---

##### `PERMIT` <a name="PERMIT" id="agentcore-experimental-constructs.CedarEffect.PERMIT"></a>

Allows access.

---


##### `FORBID` <a name="FORBID" id="agentcore-experimental-constructs.CedarEffect.FORBID"></a>

Denies access.

---


### PrincipalEntityType <a name="PrincipalEntityType" id="agentcore-experimental-constructs.PrincipalEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.PrincipalEntityType.AGENTCORE_OAUTH_USER">AGENTCORE_OAUTH_USER</a></code> | *No description.* |

---

##### `AGENTCORE_OAUTH_USER` <a name="AGENTCORE_OAUTH_USER" id="agentcore-experimental-constructs.PrincipalEntityType.AGENTCORE_OAUTH_USER"></a>

---


### ResourceEntityType <a name="ResourceEntityType" id="agentcore-experimental-constructs.ResourceEntityType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.ResourceEntityType.AGENTCORE_GATEWAY">AGENTCORE_GATEWAY</a></code> | *No description.* |

---

##### `AGENTCORE_GATEWAY` <a name="AGENTCORE_GATEWAY" id="agentcore-experimental-constructs.ResourceEntityType.AGENTCORE_GATEWAY"></a>

---


### ValidationMode <a name="ValidationMode" id="agentcore-experimental-constructs.ValidationMode"></a>

The validation mode for the policy creation.

Determines how Cedar analyzer
validation results are handled during policy creation.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#agentcore-experimental-constructs.ValidationMode.FAIL_ON_ANY_FINDINGS">FAIL_ON_ANY_FINDINGS</a></code> | Runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance. |
| <code><a href="#agentcore-experimental-constructs.ValidationMode.IGNORE_ALL_FINDINGS">IGNORE_ALL_FINDINGS</a></code> | Runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving. |

---

##### `FAIL_ON_ANY_FINDINGS` <a name="FAIL_ON_ANY_FINDINGS" id="agentcore-experimental-constructs.ValidationMode.FAIL_ON_ANY_FINDINGS"></a>

Runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance.

---


##### `IGNORE_ALL_FINDINGS` <a name="IGNORE_ALL_FINDINGS" id="agentcore-experimental-constructs.ValidationMode.IGNORE_ALL_FINDINGS"></a>

Runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving.

Use this
mode only when you understand and accept the analyzer findings.

---

