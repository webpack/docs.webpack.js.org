---
title: Configuration
---

[webpack](../globals.md) / Configuration

# Interface: Configuration

Defined in: [webpack/types.d.ts:3141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3141)

Options object as provided by the user.

## Properties

### amd?

> `optional` **amd**: `false` \| \{\[`index`: `string`\]: `any`; \}

Defined in: [webpack/types.d.ts:3145](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3145)

Set the value of `require.amd` and `define.amd`. Or disable AMD support.

***

### bail?

> `optional` **bail**: `boolean`

Defined in: [webpack/types.d.ts:3150](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3150)

Report the first error as a hard error instead of tolerating it.

***

### cache?

> `optional` **cache**: `boolean` \| [`FileCacheOptions`](FileCacheOptions.md) \| [`MemoryCacheOptions`](MemoryCacheOptions.md)

Defined in: [webpack/types.d.ts:3155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3155)

Cache generated modules and chunks to improve performance for multiple incremental builds.

***

### context?

> `optional` **context**: `string`

Defined in: [webpack/types.d.ts:3160](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3160)

The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.

***

### dependencies?

> `optional` **dependencies**: `string`[]

Defined in: [webpack/types.d.ts:3165](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3165)

References to other configurations to depend on.

***

### devtool?

> `optional` **devtool**: `string` \| `false` \| `object`[]

Defined in: [webpack/types.d.ts:3170](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3170)

A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).

***

### dotenv?

> `optional` **dotenv**: `boolean` \| `DotenvPluginOptions`

Defined in: [webpack/types.d.ts:3187](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3187)

Enable and configure the Dotenv plugin to load environment variables from .env files.

***

### entry?

> `optional` **entry**: `string` \| `string`[] \| [`EntryObject`](EntryObject.md) \| () => `string` \| `string`[] \| [`EntryObject`](EntryObject.md) \| `Promise`\<`EntryStatic`\>

Defined in: [webpack/types.d.ts:3192](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3192)

The entry point(s) of the compilation.

***

### experiments?

> `optional` **experiments**: `Experiments`

Defined in: [webpack/types.d.ts:3201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3201)

Enables/Disables experiments (experimental features with relax SemVer compatibility).

***

### extends?

> `optional` **extends**: `string` \| `string`[]

Defined in: [webpack/types.d.ts:3206](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3206)

Extend configuration from another configuration (only works when using webpack-cli).

***

### externals?

> `optional` **externals**: `string` \| `RegExp` \| [`ExternalItemObjectKnown`](ExternalItemObjectKnown.md) & [`ExternalItemObjectUnknown`](ExternalItemObjectUnknown.md) \| (`data`, `callback`) => `void` \| (`data`) => `Promise`\<[`ExternalItemValue`](../type-aliases/ExternalItemValue.md)\> \| [`ExternalItem`](../type-aliases/ExternalItem.md)[]

Defined in: [webpack/types.d.ts:3211](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3211)

Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.

***

### externalsPresets?

> `optional` **externalsPresets**: `ExternalsPresets`

Defined in: [webpack/types.d.ts:3228](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3228)

Enable presets of externals for specific targets.

***

### externalsType?

> `optional` **externalsType**: `"window"` \| `"promise"` \| `"module"` \| `"script"` \| `"var"` \| `"self"` \| `"global"` \| `"asset"` \| `"css-import"` \| `"css-url"` \| `"commonjs"` \| `"import"` \| `"jsonp"` \| `"this"` \| `"assign"` \| `"commonjs2"` \| `"commonjs-module"` \| `"commonjs-static"` \| `"amd"` \| `"amd-require"` \| `"umd"` \| `"umd2"` \| `"system"` \| `"module-import"` \| `"node-commonjs"`

Defined in: [webpack/types.d.ts:3233](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3233)

Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).

***

### ignoreWarnings?

> `optional` **ignoreWarnings**: (`RegExp` \| \{ `file?`: `RegExp`; `message?`: `RegExp`; `module?`: `RegExp`; \} \| (`warning`, `compilation`) => `boolean`)[]

Defined in: [webpack/types.d.ts:3263](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3263)

Ignore specific warnings.

***

### infrastructureLogging?

> `optional` **infrastructureLogging**: `InfrastructureLogging`

Defined in: [webpack/types.d.ts:3285](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3285)

Options for infrastructure level logging.

***

### loader?

> `optional` **loader**: `Loader`

Defined in: [webpack/types.d.ts:3290](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3290)

Custom values available in the loader context.

***

### mode?

> `optional` **mode**: `"none"` \| `"development"` \| `"production"`

Defined in: [webpack/types.d.ts:3295](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3295)

Enable production optimizations or development hints.

***

### module?

> `optional` **module**: [`ModuleOptions`](ModuleOptions.md)

Defined in: [webpack/types.d.ts:3300](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3300)

Options affecting the normal modules (`NormalModuleFactory`).

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:3305](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3305)

Name of the configuration. Used when loading multiple configurations.

***

### node?

> `optional` **node**: `false` \| `NodeOptions`

Defined in: [webpack/types.d.ts:3310](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3310)

Include polyfills or mocks for various node stuff.

***

### optimization?

> `optional` **optimization**: `Optimization`

Defined in: [webpack/types.d.ts:3315](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3315)

Enables/Disables integrated optimizations.

***

### output?

> `optional` **output**: `Output`

Defined in: [webpack/types.d.ts:3320](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3320)

Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.

***

### parallelism?

> `optional` **parallelism**: `number`

Defined in: [webpack/types.d.ts:3325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3325)

The number of parallel processed modules in the compilation.

***

### performance?

> `optional` **performance**: `false` \| `PerformanceOptions`

Defined in: [webpack/types.d.ts:3330](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3330)

Configuration for web performance recommendations.

***

### plugins?

> `optional` **plugins**: (`false` \| `""` \| `0` \| [`WebpackPluginInstance`](WebpackPluginInstance.md) \| (`this`, `compiler`) => `void`)[]

Defined in: [webpack/types.d.ts:3335](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3335)

Add additional plugins to the compiler.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [webpack/types.d.ts:3348](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3348)

Capture timing information for each module.

***

### recordsInputPath?

> `optional` **recordsInputPath**: `string` \| `false`

Defined in: [webpack/types.d.ts:3353](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3353)

Store compiler state to a json file.

***

### recordsOutputPath?

> `optional` **recordsOutputPath**: `string` \| `false`

Defined in: [webpack/types.d.ts:3358](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3358)

Load compiler state from a json file.

***

### recordsPath?

> `optional` **recordsPath**: `string` \| `false`

Defined in: [webpack/types.d.ts:3363](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3363)

Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.

***

### resolve?

> `optional` **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [webpack/types.d.ts:3368](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3368)

Options for the resolver.

***

### resolveLoader?

> `optional` **resolveLoader**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [webpack/types.d.ts:3373](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3373)

Options for the resolver when resolving loaders.

***

### snapshot?

> `optional` **snapshot**: `SnapshotOptionsWebpackOptions`

Defined in: [webpack/types.d.ts:3378](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3378)

Options affecting how file system snapshots are created and validated.

***

### stats?

> `optional` **stats**: `boolean` \| `"none"` \| `"normal"` \| `"summary"` \| `"verbose"` \| `"errors-only"` \| `"errors-warnings"` \| `"minimal"` \| `"detailed"` \| [`StatsOptions`](StatsOptions.md)

Defined in: [webpack/types.d.ts:3383](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3383)

Stats options object or preset name.

***

### target?

> `optional` **target**: `string` \| `false` \| `string`[]

Defined in: [webpack/types.d.ts:3398](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3398)

Environment to build for. An array of environments to build for all of them when possible.

***

### validate?

> `optional` **validate**: `boolean`

Defined in: [webpack/types.d.ts:3403](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3403)

Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.

***

### watch?

> `optional` **watch**: `boolean`

Defined in: [webpack/types.d.ts:3408](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3408)

Enter watch mode, which rebuilds on file change.

***

### watchOptions?

> `optional` **watchOptions**: `WatchOptions`

Defined in: [webpack/types.d.ts:3413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3413)

Options for the watcher.
