---
title: StatsOptions
---

[webpack](../globals) / StatsOptions

# Interface: StatsOptions

Defined in: [webpack/types.d.ts:18014](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18014)

Stats options object.

## Properties

### all?

> `optional` **all**: `boolean`

Defined in: [webpack/types.d.ts:18018](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18018)

Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).

***

### assets?

> `optional` **assets**: `boolean`

Defined in: [webpack/types.d.ts:18023](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18023)

Add assets information.

***

### assetsSort?

> `optional` **assetsSort**: `string` | `false`

Defined in: [webpack/types.d.ts:18028](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18028)

Sort the assets by that field.

***

### assetsSpace?

> `optional` **assetsSpace**: `number`

Defined in: [webpack/types.d.ts:18033](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18033)

Space to display assets (groups will be collapsed to fit this space).

***

### builtAt?

> `optional` **builtAt**: `boolean`

Defined in: [webpack/types.d.ts:18038](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18038)

Add built at time information.

***

### cached?

> `optional` **cached**: `boolean`

Defined in: [webpack/types.d.ts:18043](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18043)

Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).

***

### cachedAssets?

> `optional` **cachedAssets**: `boolean`

Defined in: [webpack/types.d.ts:18048](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18048)

Show cached assets (setting this to `false` only shows emitted files).

***

### cachedModules?

> `optional` **cachedModules**: `boolean`

Defined in: [webpack/types.d.ts:18053](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18053)

Add information about cached (not built) modules.

***

### children?

> `optional` **children**: `boolean` | `"none"` | `"normal"` | `"summary"` | `"verbose"` | `"errors-only"` | `"errors-warnings"` | `"minimal"` | `"detailed"` | `StatsOptions` | `StatsValue`\[]

Defined in: [webpack/types.d.ts:18058](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18058)

Add children information.

***

### chunkGroupAuxiliary?

> `optional` **chunkGroupAuxiliary**: `boolean`

Defined in: [webpack/types.d.ts:18074](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18074)

Display auxiliary assets in chunk groups.

***

### chunkGroupChildren?

> `optional` **chunkGroupChildren**: `boolean`

Defined in: [webpack/types.d.ts:18079](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18079)

Display children of chunk groups.

***

### chunkGroupMaxAssets?

> `optional` **chunkGroupMaxAssets**: `number`

Defined in: [webpack/types.d.ts:18084](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18084)

Limit of assets displayed in chunk groups.

***

### chunkGroups?

> `optional` **chunkGroups**: `boolean`

Defined in: [webpack/types.d.ts:18089](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18089)

Display all chunk groups with the corresponding bundles.

***

### chunkModules?

> `optional` **chunkModules**: `boolean`

Defined in: [webpack/types.d.ts:18094](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18094)

Add built modules information to chunk information.

***

### chunkModulesSpace?

> `optional` **chunkModulesSpace**: `number`

Defined in: [webpack/types.d.ts:18099](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18099)

Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).

***

### chunkOrigins?

> `optional` **chunkOrigins**: `boolean`

Defined in: [webpack/types.d.ts:18104](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18104)

Add the origins of chunks and chunk merging info.

***

### chunkRelations?

> `optional` **chunkRelations**: `boolean`

Defined in: [webpack/types.d.ts:18109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18109)

Add information about parent, children and sibling chunks to chunk information.

***

### chunks?

> `optional` **chunks**: `boolean`

Defined in: [webpack/types.d.ts:18114](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18114)

Add chunk information.

***

### chunksSort?

> `optional` **chunksSort**: `string` | `false`

Defined in: [webpack/types.d.ts:18119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18119)

Sort the chunks by that field.

***

### colors?

> `optional` **colors**: `boolean` | { `bold?`: `string`; `cyan?`: `string`; `green?`: `string`; `magenta?`: `string`; `red?`: `string`; `yellow?`: `string`; }

Defined in: [webpack/types.d.ts:18124](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18124)

Enables/Disables colorful output.

#### Type Declaration

`boolean`

{ `bold?`: `string`; `cyan?`: `string`; `green?`: `string`; `magenta?`: `string`; `red?`: `string`; `yellow?`: `string`; }

#### bold?

> `optional` **bold**: `string`

Custom color for bold text.

#### cyan?

> `optional` **cyan**: `string`

Custom color for cyan text.

#### green?

> `optional` **green**: `string`

Custom color for green text.

#### magenta?

> `optional` **magenta**: `string`

Custom color for magenta text.

#### red?

> `optional` **red**: `string`

Custom color for red text.

#### yellow?

> `optional` **yellow**: `string`

Custom color for yellow text.

***

### context?

> `optional` **context**: `string`

Defined in: [webpack/types.d.ts:18156](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18156)

Context directory for request shortening.

***

### dependentModules?

> `optional` **dependentModules**: `boolean`

Defined in: [webpack/types.d.ts:18161](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18161)

Show chunk modules that are dependencies of other modules of the chunk.

***

### depth?

> `optional` **depth**: `boolean`

Defined in: [webpack/types.d.ts:18166](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18166)

Add module depth in module graph.

***

### entrypoints?

> `optional` **entrypoints**: `boolean` | `"auto"`

Defined in: [webpack/types.d.ts:18171](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18171)

Display the entry points with the corresponding bundles.

***

### env?

> `optional` **env**: `boolean`

Defined in: [webpack/types.d.ts:18176](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18176)

Add --env information.

***

### errorCause?

> `optional` **errorCause**: `boolean` | `"auto"`

Defined in: [webpack/types.d.ts:18181](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18181)

Add cause to errors.

***

### errorDetails?

> `optional` **errorDetails**: `boolean` | `"auto"`

Defined in: [webpack/types.d.ts:18186](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18186)

Add details to errors (like resolving log).

***

### errorErrors?

> `optional` **errorErrors**: `boolean` | `"auto"`

Defined in: [webpack/types.d.ts:18191](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18191)

Add nested errors to errors (like in AggregateError).

***

### errors?

> `optional` **errors**: `boolean`

Defined in: [webpack/types.d.ts:18201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18201)

Add errors.

***

### errorsCount?

> `optional` **errorsCount**: `boolean`

Defined in: [webpack/types.d.ts:18206](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18206)

Add errors count.

***

### errorsSpace?

> `optional` **errorsSpace**: `number`

Defined in: [webpack/types.d.ts:18211](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18211)

Space to display errors (value is in number of lines).

***

### errorStack?

> `optional` **errorStack**: `boolean`

Defined in: [webpack/types.d.ts:18196](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18196)

Add internal stack trace to errors.

***

### exclude?

> `optional` **exclude**: `string` | `boolean` | `RegExp` | `ModuleFilterItemTypes`\[] | (`name`, `module`, `type`) => `boolean`

Defined in: [webpack/types.d.ts:18216](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18216)

Please use excludeModules instead.

***

### excludeAssets?

> `optional` **excludeAssets**: `string` | `RegExp` | `AssetFilterItemTypes`\[] | (`name`, `asset`) => `boolean`

Defined in: [webpack/types.d.ts:18230](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18230)

Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.

***

### excludeModules?

> `optional` **excludeModules**: `string` | `boolean` | `RegExp` | `ModuleFilterItemTypes`\[] | (`name`, `module`, `type`) => `boolean`

Defined in: [webpack/types.d.ts:18239](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18239)

Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.

***

### groupAssetsByChunk?

> `optional` **groupAssetsByChunk**: `boolean`

Defined in: [webpack/types.d.ts:18253](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18253)

Group assets by how their are related to chunks.

***

### groupAssetsByEmitStatus?

> `optional` **groupAssetsByEmitStatus**: `boolean`

Defined in: [webpack/types.d.ts:18258](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18258)

Group assets by their status (emitted, compared for emit or cached).

***

### groupAssetsByExtension?

> `optional` **groupAssetsByExtension**: `boolean`

Defined in: [webpack/types.d.ts:18263](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18263)

Group assets by their extension.

***

### groupAssetsByInfo?

> `optional` **groupAssetsByInfo**: `boolean`

Defined in: [webpack/types.d.ts:18268](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18268)

Group assets by their asset info (immutable, development, hotModuleReplacement, etc).

***

### groupAssetsByPath?

> `optional` **groupAssetsByPath**: `boolean`

Defined in: [webpack/types.d.ts:18273](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18273)

Group assets by their path.

***

### groupModulesByAttributes?

> `optional` **groupModulesByAttributes**: `boolean`

Defined in: [webpack/types.d.ts:18278](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18278)

Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).

***

### groupModulesByCacheStatus?

> `optional` **groupModulesByCacheStatus**: `boolean`

Defined in: [webpack/types.d.ts:18283](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18283)

Group modules by their status (cached or built and cacheable).

***

### groupModulesByExtension?

> `optional` **groupModulesByExtension**: `boolean`

Defined in: [webpack/types.d.ts:18288](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18288)

Group modules by their extension.

***

### groupModulesByLayer?

> `optional` **groupModulesByLayer**: `boolean`

Defined in: [webpack/types.d.ts:18293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18293)

Group modules by their layer.

***

### groupModulesByPath?

> `optional` **groupModulesByPath**: `boolean`

Defined in: [webpack/types.d.ts:18298](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18298)

Group modules by their path.

***

### groupModulesByType?

> `optional` **groupModulesByType**: `boolean`

Defined in: [webpack/types.d.ts:18303](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18303)

Group modules by their type.

***

### groupReasonsByOrigin?

> `optional` **groupReasonsByOrigin**: `boolean`

Defined in: [webpack/types.d.ts:18308](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18308)

Group reasons by their origin module.

***

### hash?

> `optional` **hash**: `boolean`

Defined in: [webpack/types.d.ts:18313](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18313)

Add the hash of the compilation.

***

### ids?

> `optional` **ids**: `boolean`

Defined in: [webpack/types.d.ts:18318](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18318)

Add ids.

***

### logging?

> `optional` **logging**: `boolean` | `"none"` | `"error"` | `"warn"` | `"info"` | `"log"` | `"verbose"`

Defined in: [webpack/types.d.ts:18323](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18323)

Add logging output.

***

### loggingDebug?

> `optional` **loggingDebug**: `string` | `boolean` | `RegExp` | `FilterItemTypes`\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:18328](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18328)

Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.

***

### loggingTrace?

> `optional` **loggingTrace**: `boolean`

Defined in: [webpack/types.d.ts:18338](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18338)

Add stack traces to logging output.

***

### moduleAssets?

> `optional` **moduleAssets**: `boolean`

Defined in: [webpack/types.d.ts:18343](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18343)

Add information about assets inside modules.

***

### modules?

> `optional` **modules**: `boolean`

Defined in: [webpack/types.d.ts:18353](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18353)

Add built modules information.

***

### modulesSort?

> `optional` **modulesSort**: `string` | `false`

Defined in: [webpack/types.d.ts:18358](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18358)

Sort the modules by that field.

***

### modulesSpace?

> `optional` **modulesSpace**: `number`

Defined in: [webpack/types.d.ts:18363](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18363)

Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).

***

### moduleTrace?

> `optional` **moduleTrace**: `boolean`

Defined in: [webpack/types.d.ts:18348](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18348)

Add dependencies and origin of warnings/errors.

***

### nestedModules?

> `optional` **nestedModules**: `boolean`

Defined in: [webpack/types.d.ts:18368](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18368)

Add information about modules nested in other modules (like with module concatenation).

***

### nestedModulesSpace?

> `optional` **nestedModulesSpace**: `number`

Defined in: [webpack/types.d.ts:18373](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18373)

Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).

***

### optimizationBailout?

> `optional` **optimizationBailout**: `boolean`

Defined in: [webpack/types.d.ts:18378](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18378)

Show reasons why optimization bailed out for modules.

***

### orphanModules?

> `optional` **orphanModules**: `boolean`

Defined in: [webpack/types.d.ts:18383](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18383)

Add information about orphan modules.

***

### outputPath?

> `optional` **outputPath**: `boolean`

Defined in: [webpack/types.d.ts:18388](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18388)

Add output path information.

***

### performance?

> `optional` **performance**: `boolean`

Defined in: [webpack/types.d.ts:18393](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18393)

Add performance hint flags.

***

### preset?

> `optional` **preset**: `string` | `boolean`

Defined in: [webpack/types.d.ts:18398](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18398)

Preset for the default values.

***

### providedExports?

> `optional` **providedExports**: `boolean`

Defined in: [webpack/types.d.ts:18403](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18403)

Show exports provided by modules.

***

### publicPath?

> `optional` **publicPath**: `boolean`

Defined in: [webpack/types.d.ts:18408](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18408)

Add public path information.

***

### reasons?

> `optional` **reasons**: `boolean`

Defined in: [webpack/types.d.ts:18413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18413)

Add information about the reasons why modules are included.

***

### reasonsSpace?

> `optional` **reasonsSpace**: `number`

Defined in: [webpack/types.d.ts:18418](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18418)

Space to display reasons (groups will be collapsed to fit this space).

***

### relatedAssets?

> `optional` **relatedAssets**: `boolean`

Defined in: [webpack/types.d.ts:18423](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18423)

Add information about assets that are related to other assets (like SourceMaps for assets).

***

### runtime?

> `optional` **runtime**: `boolean`

Defined in: [webpack/types.d.ts:18428](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18428)

Add information about runtime modules (deprecated: use 'runtimeModules' instead).

***

### runtimeModules?

> `optional` **runtimeModules**: `boolean`

Defined in: [webpack/types.d.ts:18433](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18433)

Add information about runtime modules.

***

### source?

> `optional` **source**: `boolean`

Defined in: [webpack/types.d.ts:18438](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18438)

Add the source code of modules.

***

### timings?

> `optional` **timings**: `boolean`

Defined in: [webpack/types.d.ts:18443](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18443)

Add timing information.

***

### usedExports?

> `optional` **usedExports**: `boolean`

Defined in: [webpack/types.d.ts:18448](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18448)

Show exports used by modules.

***

### version?

> `optional` **version**: `boolean`

Defined in: [webpack/types.d.ts:18453](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18453)

Add webpack version information.

***

### warnings?

> `optional` **warnings**: `boolean`

Defined in: [webpack/types.d.ts:18458](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18458)

Add warnings.

***

### warningsCount?

> `optional` **warningsCount**: `boolean`

Defined in: [webpack/types.d.ts:18463](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18463)

Add warnings count.

***

### warningsFilter?

> `optional` **warningsFilter**: `string` | `RegExp` | `WarningFilterItemTypes`\[] | (`warning`, `warningString`) => `boolean`

Defined in: [webpack/types.d.ts:18468](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18468)

Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.

***

### warningsSpace?

> `optional` **warningsSpace**: `number`

Defined in: [webpack/types.d.ts:18477](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18477)

Space to display warnings (value is in number of lines).
