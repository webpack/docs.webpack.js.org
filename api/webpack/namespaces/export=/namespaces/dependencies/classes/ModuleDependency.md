---
title: ModuleDependency
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [dependencies](../index.md) / ModuleDependency

# Class: ModuleDependency

Defined in: [webpack/types.d.ts:10826](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10826)

## Extends

- [`Dependency`](../../../../../../classes/Dependency.md)

## Extended by

- [`HarmonyImportDependency`](HarmonyImportDependency.md)

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

[`Dependency`](../../../../../../classes/Dependency.md).[`constructor`](../../../../../../classes/Dependency.md#constructor)

## Properties

### loc

> **loc**: `DependencyLocation`

Defined in: [webpack/types.d.ts:4140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4140)

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`loc`](../../../../../../classes/Dependency.md#loc)

***

### module

> **module**: `any`

Defined in: [webpack/types.d.ts:4204](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4204)

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`module`](../../../../../../classes/Dependency.md#module)

***

### optional?

> `optional` **optional**: `boolean`

Defined in: [webpack/types.d.ts:4137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4137)

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`optional`](../../../../../../classes/Dependency.md#optional)

***

### range?

> `optional` **range**: \[`number`, `number`\]

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

[`Dependency`](../../../../../../classes/Dependency.md).[`weak`](../../../../../../classes/Dependency.md#weak)

***

### EXPORTS\_OBJECT\_REFERENCED

> `static` **EXPORTS\_OBJECT\_REFERENCED**: `string`[][]

Defined in: [webpack/types.d.ts:10834](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10834)

#### Overrides

[`Dependency`](../../../../../../classes/Dependency.md).[`EXPORTS_OBJECT_REFERENCED`](../../../../../../classes/Dependency.md#exports_object_referenced)

***

### NO\_EXPORTS\_REFERENCED

> `static` **NO\_EXPORTS\_REFERENCED**: `string`[][]

Defined in: [webpack/types.d.ts:10833](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10833)

#### Overrides

[`Dependency`](../../../../../../classes/Dependency.md).[`NO_EXPORTS_REFERENCED`](../../../../../../classes/Dependency.md#no_exports_referenced)

***

### Template

> `static` **Template**: *typeof* `DependencyTemplate`

Defined in: [webpack/types.d.ts:10832](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10832)

***

### TRANSITIVE

> `static` **TRANSITIVE**: *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:10836](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10836)

#### Overrides

[`Dependency`](../../../../../../classes/Dependency.md).[`TRANSITIVE`](../../../../../../classes/Dependency.md#transitive)

## Accessors

### category

#### Get Signature

> **get** **category**(): `string`

Defined in: [webpack/types.d.ts:4139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4139)

##### Returns

`string`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`category`](../../../../../../classes/Dependency.md#category)

***

### disconnect

#### Get Signature

> **get** **disconnect**(): `any`

Defined in: [webpack/types.d.ts:4205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4205)

##### Returns

`any`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`disconnect`](../../../../../../classes/Dependency.md#disconnect)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [webpack/types.d.ts:4138](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4138)

##### Returns

`string`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`type`](../../../../../../classes/Dependency.md#type)

## Methods

### couldAffectReferencingModule()

> **couldAffectReferencingModule**(): `boolean` \| *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:4149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4149)

#### Returns

`boolean` \| *typeof* `TRANSITIVE`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`couldAffectReferencingModule`](../../../../../../classes/Dependency.md#couldaffectreferencingmodule)

***

### createIgnoredModule()

> **createIgnoredModule**(`context`): [`Module`](../../../../../../classes/Module.md)

Defined in: [webpack/types.d.ts:4201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4201)

#### Parameters

##### context

`string`

#### Returns

[`Module`](../../../../../../classes/Module.md)

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`createIgnoredModule`](../../../../../../classes/Dependency.md#createignoredmodule)

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4203](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4203)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../../../interfaces/ObjectDeserializerContext.md)

#### Returns

`void`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`deserialize`](../../../../../../classes/Dependency.md#deserialize)

***

### getCondition()

> **getCondition**(`moduleGraph`): `false` \| (`moduleGraphConnection`, `runtime`) => `ConnectionState`

Defined in: [webpack/types.d.ts:4164](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4164)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`false` \| (`moduleGraphConnection`, `runtime`) => `ConnectionState`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getCondition`](../../../../../../classes/Dependency.md#getcondition)

***

### getContext()

> **getContext**(): `string`

Defined in: [webpack/types.d.ts:4147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4147)

#### Returns

`string`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getContext`](../../../../../../classes/Dependency.md#getcontext)

***

### getErrors()

> **getErrors**(`moduleGraph`): [`WebpackError`](../../../../../../classes/WebpackError.md)[]

Defined in: [webpack/types.d.ts:4187](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4187)

Returns errors

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

[`WebpackError`](../../../../../../classes/WebpackError.md)[]

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getErrors`](../../../../../../classes/Dependency.md#geterrors)

***

### getExports()

> **getExports**(`moduleGraph`): `ExportsSpec`

Defined in: [webpack/types.d.ts:4177](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4177)

Returns the exported names

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`ExportsSpec`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getExports`](../../../../../../classes/Dependency.md#getexports)

***

### getModuleEvaluationSideEffectsState()

> **getModuleEvaluationSideEffectsState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:4198](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4198)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`ConnectionState`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getModuleEvaluationSideEffectsState`](../../../../../../classes/Dependency.md#getmoduleevaluationsideeffectsstate)

***

### getNumberOfIdOccurrences()

> **getNumberOfIdOccurrences**(): `number`

Defined in: [webpack/types.d.ts:4197](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4197)

implement this method to allow the occurrence order plugin to count correctly

#### Returns

`number`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getNumberOfIdOccurrences`](../../../../../../classes/Dependency.md#getnumberofidoccurrences)

***

### ~~getReference()~~

> **getReference**(`moduleGraph`): `never`

Defined in: [webpack/types.d.ts:4155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4155)

Returns the referenced module and export

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`never`

#### Deprecated

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getReference`](../../../../../../classes/Dependency.md#getreference)

***

### getReferencedExports()

> **getReferencedExports**(`moduleGraph`, `runtime`): (`string`[] \| `ReferencedExport`)[]

Defined in: [webpack/types.d.ts:4160](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4160)

Returns list of exports referenced by this dependency

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

##### runtime

`RuntimeSpec`

#### Returns

(`string`[] \| `ReferencedExport`)[]

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getReferencedExports`](../../../../../../classes/Dependency.md#getreferencedexports)

***

### getResourceIdentifier()

> **getResourceIdentifier**(): `string`

Defined in: [webpack/types.d.ts:4148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4148)

#### Returns

`string`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getResourceIdentifier`](../../../../../../classes/Dependency.md#getresourceidentifier)

***

### getWarnings()

> **getWarnings**(`moduleGraph`): [`WebpackError`](../../../../../../classes/WebpackError.md)[]

Defined in: [webpack/types.d.ts:4182](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4182)

Returns warnings

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

[`WebpackError`](../../../../../../classes/WebpackError.md)[]

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`getWarnings`](../../../../../../classes/Dependency.md#getwarnings)

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4202](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4202)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../../../interfaces/ObjectSerializerContext.md)

#### Returns

`void`

#### Inherited from

[`Dependency`](../../../../../../classes/Dependency.md).[`serialize`](../../../../../../classes/Dependency.md#serialize)

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

[`Dependency`](../../../../../../classes/Dependency.md).[`setLoc`](../../../../../../classes/Dependency.md#setloc)

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

[`Dependency`](../../../../../../classes/Dependency.md).[`updateHash`](../../../../../../classes/Dependency.md#updatehash)

***

### isLowPriorityDependency()

> `static` **isLowPriorityDependency**(`dependency`): `boolean`

Defined in: [webpack/types.d.ts:10835](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10835)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency.md)

#### Returns

`boolean`

#### Overrides

[`Dependency`](../../../../../../classes/Dependency.md).[`isLowPriorityDependency`](../../../../../../classes/Dependency.md#islowprioritydependency)
