---
title: NullDependency
---

[webpack](../../../../globals) / [dependencies](../index) / NullDependency

# Class: NullDependency

Defined in: [webpack/types.d.ts:12456](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12456)

## Extends

* [`Dependency`](../../../../classes/Dependency)

## Extended by

* [`ConstDependency`](ConstDependency.md)

## Constructors

### Constructor

> **new NullDependency**(): `NullDependency`

Defined in: [webpack/types.d.ts:12457](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12457)

#### Returns

`NullDependency`

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`constructor`](../../../../classes/Dependency)

## Properties

### loc

> **loc**: `DependencyLocation`

Defined in: [webpack/types.d.ts:4140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4140)

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`loc`](../../../../classes/Dependency)

***

### module

> **module**: `any`

Defined in: [webpack/types.d.ts:4204](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4204)

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`module`](../../../../classes/Dependency)

***

### optional?

> `optional` **optional**: `boolean`

Defined in: [webpack/types.d.ts:4137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4137)

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`optional`](../../../../classes/Dependency)

***

### weak

> **weak**: `boolean`

Defined in: [webpack/types.d.ts:4136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4136)

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`weak`](../../../../classes/Dependency)

***

### EXPORTS\_OBJECT\_REFERENCED

> `static` **EXPORTS\_OBJECT\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:12460](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12460)

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`EXPORTS_OBJECT_REFERENCED`](../../../../classes/Dependency)

***

### NO\_EXPORTS\_REFERENCED

> `static` **NO\_EXPORTS\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:12459](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12459)

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`NO_EXPORTS_REFERENCED`](../../../../classes/Dependency)

***

### Template

> `static` **Template**: *typeof* `NullDependencyTemplate`

Defined in: [webpack/types.d.ts:12458](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12458)

***

### TRANSITIVE

> `static` **TRANSITIVE**: *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:12462](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12462)

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`TRANSITIVE`](../../../../classes/Dependency)

## Accessors

### category

#### Get Signature

> **get** **category**(): `string`

Defined in: [webpack/types.d.ts:4139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4139)

##### Returns

`string`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`category`](../../../../classes/Dependency)

***

### disconnect

#### Get Signature

> **get** **disconnect**(): `any`

Defined in: [webpack/types.d.ts:4205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4205)

##### Returns

`any`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`disconnect`](../../../../classes/Dependency)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [webpack/types.d.ts:4138](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4138)

##### Returns

`string`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`type`](../../../../classes/Dependency)

## Methods

### couldAffectReferencingModule()

> **couldAffectReferencingModule**(): `boolean` | *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:4149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4149)

#### Returns

`boolean` | *typeof* `TRANSITIVE`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`couldAffectReferencingModule`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`createIgnoredModule`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`deserialize`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getCondition`](../../../../classes/Dependency)

***

### getContext()

> **getContext**(): `string`

Defined in: [webpack/types.d.ts:4147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4147)

#### Returns

`string`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`getContext`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getErrors`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getExports`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getModuleEvaluationSideEffectsState`](../../../../classes/Dependency)

***

### getNumberOfIdOccurrences()

> **getNumberOfIdOccurrences**(): `number`

Defined in: [webpack/types.d.ts:4197](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4197)

implement this method to allow the occurrence order plugin to count correctly

#### Returns

`number`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`getNumberOfIdOccurrences`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getReference`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getReferencedExports`](../../../../classes/Dependency)

***

### getResourceIdentifier()

> **getResourceIdentifier**(): `string`

Defined in: [webpack/types.d.ts:4148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4148)

#### Returns

`string`

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`getResourceIdentifier`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`getWarnings`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`serialize`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`setLoc`](../../../../classes/Dependency)

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

[`Dependency`](../../../../classes/Dependency).[`updateHash`](../../../../classes/Dependency)

***

### isLowPriorityDependency()

> `static` **isLowPriorityDependency**(`dependency`): `boolean`

Defined in: [webpack/types.d.ts:12461](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12461)

#### Parameters

##### dependency

[`Dependency`](../../../../classes/Dependency)

#### Returns

`boolean`

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`isLowPriorityDependency`](../../../../classes/Dependency)
