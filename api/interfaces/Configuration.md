---
title: Configuration
---

[**webpack**](../README.md)

***

[webpack](../README.md) / Configuration

# Interface: Configuration

Defined in: [declarations/WebpackOptions.d.ts:896](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L896)

Options object as provided by the user.

## Properties

### amd?

> `optional` **amd**: `Amd`

Defined in: [declarations/WebpackOptions.d.ts:900](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L900)

Set the value of `require.amd` and `define.amd`. Or disable AMD support.

***

### bail?

> `optional` **bail**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:904](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L904)

Report the first error as a hard error instead of tolerating it.

***

### cache?

> `optional` **cache**: `CacheOptions`

Defined in: [declarations/WebpackOptions.d.ts:908](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L908)

Cache generated modules and chunks to improve performance for multiple incremental builds.

***

### context?

> `optional` **context**: `string`

Defined in: [declarations/WebpackOptions.d.ts:912](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L912)

The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.

***

### dependencies?

> `optional` **dependencies**: `Dependencies`

Defined in: [declarations/WebpackOptions.d.ts:916](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L916)

References to other configurations to depend on.

***

### devServer?

> `optional` **devServer**: `DevServer`

Defined in: [declarations/WebpackOptions.d.ts:920](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L920)

Options for the webpack-dev-server.

***

### devtool?

> `optional` **devtool**: `DevTool`

Defined in: [declarations/WebpackOptions.d.ts:924](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L924)

A developer tool to enhance debugging (false | eval | [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map).

***

### dotenv?

> `optional` **dotenv**: `Dotenv`

Defined in: [declarations/WebpackOptions.d.ts:928](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L928)

Enable and configure the Dotenv plugin to load environment variables from .env files.

***

### entry?

> `optional` **entry**: [`Entry`](../type-aliases/Entry.md)

Defined in: [declarations/WebpackOptions.d.ts:932](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L932)

The entry point(s) of the compilation.

***

### experiments?

> `optional` **experiments**: `Experiments`

Defined in: [declarations/WebpackOptions.d.ts:936](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L936)

Enables/Disables experiments (experimental features with relax SemVer compatibility).

***

### extends?

> `optional` **extends**: `Extends`

Defined in: [declarations/WebpackOptions.d.ts:940](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L940)

Extend configuration from another configuration (only works when using webpack-cli).

***

### externals?

> `optional` **externals**: [`Externals`](../type-aliases/Externals.md)

Defined in: [declarations/WebpackOptions.d.ts:944](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L944)

Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.

***

### externalsPresets?

> `optional` **externalsPresets**: `ExternalsPresets`

Defined in: [declarations/WebpackOptions.d.ts:948](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L948)

Enable presets of externals for specific targets.

***

### externalsType?

> `optional` **externalsType**: `ExternalsType`

Defined in: [declarations/WebpackOptions.d.ts:952](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L952)

Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).

***

### ignoreWarnings?

> `optional` **ignoreWarnings**: `IgnoreWarnings`

Defined in: [declarations/WebpackOptions.d.ts:956](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L956)

Ignore specific warnings.

***

### infrastructureLogging?

> `optional` **infrastructureLogging**: `InfrastructureLogging`

Defined in: [declarations/WebpackOptions.d.ts:960](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L960)

Options for infrastructure level logging.

***

### loader?

> `optional` **loader**: `Loader`

Defined in: [declarations/WebpackOptions.d.ts:964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L964)

Custom values available in the loader context.

***

### mode?

> `optional` **mode**: `Mode`

Defined in: [declarations/WebpackOptions.d.ts:968](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L968)

Enable production optimizations or development hints.

***

### module?

> `optional` **module**: [`ModuleOptions`](ModuleOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:972](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L972)

Options affecting the normal modules (`NormalModuleFactory`).

***

### name?

> `optional` **name**: `string`

Defined in: [declarations/WebpackOptions.d.ts:976](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L976)

Name of the configuration. Used when loading multiple configurations.

***

### node?

> `optional` **node**: `Node`

Defined in: [declarations/WebpackOptions.d.ts:980](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L980)

Include polyfills or mocks for various node stuff.

***

### optimization?

> `optional` **optimization**: `Optimization`

Defined in: [declarations/WebpackOptions.d.ts:984](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L984)

Enables/Disables integrated optimizations.

***

### output?

> `optional` **output**: `Output`

Defined in: [declarations/WebpackOptions.d.ts:988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L988)

Options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.

***

### parallelism?

> `optional` **parallelism**: `number`

Defined in: [declarations/WebpackOptions.d.ts:992](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L992)

The number of parallel processed modules in the compilation.

***

### performance?

> `optional` **performance**: `Performance`

Defined in: [declarations/WebpackOptions.d.ts:996](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L996)

Configuration for web performance recommendations.

***

### plugins?

> `optional` **plugins**: `Plugins`

Defined in: [declarations/WebpackOptions.d.ts:1000](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1000)

Add additional plugins to the compiler.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1004](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1004)

Capture timing information for each module.

***

### recordsInputPath?

> `optional` **recordsInputPath**: `RecordsInputPath`

Defined in: [declarations/WebpackOptions.d.ts:1008](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1008)

Store compiler state to a json file.

***

### recordsOutputPath?

> `optional` **recordsOutputPath**: `RecordsOutputPath`

Defined in: [declarations/WebpackOptions.d.ts:1012](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1012)

Load compiler state from a json file.

***

### recordsPath?

> `optional` **recordsPath**: `RecordsPath`

Defined in: [declarations/WebpackOptions.d.ts:1016](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1016)

Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined.

***

### resolve?

> `optional` **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:1020](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1020)

Options for the resolver.

***

### resolveLoader?

> `optional` **resolveLoader**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:1024](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1024)

Options for the resolver when resolving loaders.

***

### snapshot?

> `optional` **snapshot**: `SnapshotOptions`

Defined in: [declarations/WebpackOptions.d.ts:1028](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1028)

Options affecting how file system snapshots are created and validated.

***

### stats?

> `optional` **stats**: `StatsValue`

Defined in: [declarations/WebpackOptions.d.ts:1032](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1032)

Stats options object or preset name.

***

### target?

> `optional` **target**: `Target`

Defined in: [declarations/WebpackOptions.d.ts:1036](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1036)

Environment to build for. An array of environments to build for all of them when possible.

***

### validate?

> `optional` **validate**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1040](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1040)

Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.

***

### watch?

> `optional` **watch**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1044](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1044)

Enter watch mode, which rebuilds on file change.

***

### watchOptions?

> `optional` **watchOptions**: `WatchOptions`

Defined in: [declarations/WebpackOptions.d.ts:1048](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1048)

Options for the watcher.
