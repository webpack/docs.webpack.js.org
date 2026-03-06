---
title: WebpackOptionsNormalized
---

[webpack](../globals) / WebpackOptionsNormalized

# Interface: WebpackOptionsNormalized

Defined in: [webpack/types.d.ts:19157](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19157)

Normalized webpack options object.

## Properties

### amd?

> `optional` **amd**: `false` | {\[`index`: `string`]: `any`; }

Defined in: [webpack/types.d.ts:19161](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19161)

Set the value of `require.amd` and `define.amd`. Or disable AMD support.

***

### bail?

> `optional` **bail**: `boolean`

Defined in: [webpack/types.d.ts:19166](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19166)

Report the first error as a hard error instead of tolerating it.

***

### cache

> **cache**: `CacheOptionsNormalized`

Defined in: [webpack/types.d.ts:19171](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19171)

Cache generated modules and chunks to improve performance for multiple incremental builds.

***

### context?

> `optional` **context**: `string`

Defined in: [webpack/types.d.ts:19176](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19176)

The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory.

***

### dependencies?

> `optional` **dependencies**: `string`\[]

Defined in: [webpack/types.d.ts:19181](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19181)

References to other configurations to depend on.

***

### devServer?

> `optional` **devServer**: `false` | {\[`index`: `string`]: `any`; }

Defined in: [webpack/types.d.ts:19186](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19186)

Options for the webpack-dev-server.

***

### devtool?

> `optional` **devtool**: `string` | `false` | `object`\[]

Defined in: [webpack/types.d.ts:19191](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19191)

A developer tool to enhance debugging (false | eval | \[inline-|hidden-|eval-]\[nosources-]\[cheap-\[module-]]source-map).

***

### dotenv?

> `optional` **dotenv**: `boolean` | `DotenvPluginOptions`

Defined in: [webpack/types.d.ts:19208](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19208)

Enable and configure the Dotenv plugin to load environment variables from .env files.

***

### entry

> **entry**: [`EntryNormalized`](../type-aliases/EntryNormalized)

Defined in: [webpack/types.d.ts:19213](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19213)

The entry point(s) of the compilation.

***

### experiments

> **experiments**: `ExperimentsNormalized`

Defined in: [webpack/types.d.ts:19218](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19218)

Enables/Disables experiments (experimental features with relax SemVer compatibility).

***

### externals

> **externals**: [`Externals`](../type-aliases/Externals)

Defined in: [webpack/types.d.ts:19223](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19223)

Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.

***

### externalsPresets

> **externalsPresets**: `ExternalsPresets`

Defined in: [webpack/types.d.ts:19228](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19228)

Enable presets of externals for specific targets.

***

### externalsType?

> `optional` **externalsType**: `"window"` | `"promise"` | `"module"` | `"script"` | `"var"` | `"self"` | `"global"` | `"asset"` | `"css-import"` | `"css-url"` | `"commonjs"` | `"import"` | `"jsonp"` | `"this"` | `"assign"` | `"commonjs2"` | `"commonjs-module"` | `"commonjs-static"` | `"amd"` | `"amd-require"` | `"umd"` | `"umd2"` | `"system"` | `"module-import"` | `"node-commonjs"`

Defined in: [webpack/types.d.ts:19233](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19233)

Specifies the default type of externals ('amd\*', 'umd\*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value).

***

### ignoreWarnings?

> `optional` **ignoreWarnings**: (`warning`, `compilation`) => `boolean`\[]

Defined in: [webpack/types.d.ts:19263](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19263)

Ignore specific warnings.

#### Parameters

##### warning

`Error`

##### compilation

[`Compilation`](../classes/Compilation)

#### Returns

`boolean`

***

### infrastructureLogging

> **infrastructureLogging**: `InfrastructureLogging`

Defined in: [webpack/types.d.ts:19268](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19268)

Options for infrastructure level logging.

***

### loader?

> `optional` **loader**: `Loader`

Defined in: [webpack/types.d.ts:19273](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19273)

Custom values available in the loader context.

***

### mode?

> `optional` **mode**: `"none"` | `"development"` | `"production"`

Defined in: [webpack/types.d.ts:19278](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19278)

Enable production optimizations or development hints.

***

### module

> **module**: `ModuleOptionsNormalized`

Defined in: [webpack/types.d.ts:19283](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19283)

Options affecting the normal modules (`NormalModuleFactory`).

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:19288](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19288)

Name of the configuration. Used when loading multiple configurations.

***

### node

> **node**: `Node`

Defined in: [webpack/types.d.ts:19293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19293)

Include polyfills or mocks for various node stuff.

***

### optimization

> **optimization**: `OptimizationNormalized`

Defined in: [webpack/types.d.ts:19298](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19298)

Enables/Disables integrated optimizations.

***

### output

> **output**: `OutputNormalized`

Defined in: [webpack/types.d.ts:19303](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19303)

Normalized options affecting the output of the compilation. `output` options tell webpack how to write the compiled files to disk.

***

### parallelism?

> `optional` **parallelism**: `number`

Defined in: [webpack/types.d.ts:19308](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19308)

The number of parallel processed modules in the compilation.

***

### performance?

> `optional` **performance**: `false` | `PerformanceOptions`

Defined in: [webpack/types.d.ts:19313](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19313)

Configuration for web performance recommendations.

***

### plugins

> **plugins**: ([`WebpackPluginInstance`](WebpackPluginInstance.md) | (`this`, `compiler`) => `void`)\[]

Defined in: [webpack/types.d.ts:19318](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19318)

Add additional plugins to the compiler.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [webpack/types.d.ts:19326](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19326)

Capture timing information for each module.

***

### recordsInputPath?

> `optional` **recordsInputPath**: `string` | `false`

Defined in: [webpack/types.d.ts:19331](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19331)

Store compiler state to a json file.

***

### recordsOutputPath?

> `optional` **recordsOutputPath**: `string` | `false`

Defined in: [webpack/types.d.ts:19336](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19336)

Load compiler state from a json file.

***

### resolve

> **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [webpack/types.d.ts:19341](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19341)

Options for the resolver.

***

### resolveLoader

> **resolveLoader**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [webpack/types.d.ts:19346](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19346)

Options for the resolver when resolving loaders.

***

### snapshot

> **snapshot**: `SnapshotOptionsWebpackOptions`

Defined in: [webpack/types.d.ts:19351](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19351)

Options affecting how file system snapshots are created and validated.

***

### stats

> **stats**: `StatsValue`

Defined in: [webpack/types.d.ts:19356](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19356)

Stats options object or preset name.

***

### target?

> `optional` **target**: `string` | `false` | `string`\[]

Defined in: [webpack/types.d.ts:19361](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19361)

Environment to build for. An array of environments to build for all of them when possible.

***

### validate?

> `optional` **validate**: `boolean`

Defined in: [webpack/types.d.ts:19366](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19366)

Enable validation of webpack configuration. Defaults to true in development mode. In production mode, defaults to true unless futureDefaults is enabled, then defaults to false.

***

### watch?

> `optional` **watch**: `boolean`

Defined in: [webpack/types.d.ts:19371](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19371)

Enter watch mode, which rebuilds on file change.

***

### watchOptions

> **watchOptions**: `WatchOptions`

Defined in: [webpack/types.d.ts:19376](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19376)

Options for the watcher.
