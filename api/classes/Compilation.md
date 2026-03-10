---
title: Compilation
---

[webpack](../globals) / Compilation

# Class: Compilation

Defined in: [webpack/types.d.ts:2233](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2233)

## Constructors

### Constructor

> **new Compilation**(`compiler`, `params`): `Compilation`

Defined in: [webpack/types.d.ts:2237](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2237)

Creates an instance of Compilation.

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

##### params

`CompilationParams`

#### Returns

`Compilation`

## Properties

### additionalChunkAssets

> **additionalChunkAssets**: `string`\[]

Defined in: [webpack/types.d.ts:2463](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2463)

***

### addModuleQueue

> **addModuleQueue**: `AsyncQueue`<[`Module`](Module.md), `string`, [`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2438](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2438)

***

### assets

> **assets**: `CompilationAssets`

Defined in: [webpack/types.d.ts:2464](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2464)

***

### assetsInfo

> **assetsInfo**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, [`AssetInfo`](../type-aliases/AssetInfo)>

Defined in: [webpack/types.d.ts:2465](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2465)

***

### asyncEntrypoints

> **asyncEntrypoints**: [`Entrypoint`](Entrypoint.md)\[]

Defined in: [webpack/types.d.ts:2456](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2456)

***

### bail

> **bail**: `boolean`

Defined in: [webpack/types.d.ts:2425](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2425)

***

### buildDependencies

> **buildDependencies**: [`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

Defined in: [webpack/types.d.ts:2484](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2484)

***

### buildQueue

> **buildQueue**: `AsyncQueue`<[`Module`](Module.md), [`Module`](Module.md), [`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2444](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2444)

***

### buildTimeExecutedModules

> **buildTimeExecutedModules**: [`WeakSet`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2478](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2478)

***

### builtModules

> **builtModules**: [`WeakSet`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2476](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2476)

***

### children

> **children**: `Compilation`\[]

Defined in: [webpack/types.d.ts:2468](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2468)

***

### childrenCounters

> **childrenCounters**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `number`>

Defined in: [webpack/types.d.ts:2472](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2472)

***

### chunkGraph

> **chunkGraph**: [`ChunkGraph`](ChunkGraph.md)

Defined in: [webpack/types.d.ts:2435](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2435)

***

### chunkGroups

> **chunkGroups**: [`ChunkGroup`](ChunkGroup.md)\[]

Defined in: [webpack/types.d.ts:2458](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2458)

***

### chunks

> **chunks**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:2457](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2457)

***

### chunkTemplate

> **chunkTemplate**: `ChunkTemplate`

Defined in: [webpack/types.d.ts:2429](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2429)

***

### codeGeneratedModules

> **codeGeneratedModules**: [`WeakSet`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2477](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2477)

***

### codeGenerationResults?

> `optional` **codeGenerationResults**: [`CodeGenerationResults`](CodeGenerationResults.md)

Defined in: [webpack/types.d.ts:2436](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2436)

***

### comparedForEmitAssets

> **comparedForEmitAssets**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

Defined in: [webpack/types.d.ts:2480](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2480)

***

### ~~compilationDependencies~~

> **compilationDependencies**: `object`

Defined in: [webpack/types.d.ts:2489](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2489)

#### ~~add()~~

> **add**: (`item`) => [`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

##### Parameters

###### item

`string`

##### Returns

[`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

#### Deprecated

***

### compiler

> **compiler**: [`Compiler`](Compiler.md)

Defined in: [webpack/types.d.ts:2415](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2415)

***

### compilerPath

> **compilerPath**: `string`

Defined in: [webpack/types.d.ts:2421](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2421)

***

### contextDependencies

> **contextDependencies**: [`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

Defined in: [webpack/types.d.ts:2482](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2482)

***

### creatingModuleDuringBuild

> **creatingModuleDuringBuild**: [`WeakMap`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)<[`Module`](Module.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Module`](Module.md)>>

Defined in: [webpack/types.d.ts:2452](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2452)

Modules in value are building during the build of Module in key.
Means value blocking key from finishing.
Needed to detect build cycles.

***

### dependencyFactories

> **dependencyFactories**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`DependencyConstructor`, [`ModuleFactory`](ModuleFactory.md)>

Defined in: [webpack/types.d.ts:2470](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2470)

***

### dependencyTemplates

> **dependencyTemplates**: `DependencyTemplates`

Defined in: [webpack/types.d.ts:2471](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2471)

***

### emittedAssets

> **emittedAssets**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

Defined in: [webpack/types.d.ts:2479](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2479)

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [webpack/types.d.ts:2414](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2414)

***

### entries

> **entries**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, `EntryData`>

Defined in: [webpack/types.d.ts:2453](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2453)

***

### entrypoints

> **entrypoints**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, [`Entrypoint`](Entrypoint.md)>

Defined in: [webpack/types.d.ts:2455](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2455)

***

### errors

> **errors**: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

Defined in: [webpack/types.d.ts:2466](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2466)

***

### factorizeQueue

> **factorizeQueue**: `AsyncQueue`<`FactorizeModuleOptions`, `string`, [`Module`](Module.md) | `ModuleFactoryResult`>

Defined in: [webpack/types.d.ts:2439](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2439)

***

### fileDependencies

> **fileDependencies**: [`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

Defined in: [webpack/types.d.ts:2481](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2481)

***

### fileSystemInfo

> **fileSystemInfo**: `FileSystemInfo`

Defined in: [webpack/types.d.ts:2418](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2418)

***

### fullHash?

> `optional` **fullHash**: `string`

Defined in: [webpack/types.d.ts:2657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2657)

***

### globalEntry

> **globalEntry**: `EntryData`

Defined in: [webpack/types.d.ts:2454](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2454)

***

### hash?

> `optional` **hash**: `string`

Defined in: [webpack/types.d.ts:2658](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2658)

***

### hooks

> **hooks**: [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<{ `addEntry`: `SyncHook`<\[[`Dependency`](Dependency.md), [`EntryOptions`](../type-aliases/EntryOptions)]>; `additionalAssets`: `FakeHook`<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<`AsyncSeriesHook`<\[]>, `"name"` | `"tap"` | `"tapAsync"` | `"tapPromise"`>>; `additionalChunkAssets`: `FakeHook`<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<`AsyncSeriesHook`<\[[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Chunk`](Chunk.md)>]>, `"name"` | `"tap"` | `"tapAsync"` | `"tapPromise"`>>; `additionalChunkRuntimeRequirements`: `SyncHook`<\[[`Chunk`](Chunk.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`]>; `additionalModuleRuntimeRequirements`: `SyncHook`<\[[`Module`](Module.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`]>; `additionalTreeRuntimeRequirements`: `SyncHook`<\[[`Chunk`](Chunk.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`]>; `afterChunks`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>]>; `afterCodeGeneration`: `SyncHook`<\[]>; `afterHash`: `SyncHook`<\[]>; `afterModuleHash`: `SyncHook`<\[]>; `afterOptimizeAssets`: `SyncHook`<\[`CompilationAssets`]>; `afterOptimizeChunkAssets`: `FakeHook`<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<`AsyncSeriesHook`<\[[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Chunk`](Chunk.md)>]>, `"name"` | `"tap"` | `"tapAsync"` | `"tapPromise"`>>; `afterOptimizeChunkIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>]>; `afterOptimizeChunkModules`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `afterOptimizeChunks`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`ChunkGroup`](ChunkGroup.md)\[]]>; `afterOptimizeDependencies`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `afterOptimizeModuleIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `afterOptimizeModules`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `afterOptimizeTree`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `afterProcessAssets`: `SyncHook`<\[`CompilationAssets`]>; `afterRuntimeRequirements`: `SyncHook`<\[]>; `afterSeal`: `AsyncSeriesHook`<\[]>; `assetPath`: `SyncWaterfallHook`<\[`string`, [`PathData`](../interfaces/PathData), `undefined` | [`AssetInfo`](../type-aliases/AssetInfo)], `string`>; `beforeChunkAssets`: `SyncHook`<\[]>; `beforeChunkIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>]>; `beforeChunks`: `SyncHook`<\[]>; `beforeCodeGeneration`: `SyncHook`<\[]>; `beforeHash`: `SyncHook`<\[]>; `beforeModuleAssets`: `SyncHook`<\[]>; `beforeModuleHash`: `SyncHook`<\[]>; `beforeModuleIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `beforeRuntimeRequirements`: `SyncHook`<\[]>; `buildModule`: `SyncHook`<\[[`Module`](Module.md)]>; `childCompiler`: `SyncHook`<\[[`Compiler`](Compiler.md), `string`, `number`]>; `chunkAsset`: `SyncHook`<\[[`Chunk`](Chunk.md), `string`]>; `chunkHash`: `SyncHook`<\[[`Chunk`](Chunk.md), `Hash`, `ChunkHashContext`]>; `chunkIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>]>; `contentHash`: `SyncHook`<\[[`Chunk`](Chunk.md)]>; `dependencyReferencedExports`: `SyncWaterfallHook`<\[(`string`\[] | `ReferencedExport`)\[], [`Dependency`](Dependency.md), `RuntimeSpec`], (`string`\[] | `ReferencedExport`)\[]>; `executeModule`: `SyncHook`<\[`ExecuteModuleArgument`, `ExecuteModuleContext`]>; `failedEntry`: `SyncHook`<\[[`Dependency`](Dependency.md), [`EntryOptions`](../type-aliases/EntryOptions), [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)]>; `failedModule`: `SyncHook`<\[[`Module`](Module.md), [`WebpackError`](WebpackError.md)]>; `finishModules`: `AsyncSeriesHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `finishRebuildingModule`: `AsyncSeriesHook`<\[[`Module`](Module.md)]>; `fullHash`: `SyncHook`<\[`Hash`]>; `log`: `SyncBailHook`<\[`string`, `LogEntry`], `boolean` | `void`>; `moduleAsset`: `SyncHook`<\[[`Module`](Module.md), `string`]>; `moduleIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `needAdditionalPass`: `SyncBailHook`<\[], `boolean` | `void`>; `needAdditionalSeal`: `SyncBailHook`<\[], `boolean` | `void`>; `optimize`: `SyncHook`<\[]>; `optimizeAssets`: `AsyncSeriesHook`<\[`CompilationAssets`], `ProcessAssetsAdditionalOptions`>; `optimizeChunkAssets`: `FakeHook`<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<`AsyncSeriesHook`<\[[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Chunk`](Chunk.md)>]>, `"name"` | `"tap"` | `"tapAsync"` | `"tapPromise"`>>; `optimizeChunkIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>]>; `optimizeChunkModules`: `AsyncSeriesBailHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>], `void`>; `optimizeChunks`: `SyncBailHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`ChunkGroup`](ChunkGroup.md)\[]], `boolean` | `void`>; `optimizeCodeGeneration`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `optimizeDependencies`: `SyncBailHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>], `boolean` | `void`>; `optimizeModuleIds`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `optimizeModules`: `SyncBailHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>], `boolean` | `void`>; `optimizeTree`: `AsyncSeriesHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>]>; `prepareModuleExecution`: `AsyncParallelHook`<\[`ExecuteModuleArgument`, `ExecuteModuleContext`]>; `processAdditionalAssets`: `AsyncSeriesHook`<\[`CompilationAssets`]>; `processAssets`: `AsyncSeriesHook`<\[`CompilationAssets`], `ProcessAssetsAdditionalOptions`>; `processErrors`: `SyncWaterfallHook`<\[[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]], [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]>; `processWarnings`: `SyncWaterfallHook`<\[[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]], [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]>; `rebuildModule`: `SyncHook`<\[[`Module`](Module.md)]>; `record`: `SyncHook`<\[`Compilation`, `Records`]>; `recordChunks`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, `Records`]>; `recordHash`: `SyncHook`<\[`Records`]>; `recordModules`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>, `Records`]>; `renderManifest`: `SyncWaterfallHook`<\[[`RenderManifestEntry`](../type-aliases/RenderManifestEntry)\[], [`RenderManifestOptions`](../interfaces/RenderManifestOptions)], [`RenderManifestEntry`](../type-aliases/RenderManifestEntry)\[]>; `reviveChunks`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>, `Records`]>; `reviveModules`: `SyncHook`<\[[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>, `Records`]>; `runtimeModule`: `SyncHook`<\[[`RuntimeModule`](RuntimeModule.md), [`Chunk`](Chunk.md)]>; `runtimeRequirementInChunk`: `HookMap`<`SyncBailHook`<\[[`Chunk`](Chunk.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`], `void`>>; `runtimeRequirementInModule`: `HookMap`<`SyncBailHook`<\[[`Module`](Module.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`], `void`>>; `runtimeRequirementInTree`: `HookMap`<`SyncBailHook`<\[[`Chunk`](Chunk.md), [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>, `RuntimeRequirementsContext`], `void`>>; `seal`: `SyncHook`<\[]>; `shouldGenerateChunkAssets`: `SyncBailHook`<\[], `boolean` | `void`>; `shouldRecord`: `SyncBailHook`<\[], `boolean` | `void`>; `statsFactory`: `SyncHook`<\[`StatsFactory`, `NormalizedStatsOptions`]>; `statsNormalize`: `SyncHook`<\[[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`NormalizedStatsOptions`>, `CreateStatsOptionsContext`]>; `statsPreset`: `HookMap`<`SyncHook`<\[[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`NormalizedStatsOptions`>, `CreateStatsOptionsContext`]>>; `statsPrinter`: `SyncHook`<\[`StatsPrinter`, `NormalizedStatsOptions`]>; `stillValidModule`: `SyncHook`<\[[`Module`](Module.md)]>; `succeedEntry`: `SyncHook`<\[[`Dependency`](Dependency.md), [`EntryOptions`](../type-aliases/EntryOptions), [`Module`](Module.md)]>; `succeedModule`: `SyncHook`<\[[`Module`](Module.md)]>; `unseal`: `SyncHook`<\[]>; get `normalModuleLoader`(): `SyncHook`<\[`AnyLoaderContext`, [`NormalModule`](NormalModule.md)]>; }>

Defined in: [webpack/types.d.ts:2238](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2238)

***

### inputFileSystem

> **inputFileSystem**: [`InputFileSystem`](../interfaces/InputFileSystem)

Defined in: [webpack/types.d.ts:2417](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2417)

***

### logger

> **logger**: `WebpackLogger`

Defined in: [webpack/types.d.ts:2422](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2422)

***

### logging

> **logging**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, `LogEntry`\[]>

Defined in: [webpack/types.d.ts:2469](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2469)

***

### mainTemplate

> **mainTemplate**: `MainTemplate`

Defined in: [webpack/types.d.ts:2428](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2428)

***

### missingDependencies

> **missingDependencies**: [`LazySet`](../webpack/namespaces/util/classes/LazySet)<`string`>

Defined in: [webpack/types.d.ts:2483](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2483)

***

### moduleGraph

> **moduleGraph**: [`ModuleGraph`](ModuleGraph.md)

Defined in: [webpack/types.d.ts:2434](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2434)

***

### moduleMemCaches?

> `optional` **moduleMemCaches**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[`Module`](Module.md), `WeakTupleMap`<`any`\[], `any`>>

Defined in: [webpack/types.d.ts:2432](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2432)

***

### moduleMemCaches2?

> `optional` **moduleMemCaches2**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[`Module`](Module.md), `WeakTupleMap`<`any`\[], `any`>>

Defined in: [webpack/types.d.ts:2433](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2433)

***

### modules

> **modules**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2461](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2461)

***

### moduleTemplates

> **moduleTemplates**: `ModuleTemplates`

Defined in: [webpack/types.d.ts:2431](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2431)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:2412](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2412)

***

### namedChunkGroups

> **namedChunkGroups**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, [`ChunkGroup`](ChunkGroup.md)>

Defined in: [webpack/types.d.ts:2459](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2459)

***

### namedChunks

> **namedChunks**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, [`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:2460](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2460)

***

### needAdditionalPass

> **needAdditionalPass**: `boolean`

Defined in: [webpack/types.d.ts:2475](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2475)

***

### options

> **options**: `WebpackOptionsNormalizedWithDefaults`

Defined in: [webpack/types.d.ts:2423](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2423)

***

### outputOptions

> **outputOptions**: `OutputNormalizedWithDefaults`

Defined in: [webpack/types.d.ts:2424](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2424)

***

### params

> **params**: `CompilationParams`

Defined in: [webpack/types.d.ts:2427](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2427)

***

### processDependenciesQueue

> **processDependenciesQueue**: `AsyncQueue`<[`Module`](Module.md), [`Module`](Module.md), [`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2437](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2437)

***

### profile

> **profile**: `boolean`

Defined in: [webpack/types.d.ts:2426](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2426)

***

### rebuildQueue

> **rebuildQueue**: `AsyncQueue`<[`Module`](Module.md), [`Module`](Module.md), [`Module`](Module.md)>

Defined in: [webpack/types.d.ts:2445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2445)

***

### records

> **records**: `Records`

Defined in: [webpack/types.d.ts:2462](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2462)

***

### requestShortener

> **requestShortener**: `RequestShortener`

Defined in: [webpack/types.d.ts:2420](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2420)

***

### resolverFactory

> **resolverFactory**: `ResolverFactory`

Defined in: [webpack/types.d.ts:2416](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2416)

***

### runtimeTemplate

> **runtimeTemplate**: `RuntimeTemplate`

Defined in: [webpack/types.d.ts:2430](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2430)

***

### startTime?

> `optional` **startTime**: `number`

Defined in: [webpack/types.d.ts:2413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2413)

***

### usedChunkIds

> **usedChunkIds**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`number`>

Defined in: [webpack/types.d.ts:2473](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2473)

***

### usedModuleIds

> **usedModuleIds**: [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`number`>

Defined in: [webpack/types.d.ts:2474](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2474)

***

### valueCacheVersions

> **valueCacheVersions**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<`string`, `ValueCacheVersion`>

Defined in: [webpack/types.d.ts:2419](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2419)

***

### warnings

> **warnings**: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

Defined in: [webpack/types.d.ts:2467](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2467)

***

### PROCESS\_ASSETS\_STAGE\_ADDITIONAL

> `static` **PROCESS\_ASSETS\_STAGE\_ADDITIONAL**: `number`

Defined in: [webpack/types.d.ts:2719](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2719)

Add additional assets to the compilation.

***

### PROCESS\_ASSETS\_STAGE\_ADDITIONS

> `static` **PROCESS\_ASSETS\_STAGE\_ADDITIONS**: `number`

Defined in: [webpack/types.d.ts:2735](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2735)

Add additional sections to existing assets, like a banner or initialization code.

***

### PROCESS\_ASSETS\_STAGE\_ANALYSE

> `static` **PROCESS\_ASSETS\_STAGE\_ANALYSE**: `number`

Defined in: [webpack/types.d.ts:2790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2790)

Analyse existing assets.

***

### PROCESS\_ASSETS\_STAGE\_DERIVED

> `static` **PROCESS\_ASSETS\_STAGE\_DERIVED**: `number`

Defined in: [webpack/types.d.ts:2730](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2730)

Derive new assets from existing assets.
Existing assets should not be treated as complete.

***

### PROCESS\_ASSETS\_STAGE\_DEV\_TOOLING

> `static` **PROCESS\_ASSETS\_STAGE\_DEV\_TOOLING**: `number`

Defined in: [webpack/types.d.ts:2762](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2762)

Add development tooling to assets, e. g. by extracting a SourceMap.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE**: `number`

Defined in: [webpack/types.d.ts:2740](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2740)

Optimize existing assets in a general way.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_COMPATIBILITY

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_COMPATIBILITY**: `number`

Defined in: [webpack/types.d.ts:2752](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2752)

Optimize the compatibility of existing assets, e. g. add polyfills or vendor-prefixes.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_COUNT

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_COUNT**: `number`

Defined in: [webpack/types.d.ts:2747](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2747)

Optimize the count of existing assets, e. g. by merging them.
Only assets of the same type should be merged.
For assets of different types see PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_INLINE.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_HASH

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_HASH**: `number`

Defined in: [webpack/types.d.ts:2780](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2780)

Optimize the hashes of the assets, e. g. by generating real hashes of the asset content.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_INLINE

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_INLINE**: `number`

Defined in: [webpack/types.d.ts:2769](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2769)

Optimize the count of existing assets, e. g. by inlining assets of into other assets.
Only assets of different types should be inlined.
For assets of the same type see PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_COUNT.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_SIZE

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_SIZE**: `number`

Defined in: [webpack/types.d.ts:2757](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2757)

Optimize the size of existing assets, e. g. by minimizing or omitting whitespace.

***

### PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_TRANSFER

> `static` **PROCESS\_ASSETS\_STAGE\_OPTIMIZE\_TRANSFER**: `number`

Defined in: [webpack/types.d.ts:2785](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2785)

Optimize the transfer of existing assets, e. g. by preparing a compressed (gzip) file as separate asset.

***

### PROCESS\_ASSETS\_STAGE\_PRE\_PROCESS

> `static` **PROCESS\_ASSETS\_STAGE\_PRE\_PROCESS**: `number`

Defined in: [webpack/types.d.ts:2724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2724)

Basic preprocessing of assets.

***

### PROCESS\_ASSETS\_STAGE\_REPORT

> `static` **PROCESS\_ASSETS\_STAGE\_REPORT**: `number`

Defined in: [webpack/types.d.ts:2795](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2795)

Creating assets for reporting purposes.

***

### PROCESS\_ASSETS\_STAGE\_SUMMARIZE

> `static` **PROCESS\_ASSETS\_STAGE\_SUMMARIZE**: `number`

Defined in: [webpack/types.d.ts:2775](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2775)

Summarize the list of existing assets
e. g. creating an assets manifest of Service Workers.

## Methods

### addAsyncEntrypoint()

> **addAsyncEntrypoint**(`options`, `module`, `loc`, `request`): [`Entrypoint`](Entrypoint.md)

Defined in: [webpack/types.d.ts:2624](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2624)

#### Parameters

##### options

[`EntryOptions`](../type-aliases/EntryOptions)

##### module

[`Module`](Module.md)

##### loc

`DependencyLocation`

##### request

`string`

#### Returns

[`Entrypoint`](Entrypoint.md)

***

### addChunk()

> **addChunk**(`name?`): [`Chunk`](Chunk.md)

Defined in: [webpack/types.d.ts:2635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2635)

This method first looks to see if a name is provided for a new chunk,
and first looks to see if any named chunks already exist and reuse that chunk instead.

#### Parameters

##### name?

`string`

#### Returns

[`Chunk`](Chunk.md)

***

### addChunkInGroup()

> **addChunkInGroup**(`groupOptions`, `module?`, `loc?`, `request?`): [`ChunkGroup`](ChunkGroup.md)

Defined in: [webpack/types.d.ts:2618](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2618)

If `module` is passed, `loc` and `request` must also be passed.

#### Parameters

##### groupOptions

`string` | `ChunkGroupOptions`

##### module?

[`Module`](Module.md)

##### loc?

`SyntheticDependencyLocation` | `RealDependencyLocation`

##### request?

`string`

#### Returns

[`ChunkGroup`](ChunkGroup.md)

***

### addEntry()

> **addEntry**(`context`, `entry`, `optionsOrName`, `callback`): `void`

Defined in: [webpack/types.d.ts:2563](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2563)

#### Parameters

##### context

`string`

##### entry

[`Dependency`](Dependency.md)

##### optionsOrName

`string` | [`EntryOptions`](../type-aliases/EntryOptions)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### addInclude()

> **addInclude**(`context`, `dependency`, `options`, `callback`): `void`

Defined in: [webpack/types.d.ts:2569](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2569)

#### Parameters

##### context

`string`

##### dependency

[`Dependency`](Dependency.md)

##### options

[`EntryOptions`](../type-aliases/EntryOptions)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### addModule()

> **addModule**(`module`, `callback`): `void`

Defined in: [webpack/types.d.ts:2499](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2499)

#### Parameters

##### module

[`Module`](Module.md)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### addModuleChain()

> **addModuleChain**(`context`, `dependency`, `callback`): `void`

Defined in: [webpack/types.d.ts:2541](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2541)

#### Parameters

##### context

`string`

##### dependency

[`Dependency`](Dependency.md)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### addModuleTree()

> **addModuleTree**(`__namedParameters`, `callback`): `void`

Defined in: [webpack/types.d.ts:2546](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2546)

#### Parameters

##### \_\_namedParameters

###### context

`string`

context string path

###### contextInfo?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`ModuleFactoryCreateDataContextInfo`>

additional context info for the root module

###### dependency

[`Dependency`](Dependency.md)

dependency used to create Module chain

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### addRuntimeModule()

> **addRuntimeModule**(`chunk`, `module`, `chunkGraph?`): `void`

Defined in: [webpack/types.d.ts:2609](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2609)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`RuntimeModule`](RuntimeModule.md)

##### chunkGraph?

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`void`

***

### ~~assignDepth()~~

> **assignDepth**(`module`): `void`

Defined in: [webpack/types.d.ts:2640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2640)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

#### Deprecated

***

### assignDepths()

> **assignDepths**(`modules`): `void`

Defined in: [webpack/types.d.ts:2641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2641)

#### Parameters

##### modules

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[`Module`](Module.md)>

#### Returns

`void`

***

### assignRuntimeIds()

> **assignRuntimeIds**(): `void`

Defined in: [webpack/types.d.ts:2652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2652)

#### Returns

`void`

***

### buildModule()

> **buildModule**(`module`, `callback`): `void`

Defined in: [webpack/types.d.ts:2517](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2517)

Schedules a build of the module object

#### Parameters

##### module

[`Module`](Module.md)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### checkConstraints()

> **checkConstraints**(): `void`

Defined in: [webpack/types.d.ts:2714](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2714)

#### Returns

`void`

***

### clearAssets()

> **clearAssets**(): `void`

Defined in: [webpack/types.d.ts:2671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2671)

#### Returns

`void`

***

### codeGeneration()

> **codeGeneration**(`callback`): `void`

Defined in: [webpack/types.d.ts:2586](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2586)

#### Parameters

##### callback

(`err?`) => `void`

#### Returns

`void`

***

### createChildCompiler()

> **createChildCompiler**(`name`, `outputOptions?`, `plugins?`): [`Compiler`](Compiler.md)

Defined in: [webpack/types.d.ts:2693](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2693)

This function allows you to run another instance of webpack inside of webpack however as
a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
from parent (or top level compiler) and creates a child Compilation

#### Parameters

##### name

`string`

##### outputOptions?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<`OutputNormalized`>

##### plugins?

(`false` | `""` | `0` | [`WebpackPluginInstance`](../interfaces/WebpackPluginInstance) | (`this`, `compiler`) => `void`)\[]

#### Returns

[`Compiler`](Compiler.md)

***

### createChunkAssets()

> **createChunkAssets**(`callback`): `void`

Defined in: [webpack/types.d.ts:2674](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2674)

#### Parameters

##### callback

(`err?`) => `void`

#### Returns

`void`

***

### createHash()

> **createHash**(): `CodeGenerationJob`\[]

Defined in: [webpack/types.d.ts:2656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2656)

#### Returns

`CodeGenerationJob`\[]

***

### createModuleAssets()

> **createModuleAssets**(): `void`

Defined in: [webpack/types.d.ts:2672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2672)

#### Returns

`void`

***

### createModuleHashes()

> **createModuleHashes**(): `void`

Defined in: [webpack/types.d.ts:2655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2655)

#### Returns

`void`

***

### createStatsFactory()

> **createStatsFactory**(`options`): `StatsFactory`

Defined in: [webpack/types.d.ts:2495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2495)

#### Parameters

##### options

`NormalizedStatsOptions`

#### Returns

`StatsFactory`

***

### createStatsOptions()

> **createStatsOptions**(`optionsOrPreset?`, `context?`): `NormalizedStatsOptions`

Defined in: [webpack/types.d.ts:2491](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2491)

#### Parameters

##### optionsOrPreset?

`string` | `boolean` | [`StatsOptions`](../interfaces/StatsOptions)

##### context?

`CreateStatsOptionsContext`

#### Returns

`NormalizedStatsOptions`

***

### createStatsPrinter()

> **createStatsPrinter**(`options`): `StatsPrinter`

Defined in: [webpack/types.d.ts:2496](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2496)

#### Parameters

##### options

`NormalizedStatsOptions`

#### Returns

`StatsPrinter`

***

### deleteAsset()

> **deleteAsset**(`file`): `void`

Defined in: [webpack/types.d.ts:2668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2668)

#### Parameters

##### file

`string`

#### Returns

`void`

***

### emitAsset()

> **emitAsset**(`file`, `source`, `assetInfo?`): `void`

Defined in: [webpack/types.d.ts:2659](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2659)

#### Parameters

##### file

`string`

##### source

[`Source`](../webpack/namespaces/sources/classes/Source)

##### assetInfo?

[`AssetInfo`](../type-aliases/AssetInfo)

#### Returns

`void`

***

### executeModule()

> **executeModule**(`module`, `options`, `callback`): `void`

Defined in: [webpack/types.d.ts:2706](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2706)

#### Parameters

##### module

[`Module`](Module.md)

##### options

`ExecuteModuleOptions`

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### factorizeModule()

#### Call Signature

> **factorizeModule**(`options`, `callback`): `void`

Defined in: [webpack/types.d.ts:2526](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2526)

##### Parameters

###### options

`FactorizeModuleOptions` & `object`

###### callback

(`err?`, `result?`) => `void`

##### Returns

`void`

#### Call Signature

> **factorizeModule**(`options`, `callback`): `void`

Defined in: [webpack/types.d.ts:2530](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2530)

##### Parameters

###### options

`FactorizeModuleOptions` & `object`

###### callback

(`err?`, `result?`) => `void`

##### Returns

`void`

***

### findModule()

> **findModule**(`identifier`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:2512](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2512)

Attempts to search for a module by its identifier

#### Parameters

##### identifier

`string`

#### Returns

[`Module`](Module.md)

***

### finish()

> **finish**(`callback`): `void`

Defined in: [webpack/types.d.ts:2579](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2579)

#### Parameters

##### callback

(`err?`) => `void`

#### Returns

`void`

***

### getAsset()

> **getAsset**(`name`): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<[`Asset`](../interfaces/Asset)>

Defined in: [webpack/types.d.ts:2670](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2670)

#### Parameters

##### name

`string`

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<[`Asset`](../interfaces/Asset)>

***

### getAssetPath()

> **getAssetPath**(`filename`, `data`): `string`

Defined in: [webpack/types.d.ts:2680](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2680)

#### Parameters

##### filename

[`TemplatePath`](../type-aliases/TemplatePath)

##### data

[`PathData`](../interfaces/PathData)

#### Returns

`string`

***

### getAssetPathWithInfo()

> **getAssetPathWithInfo**(`filename`, `data`): `InterpolatedPathAndAssetInfo`

Defined in: [webpack/types.d.ts:2681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2681)

#### Parameters

##### filename

[`TemplatePath`](../type-aliases/TemplatePath)

##### data

[`PathData`](../interfaces/PathData)

#### Returns

`InterpolatedPathAndAssetInfo`

***

### getAssets()

> **getAssets**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<[`Asset`](../interfaces/Asset)>\[]

Defined in: [webpack/types.d.ts:2669](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2669)

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<[`Asset`](../interfaces/Asset)>\[]

***

### getCache()

> **getCache**(`name`): `CacheFacade`

Defined in: [webpack/types.d.ts:2497](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2497)

#### Parameters

##### name

`string`

#### Returns

`CacheFacade`

***

### getDependencyReferencedExports()

> **getDependencyReferencedExports**(`dependency`, `runtime`): (`string`\[] | `ReferencedExport`)\[]

Defined in: [webpack/types.d.ts:2642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2642)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

##### runtime

`RuntimeSpec`

#### Returns

(`string`\[] | `ReferencedExport`)\[]

***

### getErrors()

> **getErrors**(): [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

Defined in: [webpack/types.d.ts:2686](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2686)

#### Returns

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

***

### getLogger()

> **getLogger**(`name`): `WebpackLogger`

Defined in: [webpack/types.d.ts:2498](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2498)

#### Parameters

##### name

`string` | () => `string`

#### Returns

`WebpackLogger`

***

### getModule()

> **getModule**(`module`): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:2507](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2507)

Fetches a module from a compilation by its identifier

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

[`Module`](Module.md)

***

### getPath()

> **getPath**(`filename`, `data?`): `string`

Defined in: [webpack/types.d.ts:2675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2675)

#### Parameters

##### filename

[`TemplatePath`](../type-aliases/TemplatePath)

##### data?

[`PathData`](../interfaces/PathData)

#### Returns

`string`

***

### getPathWithInfo()

> **getPathWithInfo**(`filename`, `data?`): `InterpolatedPathAndAssetInfo`

Defined in: [webpack/types.d.ts:2676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2676)

#### Parameters

##### filename

[`TemplatePath`](../type-aliases/TemplatePath)

##### data?

[`PathData`](../interfaces/PathData)

#### Returns

`InterpolatedPathAndAssetInfo`

***

### getRenderManifest()

> **getRenderManifest**(`options`): [`RenderManifestEntry`](../type-aliases/RenderManifestEntry)\[]

Defined in: [webpack/types.d.ts:2673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2673)

#### Parameters

##### options

[`RenderManifestOptions`](../interfaces/RenderManifestOptions)

#### Returns

[`RenderManifestEntry`](../type-aliases/RenderManifestEntry)\[]

***

### getStats()

> **getStats**(): [`Stats`](Stats.md)

Defined in: [webpack/types.d.ts:2490](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2490)

#### Returns

[`Stats`](Stats.md)

***

### getWarnings()

> **getWarnings**(): [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

Defined in: [webpack/types.d.ts:2685](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2685)

#### Returns

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)\[]

***

### handleModuleCreation()

> **handleModuleCreation**(`__namedParameters`, `callback`): `void`

Defined in: [webpack/types.d.ts:2537](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2537)

#### Parameters

##### \_\_namedParameters

`HandleModuleCreationOptions`

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### patchChunksAfterReasonRemoval()

> **patchChunksAfterReasonRemoval**(`module`, `chunk`): `void`

Defined in: [webpack/types.d.ts:2650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2650)

#### Parameters

##### module

[`Module`](Module.md)

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### processModuleDependencies()

> **processModuleDependencies**(`module`, `callback`): `void`

Defined in: [webpack/types.d.ts:2521](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2521)

#### Parameters

##### module

[`Module`](Module.md)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### processModuleDependenciesNonRecursive()

> **processModuleDependenciesNonRecursive**(`module`): `void`

Defined in: [webpack/types.d.ts:2525](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2525)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### processRuntimeRequirements()

> **processRuntimeRequirements**(`__namedParameters?`): `void`

Defined in: [webpack/types.d.ts:2587](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2587)

#### Parameters

##### \_\_namedParameters?

###### chunkGraph?

[`ChunkGraph`](ChunkGraph.md)

the chunk graph

###### chunkGraphEntries?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

chunkGraphEntries

###### chunks?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

chunks

###### codeGenerationResults?

[`CodeGenerationResults`](CodeGenerationResults.md)

codeGenerationResults

###### modules?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

modules

#### Returns

`void`

***

### rebuildModule()

> **rebuildModule**(`module`, `callback`): `void`

Defined in: [webpack/types.d.ts:2575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2575)

#### Parameters

##### module

[`Module`](Module.md)

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### removeChunkFromDependencies()

> **removeChunkFromDependencies**(`block`, `chunk`): `void`

Defined in: [webpack/types.d.ts:2651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2651)

#### Parameters

##### block

`DependenciesBlock`

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### removeReasonsOfDependencyBlock()

> **removeReasonsOfDependencyBlock**(`module`, `block`): `void`

Defined in: [webpack/types.d.ts:2646](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2646)

#### Parameters

##### module

[`Module`](Module.md)

##### block

`DependenciesBlockLike`

#### Returns

`void`

***

### renameAsset()

> **renameAsset**(`file`, `newFile`): `void`

Defined in: [webpack/types.d.ts:2667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2667)

#### Parameters

##### file

`string`

##### newFile

`string`

#### Returns

`void`

***

### reportDependencyErrorsAndWarnings()

> **reportDependencyErrorsAndWarnings**(`module`, `blocks`): `boolean`

Defined in: [webpack/types.d.ts:2582](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2582)

#### Parameters

##### module

[`Module`](Module.md)

##### blocks

`DependenciesBlock`\[]

#### Returns

`boolean`

***

### seal()

> **seal**(`callback`): `void`

Defined in: [webpack/types.d.ts:2581](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2581)

#### Parameters

##### callback

(`err?`) => `void`

#### Returns

`void`

***

### sortItemsWithChunkIds()

> **sortItemsWithChunkIds**(): `void`

Defined in: [webpack/types.d.ts:2653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2653)

#### Returns

`void`

***

### summarizeDependencies()

> **summarizeDependencies**(): `void`

Defined in: [webpack/types.d.ts:2654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2654)

#### Returns

`void`

***

### unseal()

> **unseal**(): `void`

Defined in: [webpack/types.d.ts:2580](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2580)

#### Returns

`void`

***

### updateAsset()

> **updateAsset**(`file`, `newSourceOrFunction`, `assetInfoUpdateOrFunction?`): `void`

Defined in: [webpack/types.d.ts:2660](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2660)

#### Parameters

##### file

`string`

##### newSourceOrFunction

[`Source`](../webpack/namespaces/sources/classes/Source) | (`source`) => [`Source`](../webpack/namespaces/sources/classes/Source)

##### assetInfoUpdateOrFunction?

[`AssetInfo`](../type-aliases/AssetInfo) | (`assetInfo?`) => [`AssetInfo`](../type-aliases/AssetInfo)

#### Returns

`void`
