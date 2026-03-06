---
title: WebpackOptionsNormalized
---

[**webpack**](../README.md)

***

[webpack](../README.md) / WebpackOptionsNormalized

# Interface: WebpackOptionsNormalized

Defined in: [declarations/WebpackOptions.d.ts:3835](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3835)

Normalized webpack options object.

## Properties

### amd?

> `optional` **amd**: `Amd`

Defined in: [declarations/WebpackOptions.d.ts:3839](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3839)

Set the value of `require.amd` and `define.amd`. Or disable AMD support.

***

### bail?

> `optional` **bail**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:3843](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3843)

Report the first error as a hard error instead of tolerating it.

***

### cache

> **cache**: `CacheOptionsNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3847](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3847)

Cache generated modules and chunks to improve performance for multiple incremental builds.

***

### context?

> `optional` **context**: `string`

Defined in: [declarations/WebpackOptions.d.ts:3851](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3851)

The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.

***

### dependencies?

> `optional` **dependencies**: `Dependencies`

Defined in: [declarations/WebpackOptions.d.ts:3855](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3855)

References to other configurations to depend on.

***

### devServer?

> `optional` **devServer**: `DevServer`

Defined in: [declarations/WebpackOptions.d.ts:3859](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3859)

Options for the webpack-dev-server.

***

### devtool?

> `optional` **devtool**: `DevTool`

Defined in: [declarations/WebpackOptions.d.ts:3863](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3863)

A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).

***

### dotenv?

> `optional` **dotenv**: `Dotenv`

Defined in: [declarations/WebpackOptions.d.ts:3867](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3867)

Enable and configure the Dotenv plugin to load environment variables from .env files.

***

### entry

> **entry**: [`EntryNormalized`](../type-aliases/EntryNormalized.md)

Defined in: [declarations/WebpackOptions.d.ts:3871](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3871)

The entry point(s) of the compilation.

***

### experiments

> **experiments**: `ExperimentsNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3875](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3875)

Enables/Disables experiments (experimental features with relax SemVer compatibility).

***

### externals

> **externals**: [`Externals`](../type-aliases/Externals.md)

Defined in: [declarations/WebpackOptions.d.ts:3879](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3879)

Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.

***

### externalsPresets

> **externalsPresets**: `ExternalsPresets`

Defined in: [declarations/WebpackOptions.d.ts:3883](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3883)

Enable presets of externals for specific targets.

***

### externalsType?

> `optional` **externalsType**: `ExternalsType`

Defined in: [declarations/WebpackOptions.d.ts:3887](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3887)

Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).

***

### ignoreWarnings?

> `optional` **ignoreWarnings**: `IgnoreWarningsNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3891](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3891)

Ignore specific warnings.

***

### infrastructureLogging

> **infrastructureLogging**: `InfrastructureLogging`

Defined in: [declarations/WebpackOptions.d.ts:3895](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3895)

Options for infrastructure level logging.

***

### loader?

> `optional` **loader**: `Loader`

Defined in: [declarations/WebpackOptions.d.ts:3899](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3899)

Custom values available in the loader context.

***

### mode?

> `optional` **mode**: `Mode`

Defined in: [declarations/WebpackOptions.d.ts:3903](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3903)

Enable production optimizations or development hints.

***

### module

> **module**: `ModuleOptionsNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3907](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3907)

Options affecting the normal modules (`NormalModuleFactory`).

***

### name?

> `optional` **name**: `string`

Defined in: [declarations/WebpackOptions.d.ts:3911](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3911)

Name of the configuration. Used when loading multiple configurations.

***

### node

> **node**: `Node`

Defined in: [declarations/WebpackOptions.d.ts:3915](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3915)

Include polyfills or mocks for various node stuff.

***

### optimization

> **optimization**: `OptimizationNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3919](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3919)

Enables/Disables integrated optimizations.

***

### output

> **output**: `OutputNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3923](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3923)

Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.

***

### parallelism?

> `optional` **parallelism**: `number`

Defined in: [declarations/WebpackOptions.d.ts:3927](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3927)

The number of parallel processed modules in the compilation.

***

### performance?

> `optional` **performance**: `Performance`

Defined in: [declarations/WebpackOptions.d.ts:3931](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3931)

Configuration for web performance recommendations.

***

### plugins

> **plugins**: `PluginsNormalized`

Defined in: [declarations/WebpackOptions.d.ts:3935](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3935)

Add additional plugins to the compiler.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:3939](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3939)

Capture timing information for each module.

***

### recordsInputPath?

> `optional` **recordsInputPath**: `RecordsInputPath`

Defined in: [declarations/WebpackOptions.d.ts:3943](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3943)

Store compiler state to a json file.

***

### recordsOutputPath?

> `optional` **recordsOutputPath**: `RecordsOutputPath`

Defined in: [declarations/WebpackOptions.d.ts:3947](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3947)

Load compiler state from a json file.

***

### resolve

> **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:3951](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3951)

Options for the resolver.

***

### resolveLoader

> **resolveLoader**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:3955](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3955)

Options for the resolver when resolving loaders.

***

### snapshot

> **snapshot**: `SnapshotOptions`

Defined in: [declarations/WebpackOptions.d.ts:3959](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3959)

Options affecting how file system snapshots are created and validated.

***

### stats

> **stats**: `StatsValue`

Defined in: [declarations/WebpackOptions.d.ts:3963](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3963)

Stats options object or preset name.

***

### target?

> `optional` **target**: `Target`

Defined in: [declarations/WebpackOptions.d.ts:3967](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3967)

Environment to build for. An array of environments to build for all of them when possible.

***

### validate?

> `optional` **validate**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:3971](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3971)

Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.

***

### watch?

> `optional` **watch**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:3975](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3975)

Enter watch mode, which rebuilds on file change.

***

### watchOptions

> **watchOptions**: `WatchOptions`

Defined in: [declarations/WebpackOptions.d.ts:3979](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L3979)

Options for the watcher.
