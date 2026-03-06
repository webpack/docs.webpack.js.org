---
title: ModuleGraph
---

[webpack](../globals.md) / ModuleGraph

# Class: ModuleGraph

Defined in: [webpack/types.d.ts:11063](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11063)

## Constructors

### Constructor

> **new ModuleGraph**(): `ModuleGraph`

Defined in: [webpack/types.d.ts:11064](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11064)

#### Returns

`ModuleGraph`

## Properties

### ModuleGraphConnection

> `static` **ModuleGraphConnection**: *typeof* [`ModuleGraphConnection`](ModuleGraphConnection.md)

Defined in: [webpack/types.d.ts:11193](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11193)

## Methods

### addExplanation()

> **addExplanation**(`dependency`, `explanation`): `void`

Defined in: [webpack/types.d.ts:11088](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11088)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### explanation

`string`

#### Returns

`void`

***

### addExtraReason()

> **addExtraReason**(`module`, `explanation`): `void`

Defined in: [webpack/types.d.ts:11102](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11102)

#### Parameters

##### module

[`Module`](Module.md)

##### explanation

`string`

#### Returns

`void`

***

### cached()

> **cached**\<`T`, `R`\>(`fn`, ...`args`): `R`

Defined in: [webpack/types.d.ts:11157](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11157)

#### Type Parameters

##### T

`T` *extends* `any`[]

##### R

`R`

#### Parameters

##### fn

(`moduleGraph`, ...`args`) => `R`

##### args

...`T`

#### Returns

`R`

***

### cloneModuleAttributes()

> **cloneModuleAttributes**(`sourceModule`, `targetModule`): `void`

Defined in: [webpack/types.d.ts:11089](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11089)

#### Parameters

##### sourceModule

[`Module`](Module.md)

##### targetModule

[`Module`](Module.md)

#### Returns

`void`

***

### copyOutgoingModuleConnections()

> **copyOutgoingModuleConnections**(`oldModule`, `newModule`, `filterConnection`): `void`

Defined in: [webpack/types.d.ts:11097](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11097)

#### Parameters

##### oldModule

[`Module`](Module.md)

##### newModule

[`Module`](Module.md)

##### filterConnection

(`moduleGraphConnection`) => `boolean`

#### Returns

`void`

***

### dependencyCacheProvide()

> **dependencyCacheProvide**\<`D`, `ARGS`, `R`\>(`dependency`, ...`args`): `R`

Defined in: [webpack/types.d.ts:11164](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11164)

#### Type Parameters

##### D

`D` *extends* [`Dependency`](Dependency.md)

##### ARGS

`ARGS` *extends* `any`[]

##### R

`R`

#### Parameters

##### dependency

`D`

##### args

...\[`ARGS`, `...((moduleGraph: ModuleGraph, dependency: D, args: ARGS) => R)[]`\]

#### Returns

`R`

***

### finishUpdateParent()

> **finishUpdateParent**(): `void`

Defined in: [webpack/types.d.ts:11086](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11086)

#### Returns

`void`

***

### freeze()

> **freeze**(`cacheStage?`): `void`

Defined in: [webpack/types.d.ts:11155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11155)

#### Parameters

##### cacheStage?

`string`

#### Returns

`void`

***

### getConnection()

> **getConnection**(`dependency`): [`ModuleGraphConnection`](ModuleGraphConnection.md)

Defined in: [webpack/types.d.ts:11104](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11104)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`ModuleGraphConnection`](ModuleGraphConnection.md)

***

### getDepth()

> **getDepth**(`module`): `number`

Defined in: [webpack/types.d.ts:11147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11147)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getExportInfo()

> **getExportInfo**(`module`, `exportName`): `ExportInfo`

Defined in: [webpack/types.d.ts:11135](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11135)

#### Parameters

##### module

[`Module`](Module.md)

##### exportName

`string`

#### Returns

`ExportInfo`

***

### getExportsInfo()

> **getExportsInfo**(`module`): `ExportsInfo`

Defined in: [webpack/types.d.ts:11134](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11134)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`ExportsInfo`

***

### getIncomingConnections()

> **getIncomingConnections**(`module`): `Iterable`\<[`ModuleGraphConnection`](ModuleGraphConnection.md)\>

Defined in: [webpack/types.d.ts:11108](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11108)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`Iterable`\<[`ModuleGraphConnection`](ModuleGraphConnection.md)\>

***

### getIncomingConnectionsByOriginModule()

> **getIncomingConnectionsByOriginModule**(`module`): `ReadonlyMap`\<[`Module`](Module.md), readonly [`ModuleGraphConnection`](ModuleGraphConnection.md)[]\>

Defined in: [webpack/types.d.ts:11110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11110)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`ReadonlyMap`\<[`Module`](Module.md), readonly [`ModuleGraphConnection`](ModuleGraphConnection.md)[]\>

***

### getIssuer()

> **getIssuer**(`module`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11123](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11123)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

[`Module`](Module.md)

***

### getMeta()

> **getMeta**(`thing`): `Meta`

Defined in: [webpack/types.d.ts:11153](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11153)

#### Parameters

##### thing

`object`

#### Returns

`Meta`

***

### getMetaIfExisting()

> **getMetaIfExisting**(`thing`): `Meta`

Defined in: [webpack/types.d.ts:11154](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11154)

#### Parameters

##### thing

`object`

#### Returns

`Meta`

***

### getModule()

> **getModule**(`dependency`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11105](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11105)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`Module`](Module.md)

***

### getOptimizationBailout()

> **getOptimizationBailout**(`module`): (`string` \| (`requestShortener`) => `string`)[]

Defined in: [webpack/types.d.ts:11126](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11126)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

(`string` \| (`requestShortener`) => `string`)[]

***

### getOrigin()

> **getOrigin**(`dependency`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11106](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11106)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`Module`](Module.md)

***

### getOutgoingConnections()

> **getOutgoingConnections**(`module`): `Iterable`\<[`ModuleGraphConnection`](ModuleGraphConnection.md)\>

Defined in: [webpack/types.d.ts:11109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11109)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`Iterable`\<[`ModuleGraphConnection`](ModuleGraphConnection.md)\>

***

### getOutgoingConnectionsByModule()

> **getOutgoingConnectionsByModule**(`module`): `ReadonlyMap`\<[`Module`](Module.md), readonly [`ModuleGraphConnection`](ModuleGraphConnection.md)[]\>

Defined in: [webpack/types.d.ts:11116](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11116)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`ReadonlyMap`\<[`Module`](Module.md), readonly [`ModuleGraphConnection`](ModuleGraphConnection.md)[]\>

***

### getParentBlock()

> **getParentBlock**(`dependency`): `DependenciesBlock`

Defined in: [webpack/types.d.ts:11073](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11073)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`DependenciesBlock`

***

### getParentBlockIndex()

> **getParentBlockIndex**(`dependency`): `number`

Defined in: [webpack/types.d.ts:11074](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11074)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`number`

***

### getParentModule()

> **getParentModule**(`dependency`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11072](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11072)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`Module`](Module.md)

***

### getPostOrderIndex()

> **getPostOrderIndex**(`module`): `number`

Defined in: [webpack/types.d.ts:11142](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11142)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getPreOrderIndex()

> **getPreOrderIndex**(`module`): `number`

Defined in: [webpack/types.d.ts:11141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11141)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getProfile()

> **getProfile**(`module`): `ModuleProfile`

Defined in: [webpack/types.d.ts:11121](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11121)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`ModuleProfile`

***

### getProvidedExports()

> **getProvidedExports**(`module`): `true` \| `string`[]

Defined in: [webpack/types.d.ts:11129](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11129)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`true` \| `string`[]

***

### getReadOnlyExportInfo()

> **getReadOnlyExportInfo**(`module`, `exportName`): `ExportInfo`

Defined in: [webpack/types.d.ts:11136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11136)

#### Parameters

##### module

[`Module`](Module.md)

##### exportName

`string`

#### Returns

`ExportInfo`

***

### getResolvedModule()

> **getResolvedModule**(`dependency`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11103](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11103)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`Module`](Module.md)

***

### getResolvedOrigin()

> **getResolvedOrigin**(`dependency`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11107](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11107)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

[`Module`](Module.md)

***

### getUsedExports()

> **getUsedExports**(`module`, `runtime`): `boolean` \| `SortableSet`\<`string`\>

Defined in: [webpack/types.d.ts:11137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11137)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean` \| `SortableSet`\<`string`\>

***

### isAsync()

> **isAsync**(`module`): `boolean`

Defined in: [webpack/types.d.ts:11150](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11150)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### isDeferred()

> **isDeferred**(`module`): `boolean`

Defined in: [webpack/types.d.ts:11151](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11151)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### isExportProvided()

> **isExportProvided**(`module`, `exportName`): `boolean`

Defined in: [webpack/types.d.ts:11130](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11130)

#### Parameters

##### module

[`Module`](Module.md)

##### exportName

`string` | `string`[]

#### Returns

`boolean`

***

### moveModuleConnections()

> **moveModuleConnections**(`oldModule`, `newModule`, `filterConnection`): `void`

Defined in: [webpack/types.d.ts:11092](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11092)

#### Parameters

##### oldModule

[`Module`](Module.md)

##### newModule

[`Module`](Module.md)

##### filterConnection

(`moduleGraphConnection`) => `boolean`

#### Returns

`void`

***

### removeAllModuleAttributes()

> **removeAllModuleAttributes**(): `void`

Defined in: [webpack/types.d.ts:11091](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11091)

#### Returns

`void`

***

### removeConnection()

> **removeConnection**(`dependency`): `void`

Defined in: [webpack/types.d.ts:11087](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11087)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`void`

***

### removeModuleAttributes()

> **removeModuleAttributes**(`module`): `void`

Defined in: [webpack/types.d.ts:11090](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11090)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### setAsync()

> **setAsync**(`module`): `void`

Defined in: [webpack/types.d.ts:11152](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11152)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### setDepth()

> **setDepth**(`module`, `depth`): `void`

Defined in: [webpack/types.d.ts:11148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11148)

#### Parameters

##### module

[`Module`](Module.md)

##### depth

`number`

#### Returns

`void`

***

### setDepthIfLower()

> **setDepthIfLower**(`module`, `depth`): `boolean`

Defined in: [webpack/types.d.ts:11149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11149)

#### Parameters

##### module

[`Module`](Module.md)

##### depth

`number`

#### Returns

`boolean`

***

### setIssuer()

> **setIssuer**(`module`, `issuer`): `void`

Defined in: [webpack/types.d.ts:11124](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11124)

#### Parameters

##### module

[`Module`](Module.md)

##### issuer

[`Module`](Module.md)

#### Returns

`void`

***

### setIssuerIfUnset()

> **setIssuerIfUnset**(`module`, `issuer`): `void`

Defined in: [webpack/types.d.ts:11125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11125)

#### Parameters

##### module

[`Module`](Module.md)

##### issuer

[`Module`](Module.md)

#### Returns

`void`

***

### setModuleMemCaches()

> **setModuleMemCaches**(`moduleMemCaches`): `void`

Defined in: [webpack/types.d.ts:11161](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11161)

#### Parameters

##### moduleMemCaches

`Map`\<[`Module`](Module.md), `WeakTupleMap`\<`any`[], `any`\>\>

#### Returns

`void`

***

### setParentDependenciesBlockIndex()

> **setParentDependenciesBlockIndex**(`dependency`, `index`): `void`

Defined in: [webpack/types.d.ts:11071](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11071)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### index

`number`

#### Returns

`void`

***

### setParents()

> **setParents**(`dependency`, `block`, `module`, `indexInBlock?`): `void`

Defined in: [webpack/types.d.ts:11065](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11065)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### block

`DependenciesBlock`

##### module

[`Module`](Module.md)

##### indexInBlock?

`number`

#### Returns

`void`

***

### setPostOrderIndex()

> **setPostOrderIndex**(`module`, `index`): `void`

Defined in: [webpack/types.d.ts:11145](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11145)

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`void`

***

### setPostOrderIndexIfUnset()

> **setPostOrderIndexIfUnset**(`module`, `index`): `boolean`

Defined in: [webpack/types.d.ts:11146](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11146)

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`boolean`

***

### setPreOrderIndex()

> **setPreOrderIndex**(`module`, `index`): `void`

Defined in: [webpack/types.d.ts:11143](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11143)

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`void`

***

### setPreOrderIndexIfUnset()

> **setPreOrderIndexIfUnset**(`module`, `index`): `boolean`

Defined in: [webpack/types.d.ts:11144](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11144)

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`boolean`

***

### setProfile()

> **setProfile**(`module`, `profile?`): `void`

Defined in: [webpack/types.d.ts:11122](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11122)

#### Parameters

##### module

[`Module`](Module.md)

##### profile?

`ModuleProfile`

#### Returns

`void`

***

### setResolvedModule()

> **setResolvedModule**(`originModule`, `dependency`, `module`): `void`

Defined in: [webpack/types.d.ts:11075](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11075)

#### Parameters

##### originModule

[`Module`](Module.md)

##### dependency

[`Dependency`](Dependency.md)

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [webpack/types.d.ts:11156](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11156)

#### Returns

`void`

***

### updateModule()

> **updateModule**(`dependency`, `module`): `void`

Defined in: [webpack/types.d.ts:11080](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11080)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### updateParent()

> **updateParent**(`dependency`, `connection?`, `parentModule?`): `void`

Defined in: [webpack/types.d.ts:11081](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11081)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### connection?

[`ModuleGraphConnection`](ModuleGraphConnection.md)

##### parentModule?

[`Module`](Module.md)

#### Returns

`void`

***

### ~~clearModuleGraphForModule()~~

> `static` **clearModuleGraphForModule**(`module`): `void`

Defined in: [webpack/types.d.ts:11192](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11192)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

#### Deprecated

***

### ~~getModuleGraphForModule()~~

> `static` **getModuleGraphForModule**(`module`, `deprecateMessage`, `deprecationCode`): `ModuleGraph`

Defined in: [webpack/types.d.ts:11175](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11175)

#### Parameters

##### module

[`Module`](Module.md)

##### deprecateMessage

`string`

##### deprecationCode

`string`

#### Returns

`ModuleGraph`

#### Deprecated

***

### ~~setModuleGraphForModule()~~

> `static` **setModuleGraphForModule**(`module`, `moduleGraph`): `void`

Defined in: [webpack/types.d.ts:11184](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11184)

#### Parameters

##### module

[`Module`](Module.md)

##### moduleGraph

`ModuleGraph`

#### Returns

`void`

#### Deprecated
