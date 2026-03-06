---
title: export=
---

[**webpack**](../README.md)

***

[webpack](../README.md) / export=

# Variable: export=

> **export=**: \{(`options`, `callback`): `Compiler`; (`options`): `Compiler`; (`options`, `callback`): `MultiCompiler`; (`options`): `MultiCompiler`; \} & `object`

Defined in: [lib/index.js:140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L140)

## Type Declaration

### cache

> **cache**: `object`

#### cache.MemoryCachePlugin

##### Get Signature

> **get** **MemoryCachePlugin**(): *typeof* `MemoryCachePlugin`

Defined in: [lib/index.js:395](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L395)

###### Returns

*typeof* `MemoryCachePlugin`

### config

> **config**: `object`

#### config.applyWebpackOptionsDefaults

##### Get Signature

> **get** **applyWebpackOptionsDefaults**(): (`options`, `compilerIndex`) => `ResolvedOptions`

Defined in: [lib/index.js:404](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L404)

###### Returns

> (`options`, `compilerIndex`): `ResolvedOptions`

###### Parameters

###### options

[`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized.md)

options to be modified

###### compilerIndex

`number`

index of compiler

###### Returns

`ResolvedOptions`

Resolved options after apply defaults

#### config.getNormalizedWebpackOptions

##### Get Signature

> **get** **getNormalizedWebpackOptions**(): (`config`) => [`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized.md)

Defined in: [lib/index.js:401](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L401)

###### Returns

> (`config`): [`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized.md)

###### Parameters

###### config

[`Configuration`](../interfaces/Configuration.md)

input config

###### Returns

[`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized.md)

normalized options

### container

> **container**: `object`

#### container.ContainerPlugin

##### Get Signature

> **get** **ContainerPlugin**(): *typeof* `ContainerPlugin`

Defined in: [lib/index.js:603](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L603)

###### Returns

*typeof* `ContainerPlugin`

#### container.ContainerReferencePlugin

##### Get Signature

> **get** **ContainerReferencePlugin**(): *typeof* `ContainerReferencePlugin`

Defined in: [lib/index.js:606](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L606)

###### Returns

*typeof* `ContainerReferencePlugin`

#### container.ModuleFederationPlugin

##### Get Signature

> **get** **ModuleFederationPlugin**(): *typeof* `ModuleFederationPlugin`

Defined in: [lib/index.js:609](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L609)

###### Returns

*typeof* `ModuleFederationPlugin`

#### container.scope

##### Get Signature

> **get** **scope**(): \<`T`\>(`scope`, `options`) => `Record`\<`string`, `string` \| `string`[] \| `T`\>

Defined in: [lib/index.js:612](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L612)

###### Returns

> \<`T`\>(`scope`, `options`): `Record`\<`string`, `string` \| `string`[] \| `T`\>

###### Type Parameters

###### T

`T`

###### Parameters

###### scope

`string`

scope name

###### options

`ContainerOptionsFormat`\<`T`\>

options passed by the user

###### Returns

`Record`\<`string`, `string` \| `string`[] \| `T`\>

options to spread or pass

### css

> **css**: `object`

#### css.CssModulesPlugin

##### Get Signature

> **get** **CssModulesPlugin**(): *typeof* `CssModulesPlugin`

Defined in: [lib/index.js:588](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L588)

###### Returns

*typeof* `CssModulesPlugin`

### debug

> **debug**: `object`

#### debug.ProfilingPlugin

##### Get Signature

> **get** **ProfilingPlugin**(): *typeof* `ProfilingPlugin`

Defined in: [lib/index.js:633](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L633)

###### Returns

*typeof* `ProfilingPlugin`

### dependencies

> **dependencies**: `object`

#### dependencies.ConstDependency

##### Get Signature

> **get** **ConstDependency**(): *typeof* `ConstDependency`

Defined in: [lib/index.js:416](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L416)

###### Returns

*typeof* `ConstDependency`

#### dependencies.HarmonyImportDependency

##### Get Signature

> **get** **HarmonyImportDependency**(): *typeof* `HarmonyImportDependency`

Defined in: [lib/index.js:413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L413)

###### Returns

*typeof* `HarmonyImportDependency`

#### dependencies.ModuleDependency

##### Get Signature

> **get** **ModuleDependency**(): *typeof* `ModuleDependency`

Defined in: [lib/index.js:410](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L410)

###### Returns

*typeof* `ModuleDependency`

#### dependencies.NullDependency

##### Get Signature

> **get** **NullDependency**(): *typeof* `NullDependency`

Defined in: [lib/index.js:419](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L419)

###### Returns

*typeof* `NullDependency`

### electron

> **electron**: `object`

#### electron.ElectronTargetPlugin

##### Get Signature

> **get** **ElectronTargetPlugin**(): *typeof* `ElectronTargetPlugin`

Defined in: [lib/index.js:573](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L573)

###### Returns

*typeof* `ElectronTargetPlugin`

### esm

> **esm**: `object`

#### esm.ModuleChunkLoadingRuntimeModule

##### Get Signature

> **get** **ModuleChunkLoadingRuntimeModule**(): *typeof* `ModuleChunkLoadingRuntimeModule`

Defined in: [lib/index.js:540](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L540)

###### Returns

*typeof* `ModuleChunkLoadingRuntimeModule`

### experiments

> **experiments**: `object`

#### experiments.ids

> **ids**: `object`

#### experiments.ids.SyncModuleIdsPlugin

##### Get Signature

> **get** **SyncModuleIdsPlugin**(): *typeof* `SyncModuleIdsPlugin`

Defined in: [lib/index.js:676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L676)

###### Returns

*typeof* `SyncModuleIdsPlugin`

#### experiments.schemes

> **schemes**: `object`

#### experiments.schemes.HttpUriPlugin

##### Get Signature

> **get** **HttpUriPlugin**(): *typeof* `HttpUriPlugin`

Defined in: [lib/index.js:668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L668)

###### Returns

*typeof* `HttpUriPlugin`

#### experiments.schemes.VirtualUrlPlugin

##### Get Signature

> **get** **VirtualUrlPlugin**(): *typeof* `VirtualUrlPlugin`

Defined in: [lib/index.js:671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L671)

###### Returns

*typeof* `VirtualUrlPlugin`

### ids

> **ids**: `object`

#### ids.ChunkModuleIdRangePlugin

##### Get Signature

> **get** **ChunkModuleIdRangePlugin**(): *typeof* `ChunkModuleIdRangePlugin`

Defined in: [lib/index.js:425](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L425)

###### Returns

*typeof* `ChunkModuleIdRangePlugin`

#### ids.DeterministicChunkIdsPlugin

##### Get Signature

> **get** **DeterministicChunkIdsPlugin**(): *typeof* `DeterministicChunkIdsPlugin`

Defined in: [lib/index.js:437](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L437)

###### Returns

*typeof* `DeterministicChunkIdsPlugin`

#### ids.DeterministicModuleIdsPlugin

##### Get Signature

> **get** **DeterministicModuleIdsPlugin**(): *typeof* `DeterministicModuleIdsPlugin`

Defined in: [lib/index.js:440](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L440)

###### Returns

*typeof* `DeterministicModuleIdsPlugin`

#### ids.HashedModuleIdsPlugin

##### Get Signature

> **get** **HashedModuleIdsPlugin**(): *typeof* `HashedModuleIdsPlugin`

Defined in: [lib/index.js:449](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L449)

###### Returns

*typeof* `HashedModuleIdsPlugin`

#### ids.NamedChunkIdsPlugin

##### Get Signature

> **get** **NamedChunkIdsPlugin**(): *typeof* `NamedChunkIdsPlugin`

Defined in: [lib/index.js:443](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L443)

###### Returns

*typeof* `NamedChunkIdsPlugin`

#### ids.NamedModuleIdsPlugin

##### Get Signature

> **get** **NamedModuleIdsPlugin**(): *typeof* `NamedModuleIdsPlugin`

Defined in: [lib/index.js:434](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L434)

###### Returns

*typeof* `NamedModuleIdsPlugin`

#### ids.NaturalModuleIdsPlugin

##### Get Signature

> **get** **NaturalModuleIdsPlugin**(): *typeof* `NaturalModuleIdsPlugin`

Defined in: [lib/index.js:428](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L428)

###### Returns

*typeof* `NaturalModuleIdsPlugin`

#### ids.OccurrenceChunkIdsPlugin

##### Get Signature

> **get** **OccurrenceChunkIdsPlugin**(): *typeof* `OccurrenceChunkIdsPlugin`

Defined in: [lib/index.js:446](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L446)

###### Returns

*typeof* `OccurrenceChunkIdsPlugin`

#### ids.OccurrenceModuleIdsPlugin

##### Get Signature

> **get** **OccurrenceModuleIdsPlugin**(): *typeof* `OccurrenceModuleIdsPlugin`

Defined in: [lib/index.js:431](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L431)

###### Returns

*typeof* `OccurrenceModuleIdsPlugin`

### javascript

> **javascript**: `object`

#### javascript.EnableChunkLoadingPlugin

##### Get Signature

> **get** **EnableChunkLoadingPlugin**(): *typeof* `EnableChunkLoadingPlugin`

Defined in: [lib/index.js:455](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L455)

###### Returns

*typeof* `EnableChunkLoadingPlugin`

#### javascript.JavascriptModulesPlugin

##### Get Signature

> **get** **JavascriptModulesPlugin**(): *typeof* `JavascriptModulesPlugin`

Defined in: [lib/index.js:458](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L458)

###### Returns

*typeof* `JavascriptModulesPlugin`

#### javascript.JavascriptParser

##### Get Signature

> **get** **JavascriptParser**(): *typeof* `JavascriptParser`

Defined in: [lib/index.js:461](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L461)

###### Returns

*typeof* `JavascriptParser`

### library

> **library**: `object`

#### library.AbstractLibraryPlugin

##### Get Signature

> **get** **AbstractLibraryPlugin**(): *typeof* `AbstractLibraryPlugin`

Defined in: [lib/index.js:594](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L594)

###### Returns

*typeof* `AbstractLibraryPlugin`

#### library.EnableLibraryPlugin

##### Get Signature

> **get** **EnableLibraryPlugin**(): *typeof* `EnableLibraryPlugin`

Defined in: [lib/index.js:597](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L597)

###### Returns

*typeof* `EnableLibraryPlugin`

### node

> **node**: `object`

#### node.NodeEnvironmentPlugin

##### Get Signature

> **get** **NodeEnvironmentPlugin**(): *typeof* `NodeEnvironmentPlugin`

Defined in: [lib/index.js:552](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L552)

###### Returns

*typeof* `NodeEnvironmentPlugin`

#### node.NodeSourcePlugin

##### Get Signature

> **get** **NodeSourcePlugin**(): *typeof* `NodeSourcePlugin`

Defined in: [lib/index.js:555](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L555)

###### Returns

*typeof* `NodeSourcePlugin`

#### node.NodeTargetPlugin

##### Get Signature

> **get** **NodeTargetPlugin**(): *typeof* `NodeTargetPlugin`

Defined in: [lib/index.js:558](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L558)

###### Returns

*typeof* `NodeTargetPlugin`

#### node.NodeTemplatePlugin

##### Get Signature

> **get** **NodeTemplatePlugin**(): *typeof* `NodeTemplatePlugin`

Defined in: [lib/index.js:561](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L561)

###### Returns

*typeof* `NodeTemplatePlugin`

#### node.ReadFileCompileAsyncWasmPlugin

##### Get Signature

> **get** **ReadFileCompileAsyncWasmPlugin**(): *typeof* `ReadFileCompileAsyncWasmPlugin`

Defined in: [lib/index.js:567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L567)

###### Returns

*typeof* `ReadFileCompileAsyncWasmPlugin`

#### node.ReadFileCompileWasmPlugin

##### Get Signature

> **get** **ReadFileCompileWasmPlugin**(): *typeof* `ReadFileCompileWasmPlugin`

Defined in: [lib/index.js:564](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L564)

###### Returns

*typeof* `ReadFileCompileWasmPlugin`

### optimize

> **optimize**: `object`

#### optimize.AggressiveMergingPlugin

##### Get Signature

> **get** **AggressiveMergingPlugin**(): *typeof* `AggressiveMergingPlugin`

Defined in: [lib/index.js:467](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L467)

###### Returns

*typeof* `AggressiveMergingPlugin`

#### optimize.AggressiveSplittingPlugin

##### Get Signature

> **get** **AggressiveSplittingPlugin**(): *typeof* `AggressiveSplittingPlugin`

Defined in: [lib/index.js:470](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L470)

###### Returns

*typeof* `AggressiveSplittingPlugin`

#### optimize.InnerGraph

##### Get Signature

> **get** **InnerGraph**(): `__module`

Defined in: [lib/index.js:477](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L477)

###### Returns

`__module`

#### optimize.LimitChunkCountPlugin

##### Get Signature

> **get** **LimitChunkCountPlugin**(): *typeof* `LimitChunkCountPlugin`

Defined in: [lib/index.js:480](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L480)

###### Returns

*typeof* `LimitChunkCountPlugin`

#### optimize.MergeDuplicateChunksPlugin

##### Get Signature

> **get** **MergeDuplicateChunksPlugin**(): *typeof* `MergeDuplicateChunksPlugin`

Defined in: [lib/index.js:483](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L483)

###### Returns

*typeof* `MergeDuplicateChunksPlugin`

#### optimize.MinChunkSizePlugin

##### Get Signature

> **get** **MinChunkSizePlugin**(): *typeof* `MinChunkSizePlugin`

Defined in: [lib/index.js:486](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L486)

###### Returns

*typeof* `MinChunkSizePlugin`

#### optimize.ModuleConcatenationPlugin

##### Get Signature

> **get** **ModuleConcatenationPlugin**(): *typeof* `ModuleConcatenationPlugin`

Defined in: [lib/index.js:489](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L489)

###### Returns

*typeof* `ModuleConcatenationPlugin`

#### optimize.RealContentHashPlugin

##### Get Signature

> **get** **RealContentHashPlugin**(): *typeof* `RealContentHashPlugin`

Defined in: [lib/index.js:492](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L492)

###### Returns

*typeof* `RealContentHashPlugin`

#### optimize.RuntimeChunkPlugin

##### Get Signature

> **get** **RuntimeChunkPlugin**(): *typeof* `RuntimeChunkPlugin`

Defined in: [lib/index.js:495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L495)

###### Returns

*typeof* `RuntimeChunkPlugin`

#### optimize.SideEffectsFlagPlugin

##### Get Signature

> **get** **SideEffectsFlagPlugin**(): *typeof* `SideEffectsFlagPlugin`

Defined in: [lib/index.js:498](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L498)

###### Returns

*typeof* `SideEffectsFlagPlugin`

#### optimize.SplitChunksPlugin

##### Get Signature

> **get** **SplitChunksPlugin**(): *typeof* `SplitChunksPlugin`

Defined in: [lib/index.js:501](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L501)

###### Returns

*typeof* `SplitChunksPlugin`

### prefetch

> **prefetch**: `object`

#### prefetch.ChunkPrefetchPreloadPlugin

##### Get Signature

> **get** **ChunkPrefetchPreloadPlugin**(): *typeof* `ChunkPrefetchPreloadPlugin`

Defined in: [lib/index.js:516](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L516)

###### Returns

*typeof* `ChunkPrefetchPreloadPlugin`

### runtime

> **runtime**: `object`

#### runtime.GetChunkFilenameRuntimeModule

##### Get Signature

> **get** **GetChunkFilenameRuntimeModule**(): *typeof* `GetChunkFilenameRuntimeModule`

Defined in: [lib/index.js:507](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L507)

###### Returns

*typeof* `GetChunkFilenameRuntimeModule`

#### runtime.LoadScriptRuntimeModule

##### Get Signature

> **get** **LoadScriptRuntimeModule**(): *typeof* `LoadScriptRuntimeModule`

Defined in: [lib/index.js:510](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L510)

###### Returns

*typeof* `LoadScriptRuntimeModule`

### sharing

> **sharing**: `object`

#### sharing.ConsumeSharedPlugin

##### Get Signature

> **get** **ConsumeSharedPlugin**(): *typeof* `ConsumeSharedPlugin`

Defined in: [lib/index.js:618](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L618)

###### Returns

*typeof* `ConsumeSharedPlugin`

#### sharing.ProvideSharedPlugin

##### Get Signature

> **get** **ProvideSharedPlugin**(): *typeof* `ProvideSharedPlugin`

Defined in: [lib/index.js:621](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L621)

###### Returns

*typeof* `ProvideSharedPlugin`

#### sharing.scope

##### Get Signature

> **get** **scope**(): \<`T`\>(`scope`, `options`) => `Record`\<`string`, `string` \| `string`[] \| `T`\>

Defined in: [lib/index.js:627](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L627)

###### Returns

> \<`T`\>(`scope`, `options`): `Record`\<`string`, `string` \| `string`[] \| `T`\>

###### Type Parameters

###### T

`T`

###### Parameters

###### scope

`string`

scope name

###### options

`ContainerOptionsFormat`\<`T`\>

options passed by the user

###### Returns

`Record`\<`string`, `string` \| `string`[] \| `T`\>

options to spread or pass

#### sharing.SharePlugin

##### Get Signature

> **get** **SharePlugin**(): *typeof* `SharePlugin`

Defined in: [lib/index.js:624](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L624)

###### Returns

*typeof* `SharePlugin`

### util

> **util**: `object`

#### util.cleverMerge

##### Get Signature

> **get** **cleverMerge**(): \<`T`, `O`\>(`first`, `second`) => `T` \| `O` \| `T` & `O`

Defined in: [lib/index.js:651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L651)

###### Returns

> \<`T`, `O`\>(`first`, `second`): `T` \| `O` \| `T` & `O`

Merges two given objects and caches the result to avoid computation if same objects passed as arguments again.

###### Type Parameters

###### T

`T`

###### O

`O`

###### Parameters

###### first

`T`

first object

###### second

`O`

second object

###### Returns

`T` \| `O` \| `T` & `O`

merged object of first and second object

###### Example

```ts
// performs cleverMerge(first, second), stores the result in WeakMap and returns result
cachedCleverMerge({a: 1}, {a: 2})
{a: 2}
 // when same arguments passed, gets the result from WeakMap and returns it.
cachedCleverMerge({a: 1}, {a: 2})
{a: 2}
```

#### util.comparators

##### Get Signature

> **get** **comparators**(): `__module`

Defined in: [lib/index.js:642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L642)

###### Returns

`__module`

#### util.compileBooleanMatcher

##### Get Signature

> **get** **compileBooleanMatcher**(): \{(`map`): `boolean` \| (`value`) => `string`; `fromLists`: (`positiveItems`, `negativeItems`) => (`value`) => `string`; `itemsToRegexp`: (`itemsArr`) => `string`; \}

Defined in: [lib/index.js:657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L657)

###### Returns

> (`map`): `boolean` \| (`value`) => `string`

###### Parameters

###### map

`Record`\<`string` \| `number`, `boolean`\>

value map

###### Returns

`boolean` \| (`value`) => `string`

true/false, when unconditionally true/false, or a template function to determine the value at runtime

###### fromLists()

> **fromLists**: (`positiveItems`, `negativeItems`) => (`value`) => `string`

###### Parameters

###### positiveItems

`string`[]

positive items

###### negativeItems

`string`[]

negative items

###### Returns

a template function to determine the value at runtime

> (`value`): `string`

###### Parameters

###### value

`string`

###### Returns

`string`

###### itemsToRegexp()

> **itemsToRegexp**: (`itemsArr`) => `string`

###### Parameters

###### itemsArr

`string`[]

array of items

###### Returns

`string`

regexp

#### util.createHash

##### Get Signature

> **get** **createHash**(): `Function`

Defined in: [lib/index.js:639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L639)

###### Returns

`Function`

#### util.LazySet

##### Get Signature

> **get** **LazySet**(): *typeof* `LazySet`

Defined in: [lib/index.js:654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L654)

###### Returns

*typeof* `LazySet`

#### util.runtime

##### Get Signature

> **get** **runtime**(): `__module`

Defined in: [lib/index.js:645](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L645)

###### Returns

`__module`

#### util.serialization

##### Get Signature

> **get** **serialization**(): `object`

Defined in: [lib/index.js:648](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L648)

###### Returns

###### MEASURE\_END\_OPERATION

> **MEASURE\_END\_OPERATION**\<\> = *typeof* `MEASURE_END_OPERATION`

###### Type Parameters

###### MEASURE\_START\_OPERATION

> **MEASURE\_START\_OPERATION**\<\> = *typeof* `MEASURE_START_OPERATION`

###### Type Parameters

###### createFileSerializer()

> **createFileSerializer**: \<`D`, `S`, `C`\>(`fs`, `hashFunction`) => `Serializer`\<`D`, `S`, `C`\>

###### Type Parameters

###### D

`D`

###### S

`S`

###### C

`C`

###### Parameters

###### fs

`IntermediateFileSystem`

filesystem

###### hashFunction

`HashFunction`

hash function to use

###### Returns

`Serializer`\<`D`, `S`, `C`\>

file serializer

###### buffersSerializer

###### Get Signature

> **get** **buffersSerializer**(): `Serializer`\<`EXPECTED_ANY`, `EXPECTED_ANY`, `EXPECTED_ANY`\>

###### Returns

`Serializer`\<`EXPECTED_ANY`, `EXPECTED_ANY`, `EXPECTED_ANY`\>

###### MEASURE\_END\_OPERATION

###### Get Signature

> **get** **MEASURE\_END\_OPERATION**(): *typeof* `MEASURE_END_OPERATION`

###### Returns

*typeof* `MEASURE_END_OPERATION`

###### MEASURE\_START\_OPERATION

###### Get Signature

> **get** **MEASURE\_START\_OPERATION**(): *typeof* `MEASURE_START_OPERATION`

###### Returns

*typeof* `MEASURE_START_OPERATION`

###### NOT\_SERIALIZABLE

###### Get Signature

> **get** **NOT\_SERIALIZABLE**(): `object`

###### Returns

`object`

###### register

###### Get Signature

> **get** **register**(): (`Constructor`, `request`, `name`, `serializer`) => `void`

###### Returns

> (`Constructor`, `request`, `name`, `serializer`): `void`

###### Parameters

###### Constructor

`Constructor`

the constructor

###### request

`string`

the request which will be required when deserializing

###### name

`string`

the name to make multiple serializer unique when sharing a request

###### serializer

`ObjectSerializer`

the serializer

###### Returns

`void`

###### registerLoader

###### Get Signature

> **get** **registerLoader**(): (`regExp`, `loader`) => `void`

###### Returns

> (`regExp`, `loader`): `void`

###### Parameters

###### regExp

`RegExp`

RegExp for which the request is tested

###### loader

(`request`) => `boolean`

loader to load the request, returns true when successful

###### Returns

`void`

###### registerNotSerializable

###### Get Signature

> **get** **registerNotSerializable**(): (`Constructor`) => `void`

###### Returns

> (`Constructor`): `void`

###### Parameters

###### Constructor

`Constructor`

the constructor

###### Returns

`void`

### wasm

> **wasm**: `object`

#### wasm.AsyncWebAssemblyModulesPlugin

##### Get Signature

> **get** **AsyncWebAssemblyModulesPlugin**(): *typeof* `AsyncWebAssemblyModulesPlugin`

Defined in: [lib/index.js:579](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L579)

###### Returns

*typeof* `AsyncWebAssemblyModulesPlugin`

#### wasm.EnableWasmLoadingPlugin

##### Get Signature

> **get** **EnableWasmLoadingPlugin**(): *typeof* `EnableWasmLoadingPlugin`

Defined in: [lib/index.js:582](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L582)

###### Returns

*typeof* `EnableWasmLoadingPlugin`

### web

> **web**: `object`

#### web.CssLoadingRuntimeModule

##### Get Signature

> **get** **CssLoadingRuntimeModule**(): *typeof* `CssLoadingRuntimeModule`

Defined in: [lib/index.js:534](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L534)

###### Returns

*typeof* `CssLoadingRuntimeModule`

#### web.FetchCompileAsyncWasmPlugin

##### Get Signature

> **get** **FetchCompileAsyncWasmPlugin**(): *typeof* `FetchCompileAsyncWasmPlugin`

Defined in: [lib/index.js:525](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L525)

###### Returns

*typeof* `FetchCompileAsyncWasmPlugin`

#### web.FetchCompileWasmPlugin

##### Get Signature

> **get** **FetchCompileWasmPlugin**(): *typeof* `FetchCompileWasmPlugin`

Defined in: [lib/index.js:522](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L522)

###### Returns

*typeof* `FetchCompileWasmPlugin`

#### web.JsonpChunkLoadingRuntimeModule

##### Get Signature

> **get** **JsonpChunkLoadingRuntimeModule**(): *typeof* `JsonpChunkLoadingRuntimeModule`

Defined in: [lib/index.js:528](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L528)

###### Returns

*typeof* `JsonpChunkLoadingRuntimeModule`

#### web.JsonpTemplatePlugin

##### Get Signature

> **get** **JsonpTemplatePlugin**(): *typeof* `JsonpTemplatePlugin`

Defined in: [lib/index.js:531](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L531)

###### Returns

*typeof* `JsonpTemplatePlugin`

### webworker

> **webworker**: `object`

#### webworker.WebWorkerTemplatePlugin

##### Get Signature

> **get** **WebWorkerTemplatePlugin**(): *typeof* `WebWorkerTemplatePlugin`

Defined in: [lib/index.js:546](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/index.js#L546)

###### Returns

*typeof* `WebWorkerTemplatePlugin`

### AsyncDependenciesBlock

#### Get Signature

> **get** **AsyncDependenciesBlock**(): *typeof* `AsyncDependenciesBlock`

##### Returns

*typeof* `AsyncDependenciesBlock`

### AutomaticPrefetchPlugin

#### Get Signature

> **get** **AutomaticPrefetchPlugin**(): *typeof* `AutomaticPrefetchPlugin`

##### Returns

*typeof* `AutomaticPrefetchPlugin`

### BannerPlugin

#### Get Signature

> **get** **BannerPlugin**(): *typeof* `BannerPlugin`

##### Returns

*typeof* `BannerPlugin`

### Cache

#### Get Signature

> **get** **Cache**(): *typeof* `Cache`

##### Returns

*typeof* `Cache`

### Chunk

#### Get Signature

> **get** **Chunk**(): *typeof* `Chunk`

##### Returns

*typeof* `Chunk`

### ChunkGraph

#### Get Signature

> **get** **ChunkGraph**(): *typeof* `ChunkGraph`

##### Returns

*typeof* `ChunkGraph`

### CleanPlugin

#### Get Signature

> **get** **CleanPlugin**(): *typeof* `CleanPlugin`

##### Returns

*typeof* `CleanPlugin`

### cli

#### Get Signature

> **get** **cli**(): `__module`

##### Returns

`__module`

### Compilation

#### Get Signature

> **get** **Compilation**(): *typeof* `Compilation`

##### Returns

*typeof* `Compilation`

### Compiler

#### Get Signature

> **get** **Compiler**(): *typeof* `Compiler`

##### Returns

*typeof* `Compiler`

### ConcatenationScope

#### Get Signature

> **get** **ConcatenationScope**(): *typeof* `ConcatenationScope`

##### Returns

*typeof* `ConcatenationScope`

### ContextExclusionPlugin

#### Get Signature

> **get** **ContextExclusionPlugin**(): *typeof* `ContextExclusionPlugin`

##### Returns

*typeof* `ContextExclusionPlugin`

### ContextReplacementPlugin

#### Get Signature

> **get** **ContextReplacementPlugin**(): *typeof* `ContextReplacementPlugin`

##### Returns

*typeof* `ContextReplacementPlugin`

### DefinePlugin

#### Get Signature

> **get** **DefinePlugin**(): *typeof* `DefinePlugin`

##### Returns

*typeof* `DefinePlugin`

### DelegatedPlugin

#### Get Signature

> **get** **DelegatedPlugin**(): *typeof* `DelegatedPlugin`

##### Returns

*typeof* `DelegatedPlugin`

### Dependency

#### Get Signature

> **get** **Dependency**(): *typeof* `Dependency`

##### Returns

*typeof* `Dependency`

### DllPlugin

#### Get Signature

> **get** **DllPlugin**(): *typeof* `DllPlugin`

##### Returns

*typeof* `DllPlugin`

### DllReferencePlugin

#### Get Signature

> **get** **DllReferencePlugin**(): *typeof* `DllReferencePlugin`

##### Returns

*typeof* `DllReferencePlugin`

### DotenvPlugin

#### Get Signature

> **get** **DotenvPlugin**(): *typeof* `DotenvPlugin`

##### Returns

*typeof* `DotenvPlugin`

### DynamicEntryPlugin

#### Get Signature

> **get** **DynamicEntryPlugin**(): *typeof* `DynamicEntryPlugin`

##### Returns

*typeof* `DynamicEntryPlugin`

### EntryOptionPlugin

#### Get Signature

> **get** **EntryOptionPlugin**(): *typeof* `EntryOptionPlugin`

##### Returns

*typeof* `EntryOptionPlugin`

### EntryPlugin

#### Get Signature

> **get** **EntryPlugin**(): *typeof* `EntryPlugin`

##### Returns

*typeof* `EntryPlugin`

### EnvironmentPlugin

#### Get Signature

> **get** **EnvironmentPlugin**(): *typeof* `EnvironmentPlugin`

##### Returns

*typeof* `EnvironmentPlugin`

### EvalDevToolModulePlugin

#### Get Signature

> **get** **EvalDevToolModulePlugin**(): *typeof* `EvalDevToolModulePlugin`

##### Returns

*typeof* `EvalDevToolModulePlugin`

### EvalSourceMapDevToolPlugin

#### Get Signature

> **get** **EvalSourceMapDevToolPlugin**(): *typeof* `EvalSourceMapDevToolPlugin`

##### Returns

*typeof* `EvalSourceMapDevToolPlugin`

### ExternalModule

#### Get Signature

> **get** **ExternalModule**(): *typeof* `ExternalModule`

##### Returns

*typeof* `ExternalModule`

### ExternalsPlugin

#### Get Signature

> **get** **ExternalsPlugin**(): *typeof* `ExternalsPlugin`

##### Returns

*typeof* `ExternalsPlugin`

### Generator

#### Get Signature

> **get** **Generator**(): *typeof* `Generator`

##### Returns

*typeof* `Generator`

### HotModuleReplacementPlugin

#### Get Signature

> **get** **HotModuleReplacementPlugin**(): *typeof* `HotModuleReplacementPlugin`

##### Returns

*typeof* `HotModuleReplacementPlugin`

### HotUpdateChunk

#### Get Signature

> **get** **HotUpdateChunk**(): *typeof* `HotUpdateChunk`

##### Returns

*typeof* `HotUpdateChunk`

### IgnorePlugin

#### Get Signature

> **get** **IgnorePlugin**(): *typeof* `IgnorePlugin`

##### Returns

*typeof* `IgnorePlugin`

### InitFragment

#### Get Signature

> **get** **InitFragment**(): *typeof* `InitFragment`

##### Returns

*typeof* `InitFragment`

### JavascriptModulesPlugin

#### Get Signature

> **get** **JavascriptModulesPlugin**(): *typeof* `JavascriptModulesPlugin`

##### Returns

*typeof* `JavascriptModulesPlugin`

### LibManifestPlugin

#### Get Signature

> **get** **LibManifestPlugin**(): *typeof* `LibManifestPlugin`

##### Returns

*typeof* `LibManifestPlugin`

### LibraryTemplatePlugin

#### Get Signature

> **get** **LibraryTemplatePlugin**(): *typeof* `LibraryTemplatePlugin`

##### Returns

*typeof* `LibraryTemplatePlugin`

### LoaderOptionsPlugin

#### Get Signature

> **get** **LoaderOptionsPlugin**(): *typeof* `LoaderOptionsPlugin`

##### Returns

*typeof* `LoaderOptionsPlugin`

### LoaderTargetPlugin

#### Get Signature

> **get** **LoaderTargetPlugin**(): *typeof* `LoaderTargetPlugin`

##### Returns

*typeof* `LoaderTargetPlugin`

### ManifestPlugin

#### Get Signature

> **get** **ManifestPlugin**(): *typeof* `ManifestPlugin`

##### Returns

*typeof* `ManifestPlugin`

### Module

#### Get Signature

> **get** **Module**(): *typeof* `Module`

##### Returns

*typeof* `Module`

### ModuleFactory

#### Get Signature

> **get** **ModuleFactory**(): *typeof* `ModuleFactory`

##### Returns

*typeof* `ModuleFactory`

### ModuleFilenameHelpers

#### Get Signature

> **get** **ModuleFilenameHelpers**(): `__module`

##### Returns

`__module`

### ModuleGraph

#### Get Signature

> **get** **ModuleGraph**(): *typeof* `ModuleGraph`

##### Returns

*typeof* `ModuleGraph`

### ModuleGraphConnection

#### Get Signature

> **get** **ModuleGraphConnection**(): *typeof* `ModuleGraphConnection`

##### Returns

*typeof* `ModuleGraphConnection`

### MultiCompiler

#### Get Signature

> **get** **MultiCompiler**(): *typeof* `MultiCompiler`

##### Returns

*typeof* `MultiCompiler`

### NoEmitOnErrorsPlugin

#### Get Signature

> **get** **NoEmitOnErrorsPlugin**(): *typeof* `NoEmitOnErrorsPlugin`

##### Returns

*typeof* `NoEmitOnErrorsPlugin`

### NormalModule

#### Get Signature

> **get** **NormalModule**(): *typeof* `NormalModule`

##### Returns

*typeof* `NormalModule`

### NormalModuleReplacementPlugin

#### Get Signature

> **get** **NormalModuleReplacementPlugin**(): *typeof* `NormalModuleReplacementPlugin`

##### Returns

*typeof* `NormalModuleReplacementPlugin`

### OptimizationStages

#### Get Signature

> **get** **OptimizationStages**(): `__module`

##### Returns

`__module`

### Parser

#### Get Signature

> **get** **Parser**(): *typeof* `Parser`

##### Returns

*typeof* `Parser`

### PlatformPlugin

#### Get Signature

> **get** **PlatformPlugin**(): *typeof* `PlatformPlugin`

##### Returns

*typeof* `PlatformPlugin`

### PrefetchPlugin

#### Get Signature

> **get** **PrefetchPlugin**(): *typeof* `PrefetchPlugin`

##### Returns

*typeof* `PrefetchPlugin`

### ProgressPlugin

#### Get Signature

> **get** **ProgressPlugin**(): *typeof* `ProgressPlugin`

##### Returns

*typeof* `ProgressPlugin`

### ProvidePlugin

#### Get Signature

> **get** **ProvidePlugin**(): *typeof* `ProvidePlugin`

##### Returns

*typeof* `ProvidePlugin`

### RuntimeGlobals

#### Get Signature

> **get** **RuntimeGlobals**(): `__module`

##### Returns

`__module`

### RuntimeModule

#### Get Signature

> **get** **RuntimeModule**(): *typeof* `RuntimeModule`

##### Returns

*typeof* `RuntimeModule`

### SingleEntryPlugin

#### Get Signature

> **get** **SingleEntryPlugin**(): *typeof* `EntryPlugin`

##### Returns

*typeof* `EntryPlugin`

### SourceMapDevToolPlugin

#### Get Signature

> **get** **SourceMapDevToolPlugin**(): *typeof* `SourceMapDevToolPlugin`

##### Returns

*typeof* `SourceMapDevToolPlugin`

### sources

#### Get Signature

> **get** **sources**(): *typeof* `exports`

##### Returns

*typeof* `exports`

### Stats

#### Get Signature

> **get** **Stats**(): *typeof* `Stats`

##### Returns

*typeof* `Stats`

### Template

#### Get Signature

> **get** **Template**(): *typeof* `Template`

##### Returns

*typeof* `Template`

### UsageState

#### Get Signature

> **get** **UsageState**(): `Readonly`\<\{ `NoInfo`: `2`; `OnlyPropertiesUsed`: `1`; `Unknown`: `3`; `Unused`: `0`; `Used`: `4`; \}\>

##### Returns

`Readonly`\<\{ `NoInfo`: `2`; `OnlyPropertiesUsed`: `1`; `Unknown`: `3`; `Unused`: `0`; `Used`: `4`; \}\>

### validate

#### Get Signature

> **get** **validate**(): (`configuration`) => `void`

##### Returns

validate fn

> (`configuration`): `void`

###### Parameters

###### configuration

[`Configuration`](../interfaces/Configuration.md) | [`MultiConfiguration`](../type-aliases/MultiConfiguration.md)

###### Returns

`void`

### validateSchema

#### Get Signature

> **get** **validateSchema**(): (`schema`, `options`, `validationConfiguration`) => `void`

##### Returns

> (`schema`, `options`, `validationConfiguration`): `void`

###### Parameters

###### schema

`Schema`

a json schema

###### options

the options that should be validated

`object` | `object`[]

###### validationConfiguration

`ValidationErrorConfiguration`

configuration for generating errors

###### Returns

`void`

### ValidationError

#### Get Signature

> **get** **ValidationError**(): *typeof* `ValidationError`

##### Returns

*typeof* `ValidationError`

### version

#### Get Signature

> **get** **version**(): `string`

##### Returns

`string`

### WatchIgnorePlugin

#### Get Signature

> **get** **WatchIgnorePlugin**(): *typeof* `WatchIgnorePlugin`

##### Returns

*typeof* `WatchIgnorePlugin`

### webpack

#### Get Signature

> **get** **webpack**(): \{(`options`, `callback`): `Compiler`; (`options`): `Compiler`; (`options`, `callback`): `MultiCompiler`; (`options`): `MultiCompiler`; \}

##### Returns

> (`options`, `callback`): `Compiler`

###### Parameters

###### options

[`Configuration`](../interfaces/Configuration.md)

options object

###### callback

`Callback`\<`Stats`\>

callback

###### Returns

`Compiler`

the compiler object

> (`options`): `Compiler`

###### Parameters

###### options

[`Configuration`](../interfaces/Configuration.md)

options object

###### Returns

`Compiler`

the compiler object

> (`options`, `callback`): `MultiCompiler`

###### Parameters

###### options

[`MultiConfiguration`](../type-aliases/MultiConfiguration.md)

options objects

###### callback

`Callback`\<`MultiStats`\>

callback

###### Returns

`MultiCompiler`

the multi compiler object

> (`options`): `MultiCompiler`

###### Parameters

###### options

[`MultiConfiguration`](../type-aliases/MultiConfiguration.md)

options objects

###### Returns

`MultiCompiler`

the multi compiler object

### WebpackError

#### Get Signature

> **get** **WebpackError**(): *typeof* `WebpackError`

##### Returns

*typeof* `WebpackError`

### WebpackOptionsApply

#### Get Signature

> **get** **WebpackOptionsApply**(): *typeof* `WebpackOptionsApply`

##### Returns

*typeof* `WebpackOptionsApply`

### WebpackOptionsDefaulter

#### Get Signature

> **get** **WebpackOptionsDefaulter**(): *typeof* `WebpackOptionsDefaulter`

##### Returns

*typeof* `WebpackOptionsDefaulter`

### WebpackOptionsValidationError

#### Get Signature

> **get** **WebpackOptionsValidationError**(): *typeof* `ValidationError`

##### Returns

*typeof* `ValidationError`
