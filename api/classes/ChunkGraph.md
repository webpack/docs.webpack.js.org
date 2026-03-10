---
title: ChunkGraph
---

[webpack](../globals) / ChunkGraph

# Class: ChunkGraph

Defined in: [webpack/types.d.ts:1395](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1395)

## Constructors

### Constructor

> **new ChunkGraph**(`moduleGraph`, `hashFunction?`): `ChunkGraph`

Defined in: [webpack/types.d.ts:1396](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1396)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### hashFunction?

`HashFunction`

#### Returns

`ChunkGraph`

## Properties

### moduleGraph

> **moduleGraph**: [`ModuleGraph`](ModuleGraph.md)

Defined in: [webpack/types.d.ts:1397](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1397)

## Methods

### addChunkRuntimeRequirements()

> **addChunkRuntimeRequirements**(`chunk`, `items`): `void`

Defined in: [webpack/types.d.ts:1539](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1539)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### items

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

#### Returns

`void`

***

### addDependentHashModuleToChunk()

> **addDependentHashModuleToChunk**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1489](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1489)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`RuntimeModule`](RuntimeModule.md)

#### Returns

`void`

***

### addFullHashModuleToChunk()

> **addFullHashModuleToChunk**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1488](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1488)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`RuntimeModule`](RuntimeModule.md)

#### Returns

`void`

***

### addModuleRuntimeRequirements()

> **addModuleRuntimeRequirements**(`module`, `runtime`, `items`, `transferOwnership?`): `void`

Defined in: [webpack/types.d.ts:1533](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1533)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### items

[`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

##### transferOwnership?

`boolean`

#### Returns

`void`

***

### addTreeRuntimeRequirements()

> **addTreeRuntimeRequirements**(`chunk`, `items`): `void`

Defined in: [webpack/types.d.ts:1540](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1540)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### items

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<`string`>

#### Returns

`void`

***

### attachDependentHashModules()

> **attachDependentHashModules**(`chunk`, `modules`): `void`

Defined in: [webpack/types.d.ts:1404](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1404)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### modules

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md)>

#### Returns

`void`

***

### attachFullHashModules()

> **attachFullHashModules**(`chunk`, `modules`): `void`

Defined in: [webpack/types.d.ts:1403](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1403)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### modules

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md)>

#### Returns

`void`

***

### attachModules()

> **attachModules**(`chunk`, `modules`): `void`

Defined in: [webpack/types.d.ts:1401](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1401)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### modules

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

#### Returns

`void`

***

### attachRuntimeModules()

> **attachRuntimeModules**(`chunk`, `modules`): `void`

Defined in: [webpack/types.d.ts:1402](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1402)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### modules

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md)>

#### Returns

`void`

***

### canChunksBeIntegrated()

> **canChunksBeIntegrated**(`chunkA`, `chunkB`): `boolean`

Defined in: [webpack/types.d.ts:1478](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1478)

#### Parameters

##### chunkA

[`Chunk`](Chunk.md)

##### chunkB

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### compareChunks()

> **compareChunks**(`chunkA`, `chunkB`): `-1` | `0` | `1`

Defined in: [webpack/types.d.ts:1468](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1468)

#### Parameters

##### chunkA

[`Chunk`](Chunk.md)

##### chunkB

[`Chunk`](Chunk.md)

#### Returns

`-1` | `0` | `1`

***

### connectBlockAndChunkGroup()

> **connectBlockAndChunkGroup**(`depBlock`, `chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1515](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1515)

#### Parameters

##### depBlock

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

***

### connectChunkAndEntryModule()

> **connectChunkAndEntryModule**(`chunk`, `module`, `entrypoint`): `void`

Defined in: [webpack/types.d.ts:1482](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1482)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

##### entrypoint

[`Entrypoint`](Entrypoint.md)

#### Returns

`void`

***

### connectChunkAndModule()

> **connectChunkAndModule**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1398](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1398)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### connectChunkAndRuntimeModule()

> **connectChunkAndRuntimeModule**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1487](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1487)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`RuntimeModule`](RuntimeModule.md)

#### Returns

`void`

***

### disconnectChunk()

> **disconnectChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:1400](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1400)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### disconnectChunkAndEntryModule()

> **disconnectChunkAndEntryModule**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1490](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1490)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### disconnectChunkAndModule()

> **disconnectChunkAndModule**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1399](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1399)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### disconnectChunkAndRuntimeModule()

> **disconnectChunkAndRuntimeModule**(`chunk`, `module`): `void`

Defined in: [webpack/types.d.ts:1491](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1491)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`RuntimeModule`](RuntimeModule.md)

#### Returns

`void`

***

### disconnectChunkGroup()

> **disconnectChunkGroup**(`chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1519](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1519)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

***

### disconnectEntries()

> **disconnectEntries**(`chunk`): `void`

Defined in: [webpack/types.d.ts:1493](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1493)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### disconnectEntryModule()

> **disconnectEntryModule**(`module`): `void`

Defined in: [webpack/types.d.ts:1492](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1492)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### getBlockChunkGroup()

> **getBlockChunkGroup**(`depBlock`): [`ChunkGroup`](ChunkGroup.md)

Defined in: [webpack/types.d.ts:1514](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1514)

#### Parameters

##### depBlock

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

[`ChunkGroup`](ChunkGroup.md)

***

### getChunkConditionMap()

> **getChunkConditionMap**(`chunk`, `filterFn`): `ChunkConditionMap`

Defined in: [webpack/types.d.ts:1459](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1459)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### filterFn

(`c`, `chunkGraph`) => `boolean`

#### Returns

`ChunkConditionMap`

***

### getChunkDependentHashModulesIterable()

> **getChunkDependentHashModulesIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md), `any`, `any`>

Defined in: [webpack/types.d.ts:1508](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1508)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md), `any`, `any`>

***

### getChunkEntryDependentChunksIterable()

> **getChunkEntryDependentChunksIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:1497](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1497)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

***

### getChunkEntryModulesIterable()

> **getChunkEntryModulesIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:1496](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1496)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

***

### getChunkEntryModulesWithChunkGroupIterable()

> **getChunkEntryModulesWithChunkGroupIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<\[[`Module`](Module.md), [`Entrypoint`](Entrypoint.md)]>

Defined in: [webpack/types.d.ts:1511](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1511)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<\[[`Module`](Module.md), [`Entrypoint`](Entrypoint.md)]>

***

### getChunkFullHashModulesIterable()

> **getChunkFullHashModulesIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md), `any`, `any`>

Defined in: [webpack/types.d.ts:1502](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1502)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md), `any`, `any`>

***

### getChunkFullHashModulesSet()

> **getChunkFullHashModulesSet**(`chunk`): `ReadonlySet`<[`RuntimeModule`](RuntimeModule.md)>

Defined in: [webpack/types.d.ts:1505](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1505)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`ReadonlySet`<[`RuntimeModule`](RuntimeModule.md)>

***

### getChunkModuleIdMap()

> **getChunkModuleIdMap**(`chunk`, `filterFn`, `includeAllChunks?`): `ChunkModuleIdMapEs5Alias_2`

Defined in: [webpack/types.d.ts:1448](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1448)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### filterFn

(`m`) => `boolean`

##### includeAllChunks?

`boolean`

#### Returns

`ChunkModuleIdMapEs5Alias_2`

***

### getChunkModuleRenderedHashMap()

> **getChunkModuleRenderedHashMap**(`chunk`, `filterFn`, `hashLength?`, `includeAllChunks?`): `ChunkModuleHashMap`

Defined in: [webpack/types.d.ts:1453](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1453)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### filterFn

(`m`) => `boolean`

##### hashLength?

`number`

##### includeAllChunks?

`boolean`

#### Returns

`ChunkModuleHashMap`

***

### getChunkModules()

> **getChunkModules**(`chunk`): [`Module`](Module.md)\[]

Defined in: [webpack/types.d.ts:1443](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1443)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Module`](Module.md)\[]

***

### getChunkModulesIterable()

> **getChunkModulesIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:1422](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1422)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

***

### getChunkModulesIterableBySourceType()

> **getChunkModulesIterableBySourceType**(`chunk`, `sourceType`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md), `any`, `any`>

Defined in: [webpack/types.d.ts:1423](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1423)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### sourceType

`string`

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md), `any`, `any`>

***

### getChunkModuleSourceTypes()

> **getChunkModuleSourceTypes**(`chunk`, `module`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:1432](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1432)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

#### Returns

`ReadonlySet`<`string`>

***

### getChunkModulesSize()

> **getChunkModulesSize**(`chunk`): `number`

Defined in: [webpack/types.d.ts:1469](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1469)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`number`

***

### getChunkModulesSizes()

> **getChunkModulesSizes**(`chunk`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `number`>

Defined in: [webpack/types.d.ts:1470](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1470)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `number`>

***

### getChunkRootModules()

> **getChunkRootModules**(`chunk`): [`Module`](Module.md)\[]

Defined in: [webpack/types.d.ts:1471](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1471)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Module`](Module.md)\[]

***

### getChunkRuntimeModulesInOrder()

> **getChunkRuntimeModulesInOrder**(`chunk`): [`RuntimeModule`](RuntimeModule.md)\[]

Defined in: [webpack/types.d.ts:1501](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1501)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`RuntimeModule`](RuntimeModule.md)\[]

***

### getChunkRuntimeModulesIterable()

> **getChunkRuntimeModulesIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md)>

Defined in: [webpack/types.d.ts:1500](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1500)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`RuntimeModule`](RuntimeModule.md)>

***

### getChunkRuntimeRequirements()

> **getChunkRuntimeRequirements**(`chunk`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:1545](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1545)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`ReadonlySet`<`string`>

***

### getChunkSize()

> **getChunkSize**(`chunk`, `options?`): `number`

Defined in: [webpack/types.d.ts:1472](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1472)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### options?

`ChunkSizeOptions`

#### Returns

`number`

***

### getIntegratedChunksSize()

> **getIntegratedChunksSize**(`chunkA`, `chunkB`, `options?`): `number`

Defined in: [webpack/types.d.ts:1473](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1473)

#### Parameters

##### chunkA

[`Chunk`](Chunk.md)

##### chunkB

[`Chunk`](Chunk.md)

##### options?

`ChunkSizeOptions`

#### Returns

`number`

***

### getModuleChunks()

> **getModuleChunks**(`module`): [`Chunk`](Chunk.md)\[]

Defined in: [webpack/types.d.ts:1417](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1417)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

[`Chunk`](Chunk.md)\[]

***

### getModuleChunksIterable()

> **getModuleChunksIterable**(`module`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:1412](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1412)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

***

### getModuleGraphHash()

> **getModuleGraphHash**(`module`, `runtime`, `withConnections?`): `string`

Defined in: [webpack/types.d.ts:1546](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1546)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### withConnections?

`boolean`

#### Returns

`string`

***

### getModuleGraphHashBigInt()

> **getModuleGraphHashBigInt**(`module`, `runtime`, `withConnections?`): `bigint`

Defined in: [webpack/types.d.ts:1551](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1551)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### withConnections?

`boolean`

#### Returns

`bigint`

***

### getModuleHash()

> **getModuleHash**(`module`, `runtime`): `string`

Defined in: [webpack/types.d.ts:1525](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1525)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`string`

***

### getModuleId()

> **getModuleId**(`module`): `string` | `number`

Defined in: [webpack/types.d.ts:1520](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1520)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`string` | `number`

***

### getModuleRuntimeRequirements()

> **getModuleRuntimeRequirements**(`module`, `runtime`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:1541](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1541)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`ReadonlySet`<`string`>

***

### getModuleRuntimes()

> **getModuleRuntimes**(`module`): [`RuntimeSpecSet`](../webpack/namespaces/util/namespaces/runtime/classes/RuntimeSpecSet)

Defined in: [webpack/types.d.ts:1419](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1419)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

[`RuntimeSpecSet`](../webpack/namespaces/util/namespaces/runtime/classes/RuntimeSpecSet)

***

### getModuleSourceTypes()

> **getModuleSourceTypes**(`module`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:1433](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1433)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`ReadonlySet`<`string`>

***

### getNumberOfChunkFullHashModules()

> **getNumberOfChunkFullHashModules**(`chunk`): `number`

Defined in: [webpack/types.d.ts:1421](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1421)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`number`

***

### getNumberOfChunkModules()

> **getNumberOfChunkModules**(`chunk`): `number`

Defined in: [webpack/types.d.ts:1420](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1420)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`number`

***

### getNumberOfEntryModules()

> **getNumberOfEntryModules**(`chunk`): `number`

Defined in: [webpack/types.d.ts:1494](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1494)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`number`

***

### getNumberOfModuleChunks()

> **getNumberOfModuleChunks**(`module`): `number`

Defined in: [webpack/types.d.ts:1418](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1418)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getNumberOfRuntimeModules()

> **getNumberOfRuntimeModules**(`chunk`): `number`

Defined in: [webpack/types.d.ts:1495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1495)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`number`

***

### getOrderedChunkModules()

> **getOrderedChunkModules**(`chunk`, `comparator`): [`Module`](Module.md)\[]

Defined in: [webpack/types.d.ts:1444](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1444)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### comparator

(`a`, `b`) => `-1` | `0` | `1`

#### Returns

[`Module`](Module.md)\[]

***

### getOrderedChunkModulesIterable()

> **getOrderedChunkModulesIterable**(`chunk`, `comparator`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

Defined in: [webpack/types.d.ts:1434](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1434)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### comparator

(`a`, `b`) => `-1` | `0` | `1`

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md)>

***

### getOrderedChunkModulesIterableBySourceType()

> **getOrderedChunkModulesIterableBySourceType**(`chunk`, `sourceType`, `comparator`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md), `any`, `any`>

Defined in: [webpack/types.d.ts:1438](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1438)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### sourceType

`string`

##### comparator

(`a`, `b`) => `-1` | `0` | `1`

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Module`](Module.md), `any`, `any`>

***

### getOrderedModuleChunksIterable()

> **getOrderedModuleChunksIterable**(`module`, `sortFn`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:1413](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1413)

#### Parameters

##### module

[`Module`](Module.md)

##### sortFn

(`a`, `b`) => `-1` | `0` | `1`

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

***

### getRenderedModuleHash()

> **getRenderedModuleHash**(`module`, `runtime`): `string`

Defined in: [webpack/types.d.ts:1526](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1526)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`string`

***

### getRuntimeChunkDependentChunksIterable()

> **getRuntimeChunkDependentChunksIterable**(`chunk`): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:1498](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1498)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`Chunk`](Chunk.md)>

***

### getRuntimeId()

> **getRuntimeId**(`runtime`): `RuntimeId`

Defined in: [webpack/types.d.ts:1522](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1522)

#### Parameters

##### runtime

`string`

#### Returns

`RuntimeId`

***

### getTreeRuntimeRequirements()

> **getTreeRuntimeRequirements**(`chunk`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:1556](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1556)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`ReadonlySet`<`string`>

***

### hasChunkEntryDependentChunks()

> **hasChunkEntryDependentChunks**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:1499](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1499)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### hasModuleHashes()

> **hasModuleHashes**(`module`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:1524](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1524)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

***

### hasModuleInGraph()

> **hasModuleInGraph**(`chunk`, `filterFn`, `filterChunkFn?`): `boolean`

Defined in: [webpack/types.d.ts:1463](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1463)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### filterFn

(`m`) => `boolean`

##### filterChunkFn?

(`c`, `chunkGraph`) => `boolean`

#### Returns

`boolean`

***

### integrateChunks()

> **integrateChunks**(`chunkA`, `chunkB`): `void`

Defined in: [webpack/types.d.ts:1479](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1479)

#### Parameters

##### chunkA

[`Chunk`](Chunk.md)

##### chunkB

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### isEntryModule()

> **isEntryModule**(`module`): `boolean`

Defined in: [webpack/types.d.ts:1411](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1411)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### isEntryModuleInChunk()

> **isEntryModuleInChunk**(`module`, `chunk`): `boolean`

Defined in: [webpack/types.d.ts:1481](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1481)

#### Parameters

##### module

[`Module`](Module.md)

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isModuleInChunk()

> **isModuleInChunk**(`module`, `chunk`): `boolean`

Defined in: [webpack/types.d.ts:1409](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1409)

#### Parameters

##### module

[`Module`](Module.md)

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isModuleInChunkGroup()

> **isModuleInChunkGroup**(`module`, `chunkGroup`): `boolean`

Defined in: [webpack/types.d.ts:1410](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1410)

#### Parameters

##### module

[`Module`](Module.md)

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

***

### replaceModule()

> **replaceModule**(`oldModule`, `newModule`): `void`

Defined in: [webpack/types.d.ts:1408](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1408)

#### Parameters

##### oldModule

[`Module`](Module.md)

##### newModule

[`Module`](Module.md)

#### Returns

`void`

***

### setChunkModuleSourceTypes()

> **setChunkModuleSourceTypes**(`chunk`, `module`, `sourceTypes`): `void`

Defined in: [webpack/types.d.ts:1427](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1427)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### module

[`Module`](Module.md)

##### sourceTypes

`ReadonlySet`<`string`>

#### Returns

`void`

***

### setModuleHashes()

> **setModuleHashes**(`module`, `runtime`, `hash`, `renderedHash`): `void`

Defined in: [webpack/types.d.ts:1527](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1527)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### hash

`string`

##### renderedHash

`string`

#### Returns

`void`

***

### setModuleId()

> **setModuleId**(`module`, `id`): `void`

Defined in: [webpack/types.d.ts:1521](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1521)

#### Parameters

##### module

[`Module`](Module.md)

##### id

`ModuleId`

#### Returns

`void`

***

### setRuntimeId()

> **setRuntimeId**(`runtime`, `id`): `void`

Defined in: [webpack/types.d.ts:1523](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1523)

#### Parameters

##### runtime

`string`

##### id

`RuntimeId`

#### Returns

`void`

***

### upgradeDependentToFullHashModules()

> **upgradeDependentToFullHashModules**(`chunk`): `void`

Defined in: [webpack/types.d.ts:1480](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1480)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### ~~clearChunkGraphForChunk()~~

> `static` **clearChunkGraphForChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:1594](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1594)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

#### Deprecated

***

### ~~clearChunkGraphForModule()~~

> `static` **clearChunkGraphForModule**(`module`): `void`

Defined in: [webpack/types.d.ts:1575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1575)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

#### Deprecated

***

### ~~getChunkGraphForChunk()~~

> `static` **getChunkGraphForChunk**(`chunk`, `deprecateMessage`, `deprecationCode`): `ChunkGraph`

Defined in: [webpack/types.d.ts:1580](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1580)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### deprecateMessage

`string`

##### deprecationCode

`string`

#### Returns

`ChunkGraph`

#### Deprecated

***

### ~~getChunkGraphForModule()~~

> `static` **getChunkGraphForModule**(`module`, `deprecateMessage`, `deprecationCode`): `ChunkGraph`

Defined in: [webpack/types.d.ts:1561](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1561)

#### Parameters

##### module

[`Module`](Module.md)

##### deprecateMessage

`string`

##### deprecationCode

`string`

#### Returns

`ChunkGraph`

#### Deprecated

***

### ~~setChunkGraphForChunk()~~

> `static` **setChunkGraphForChunk**(`chunk`, `chunkGraph`): `void`

Defined in: [webpack/types.d.ts:1589](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1589)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### chunkGraph

`ChunkGraph`

#### Returns

`void`

#### Deprecated

***

### ~~setChunkGraphForModule()~~

> `static` **setChunkGraphForModule**(`module`, `chunkGraph`): `void`

Defined in: [webpack/types.d.ts:1570](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1570)

#### Parameters

##### module

[`Module`](Module.md)

##### chunkGraph

`ChunkGraph`

#### Returns

`void`

#### Deprecated
