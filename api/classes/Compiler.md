---
title: Compiler
---

[webpack](../globals) / Compiler

# Class: Compiler

Defined in: [webpack/types.d.ts:2876](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2876)

## Constructors

### Constructor

> **new Compiler**(`context`, `options?`): `Compiler`

Defined in: [webpack/types.d.ts:2877](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2877)

#### Parameters

##### context

`string`

##### options?

[`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized)

#### Returns

`Compiler`

## Properties

### cache

> **cache**: [`Cache`](Cache.md)

Defined in: [webpack/types.d.ts:2961](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2961)

***

### compilerPath

> **compilerPath**: `string`

Defined in: [webpack/types.d.ts:2963](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2963)

***

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:2959](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2959)

***

### contextTimestamps?

> `optional` **contextTimestamps**: `Map`<`string`, `"ignore"` | `EntryTypesIndex` | `OnlySafeTimeEntry` | `ExistenceOnlyTimeEntryTypesIndex`>

Defined in: [webpack/types.d.ts:2942](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2942)

***

### fileTimestamps?

> `optional` **fileTimestamps**: `Map`<`string`, `"ignore"` | `EntryTypesIndex` | `OnlySafeTimeEntry` | `ExistenceOnlyTimeEntryTypesIndex`>

Defined in: [webpack/types.d.ts:2934](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2934)

***

### fsStartTime?

> `optional` **fsStartTime**: `number`

Defined in: [webpack/types.d.ts:2950](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2950)

***

### hooks

> **hooks**: `Readonly`<{ `additionalPass`: `AsyncSeriesHook`<\[]>; `afterCompile`: `AsyncSeriesHook`<\[[`Compilation`](Compilation.md)]>; `afterDone`: `SyncHook`<\[[`Stats`](Stats.md)]>; `afterEmit`: `AsyncSeriesHook`<\[[`Compilation`](Compilation.md)]>; `afterEnvironment`: `SyncHook`<\[]>; `afterPlugins`: `SyncHook`<\[`Compiler`]>; `afterResolvers`: `SyncHook`<\[`Compiler`]>; `assetEmitted`: `AsyncSeriesHook`<\[`string`, [`AssetEmittedInfo`](../interfaces/AssetEmittedInfo)]>; `beforeCompile`: `AsyncSeriesHook`<\[`CompilationParams`]>; `beforeRun`: `AsyncSeriesHook`<\[`Compiler`]>; `compilation`: `SyncHook`<\[[`Compilation`](Compilation.md), `CompilationParams`]>; `compile`: `SyncHook`<\[`CompilationParams`]>; `contextModuleFactory`: `SyncHook`<\[`ContextModuleFactory`]>; `done`: `AsyncSeriesHook`<\[[`Stats`](Stats.md)]>; `emit`: `AsyncSeriesHook`<\[[`Compilation`](Compilation.md)]>; `emitRecords`: `AsyncSeriesHook`<\[]>; `entryOption`: `SyncBailHook`<\[`string`, [`EntryNormalized`](../type-aliases/EntryNormalized)], `boolean` | `void`>; `environment`: `SyncHook`<\[]>; `failed`: `SyncHook`<\[`Error`]>; `finishMake`: `AsyncParallelHook`<\[[`Compilation`](Compilation.md)]>; `infrastructureLog`: `SyncBailHook`<\[`string`, `string`, `undefined` | `any`\[]], `true` | `void`>; `initialize`: `SyncHook`<\[]>; `invalid`: `SyncHook`<\[`null` | `string`, `number`]>; `make`: `AsyncParallelHook`<\[[`Compilation`](Compilation.md)]>; `normalModuleFactory`: `SyncHook`<\[`NormalModuleFactory`]>; `readRecords`: `AsyncSeriesHook`<\[]>; `run`: `AsyncSeriesHook`<\[`Compiler`]>; `shouldEmit`: `SyncBailHook`<\[[`Compilation`](Compilation.md)], `boolean` | `void`>; `shutdown`: `AsyncSeriesHook`<\[]>; `thisCompilation`: `SyncHook`<\[[`Compilation`](Compilation.md), `CompilationParams`]>; `validate`: `SyncHook`<\[]>; `watchClose`: `SyncHook`<\[]>; `watchRun`: `AsyncSeriesHook`<\[`Compiler`]>; }>

Defined in: [webpack/types.d.ts:2878](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2878)

***

### idle

> **idle**: `boolean`

Defined in: [webpack/types.d.ts:2965](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2965)

***

### immutablePaths

> **immutablePaths**: `Set`<`string` | `RegExp`>

Defined in: [webpack/types.d.ts:2931](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2931)

***

### infrastructureLogger()?

> `optional` **infrastructureLogger**: (`value`, `type`, `args?`) => `void`

Defined in: [webpack/types.d.ts:2952](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2952)

#### Parameters

##### value

`string`

##### type

`LogTypeEnum`

##### args?

`any`\[]

#### Returns

`void`

***

### inputFileSystem

> **inputFileSystem**: [`InputFileSystem`](../interfaces/InputFileSystem)

Defined in: [webpack/types.d.ts:2924](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2924)

***

### intermediateFileSystem

> **intermediateFileSystem**: `IntermediateFileSystem`

Defined in: [webpack/types.d.ts:2923](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2923)

***

### managedPaths

> **managedPaths**: `Set`<`string` | `RegExp`>

Defined in: [webpack/types.d.ts:2929](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2929)

***

### modifiedFiles?

> `optional` **modifiedFiles**: `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:2932](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2932)

***

### moduleMemCaches?

> `optional` **moduleMemCaches**: `Map`<[`Module`](Module.md), `ModuleMemCachesItem`>

Defined in: [webpack/types.d.ts:2962](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2962)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:2917](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2917)

***

### options

> **options**: [`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized)

Defined in: [webpack/types.d.ts:2958](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2958)

***

### outputFileSystem

> **outputFileSystem**: [`OutputFileSystem`](../interfaces/OutputFileSystem)

Defined in: [webpack/types.d.ts:2922](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2922)

***

### outputPath

> **outputPath**: `string`

Defined in: [webpack/types.d.ts:2920](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2920)

***

### parentCompilation?

> `optional` **parentCompilation**: [`Compilation`](Compilation.md)

Defined in: [webpack/types.d.ts:2918](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2918)

***

### platform

> **platform**: `Readonly`<`PlatformTargetProperties`>

Defined in: [webpack/types.d.ts:2957](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2957)

***

### records

> **records**: `Records`

Defined in: [webpack/types.d.ts:2928](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2928)

***

### recordsInputPath

> **recordsInputPath**: `string`

Defined in: [webpack/types.d.ts:2926](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2926)

***

### recordsOutputPath

> **recordsOutputPath**: `string`

Defined in: [webpack/types.d.ts:2927](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2927)

***

### removedFiles?

> `optional` **removedFiles**: `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:2933](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2933)

***

### requestShortener

> **requestShortener**: `RequestShortener`

Defined in: [webpack/types.d.ts:2960](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2960)

***

### resolverFactory

> **resolverFactory**: `ResolverFactory`

Defined in: [webpack/types.d.ts:2951](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2951)

***

### root

> **root**: `Compiler`

Defined in: [webpack/types.d.ts:2919](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2919)

***

### running

> **running**: `boolean`

Defined in: [webpack/types.d.ts:2964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2964)

***

### unmanagedPaths

> **unmanagedPaths**: `Set`<`string` | `RegExp`>

Defined in: [webpack/types.d.ts:2930](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2930)

***

### watchFileSystem

> **watchFileSystem**: `WatchFileSystem`

Defined in: [webpack/types.d.ts:2925](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2925)

***

### watching?

> `optional` **watching**: [`Watching`](Watching.md)

Defined in: [webpack/types.d.ts:2921](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2921)

***

### watchMode

> **watchMode**: `boolean`

Defined in: [webpack/types.d.ts:2966](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2966)

***

### webpack

> **webpack**: *typeof* [`export=`](../functions/export=)

Defined in: [webpack/types.d.ts:2916](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2916)

## Methods

### close()

> **close**(`callback`): `void`

Defined in: [webpack/types.d.ts:3013](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3013)

#### Parameters

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### compile()

> **compile**(`callback`): `void`

Defined in: [webpack/types.d.ts:3012](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3012)

#### Parameters

##### callback

`CallbackWebpackFunction_2`<[`Compilation`](Compilation.md), `void`>

#### Returns

`void`

***

### createChildCompiler()

> **createChildCompiler**(`compilation`, `compilerName`, `compilerIndex`, `outputOptions?`, `plugins?`): `Compiler`

Defined in: [webpack/types.d.ts:2988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2988)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

##### compilerName

`string`

##### compilerIndex

`number`

##### outputOptions?

`Partial`<`OutputNormalized`>

##### plugins?

(`false` | `""` | `0` | [`WebpackPluginInstance`](../interfaces/WebpackPluginInstance) | (`this`, `compiler`) => `void`)\[]

#### Returns

`Compiler`

***

### createCompilation()

> **createCompilation**(`params`): [`Compilation`](Compilation.md)

Defined in: [webpack/types.d.ts:3004](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3004)

#### Parameters

##### params

`CompilationParams`

#### Returns

[`Compilation`](Compilation.md)

***

### createContextModuleFactory()

> **createContextModuleFactory**(): `ContextModuleFactory`

Defined in: [webpack/types.d.ts:3007](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3007)

#### Returns

`ContextModuleFactory`

***

### createNormalModuleFactory()

> **createNormalModuleFactory**(): `NormalModuleFactory`

Defined in: [webpack/types.d.ts:3006](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3006)

#### Returns

`NormalModuleFactory`

***

### emitAssets()

> **emitAssets**(`compilation`, `callback`): `void`

Defined in: [webpack/types.d.ts:2982](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2982)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### emitRecords()

> **emitRecords**(`callback`): `void`

Defined in: [webpack/types.d.ts:2986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2986)

#### Parameters

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### getCache()

> **getCache**(`name`): `CacheFacade`

Defined in: [webpack/types.d.ts:2967](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2967)

#### Parameters

##### name

`string`

#### Returns

`CacheFacade`

***

### getInfrastructureLogger()

> **getInfrastructureLogger**(`name`): `WebpackLogger`

Defined in: [webpack/types.d.ts:2968](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2968)

#### Parameters

##### name

`string` | () => `string`

#### Returns

`WebpackLogger`

***

### isChild()

> **isChild**(): `boolean`

Defined in: [webpack/types.d.ts:3003](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3003)

#### Returns

`boolean`

***

### newCompilation()

> **newCompilation**(`params`): [`Compilation`](Compilation.md)

Defined in: [webpack/types.d.ts:3005](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3005)

#### Parameters

##### params

`CompilationParams`

#### Returns

[`Compilation`](Compilation.md)

***

### newCompilationParams()

> **newCompilationParams**(): `object`

Defined in: [webpack/types.d.ts:3008](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3008)

#### Returns

`object`

##### contextModuleFactory

> **contextModuleFactory**: `ContextModuleFactory`

##### normalModuleFactory

> **normalModuleFactory**: `NormalModuleFactory`

***

### purgeInputFileSystem()

> **purgeInputFileSystem**(): `void`

Defined in: [webpack/types.d.ts:2981](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2981)

#### Returns

`void`

***

### readRecords()

> **readRecords**(`callback`): `void`

Defined in: [webpack/types.d.ts:2987](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2987)

#### Parameters

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### run()

> **run**(`callback`): `void`

Defined in: [webpack/types.d.ts:2973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2973)

#### Parameters

##### callback

`CallbackWebpackFunction_2`<[`Stats`](Stats.md), `void`>

#### Returns

`void`

***

### runAsChild()

> **runAsChild**(`callback`): `void`

Defined in: [webpack/types.d.ts:2974](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2974)

#### Parameters

##### callback

(`err`, `entries?`, `compilation?`) => `void`

#### Returns

`void`

***

### validate()

> **validate**<`T`>(`schema`, `value`, `options?`, `check?`): `void`

Defined in: [webpack/types.d.ts:3018](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3018)

Schema validation function with optional pre-compiled check

#### Type Parameters

##### T

`T` *extends* `object` | `object`\[] = `object`

#### Parameters

##### schema

`JSONSchema4` & `ExtendedSchema` | `JSONSchema6` & `ExtendedSchema` | `JSONSchema7` & `ExtendedSchema` | () => `Schema`

##### value

`T`

##### options?

`ValidationErrorConfiguration`

##### check?

(`value`) => `boolean`

#### Returns

`void`

***

### watch()

> **watch**(`watchOptions`, `handler`): [`Watching`](Watching.md)

Defined in: [webpack/types.d.ts:2969](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2969)

#### Parameters

##### watchOptions

`WatchOptions`

##### handler

`CallbackWebpackFunction_2`<[`Stats`](Stats.md), `void`>

#### Returns

[`Watching`](Watching.md)
