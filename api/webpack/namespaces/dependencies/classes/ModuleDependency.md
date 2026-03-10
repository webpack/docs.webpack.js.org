---
title: ModuleDependency
---

[webpack](../../../../globals) / [dependencies](../index) / ModuleDependency

# Class: ModuleDependency

Defined in: [webpack/types.d.ts:10826](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10826)

## Extends

* [`Dependency`](../../../../classes/Dependency)

## Extended by

* [`HarmonyImportDependency`](HarmonyImportDependency.md)

## Constructors

### Constructor

> **new ModuleDependency**(`request`, `sourceOrder?`): `ModuleDependency`

Defined in: [webpack/types.d.ts:10827](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10827)

#### Parameters

##### request

`string`

##### sourceOrder?

`number`

#### Returns

`ModuleDependency`

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

### range?

> `optional` **range**: \[`number`, `number`]

Defined in: [webpack/types.d.ts:10831](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10831)

***

### request

> **request**: `string`

Defined in: [webpack/types.d.ts:10828](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10828)

***

### sourceOrder?

> `optional` **sourceOrder**: `number`

Defined in: [webpack/types.d.ts:10830](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10830)

***

### userRequest

> **userRequest**: `string`

Defined in: [webpack/types.d.ts:10829](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10829)

***

### weak

> **weak**: `boolean`

Defined in: [webpack/types.d.ts:4136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4136)

#### Inherited from

[`Dependency`](../../../../classes/Dependency).[`weak`](../../../../classes/Dependency)

***

### EXPORTS\_OBJECT\_REFERENCED

> `static` **EXPORTS\_OBJECT\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:10834](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10834)

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`EXPORTS_OBJECT_REFERENCED`](../../../../classes/Dependency)

***

### NO\_EXPORTS\_REFERENCED

> `static` **NO\_EXPORTS\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:10833](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10833)

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`NO_EXPORTS_REFERENCED`](../../../../classes/Dependency)

***

### Template

> `static` **Template**: *typeof* `DependencyTemplate`

Defined in: [webpack/types.d.ts:10832](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10832)

***

### TRANSITIVE

> `static` **TRANSITIVE**: *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:10836](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10836)

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

Defined in: [webpack/types.d.ts:10835](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10835)

#### Parameters

##### dependency

[`Dependency`](../../../../classes/Dependency)

#### Returns

`boolean`

#### Overrides

[`Dependency`](../../../../classes/Dependency).[`isLowPriorityDependency`](../../../../classes/Dependency)
