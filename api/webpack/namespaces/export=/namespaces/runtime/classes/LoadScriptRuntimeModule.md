---
title: LoadScriptRuntimeModule
---

[webpack](../../../../../../globals) / [export=](../../../index) / [runtime](../index) / LoadScriptRuntimeModule

# Class: LoadScriptRuntimeModule

Defined in: [webpack/types.d.ts:9897](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9897)

## Extends

* `HelperRuntimeModule`

## Constructors

### Constructor

> **new LoadScriptRuntimeModule**(`withCreateScriptUrl?`, `withFetchPriority?`): `LoadScriptRuntimeModule`

Defined in: [webpack/types.d.ts:9898](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9898)

#### Parameters

##### withCreateScriptUrl?

`boolean`

##### withFetchPriority?

`boolean`

#### Returns

`LoadScriptRuntimeModule`

#### Overrides

`HelperRuntimeModule.constructor`

## Properties

### blocks

> **blocks**: [`AsyncDependenciesBlock`](../../../../../../classes/AsyncDependenciesBlock)\[]

Defined in: [webpack/types.d.ts:4110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4110)

#### Inherited from

`HelperRuntimeModule.blocks`

***

### buildInfo?

> `optional` **buildInfo**: `BuildInfo`

Defined in: [webpack/types.d.ts:10642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10642)

#### Inherited from

`HelperRuntimeModule.buildInfo`

***

### buildMeta?

> `optional` **buildMeta**: `BuildMeta`

Defined in: [webpack/types.d.ts:10641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10641)

#### Inherited from

`HelperRuntimeModule.buildMeta`

***

### chunk?

> `optional` **chunk**: [`Chunk`](../../../../../../classes/Chunk)

Defined in: [webpack/types.d.ts:16566](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16566)

#### Inherited from

`HelperRuntimeModule.chunk`

***

### chunkGraph?

> `optional` **chunkGraph**: [`ChunkGraph`](../../../../../../classes/ChunkGraph)

Defined in: [webpack/types.d.ts:16567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16567)

#### Inherited from

`HelperRuntimeModule.chunkGraph`

***

### codeGenerationDependencies?

> `optional` **codeGenerationDependencies**: [`Dependency`](../../../../../../classes/Dependency)\[]

Defined in: [webpack/types.d.ts:10644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10644)

#### Inherited from

`HelperRuntimeModule.codeGenerationDependencies`

***

### compilation?

> `optional` **compilation**: [`Compilation`](../../../../../../classes/Compilation)

Defined in: [webpack/types.d.ts:16565](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16565)

#### Inherited from

`HelperRuntimeModule.compilation`

***

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:10632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10632)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`context`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:10635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10635)

#### Inherited from

`HelperRuntimeModule.debugId`

***

### dependencies

> **dependencies**: [`Dependency`](../../../../../../classes/Dependency)\[]

Defined in: [webpack/types.d.ts:4109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4109)

#### Inherited from

`HelperRuntimeModule.dependencies`

***

### dependentHash

> **dependentHash**: `boolean`

Defined in: [webpack/types.d.ts:16569](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16569)

#### Inherited from

`HelperRuntimeModule.dependentHash`

***

### depth

> **depth**: `number`

Defined in: [webpack/types.d.ts:10655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10655)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`depth`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### factoryMeta?

> `optional` **factoryMeta**: `FactoryMeta`

Defined in: [webpack/types.d.ts:10637](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10637)

#### Inherited from

`HelperRuntimeModule.factoryMeta`

***

### fullHash

> **fullHash**: `boolean`

Defined in: [webpack/types.d.ts:16568](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16568)

#### Inherited from

`HelperRuntimeModule.fullHash`

***

### hot

> **hot**: `boolean`

Defined in: [webpack/types.d.ts:10640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10640)

#### Inherited from

`HelperRuntimeModule.hot`

***

### ~~id~~

> **id**: `string` | `number`

Defined in: [webpack/types.d.ts:10649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10649)

#### Deprecated

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`id`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### index

> **index**: `number`

Defined in: [webpack/types.d.ts:10653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10653)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`index`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### index2

> **index2**: `number`

Defined in: [webpack/types.d.ts:10654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10654)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`index2`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### issuer?

> `optional` **issuer**: [`Module`](../../../../../../classes/Module)

Defined in: [webpack/types.d.ts:10656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10656)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`issuer`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### layer

> **layer**: `string`

Defined in: [webpack/types.d.ts:10633](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10633)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`layer`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### name

> **name**: `string`

Defined in: [webpack/types.d.ts:16563](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16563)

#### Inherited from

`HelperRuntimeModule.name`

***

### needId

> **needId**: `boolean`

Defined in: [webpack/types.d.ts:10634](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10634)

#### Inherited from

`HelperRuntimeModule.needId`

***

### parent?

> `optional` **parent**: `DependenciesBlock`

Defined in: [webpack/types.d.ts:4111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4111)

#### Inherited from

`HelperRuntimeModule.parent`

***

### presentationalDependencies?

> `optional` **presentationalDependencies**: [`Dependency`](../../../../../../classes/Dependency)\[]

Defined in: [webpack/types.d.ts:10643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10643)

#### Inherited from

`HelperRuntimeModule.presentationalDependencies`

***

### profile?

> `optional` **profile**: `ModuleProfile`

Defined in: [webpack/types.d.ts:10652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10652)

#### Inherited from

`HelperRuntimeModule.profile`

***

### resolveOptions?

> `optional` **resolveOptions**: [`ResolveOptions`](../../../../../../interfaces/ResolveOptions)

Defined in: [webpack/types.d.ts:10636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10636)

#### Inherited from

`HelperRuntimeModule.resolveOptions`

***

### stage

> **stage**: `number`

Defined in: [webpack/types.d.ts:16564](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16564)

#### Inherited from

`HelperRuntimeModule.stage`

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:10631](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10631)

#### Inherited from

`HelperRuntimeModule.type`

***

### used

> **used**: `any`

Defined in: [webpack/types.d.ts:10790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10790)

#### Inherited from

`HelperRuntimeModule.used`

***

### useSimpleSourceMap

> **useSimpleSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10639)

#### Inherited from

`HelperRuntimeModule.useSimpleSourceMap`

***

### useSourceMap

> **useSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10638)

#### Inherited from

`HelperRuntimeModule.useSourceMap`

***

### STAGE\_ATTACH

> `static` **STAGE\_ATTACH**: `number`

Defined in: [webpack/types.d.ts:9916](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9916)

Runtime modules which attach to handlers of other runtime modules

#### Overrides

`HelperRuntimeModule.STAGE_ATTACH`

***

### STAGE\_BASIC

> `static` **STAGE\_BASIC**: `number`

Defined in: [webpack/types.d.ts:9911](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9911)

Runtime modules with simple dependencies on other runtime modules

#### Overrides

`HelperRuntimeModule.STAGE_BASIC`

***

### STAGE\_NORMAL

> `static` **STAGE\_NORMAL**: `number`

Defined in: [webpack/types.d.ts:9906](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9906)

Runtime modules without any dependencies to other runtime modules

#### Overrides

`HelperRuntimeModule.STAGE_NORMAL`

***

### STAGE\_TRIGGER

> `static` **STAGE\_TRIGGER**: `number`

Defined in: [webpack/types.d.ts:9921](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9921)

Runtime modules which trigger actions on bootstrap

#### Overrides

`HelperRuntimeModule.STAGE_TRIGGER`

## Accessors

### chunksIterable

#### Get Signature

> **get** **chunksIterable**(): `Iterable`<[`Chunk`](../../../../../../classes/Chunk)>

Defined in: [webpack/types.d.ts:10673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10673)

##### Returns

`Iterable`<[`Chunk`](../../../../../../classes/Chunk)>

#### Inherited from

`HelperRuntimeModule.chunksIterable`

***

### errors

#### Get Signature

> **get** **errors**(): `any`

Defined in: [webpack/types.d.ts:10788](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10788)

##### Returns

`any`

#### Inherited from

`HelperRuntimeModule.errors`

***

### exportsArgument

#### Get Signature

> **get** **exportsArgument**(): `string`

Defined in: [webpack/types.d.ts:10675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10675)

##### Returns

`string`

#### Inherited from

`HelperRuntimeModule.exportsArgument`

***

### hasEqualsChunks

#### Get Signature

> **get** **hasEqualsChunks**(): `any`

Defined in: [webpack/types.d.ts:10786](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10786)

##### Returns

`any`

#### Inherited from

`HelperRuntimeModule.hasEqualsChunks`

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:10650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10650)

##### Returns

`string`

#### Inherited from

`HelperRuntimeModule.hash`

***

### isUsed

#### Get Signature

> **get** **isUsed**(): `any`

Defined in: [webpack/types.d.ts:10787](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10787)

##### Returns

`any`

#### Inherited from

`HelperRuntimeModule.isUsed`

***

### moduleArgument

#### Get Signature

> **get** **moduleArgument**(): `string`

Defined in: [webpack/types.d.ts:10676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10676)

##### Returns

`string`

#### Inherited from

`HelperRuntimeModule.moduleArgument`

***

### optimizationBailout

#### Get Signature

> **get** **optimizationBailout**(): (`string` | (`requestShortener`) => `string`)\[]

Defined in: [webpack/types.d.ts:10662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10662)

##### Deprecated

##### Returns

(`string` | (`requestShortener`) => `string`)\[]

#### Inherited from

`HelperRuntimeModule.optimizationBailout`

***

### optional

#### Get Signature

> **get** **optional**(): `boolean`

Defined in: [webpack/types.d.ts:10666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10666)

##### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.optional`

***

### renderedHash

#### Get Signature

> **get** **renderedHash**(): `string`

Defined in: [webpack/types.d.ts:10651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10651)

##### Returns

`string`

#### Inherited from

`HelperRuntimeModule.renderedHash`

***

### usedExports

#### Get Signature

> **get** **usedExports**(): `boolean` | `SortableSet`<`string`>

Defined in: [webpack/types.d.ts:10657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10657)

##### Returns

`boolean` | `SortableSet`<`string`>

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../../esm/classes/ModuleChunkLoadingRuntimeModule).[`usedExports`](../../esm/classes/ModuleChunkLoadingRuntimeModule)

***

### warnings

#### Get Signature

> **get** **warnings**(): `any`

Defined in: [webpack/types.d.ts:10789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10789)

##### Returns

`any`

#### Inherited from

`HelperRuntimeModule.warnings`

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [webpack/types.d.ts:4118](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4118)

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### Parameters

##### block

[`AsyncDependenciesBlock`](../../../../../../classes/AsyncDependenciesBlock)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addBlock`

***

### addCacheDependencies()

> **addCacheDependencies**(`fileDependencies`, `contextDependencies`, `missingDependencies`, `buildDependencies`): `void`

Defined in: [webpack/types.d.ts:10780](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10780)

#### Parameters

##### fileDependencies

[`LazySet`](../../util/classes/LazySet)<`string`>

##### contextDependencies

[`LazySet`](../../util/classes/LazySet)<`string`>

##### missingDependencies

[`LazySet`](../../util/classes/LazySet)<`string`>

##### buildDependencies

[`LazySet`](../../util/classes/LazySet)<`string`>

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addCacheDependencies`

***

### addChunk()

> **addChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10667)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.addChunk`

***

### addCodeGenerationDependency()

> **addCodeGenerationDependency**(`codeGenerationDependency`): `void`

Defined in: [webpack/types.d.ts:10679](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10679)

#### Parameters

##### codeGenerationDependency

[`Dependency`](../../../../../../classes/Dependency)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addCodeGenerationDependency`

***

### addDependency()

> **addDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4119)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addDependency`

***

### addError()

> **addError**(`error`): `void`

Defined in: [webpack/types.d.ts:10683](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10683)

#### Parameters

##### error

[`WebpackError`](../../../../../../classes/WebpackError)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addError`

***

### addPresentationalDependency()

> **addPresentationalDependency**(`presentationalDependency`): `void`

Defined in: [webpack/types.d.ts:10678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10678)

#### Parameters

##### presentationalDependency

[`Dependency`](../../../../../../classes/Dependency)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addPresentationalDependency`

***

### addWarning()

> **addWarning**(`warning`): `void`

Defined in: [webpack/types.d.ts:10680](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10680)

#### Parameters

##### warning

[`WebpackError`](../../../../../../classes/WebpackError)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.addWarning`

***

### attach()

> **attach**(`compilation`, `chunk`, `chunkGraph?`): `void`

Defined in: [webpack/types.d.ts:16570](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16570)

#### Parameters

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### chunkGraph?

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.attach`

***

### build()

> **build**(`options`, `compilation`, `resolver`, `fs`, `callback`): `void`

Defined in: [webpack/types.d.ts:10724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10724)

#### Parameters

##### options

`WebpackOptionsNormalizedWithDefaults`

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

##### resolver

`ResolverWithOptions`

##### fs

[`InputFileSystem`](../../../../../../interfaces/InputFileSystem)

##### callback

(`err?`) => `void`

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.build`

***

### chunkCondition()

> **chunkCondition**(`chunk`, `compilation`): `boolean`

Defined in: [webpack/types.d.ts:10759](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10759)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.chunkCondition`

***

### cleanupForCache()

> **cleanupForCache**(): `void`

Defined in: [webpack/types.d.ts:10778](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10778)

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.cleanupForCache`

***

### clearDependenciesAndBlocks()

> **clearDependenciesAndBlocks**(): `void`

Defined in: [webpack/types.d.ts:4125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4125)

Removes all dependencies and blocks

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.clearDependenciesAndBlocks`

***

### clearWarningsAndErrors()

> **clearWarningsAndErrors**(): `void`

Defined in: [webpack/types.d.ts:10690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10690)

removes all warnings and errors

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.clearWarningsAndErrors`

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

`HelperRuntimeModule.codeGeneration`

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4128)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../../../interfaces/ObjectDeserializerContext)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.deserialize`

***

### generate()

> **generate**(): `string`

Defined in: [webpack/types.d.ts:16571](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16571)

#### Returns

`string`

#### Inherited from

`HelperRuntimeModule.generate`

***

### getChunks()

> **getChunks**(): [`Chunk`](../../../../../../classes/Chunk)\[]

Defined in: [webpack/types.d.ts:10671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10671)

#### Returns

[`Chunk`](../../../../../../classes/Chunk)\[]

#### Inherited from

`HelperRuntimeModule.getChunks`

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

`HelperRuntimeModule.getConcatenationBailoutReason`

***

### getErrors()

> **getErrors**(): `Iterable`<[`WebpackError`](../../../../../../classes/WebpackError), `any`, `any`>

Defined in: [webpack/types.d.ts:10684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10684)

#### Returns

`Iterable`<[`WebpackError`](../../../../../../classes/WebpackError), `any`, `any`>

#### Inherited from

`HelperRuntimeModule.getErrors`

***

### getExportsType()

> **getExportsType**(`moduleGraph`, `strict?`): `ExportsType`

Defined in: [webpack/types.d.ts:10677](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10677)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

##### strict?

`boolean`

#### Returns

`ExportsType`

#### Inherited from

`HelperRuntimeModule.getExportsType`

***

### getGeneratedCode()

> **getGeneratedCode**(): `string`

Defined in: [webpack/types.d.ts:16572](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16572)

#### Returns

`string`

#### Inherited from

`HelperRuntimeModule.getGeneratedCode`

***

### getNumberOfChunks()

> **getNumberOfChunks**(): `number`

Defined in: [webpack/types.d.ts:10672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10672)

#### Returns

`number`

#### Inherited from

`HelperRuntimeModule.getNumberOfChunks`

***

### getNumberOfErrors()

> **getNumberOfErrors**(): `number`

Defined in: [webpack/types.d.ts:10685](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10685)

#### Returns

`number`

#### Inherited from

`HelperRuntimeModule.getNumberOfErrors`

***

### getNumberOfWarnings()

> **getNumberOfWarnings**(): `number`

Defined in: [webpack/types.d.ts:10682](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10682)

#### Returns

`number`

#### Inherited from

`HelperRuntimeModule.getNumberOfWarnings`

***

### getRootBlock()

> **getRootBlock**(): `DependenciesBlock`

Defined in: [webpack/types.d.ts:4112](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4112)

#### Returns

`DependenciesBlock`

#### Inherited from

`HelperRuntimeModule.getRootBlock`

***

### getSideEffectsConnectionState()

> **getSideEffectsConnectionState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:10757](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10757)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`ConnectionState`

#### Inherited from

`HelperRuntimeModule.getSideEffectsConnectionState`

***

### getSourceBasicTypes()

> **getSourceBasicTypes**(): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:10740](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10740)

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### Returns

`ReadonlySet`<`string`>

#### Inherited from

`HelperRuntimeModule.getSourceBasicTypes`

***

### getSourceTypes()

> **getSourceTypes**(): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:10731](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10731)

#### Returns

`ReadonlySet`<`string`>

#### Inherited from

`HelperRuntimeModule.getSourceTypes`

***

### getUnsafeCacheData()

> **getUnsafeCacheData**(): `UnsafeCacheData`

Defined in: [webpack/types.d.ts:10773](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10773)

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### Returns

`UnsafeCacheData`

#### Inherited from

`HelperRuntimeModule.getUnsafeCacheData`

***

### getWarnings()

> **getWarnings**(): `Iterable`<[`WebpackError`](../../../../../../classes/WebpackError), `any`, `any`>

Defined in: [webpack/types.d.ts:10681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10681)

#### Returns

`Iterable`<[`WebpackError`](../../../../../../classes/WebpackError), `any`, `any`>

#### Inherited from

`HelperRuntimeModule.getWarnings`

***

### hasChunkCondition()

> **hasChunkCondition**(): `boolean`

Defined in: [webpack/types.d.ts:10760](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10760)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.hasChunkCondition`

***

### hasReasonForChunk()

> **hasReasonForChunk**(`chunk`, `moduleGraph`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:10702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10702)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.hasReasonForChunk`

***

### hasReasons()

> **hasReasons**(`moduleGraph`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:10707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10707)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.hasReasons`

***

### identifier()

> **identifier**(): `string`

Defined in: [webpack/types.d.ts:10722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10722)

#### Returns

`string`

#### Inherited from

`HelperRuntimeModule.identifier`

***

### invalidateBuild()

> **invalidateBuild**(): `void`

Defined in: [webpack/types.d.ts:10721](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10721)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.invalidateBuild`

***

### isAccessibleInChunk()

> **isAccessibleInChunk**(`chunkGraph`, `chunk`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10692](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10692)

#### Parameters

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### ignoreChunk?

[`Chunk`](../../../../../../classes/Chunk)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.isAccessibleInChunk`

***

### isAccessibleInChunkGroup()

> **isAccessibleInChunkGroup**(`chunkGraph`, `chunkGroup`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10697)

#### Parameters

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

##### chunkGroup

[`ChunkGroup`](../../../../../../classes/ChunkGroup)

##### ignoreChunk?

[`Chunk`](../../../../../../classes/Chunk)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.isAccessibleInChunkGroup`

***

### isEntryModule()

> **isEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:10670](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10670)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.isEntryModule`

***

### isInChunk()

> **isInChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10669](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10669)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.isInChunk`

***

### isOptional()

> **isOptional**(`moduleGraph`): `boolean`

Defined in: [webpack/types.d.ts:10691](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10691)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.isOptional`

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

`HelperRuntimeModule.isProvided`

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

`HelperRuntimeModule.libIdent`

***

### nameForCondition()

> **nameForCondition**(): `string`

Defined in: [webpack/types.d.ts:10753](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10753)

#### Returns

`string`

#### Inherited from

`HelperRuntimeModule.nameForCondition`

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

`HelperRuntimeModule.needBuild`

***

### ~~needRebuild()~~

> **needRebuild**(`fileTimestamps`, `contextTimestamps`): `boolean`

Defined in: [webpack/types.d.ts:10717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10717)

Use needBuild instead

#### Parameters

##### fileTimestamps

`Map`<`string`, `number`>

##### contextTimestamps

`Map`<`string`, `number`>

#### Returns

`boolean`

#### Deprecated

#### Inherited from

`HelperRuntimeModule.needRebuild`

***

### originalSource()

> **originalSource**(): [`Source`](../../sources/classes/Source)

Defined in: [webpack/types.d.ts:10779](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10779)

#### Returns

[`Source`](../../sources/classes/Source)

#### Inherited from

`HelperRuntimeModule.originalSource`

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

`HelperRuntimeModule.readableIdentifier`

***

### removeChunk()

> **removeChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:10668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10668)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.removeChunk`

***

### removeDependency()

> **removeDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4120](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4120)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.removeDependency`

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4127](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4127)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../../../interfaces/ObjectSerializerContext)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.serialize`

***

### shouldIsolate()

> **shouldIsolate**(): `boolean`

Defined in: [webpack/types.d.ts:16573](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16573)

#### Returns

`boolean`

#### Inherited from

`HelperRuntimeModule.shouldIsolate`

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

`HelperRuntimeModule.size`

***

### ~~source()~~

> **source**(`dependencyTemplates`, `runtimeTemplate`, `type?`): [`Source`](../../sources/classes/Source)

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

[`Source`](../../sources/classes/Source)

#### Deprecated

#### Inherited from

`HelperRuntimeModule.source`

***

### updateCacheModule()

> **updateCacheModule**(`module`): `void`

Defined in: [webpack/types.d.ts:10767](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10767)

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### Parameters

##### module

[`Module`](../../../../../../classes/Module)

#### Returns

`void`

#### Inherited from

`HelperRuntimeModule.updateCacheModule`

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

`HelperRuntimeModule.updateHash`

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `LoadScriptCompilationHooks`

Defined in: [webpack/types.d.ts:9899](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9899)

#### Parameters

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

#### Returns

`LoadScriptCompilationHooks`
