---
title: Module
---

[webpack](../globals.md) / Module

# Class: Module

Defined in: [webpack/types.d.ts:10629](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10629)

## Extends

- `DependenciesBlock`

## Extended by

- [`ExternalModule`](ExternalModule.md)
- [`NormalModule`](NormalModule.md)
- [`RuntimeModule`](RuntimeModule.md)

## Constructors

### Constructor

> **new Module**(`type`, `context?`, `layer?`): `Module`

Defined in: [webpack/types.d.ts:10630](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10630)

#### Parameters

##### type

`string`

##### context?

`string`

##### layer?

`string`

#### Returns

`Module`

#### Overrides

`DependenciesBlock.constructor`

## Properties

### blocks

> **blocks**: [`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)[]

Defined in: [webpack/types.d.ts:4110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4110)

#### Inherited from

`DependenciesBlock.blocks`

***

### buildInfo?

> `optional` **buildInfo**: `BuildInfo`

Defined in: [webpack/types.d.ts:10642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10642)

***

### buildMeta?

> `optional` **buildMeta**: `BuildMeta`

Defined in: [webpack/types.d.ts:10641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10641)

***

### codeGenerationDependencies?

> `optional` **codeGenerationDependencies**: [`Dependency`](Dependency.md)[]

Defined in: [webpack/types.d.ts:10644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10644)

***

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:10632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10632)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:10635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10635)

***

### dependencies

> **dependencies**: [`Dependency`](Dependency.md)[]

Defined in: [webpack/types.d.ts:4109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4109)

#### Inherited from

`DependenciesBlock.dependencies`

***

### depth

> **depth**: `number`

Defined in: [webpack/types.d.ts:10655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10655)

***

### factoryMeta?

> `optional` **factoryMeta**: `FactoryMeta`

Defined in: [webpack/types.d.ts:10637](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10637)

***

### hot

> **hot**: `boolean`

Defined in: [webpack/types.d.ts:10640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10640)

***

### ~~id~~

> **id**: `string` \| `number`

Defined in: [webpack/types.d.ts:10649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10649)

#### Deprecated

***

### index

> **index**: `number`

Defined in: [webpack/types.d.ts:10653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10653)

***

### index2

> **index2**: `number`

Defined in: [webpack/types.d.ts:10654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10654)

***

### issuer?

> `optional` **issuer**: `Module`

Defined in: [webpack/types.d.ts:10656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10656)

***

### layer

> **layer**: `string`

Defined in: [webpack/types.d.ts:10633](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10633)

***

### needId

> **needId**: `boolean`

Defined in: [webpack/types.d.ts:10634](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10634)

***

### parent?

> `optional` **parent**: `DependenciesBlock`

Defined in: [webpack/types.d.ts:4111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4111)

#### Inherited from

`DependenciesBlock.parent`

***

### presentationalDependencies?

> `optional` **presentationalDependencies**: [`Dependency`](Dependency.md)[]

Defined in: [webpack/types.d.ts:10643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10643)

***

### profile?

> `optional` **profile**: `ModuleProfile`

Defined in: [webpack/types.d.ts:10652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10652)

***

### resolveOptions?

> `optional` **resolveOptions**: [`ResolveOptions`](../interfaces/ResolveOptions.md)

Defined in: [webpack/types.d.ts:10636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10636)

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:10631](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10631)

***

### used

> **used**: `any`

Defined in: [webpack/types.d.ts:10790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10790)

***

### useSimpleSourceMap

> **useSimpleSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10639)

***

### useSourceMap

> **useSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10638)

## Accessors

### chunksIterable

#### Get Signature

> **get** **chunksIterable**(): `Iterable`\<[`Chunk`](Chunk.md)\>

Defined in: [webpack/types.d.ts:10673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10673)

##### Returns

`Iterable`\<[`Chunk`](Chunk.md)\>

***

### errors

#### Get Signature

> **get** **errors**(): `any`

Defined in: [webpack/types.d.ts:10788](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10788)

##### Returns

`any`

***

### exportsArgument

#### Get Signature

> **get** **exportsArgument**(): `string`

Defined in: [webpack/types.d.ts:10675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10675)

##### Returns

`string`

***

### hasEqualsChunks

#### Get Signature

> **get** **hasEqualsChunks**(): `any`

Defined in: [webpack/types.d.ts:10786](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10786)

##### Returns

`any`

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:10650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10650)

##### Returns

`string`

***

### isUsed

#### Get Signature

> **get** **isUsed**(): `any`

Defined in: [webpack/types.d.ts:10787](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10787)

##### Returns

`any`

***

### moduleArgument

#### Get Signature

> **get** **moduleArgument**(): `string`

Defined in: [webpack/types.d.ts:10676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10676)

##### Returns

`string`

***

### optimizationBailout

#### Get Signature

> **get** **optimizationBailout**(): (`string` \| (`requestShortener`) => `string`)[]

Defined in: [webpack/types.d.ts:10662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10662)

##### Deprecated

##### Returns

(`string` \| (`requestShortener`) => `string`)[]

***

### optional

#### Get Signature

> **get** **optional**(): `boolean`

Defined in: [webpack/types.d.ts:10666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10666)

##### Returns

`boolean`

***

### renderedHash

#### Get Signature

> **get** **renderedHash**(): `string`

Defined in: [webpack/types.d.ts:10651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10651)

##### Returns

`string`

***

### usedExports

#### Get Signature

> **get** **usedExports**(): `boolean` \| `SortableSet`\<`string`\>

Defined in: [webpack/types.d.ts:10657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10657)

##### Returns

`boolean` \| `SortableSet`\<`string`\>

***

### warnings

#### Get Signature

> **get** **warnings**(): `any`

Defined in: [webpack/types.d.ts:10789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10789)

##### Returns

`any`

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [webpack/types.d.ts:4118](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4118)

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.addBlock`

***

### addCacheDependencies()

> **addCacheDependencies**(`fileDependencies`, `contextDependencies`, `missingDependencies`, `buildDependencies`): `void`

Defined in: [webpack/types.d.ts:10780](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10780)

#### Parameters

##### fileDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet.md)\<`string`\>

##### contextDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet.md)\<`string`\>

##### missingDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet.md)\<`string`\>

##### buildDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet.md)\<`string`\>

#### Returns

`void`

***

### addChunk()

> **addChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10667)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### addCodeGenerationDependency()

> **addCodeGenerationDependency**(`codeGenerationDependency`): `void`

Defined in: [webpack/types.d.ts:10679](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10679)

#### Parameters

##### codeGenerationDependency

[`Dependency`](Dependency.md)

#### Returns

`void`

***

### addDependency()

> **addDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4119)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.addDependency`

***

### addError()

> **addError**(`error`): `void`

Defined in: [webpack/types.d.ts:10683](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10683)

#### Parameters

##### error

[`WebpackError`](WebpackError.md)

#### Returns

`void`

***

### addPresentationalDependency()

> **addPresentationalDependency**(`presentationalDependency`): `void`

Defined in: [webpack/types.d.ts:10678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10678)

#### Parameters

##### presentationalDependency

[`Dependency`](Dependency.md)

#### Returns

`void`

***

### addWarning()

> **addWarning**(`warning`): `void`

Defined in: [webpack/types.d.ts:10680](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10680)

#### Parameters

##### warning

[`WebpackError`](WebpackError.md)

#### Returns

`void`

***

### build()

> **build**(`options`, `compilation`, `resolver`, `fs`, `callback`): `void`

Defined in: [webpack/types.d.ts:10724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10724)

#### Parameters

##### options

`WebpackOptionsNormalizedWithDefaults`

##### compilation

[`Compilation`](Compilation.md)

##### resolver

`ResolverWithOptions`

##### fs

[`InputFileSystem`](../interfaces/InputFileSystem.md)

##### callback

(`err?`) => `void`

#### Returns

`void`

***

### chunkCondition()

> **chunkCondition**(`chunk`, `compilation`): `boolean`

Defined in: [webpack/types.d.ts:10759](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10759)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`boolean`

***

### cleanupForCache()

> **cleanupForCache**(): `void`

Defined in: [webpack/types.d.ts:10778](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10778)

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### Returns

`void`

***

### clearDependenciesAndBlocks()

> **clearDependenciesAndBlocks**(): `void`

Defined in: [webpack/types.d.ts:4125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4125)

Removes all dependencies and blocks

#### Returns

`void`

#### Inherited from

`DependenciesBlock.clearDependenciesAndBlocks`

***

### clearWarningsAndErrors()

> **clearWarningsAndErrors**(): `void`

Defined in: [webpack/types.d.ts:10690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10690)

removes all warnings and errors

#### Returns

`void`

***

### codeGeneration()

> **codeGeneration**(`context`): `CodeGenerationResult`

Defined in: [webpack/types.d.ts:10758](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10758)

#### Parameters

##### context

`CodeGenerationContext`

#### Returns

`CodeGenerationResult`

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4128)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../interfaces/ObjectDeserializerContext.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.deserialize`

***

### getChunks()

> **getChunks**(): [`Chunk`](Chunk.md)[]

Defined in: [webpack/types.d.ts:10671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10671)

#### Returns

[`Chunk`](Chunk.md)[]

***

### getConcatenationBailoutReason()

> **getConcatenationBailoutReason**(`context`): `string`

Defined in: [webpack/types.d.ts:10754](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10754)

#### Parameters

##### context

`ConcatenationBailoutReasonContext`

#### Returns

`string`

***

### getErrors()

> **getErrors**(): `Iterable`\<[`WebpackError`](WebpackError.md), `any`, `any`\>

Defined in: [webpack/types.d.ts:10684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10684)

#### Returns

`Iterable`\<[`WebpackError`](WebpackError.md), `any`, `any`\>

***

### getExportsType()

> **getExportsType**(`moduleGraph`, `strict?`): `ExportsType`

Defined in: [webpack/types.d.ts:10677](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10677)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### strict?

`boolean`

#### Returns

`ExportsType`

***

### getNumberOfChunks()

> **getNumberOfChunks**(): `number`

Defined in: [webpack/types.d.ts:10672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10672)

#### Returns

`number`

***

### getNumberOfErrors()

> **getNumberOfErrors**(): `number`

Defined in: [webpack/types.d.ts:10685](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10685)

#### Returns

`number`

***

### getNumberOfWarnings()

> **getNumberOfWarnings**(): `number`

Defined in: [webpack/types.d.ts:10682](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10682)

#### Returns

`number`

***

### getRootBlock()

> **getRootBlock**(): `DependenciesBlock`

Defined in: [webpack/types.d.ts:4112](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4112)

#### Returns

`DependenciesBlock`

#### Inherited from

`DependenciesBlock.getRootBlock`

***

### getSideEffectsConnectionState()

> **getSideEffectsConnectionState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:10757](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10757)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

#### Returns

`ConnectionState`

***

### getSourceBasicTypes()

> **getSourceBasicTypes**(): `ReadonlySet`\<`string`\>

Defined in: [webpack/types.d.ts:10740](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10740)

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### Returns

`ReadonlySet`\<`string`\>

***

### getSourceTypes()

> **getSourceTypes**(): `ReadonlySet`\<`string`\>

Defined in: [webpack/types.d.ts:10731](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10731)

#### Returns

`ReadonlySet`\<`string`\>

***

### getUnsafeCacheData()

> **getUnsafeCacheData**(): `UnsafeCacheData`

Defined in: [webpack/types.d.ts:10773](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10773)

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### Returns

`UnsafeCacheData`

***

### getWarnings()

> **getWarnings**(): `Iterable`\<[`WebpackError`](WebpackError.md), `any`, `any`\>

Defined in: [webpack/types.d.ts:10681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10681)

#### Returns

`Iterable`\<[`WebpackError`](WebpackError.md), `any`, `any`\>

***

### hasChunkCondition()

> **hasChunkCondition**(): `boolean`

Defined in: [webpack/types.d.ts:10760](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10760)

#### Returns

`boolean`

***

### hasReasonForChunk()

> **hasReasonForChunk**(`chunk`, `moduleGraph`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:10702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10702)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`boolean`

***

### hasReasons()

> **hasReasons**(`moduleGraph`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:10707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10707)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

***

### identifier()

> **identifier**(): `string`

Defined in: [webpack/types.d.ts:10722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10722)

#### Returns

`string`

***

### invalidateBuild()

> **invalidateBuild**(): `void`

Defined in: [webpack/types.d.ts:10721](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10721)

#### Returns

`void`

***

### isAccessibleInChunk()

> **isAccessibleInChunk**(`chunkGraph`, `chunk`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10692](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10692)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### chunk

[`Chunk`](Chunk.md)

##### ignoreChunk?

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isAccessibleInChunkGroup()

> **isAccessibleInChunkGroup**(`chunkGraph`, `chunkGroup`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10697)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

##### ignoreChunk?

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isEntryModule()

> **isEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:10670](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10670)

#### Returns

`boolean`

***

### isInChunk()

> **isInChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10669](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10669)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isOptional()

> **isOptional**(`moduleGraph`): `boolean`

Defined in: [webpack/types.d.ts:10691](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10691)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

#### Returns

`boolean`

***

### isProvided()

> **isProvided**(`exportName`): `boolean`

Defined in: [webpack/types.d.ts:10674](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10674)

#### Parameters

##### exportName

`string`

#### Returns

`boolean`

***

### libIdent()

> **libIdent**(`options`): `string`

Defined in: [webpack/types.d.ts:10752](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10752)

#### Parameters

##### options

`LibIdentOptions`

#### Returns

`string`

***

### nameForCondition()

> **nameForCondition**(): `string`

Defined in: [webpack/types.d.ts:10753](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10753)

#### Returns

`string`

***

### needBuild()

> **needBuild**(`context`, `callback`): `void`

Defined in: [webpack/types.d.ts:10708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10708)

#### Parameters

##### context

`NeedBuildContext`

##### callback

(`err?`, `needBuild?`) => `void`

#### Returns

`void`

***

### ~~needRebuild()~~

> **needRebuild**(`fileTimestamps`, `contextTimestamps`): `boolean`

Defined in: [webpack/types.d.ts:10717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10717)

Use needBuild instead

#### Parameters

##### fileTimestamps

`Map`\<`string`, `number`\>

##### contextTimestamps

`Map`\<`string`, `number`\>

#### Returns

`boolean`

#### Deprecated

***

### originalSource()

> **originalSource**(): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:10779](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10779)

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

***

### readableIdentifier()

> **readableIdentifier**(`requestShortener`): `string`

Defined in: [webpack/types.d.ts:10723](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10723)

#### Parameters

##### requestShortener

`RequestShortener`

#### Returns

`string`

***

### removeChunk()

> **removeChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:10668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10668)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### removeDependency()

> **removeDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4120](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4120)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.removeDependency`

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4127](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4127)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../interfaces/ObjectSerializerContext.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.serialize`

***

### size()

> **size**(`type?`): `number`

Defined in: [webpack/types.d.ts:10751](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10751)

#### Parameters

##### type?

`string`

#### Returns

`number`

***

### ~~source()~~

> **source**(`dependencyTemplates`, `runtimeTemplate`, `type?`): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:10746](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10746)

Use codeGeneration() instead

#### Parameters

##### dependencyTemplates

`DependencyTemplates`

##### runtimeTemplate

`RuntimeTemplate`

##### type?

`string`

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

#### Deprecated

***

### updateCacheModule()

> **updateCacheModule**(`module`): `void`

Defined in: [webpack/types.d.ts:10767](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10767)

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### Parameters

##### module

`Module`

#### Returns

`void`

***

### updateHash()

> **updateHash**(`hash`, `context`): `void`

Defined in: [webpack/types.d.ts:4126](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4126)

#### Parameters

##### hash

`Hash`

##### context

`UpdateHashContextDependency`

#### Returns

`void`

#### Inherited from

`DependenciesBlock.updateHash`
