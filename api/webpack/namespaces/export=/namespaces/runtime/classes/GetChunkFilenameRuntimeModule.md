---
title: GetChunkFilenameRuntimeModule
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [runtime](../index.md) / GetChunkFilenameRuntimeModule

# Class: GetChunkFilenameRuntimeModule

Defined in: [webpack/types.d.ts:6412](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6412)

## Extends

- [`RuntimeModule`](../../../../../../classes/RuntimeModule.md)

## Constructors

### Constructor

> **new GetChunkFilenameRuntimeModule**(`contentType`, `name`, `global`, `getFilenameForChunk`, `allChunks`): `GetChunkFilenameRuntimeModule`

Defined in: [webpack/types.d.ts:6413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6413)

#### Parameters

##### contentType

`string`

##### name

`string`

##### global

`string`

##### getFilenameForChunk

(`chunk`) => `string` \| `false` \| (`pathData`, `assetInfo?`) => `string`

##### allChunks

`boolean`

#### Returns

`GetChunkFilenameRuntimeModule`

#### Overrides

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`constructor`](../../../../../../classes/RuntimeModule.md#constructor)

## Properties

### allChunks

> **allChunks**: `boolean`

Defined in: [webpack/types.d.ts:6430](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6430)

***

### blocks

> **blocks**: [`AsyncDependenciesBlock`](../../../../../../classes/AsyncDependenciesBlock.md)[]

Defined in: [webpack/types.d.ts:4110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4110)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`blocks`](../../../../../../classes/RuntimeModule.md#blocks)

***

### buildInfo?

> `optional` **buildInfo**: `BuildInfo`

Defined in: [webpack/types.d.ts:10642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10642)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`buildInfo`](../../../../../../classes/RuntimeModule.md#buildinfo)

***

### buildMeta?

> `optional` **buildMeta**: `BuildMeta`

Defined in: [webpack/types.d.ts:10641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10641)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`buildMeta`](../../../../../../classes/RuntimeModule.md#buildmeta)

***

### chunk?

> `optional` **chunk**: [`Chunk`](../../../../../../classes/Chunk.md)

Defined in: [webpack/types.d.ts:16566](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16566)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`chunk`](../../../../../../classes/RuntimeModule.md#chunk)

***

### chunkGraph?

> `optional` **chunkGraph**: [`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

Defined in: [webpack/types.d.ts:16567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16567)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`chunkGraph`](../../../../../../classes/RuntimeModule.md#chunkgraph)

***

### codeGenerationDependencies?

> `optional` **codeGenerationDependencies**: [`Dependency`](../../../../../../classes/Dependency.md)[]

Defined in: [webpack/types.d.ts:10644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10644)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`codeGenerationDependencies`](../../../../../../classes/RuntimeModule.md#codegenerationdependencies)

***

### compilation?

> `optional` **compilation**: [`Compilation`](../../../../../../classes/Compilation.md)

Defined in: [webpack/types.d.ts:16565](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16565)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`compilation`](../../../../../../classes/RuntimeModule.md#compilation)

***

### contentType

> **contentType**: `string`

Defined in: [webpack/types.d.ts:6425](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6425)

***

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:10632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10632)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`context`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#context)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:10635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10635)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`debugId`](../../../../../../classes/RuntimeModule.md#debugid)

***

### dependencies

> **dependencies**: [`Dependency`](../../../../../../classes/Dependency.md)[]

Defined in: [webpack/types.d.ts:4109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4109)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`dependencies`](../../../../../../classes/RuntimeModule.md#dependencies)

***

### dependentHash

> **dependentHash**: `boolean`

Defined in: [webpack/types.d.ts:16569](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16569)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`dependentHash`](../../../../../../classes/RuntimeModule.md#dependenthash)

***

### depth

> **depth**: `number`

Defined in: [webpack/types.d.ts:10655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10655)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`depth`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#depth)

***

### factoryMeta?

> `optional` **factoryMeta**: `FactoryMeta`

Defined in: [webpack/types.d.ts:10637](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10637)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`factoryMeta`](../../../../../../classes/RuntimeModule.md#factorymeta)

***

### fullHash

> **fullHash**: `boolean`

Defined in: [webpack/types.d.ts:16568](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16568)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`fullHash`](../../../../../../classes/RuntimeModule.md#fullhash)

***

### getFilenameForChunk()

> **getFilenameForChunk**: (`chunk`) => `string` \| `false` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:6427](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6427)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`string` \| `false` \| (`pathData`, `assetInfo?`) => `string`

***

### global

> **global**: `string`

Defined in: [webpack/types.d.ts:6426](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6426)

***

### hot

> **hot**: `boolean`

Defined in: [webpack/types.d.ts:10640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10640)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hot`](../../../../../../classes/RuntimeModule.md#hot)

***

### ~~id~~

> **id**: `string` \| `number`

Defined in: [webpack/types.d.ts:10649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10649)

#### Deprecated

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`id`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#id)

***

### index

> **index**: `number`

Defined in: [webpack/types.d.ts:10653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10653)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`index`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#index)

***

### index2

> **index2**: `number`

Defined in: [webpack/types.d.ts:10654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10654)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`index2`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#index2)

***

### issuer?

> `optional` **issuer**: [`Module`](../../../../../../classes/Module.md)

Defined in: [webpack/types.d.ts:10656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10656)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`issuer`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#issuer)

***

### layer

> **layer**: `string`

Defined in: [webpack/types.d.ts:10633](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10633)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`layer`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#layer)

***

### name

> **name**: `string`

Defined in: [webpack/types.d.ts:16563](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16563)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`name`](../../../../../../classes/RuntimeModule.md#name)

***

### needId

> **needId**: `boolean`

Defined in: [webpack/types.d.ts:10634](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10634)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`needId`](../../../../../../classes/RuntimeModule.md#needid)

***

### parent?

> `optional` **parent**: `DependenciesBlock`

Defined in: [webpack/types.d.ts:4111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4111)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`parent`](../../../../../../classes/RuntimeModule.md#parent)

***

### presentationalDependencies?

> `optional` **presentationalDependencies**: [`Dependency`](../../../../../../classes/Dependency.md)[]

Defined in: [webpack/types.d.ts:10643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10643)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`presentationalDependencies`](../../../../../../classes/RuntimeModule.md#presentationaldependencies)

***

### profile?

> `optional` **profile**: `ModuleProfile`

Defined in: [webpack/types.d.ts:10652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10652)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`profile`](../../../../../../classes/RuntimeModule.md#profile)

***

### resolveOptions?

> `optional` **resolveOptions**: [`ResolveOptions`](../../../../../../interfaces/ResolveOptions.md)

Defined in: [webpack/types.d.ts:10636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10636)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`resolveOptions`](../../../../../../classes/RuntimeModule.md#resolveoptions)

***

### stage

> **stage**: `number`

Defined in: [webpack/types.d.ts:16564](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16564)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`stage`](../../../../../../classes/RuntimeModule.md#stage)

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:10631](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10631)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`type`](../../../../../../classes/RuntimeModule.md#type)

***

### used

> **used**: `any`

Defined in: [webpack/types.d.ts:10790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10790)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`used`](../../../../../../classes/RuntimeModule.md#used)

***

### useSimpleSourceMap

> **useSimpleSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10639)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`useSimpleSourceMap`](../../../../../../classes/RuntimeModule.md#usesimplesourcemap)

***

### useSourceMap

> **useSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10638)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`useSourceMap`](../../../../../../classes/RuntimeModule.md#usesourcemap)

***

### STAGE\_ATTACH

> `static` **STAGE\_ATTACH**: `number`

Defined in: [webpack/types.d.ts:6445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6445)

Runtime modules which attach to handlers of other runtime modules

#### Overrides

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`STAGE_ATTACH`](../../../../../../classes/RuntimeModule.md#stage_attach)

***

### STAGE\_BASIC

> `static` **STAGE\_BASIC**: `number`

Defined in: [webpack/types.d.ts:6440](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6440)

Runtime modules with simple dependencies on other runtime modules

#### Overrides

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`STAGE_BASIC`](../../../../../../classes/RuntimeModule.md#stage_basic)

***

### STAGE\_NORMAL

> `static` **STAGE\_NORMAL**: `number`

Defined in: [webpack/types.d.ts:6435](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6435)

Runtime modules without any dependencies to other runtime modules

#### Overrides

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`STAGE_NORMAL`](../../../../../../classes/RuntimeModule.md#stage_normal)

***

### STAGE\_TRIGGER

> `static` **STAGE\_TRIGGER**: `number`

Defined in: [webpack/types.d.ts:6450](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6450)

Runtime modules which trigger actions on bootstrap

#### Overrides

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`STAGE_TRIGGER`](../../../../../../classes/RuntimeModule.md#stage_trigger)

## Accessors

### chunksIterable

#### Get Signature

> **get** **chunksIterable**(): `Iterable`\<[`Chunk`](../../../../../../classes/Chunk.md)\>

Defined in: [webpack/types.d.ts:10673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10673)

##### Returns

`Iterable`\<[`Chunk`](../../../../../../classes/Chunk.md)\>

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`chunksIterable`](../../../../../../classes/RuntimeModule.md#chunksiterable)

***

### errors

#### Get Signature

> **get** **errors**(): `any`

Defined in: [webpack/types.d.ts:10788](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10788)

##### Returns

`any`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`errors`](../../../../../../classes/RuntimeModule.md#errors)

***

### exportsArgument

#### Get Signature

> **get** **exportsArgument**(): `string`

Defined in: [webpack/types.d.ts:10675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10675)

##### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`exportsArgument`](../../../../../../classes/RuntimeModule.md#exportsargument)

***

### hasEqualsChunks

#### Get Signature

> **get** **hasEqualsChunks**(): `any`

Defined in: [webpack/types.d.ts:10786](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10786)

##### Returns

`any`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hasEqualsChunks`](../../../../../../classes/RuntimeModule.md#hasequalschunks)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:10650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10650)

##### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hash`](../../../../../../classes/RuntimeModule.md#hash)

***

### isUsed

#### Get Signature

> **get** **isUsed**(): `any`

Defined in: [webpack/types.d.ts:10787](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10787)

##### Returns

`any`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isUsed`](../../../../../../classes/RuntimeModule.md#isused)

***

### moduleArgument

#### Get Signature

> **get** **moduleArgument**(): `string`

Defined in: [webpack/types.d.ts:10676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10676)

##### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`moduleArgument`](../../../../../../classes/RuntimeModule.md#moduleargument)

***

### optimizationBailout

#### Get Signature

> **get** **optimizationBailout**(): (`string` \| (`requestShortener`) => `string`)[]

Defined in: [webpack/types.d.ts:10662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10662)

##### Deprecated

##### Returns

(`string` \| (`requestShortener`) => `string`)[]

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`optimizationBailout`](../../../../../../classes/RuntimeModule.md#optimizationbailout)

***

### optional

#### Get Signature

> **get** **optional**(): `boolean`

Defined in: [webpack/types.d.ts:10666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10666)

##### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`optional`](../../../../../../classes/RuntimeModule.md#optional)

***

### renderedHash

#### Get Signature

> **get** **renderedHash**(): `string`

Defined in: [webpack/types.d.ts:10651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10651)

##### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`renderedHash`](../../../../../../classes/RuntimeModule.md#renderedhash)

***

### usedExports

#### Get Signature

> **get** **usedExports**(): `boolean` \| `SortableSet`\<`string`\>

Defined in: [webpack/types.d.ts:10657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10657)

##### Returns

`boolean` \| `SortableSet`\<`string`\>

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md).[`usedExports`](../../esm/classes/ModuleChunkLoadingRuntimeModule.md#usedexports)

***

### warnings

#### Get Signature

> **get** **warnings**(): `any`

Defined in: [webpack/types.d.ts:10789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10789)

##### Returns

`any`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`warnings`](../../../../../../classes/RuntimeModule.md#warnings)

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [webpack/types.d.ts:4118](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4118)

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### Parameters

##### block

[`AsyncDependenciesBlock`](../../../../../../classes/AsyncDependenciesBlock.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addBlock`](../../../../../../classes/RuntimeModule.md#addblock)

***

### addCacheDependencies()

> **addCacheDependencies**(`fileDependencies`, `contextDependencies`, `missingDependencies`, `buildDependencies`): `void`

Defined in: [webpack/types.d.ts:10780](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10780)

#### Parameters

##### fileDependencies

[`LazySet`](../../util/classes/LazySet.md)\<`string`\>

##### contextDependencies

[`LazySet`](../../util/classes/LazySet.md)\<`string`\>

##### missingDependencies

[`LazySet`](../../util/classes/LazySet.md)\<`string`\>

##### buildDependencies

[`LazySet`](../../util/classes/LazySet.md)\<`string`\>

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addCacheDependencies`](../../../../../../classes/RuntimeModule.md#addcachedependencies)

***

### addChunk()

> **addChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10667)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addChunk`](../../../../../../classes/RuntimeModule.md#addchunk)

***

### addCodeGenerationDependency()

> **addCodeGenerationDependency**(`codeGenerationDependency`): `void`

Defined in: [webpack/types.d.ts:10679](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10679)

#### Parameters

##### codeGenerationDependency

[`Dependency`](../../../../../../classes/Dependency.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addCodeGenerationDependency`](../../../../../../classes/RuntimeModule.md#addcodegenerationdependency)

***

### addDependency()

> **addDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4119)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addDependency`](../../../../../../classes/RuntimeModule.md#adddependency)

***

### addError()

> **addError**(`error`): `void`

Defined in: [webpack/types.d.ts:10683](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10683)

#### Parameters

##### error

[`WebpackError`](../../../../../../classes/WebpackError.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addError`](../../../../../../classes/RuntimeModule.md#adderror)

***

### addPresentationalDependency()

> **addPresentationalDependency**(`presentationalDependency`): `void`

Defined in: [webpack/types.d.ts:10678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10678)

#### Parameters

##### presentationalDependency

[`Dependency`](../../../../../../classes/Dependency.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addPresentationalDependency`](../../../../../../classes/RuntimeModule.md#addpresentationaldependency)

***

### addWarning()

> **addWarning**(`warning`): `void`

Defined in: [webpack/types.d.ts:10680](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10680)

#### Parameters

##### warning

[`WebpackError`](../../../../../../classes/WebpackError.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`addWarning`](../../../../../../classes/RuntimeModule.md#addwarning)

***

### attach()

> **attach**(`compilation`, `chunk`, `chunkGraph?`): `void`

Defined in: [webpack/types.d.ts:16570](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16570)

#### Parameters

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### chunkGraph?

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`attach`](../../../../../../classes/RuntimeModule.md#attach)

***

### build()

> **build**(`options`, `compilation`, `resolver`, `fs`, `callback`): `void`

Defined in: [webpack/types.d.ts:10724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10724)

#### Parameters

##### options

`WebpackOptionsNormalizedWithDefaults`

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

##### resolver

`ResolverWithOptions`

##### fs

[`InputFileSystem`](../../../../../../interfaces/InputFileSystem.md)

##### callback

(`err?`) => `void`

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`build`](../../../../../../classes/RuntimeModule.md#build)

***

### chunkCondition()

> **chunkCondition**(`chunk`, `compilation`): `boolean`

Defined in: [webpack/types.d.ts:10759](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10759)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`chunkCondition`](../../../../../../classes/RuntimeModule.md#chunkcondition)

***

### cleanupForCache()

> **cleanupForCache**(): `void`

Defined in: [webpack/types.d.ts:10778](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10778)

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`cleanupForCache`](../../../../../../classes/RuntimeModule.md#cleanupforcache)

***

### clearDependenciesAndBlocks()

> **clearDependenciesAndBlocks**(): `void`

Defined in: [webpack/types.d.ts:4125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4125)

Removes all dependencies and blocks

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`clearDependenciesAndBlocks`](../../../../../../classes/RuntimeModule.md#cleardependenciesandblocks)

***

### clearWarningsAndErrors()

> **clearWarningsAndErrors**(): `void`

Defined in: [webpack/types.d.ts:10690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10690)

removes all warnings and errors

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`clearWarningsAndErrors`](../../../../../../classes/RuntimeModule.md#clearwarningsanderrors)

***

### codeGeneration()

> **codeGeneration**(`context`): `CodeGenerationResult`

Defined in: [webpack/types.d.ts:10758](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10758)

#### Parameters

##### context

`CodeGenerationContext`

#### Returns

`CodeGenerationResult`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`codeGeneration`](../../../../../../classes/RuntimeModule.md#codegeneration)

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4128)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../../../interfaces/ObjectDeserializerContext.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`deserialize`](../../../../../../classes/RuntimeModule.md#deserialize)

***

### generate()

> **generate**(): `string`

Defined in: [webpack/types.d.ts:16571](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16571)

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`generate`](../../../../../../classes/RuntimeModule.md#generate)

***

### getChunks()

> **getChunks**(): [`Chunk`](../../../../../../classes/Chunk.md)[]

Defined in: [webpack/types.d.ts:10671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10671)

#### Returns

[`Chunk`](../../../../../../classes/Chunk.md)[]

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getChunks`](../../../../../../classes/RuntimeModule.md#getchunks)

***

### getConcatenationBailoutReason()

> **getConcatenationBailoutReason**(`context`): `string`

Defined in: [webpack/types.d.ts:10754](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10754)

#### Parameters

##### context

`ConcatenationBailoutReasonContext`

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getConcatenationBailoutReason`](../../../../../../classes/RuntimeModule.md#getconcatenationbailoutreason)

***

### getErrors()

> **getErrors**(): `Iterable`\<[`WebpackError`](../../../../../../classes/WebpackError.md), `any`, `any`\>

Defined in: [webpack/types.d.ts:10684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10684)

#### Returns

`Iterable`\<[`WebpackError`](../../../../../../classes/WebpackError.md), `any`, `any`\>

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getErrors`](../../../../../../classes/RuntimeModule.md#geterrors)

***

### getExportsType()

> **getExportsType**(`moduleGraph`, `strict?`): `ExportsType`

Defined in: [webpack/types.d.ts:10677](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10677)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

##### strict?

`boolean`

#### Returns

`ExportsType`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getExportsType`](../../../../../../classes/RuntimeModule.md#getexportstype)

***

### getGeneratedCode()

> **getGeneratedCode**(): `string`

Defined in: [webpack/types.d.ts:16572](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16572)

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getGeneratedCode`](../../../../../../classes/RuntimeModule.md#getgeneratedcode)

***

### getNumberOfChunks()

> **getNumberOfChunks**(): `number`

Defined in: [webpack/types.d.ts:10672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10672)

#### Returns

`number`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getNumberOfChunks`](../../../../../../classes/RuntimeModule.md#getnumberofchunks)

***

### getNumberOfErrors()

> **getNumberOfErrors**(): `number`

Defined in: [webpack/types.d.ts:10685](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10685)

#### Returns

`number`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getNumberOfErrors`](../../../../../../classes/RuntimeModule.md#getnumberoferrors)

***

### getNumberOfWarnings()

> **getNumberOfWarnings**(): `number`

Defined in: [webpack/types.d.ts:10682](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10682)

#### Returns

`number`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getNumberOfWarnings`](../../../../../../classes/RuntimeModule.md#getnumberofwarnings)

***

### getRootBlock()

> **getRootBlock**(): `DependenciesBlock`

Defined in: [webpack/types.d.ts:4112](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4112)

#### Returns

`DependenciesBlock`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getRootBlock`](../../../../../../classes/RuntimeModule.md#getrootblock)

***

### getSideEffectsConnectionState()

> **getSideEffectsConnectionState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:10757](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10757)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`ConnectionState`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getSideEffectsConnectionState`](../../../../../../classes/RuntimeModule.md#getsideeffectsconnectionstate)

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

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getSourceBasicTypes`](../../../../../../classes/RuntimeModule.md#getsourcebasictypes)

***

### getSourceTypes()

> **getSourceTypes**(): `ReadonlySet`\<`string`\>

Defined in: [webpack/types.d.ts:10731](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10731)

#### Returns

`ReadonlySet`\<`string`\>

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getSourceTypes`](../../../../../../classes/RuntimeModule.md#getsourcetypes)

***

### getUnsafeCacheData()

> **getUnsafeCacheData**(): `UnsafeCacheData`

Defined in: [webpack/types.d.ts:10773](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10773)

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### Returns

`UnsafeCacheData`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getUnsafeCacheData`](../../../../../../classes/RuntimeModule.md#getunsafecachedata)

***

### getWarnings()

> **getWarnings**(): `Iterable`\<[`WebpackError`](../../../../../../classes/WebpackError.md), `any`, `any`\>

Defined in: [webpack/types.d.ts:10681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10681)

#### Returns

`Iterable`\<[`WebpackError`](../../../../../../classes/WebpackError.md), `any`, `any`\>

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`getWarnings`](../../../../../../classes/RuntimeModule.md#getwarnings)

***

### hasChunkCondition()

> **hasChunkCondition**(): `boolean`

Defined in: [webpack/types.d.ts:10760](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10760)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hasChunkCondition`](../../../../../../classes/RuntimeModule.md#haschunkcondition)

***

### hasReasonForChunk()

> **hasReasonForChunk**(`chunk`, `moduleGraph`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:10702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10702)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hasReasonForChunk`](../../../../../../classes/RuntimeModule.md#hasreasonforchunk)

***

### hasReasons()

> **hasReasons**(`moduleGraph`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:10707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10707)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`hasReasons`](../../../../../../classes/RuntimeModule.md#hasreasons)

***

### identifier()

> **identifier**(): `string`

Defined in: [webpack/types.d.ts:10722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10722)

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`identifier`](../../../../../../classes/RuntimeModule.md#identifier)

***

### invalidateBuild()

> **invalidateBuild**(): `void`

Defined in: [webpack/types.d.ts:10721](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10721)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`invalidateBuild`](../../../../../../classes/RuntimeModule.md#invalidatebuild)

***

### isAccessibleInChunk()

> **isAccessibleInChunk**(`chunkGraph`, `chunk`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10692](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10692)

#### Parameters

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### ignoreChunk?

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isAccessibleInChunk`](../../../../../../classes/RuntimeModule.md#isaccessibleinchunk)

***

### isAccessibleInChunkGroup()

> **isAccessibleInChunkGroup**(`chunkGraph`, `chunkGroup`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10697)

#### Parameters

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

##### chunkGroup

[`ChunkGroup`](../../../../../../classes/ChunkGroup.md)

##### ignoreChunk?

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isAccessibleInChunkGroup`](../../../../../../classes/RuntimeModule.md#isaccessibleinchunkgroup)

***

### isEntryModule()

> **isEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:10670](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10670)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isEntryModule`](../../../../../../classes/RuntimeModule.md#isentrymodule)

***

### isInChunk()

> **isInChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10669](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10669)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isInChunk`](../../../../../../classes/RuntimeModule.md#isinchunk)

***

### isOptional()

> **isOptional**(`moduleGraph`): `boolean`

Defined in: [webpack/types.d.ts:10691](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10691)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph.md)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isOptional`](../../../../../../classes/RuntimeModule.md#isoptional)

***

### isProvided()

> **isProvided**(`exportName`): `boolean`

Defined in: [webpack/types.d.ts:10674](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10674)

#### Parameters

##### exportName

`string`

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`isProvided`](../../../../../../classes/RuntimeModule.md#isprovided)

***

### libIdent()

> **libIdent**(`options`): `string`

Defined in: [webpack/types.d.ts:10752](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10752)

#### Parameters

##### options

`LibIdentOptions`

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`libIdent`](../../../../../../classes/RuntimeModule.md#libident)

***

### nameForCondition()

> **nameForCondition**(): `string`

Defined in: [webpack/types.d.ts:10753](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10753)

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`nameForCondition`](../../../../../../classes/RuntimeModule.md#nameforcondition)

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

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`needBuild`](../../../../../../classes/RuntimeModule.md#needbuild)

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

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`needRebuild`](../../../../../../classes/RuntimeModule.md#needrebuild)

***

### originalSource()

> **originalSource**(): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:10779](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10779)

#### Returns

[`Source`](../../sources/classes/Source.md)

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`originalSource`](../../../../../../classes/RuntimeModule.md#originalsource)

***

### readableIdentifier()

> **readableIdentifier**(`requestShortener`): `string`

Defined in: [webpack/types.d.ts:10723](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10723)

#### Parameters

##### requestShortener

`RequestShortener`

#### Returns

`string`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`readableIdentifier`](../../../../../../classes/RuntimeModule.md#readableidentifier)

***

### removeChunk()

> **removeChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:10668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10668)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`removeChunk`](../../../../../../classes/RuntimeModule.md#removechunk)

***

### removeDependency()

> **removeDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4120](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4120)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`removeDependency`](../../../../../../classes/RuntimeModule.md#removedependency)

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4127](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4127)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../../../interfaces/ObjectSerializerContext.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`serialize`](../../../../../../classes/RuntimeModule.md#serialize)

***

### shouldIsolate()

> **shouldIsolate**(): `boolean`

Defined in: [webpack/types.d.ts:16573](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16573)

#### Returns

`boolean`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`shouldIsolate`](../../../../../../classes/RuntimeModule.md#shouldisolate)

***

### size()

> **size**(`type?`): `number`

Defined in: [webpack/types.d.ts:10751](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10751)

#### Parameters

##### type?

`string`

#### Returns

`number`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`size`](../../../../../../classes/RuntimeModule.md#size)

***

### ~~source()~~

> **source**(`dependencyTemplates`, `runtimeTemplate`, `type?`): [`Source`](../../sources/classes/Source.md)

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

[`Source`](../../sources/classes/Source.md)

#### Deprecated

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`source`](../../../../../../classes/RuntimeModule.md#source)

***

### updateCacheModule()

> **updateCacheModule**(`module`): `void`

Defined in: [webpack/types.d.ts:10767](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10767)

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### Parameters

##### module

[`Module`](../../../../../../classes/Module.md)

#### Returns

`void`

#### Inherited from

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`updateCacheModule`](../../../../../../classes/RuntimeModule.md#updatecachemodule)

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

[`RuntimeModule`](../../../../../../classes/RuntimeModule.md).[`updateHash`](../../../../../../classes/RuntimeModule.md#updatehash)
