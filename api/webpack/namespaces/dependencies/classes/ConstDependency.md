---
title: ConstDependency
---

[webpack](../../../../globals) / [dependencies](../index) / ConstDependency

# Class: ConstDependency

Defined in: [webpack/types.d.ts:3419](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3419)

## Extends

* [`NullDependency`](NullDependency.md)

## Constructors

### Constructor

> **new ConstDependency**(`expression`, `range`, `runtimeRequirements?`): `ConstDependency`

Defined in: [webpack/types.d.ts:3420](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3420)

#### Parameters

##### expression

`string`

##### range

`number` | \[`number`, `number`]

##### runtimeRequirements?

`string`\[]

#### Returns

`ConstDependency`

#### Overrides

[`NullDependency`](NullDependency.md).[`constructor`](NullDependency.md#constructor)

## Properties

### expression

> **expression**: `string`

Defined in: [webpack/types.d.ts:3425](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3425)

***

### loc

> **loc**: `DependencyLocation`

Defined in: [webpack/types.d.ts:4140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4140)

#### Inherited from

[`NullDependency`](NullDependency.md).[`loc`](NullDependency.md#loc)

***

### module

> **module**: `any`

Defined in: [webpack/types.d.ts:4204](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4204)

#### Inherited from

[`NullDependency`](NullDependency.md).[`module`](NullDependency.md#module)

***

### optional?

> `optional` **optional**: `boolean`

Defined in: [webpack/types.d.ts:4137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4137)

#### Inherited from

[`NullDependency`](NullDependency.md).[`optional`](NullDependency.md#optional)

***

### range

> **range**: `number` | \[`number`, `number`]

Defined in: [webpack/types.d.ts:3426](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3426)

***

### runtimeRequirements

> **runtimeRequirements**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

Defined in: [webpack/types.d.ts:3427](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3427)

***

### weak

> **weak**: `boolean`

Defined in: [webpack/types.d.ts:4136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4136)

#### Inherited from

[`NullDependency`](NullDependency.md).[`weak`](NullDependency.md#weak)

***

### EXPORTS\_OBJECT\_REFERENCED

> `static` **EXPORTS\_OBJECT\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:3430](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3430)

#### Overrides

[`NullDependency`](NullDependency.md).[`EXPORTS_OBJECT_REFERENCED`](NullDependency.md#exports_object_referenced)

***

### NO\_EXPORTS\_REFERENCED

> `static` **NO\_EXPORTS\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:3429](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3429)

#### Overrides

[`NullDependency`](NullDependency.md).[`NO_EXPORTS_REFERENCED`](NullDependency.md#no_exports_referenced)

***

### Template

> `static` **Template**: *typeof* `ConstDependencyTemplate`

Defined in: [webpack/types.d.ts:3428](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3428)

#### Overrides

[`NullDependency`](NullDependency.md).[`Template`](NullDependency.md#template)

***

### TRANSITIVE

> `static` **TRANSITIVE**: *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:3432](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3432)

#### Overrides

[`NullDependency`](NullDependency.md).[`TRANSITIVE`](NullDependency.md#transitive)

## Accessors

### category

#### Get Signature

> **get** **category**(): `string`

Defined in: [webpack/types.d.ts:4139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4139)

##### Returns

`string`

#### Inherited from

[`NullDependency`](NullDependency.md).[`category`](NullDependency.md#category)

***

### disconnect

#### Get Signature

> **get** **disconnect**(): `any`

Defined in: [webpack/types.d.ts:4205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4205)

##### Returns

`any`

#### Inherited from

[`NullDependency`](NullDependency.md).[`disconnect`](NullDependency.md#disconnect)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [webpack/types.d.ts:4138](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4138)

##### Returns

`string`

#### Inherited from

[`NullDependency`](NullDependency.md).[`type`](NullDependency.md#type)

## Methods

### couldAffectReferencingModule()

> **couldAffectReferencingModule**(): `boolean` | *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:4149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4149)

#### Returns

`boolean` | *typeof* `TRANSITIVE`

#### Inherited from

[`NullDependency`](NullDependency.md).[`couldAffectReferencingModule`](NullDependency.md#couldaffectreferencingmodule)

***

### createIgnoredModule()

> **createIgnoredModule**(`context`): [`Module`](../../../../classes/Module)

Defined in: [webpack/types.d.ts:4201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4201)

#### Parameters

##### context

`string`

#### Returns

[`Module`](../../../../classes/Module)

#### Inherited from

[`NullDependency`](NullDependency.md).[`createIgnoredModule`](NullDependency.md#createignoredmodule)

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4203](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4203)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../interfaces/ObjectDeserializerContext)

#### Returns

`void`

#### Inherited from

[`NullDependency`](NullDependency.md).[`deserialize`](NullDependency.md#deserialize)

***

### getCondition()

> **getCondition**(`moduleGraph`): `false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

Defined in: [webpack/types.d.ts:4164](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4164)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

`false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getCondition`](NullDependency.md#getcondition)

***

### getContext()

> **getContext**(): `string`

Defined in: [webpack/types.d.ts:4147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4147)

#### Returns

`string`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getContext`](NullDependency.md#getcontext)

***

### getErrors()

> **getErrors**(`moduleGraph`): [`WebpackError`](../../../../classes/WebpackError)\[]

Defined in: [webpack/types.d.ts:4187](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4187)

Returns errors

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

[`WebpackError`](../../../../classes/WebpackError)\[]

#### Inherited from

[`NullDependency`](NullDependency.md).[`getErrors`](NullDependency.md#geterrors)

***

### getExports()

> **getExports**(`moduleGraph`): `ExportsSpec`

Defined in: [webpack/types.d.ts:4177](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4177)

Returns the exported names

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

`ExportsSpec`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getExports`](NullDependency.md#getexports)

***

### getModuleEvaluationSideEffectsState()

> **getModuleEvaluationSideEffectsState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:4198](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4198)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

`ConnectionState`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getModuleEvaluationSideEffectsState`](NullDependency.md#getmoduleevaluationsideeffectsstate)

***

### getNumberOfIdOccurrences()

> **getNumberOfIdOccurrences**(): `number`

Defined in: [webpack/types.d.ts:4197](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4197)

implement this method to allow the occurrence order plugin to count correctly

#### Returns

`number`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getNumberOfIdOccurrences`](NullDependency.md#getnumberofidoccurrences)

***

### ~~getReference()~~

> **getReference**(`moduleGraph`): `never`

Defined in: [webpack/types.d.ts:4155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4155)

Returns the referenced module and export

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

`never`

#### Deprecated

#### Inherited from

[`NullDependency`](NullDependency.md).[`getReference`](NullDependency.md#getreference)

***

### getReferencedExports()

> **getReferencedExports**(`moduleGraph`, `runtime`): (`string`\[] | `ReferencedExport`)\[]

Defined in: [webpack/types.d.ts:4160](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4160)

Returns list of exports referenced by this dependency

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

##### runtime

`RuntimeSpec`

#### Returns

(`string`\[] | `ReferencedExport`)\[]

#### Inherited from

[`NullDependency`](NullDependency.md).[`getReferencedExports`](NullDependency.md#getreferencedexports)

***

### getResourceIdentifier()

> **getResourceIdentifier**(): `string`

Defined in: [webpack/types.d.ts:4148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4148)

#### Returns

`string`

#### Inherited from

[`NullDependency`](NullDependency.md).[`getResourceIdentifier`](NullDependency.md#getresourceidentifier)

***

### getWarnings()

> **getWarnings**(`moduleGraph`): [`WebpackError`](../../../../classes/WebpackError)\[]

Defined in: [webpack/types.d.ts:4182](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4182)

Returns warnings

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../classes/ModuleGraph)

#### Returns

[`WebpackError`](../../../../classes/WebpackError)\[]

#### Inherited from

[`NullDependency`](NullDependency.md).[`getWarnings`](NullDependency.md#getwarnings)

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4202](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4202)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../interfaces/ObjectSerializerContext)

#### Returns

`void`

#### Inherited from

[`NullDependency`](NullDependency.md).[`serialize`](NullDependency.md#serialize)

***

### setLoc()

> **setLoc**(`startLine`, `startColumn`, `endLine`, `endColumn`): `void`

Defined in: [webpack/types.d.ts:4141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4141)

#### Parameters

##### startLine

`number`

##### startColumn

`number`

##### endLine

`number`

##### endColumn

`number`

#### Returns

`void`

#### Inherited from

[`NullDependency`](NullDependency.md).[`setLoc`](NullDependency.md#setloc)

***

### updateHash()

> **updateHash**(`hash`, `context`): `void`

Defined in: [webpack/types.d.ts:4192](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4192)

Update the hash

#### Parameters

##### hash

`Hash`

##### context

`UpdateHashContextDependency`

#### Returns

`void`

#### Inherited from

[`NullDependency`](NullDependency.md).[`updateHash`](NullDependency.md#updatehash)

***

### isLowPriorityDependency()

> `static` **isLowPriorityDependency**(`dependency`): `boolean`

Defined in: [webpack/types.d.ts:3431](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3431)

#### Parameters

##### dependency

[`Dependency`](../../../../classes/Dependency)

#### Returns

`boolean`

#### Overrides

[`NullDependency`](NullDependency.md).[`isLowPriorityDependency`](NullDependency.md#islowprioritydependency)
