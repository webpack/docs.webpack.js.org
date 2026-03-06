---
title: StatsOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / StatsOptions

# Interface: StatsOptions

Defined in: [declarations/WebpackOptions.d.ts:2567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2567)

Stats options object.

## Properties

### all?

> `optional` **all**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2571](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2571)

Fallback value for stats options when an option is not defined (has precedence over local webpack defaults).

***

### assets?

> `optional` **assets**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2575)

Add assets information.

***

### assetsSort?

> `optional` **assetsSort**: `string` \| `false`

Defined in: [declarations/WebpackOptions.d.ts:2579](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2579)

Sort the assets by that field.

***

### assetsSpace?

> `optional` **assetsSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2583](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2583)

Space to display assets (groups will be collapsed to fit this space).

***

### builtAt?

> `optional` **builtAt**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2587](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2587)

Add built at time information.

***

### cached?

> `optional` **cached**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2591](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2591)

Add information about cached (not built) modules (deprecated: use 'cachedModules' instead).

***

### cachedAssets?

> `optional` **cachedAssets**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2595](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2595)

Show cached assets (setting this to `false` only shows emitted files).

***

### cachedModules?

> `optional` **cachedModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2599](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2599)

Add information about cached (not built) modules.

***

### children?

> `optional` **children**: `StatsValue` \| `StatsValue`[]

Defined in: [declarations/WebpackOptions.d.ts:2603](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2603)

Add children information.

***

### chunkGroupAuxiliary?

> `optional` **chunkGroupAuxiliary**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2607](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2607)

Display auxiliary assets in chunk groups.

***

### chunkGroupChildren?

> `optional` **chunkGroupChildren**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2611](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2611)

Display children of chunk groups.

***

### chunkGroupMaxAssets?

> `optional` **chunkGroupMaxAssets**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2615](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2615)

Limit of assets displayed in chunk groups.

***

### chunkGroups?

> `optional` **chunkGroups**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2619](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2619)

Display all chunk groups with the corresponding bundles.

***

### chunkModules?

> `optional` **chunkModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2623](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2623)

Add built modules information to chunk information.

***

### chunkModulesSpace?

> `optional` **chunkModulesSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2627](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2627)

Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group).

***

### chunkOrigins?

> `optional` **chunkOrigins**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2631](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2631)

Add the origins of chunks and chunk merging info.

***

### chunkRelations?

> `optional` **chunkRelations**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2635)

Add information about parent, children and sibling chunks to chunk information.

***

### chunks?

> `optional` **chunks**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2639)

Add chunk information.

***

### chunksSort?

> `optional` **chunksSort**: `string` \| `false`

Defined in: [declarations/WebpackOptions.d.ts:2643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2643)

Sort the chunks by that field.

***

### colors?

> `optional` **colors**: `boolean` \| \{ `bold?`: `string`; `cyan?`: `string`; `green?`: `string`; `magenta?`: `string`; `red?`: `string`; `yellow?`: `string`; \}

Defined in: [declarations/WebpackOptions.d.ts:2647](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2647)

Enables/Disables colorful output.

#### Type Declaration

`boolean`

\{ `bold?`: `string`; `cyan?`: `string`; `green?`: `string`; `magenta?`: `string`; `red?`: `string`; `yellow?`: `string`; \}

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

Defined in: [declarations/WebpackOptions.d.ts:2678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2678)

Context directory for request shortening.

***

### dependentModules?

> `optional` **dependentModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2682](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2682)

Show chunk modules that are dependencies of other modules of the chunk.

***

### depth?

> `optional` **depth**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2686](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2686)

Add module depth in module graph.

***

### entrypoints?

> `optional` **entrypoints**: `boolean` \| `"auto"`

Defined in: [declarations/WebpackOptions.d.ts:2690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2690)

Display the entry points with the corresponding bundles.

***

### env?

> `optional` **env**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2694](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2694)

Add --env information.

***

### errorCause?

> `optional` **errorCause**: `boolean` \| `"auto"`

Defined in: [declarations/WebpackOptions.d.ts:2698](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2698)

Add cause to errors.

***

### errorDetails?

> `optional` **errorDetails**: `boolean` \| `"auto"`

Defined in: [declarations/WebpackOptions.d.ts:2702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2702)

Add details to errors (like resolving log).

***

### errorErrors?

> `optional` **errorErrors**: `boolean` \| `"auto"`

Defined in: [declarations/WebpackOptions.d.ts:2706](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2706)

Add nested errors to errors (like in AggregateError).

***

### errors?

> `optional` **errors**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2714](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2714)

Add errors.

***

### errorsCount?

> `optional` **errorsCount**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2718](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2718)

Add errors count.

***

### errorsSpace?

> `optional` **errorsSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2722)

Space to display errors (value is in number of lines).

***

### errorStack?

> `optional` **errorStack**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2710](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2710)

Add internal stack trace to errors.

***

### exclude?

> `optional` **exclude**: `boolean` \| `ModuleFilterTypes`

Defined in: [declarations/WebpackOptions.d.ts:2726](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2726)

Please use excludeModules instead.

***

### excludeAssets?

> `optional` **excludeAssets**: `AssetFilterTypes`

Defined in: [declarations/WebpackOptions.d.ts:2730](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2730)

Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions.

***

### excludeModules?

> `optional` **excludeModules**: `boolean` \| `ModuleFilterTypes`

Defined in: [declarations/WebpackOptions.d.ts:2734](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2734)

Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions.

***

### groupAssetsByChunk?

> `optional` **groupAssetsByChunk**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2738](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2738)

Group assets by how their are related to chunks.

***

### groupAssetsByEmitStatus?

> `optional` **groupAssetsByEmitStatus**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2742](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2742)

Group assets by their status (emitted, compared for emit or cached).

***

### groupAssetsByExtension?

> `optional` **groupAssetsByExtension**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2746](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2746)

Group assets by their extension.

***

### groupAssetsByInfo?

> `optional` **groupAssetsByInfo**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2750](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2750)

Group assets by their asset info (immutable, development, hotModuleReplacement, etc).

***

### groupAssetsByPath?

> `optional` **groupAssetsByPath**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2754](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2754)

Group assets by their path.

***

### groupModulesByAttributes?

> `optional` **groupModulesByAttributes**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2758](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2758)

Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).

***

### groupModulesByCacheStatus?

> `optional` **groupModulesByCacheStatus**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2762](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2762)

Group modules by their status (cached or built and cacheable).

***

### groupModulesByExtension?

> `optional` **groupModulesByExtension**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2766](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2766)

Group modules by their extension.

***

### groupModulesByLayer?

> `optional` **groupModulesByLayer**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2770](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2770)

Group modules by their layer.

***

### groupModulesByPath?

> `optional` **groupModulesByPath**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2774](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2774)

Group modules by their path.

***

### groupModulesByType?

> `optional` **groupModulesByType**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2778](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2778)

Group modules by their type.

***

### groupReasonsByOrigin?

> `optional` **groupReasonsByOrigin**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2782](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2782)

Group reasons by their origin module.

***

### hash?

> `optional` **hash**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2786](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2786)

Add the hash of the compilation.

***

### ids?

> `optional` **ids**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2790)

Add ids.

***

### logging?

> `optional` **logging**: `boolean` \| `"none"` \| `"error"` \| `"warn"` \| `"info"` \| `"log"` \| `"verbose"`

Defined in: [declarations/WebpackOptions.d.ts:2794](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2794)

Add logging output.

***

### loggingDebug?

> `optional` **loggingDebug**: `boolean` \| `FilterTypes`

Defined in: [declarations/WebpackOptions.d.ts:2798](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2798)

Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions.

***

### loggingTrace?

> `optional` **loggingTrace**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2802](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2802)

Add stack traces to logging output.

***

### moduleAssets?

> `optional` **moduleAssets**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2806](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2806)

Add information about assets inside modules.

***

### modules?

> `optional` **modules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2814](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2814)

Add built modules information.

***

### modulesSort?

> `optional` **modulesSort**: `string` \| `false`

Defined in: [declarations/WebpackOptions.d.ts:2818](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2818)

Sort the modules by that field.

***

### modulesSpace?

> `optional` **modulesSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2822](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2822)

Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups).

***

### moduleTrace?

> `optional` **moduleTrace**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2810](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2810)

Add dependencies and origin of warnings/errors.

***

### nestedModules?

> `optional` **nestedModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2826](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2826)

Add information about modules nested in other modules (like with module concatenation).

***

### nestedModulesSpace?

> `optional` **nestedModulesSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2830](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2830)

Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group).

***

### optimizationBailout?

> `optional` **optimizationBailout**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2834](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2834)

Show reasons why optimization bailed out for modules.

***

### orphanModules?

> `optional` **orphanModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2838](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2838)

Add information about orphan modules.

***

### outputPath?

> `optional` **outputPath**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2842](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2842)

Add output path information.

***

### performance?

> `optional` **performance**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2846](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2846)

Add performance hint flags.

***

### preset?

> `optional` **preset**: `string` \| `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2850](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2850)

Preset for the default values.

***

### providedExports?

> `optional` **providedExports**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2854](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2854)

Show exports provided by modules.

***

### publicPath?

> `optional` **publicPath**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2858](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2858)

Add public path information.

***

### reasons?

> `optional` **reasons**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2862](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2862)

Add information about the reasons why modules are included.

***

### reasonsSpace?

> `optional` **reasonsSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2866](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2866)

Space to display reasons (groups will be collapsed to fit this space).

***

### relatedAssets?

> `optional` **relatedAssets**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2870](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2870)

Add information about assets that are related to other assets (like SourceMaps for assets).

***

### runtime?

> `optional` **runtime**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2874](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2874)

Add information about runtime modules (deprecated: use 'runtimeModules' instead).

***

### runtimeModules?

> `optional` **runtimeModules**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2878](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2878)

Add information about runtime modules.

***

### source?

> `optional` **source**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2882](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2882)

Add the source code of modules.

***

### timings?

> `optional` **timings**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2886](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2886)

Add timing information.

***

### usedExports?

> `optional` **usedExports**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2890](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2890)

Show exports used by modules.

***

### version?

> `optional` **version**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2894](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2894)

Add webpack version information.

***

### warnings?

> `optional` **warnings**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2898](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2898)

Add warnings.

***

### warningsCount?

> `optional` **warningsCount**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:2902](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2902)

Add warnings count.

***

### warningsFilter?

> `optional` **warningsFilter**: `WarningFilterTypes`

Defined in: [declarations/WebpackOptions.d.ts:2906](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2906)

Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions.

***

### warningsSpace?

> `optional` **warningsSpace**: `number`

Defined in: [declarations/WebpackOptions.d.ts:2910](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L2910)

Space to display warnings (value is in number of lines).
