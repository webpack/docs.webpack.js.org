---
title: Chunk
---

[webpack](../globals.md) / Chunk

# Class: Chunk

Defined in: [webpack/types.d.ts:1290](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1290)

## Extended by

- [`HotUpdateChunk`](HotUpdateChunk.md)

## Constructors

### Constructor

> **new Chunk**(`name?`, `backCompat?`): `Chunk`

Defined in: [webpack/types.d.ts:1291](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1291)

#### Parameters

##### name?

`string`

##### backCompat?

`boolean`

#### Returns

`Chunk`

## Properties

### auxiliaryFiles

> **auxiliaryFiles**: `Set`\<`string`\>

Defined in: [webpack/types.d.ts:1306](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1306)

***

### chunkReason?

> `optional` **chunkReason**: `string`

Defined in: [webpack/types.d.ts:1311](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1311)

***

### contentHash

> **contentHash**: `Record`\<`string`, `string`\>

Defined in: [webpack/types.d.ts:1309](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1309)

***

### cssFilenameTemplate?

> `optional` **cssFilenameTemplate**: `string` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:1301](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1301)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:1294](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1294)

***

### extraAsync

> **extraAsync**: `boolean`

Defined in: [webpack/types.d.ts:1312](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1312)

***

### filenameTemplate?

> `optional` **filenameTemplate**: `string` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:1298](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1298)

***

### files

> **files**: `Set`\<`string`\>

Defined in: [webpack/types.d.ts:1305](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1305)

***

### hash?

> `optional` **hash**: `string`

Defined in: [webpack/types.d.ts:1308](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1308)

***

### id

> **id**: `string` \| `number`

Defined in: [webpack/types.d.ts:1292](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1292)

***

### idNameHints

> **idNameHints**: `SortableSet`\<`string`\>

Defined in: [webpack/types.d.ts:1296](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1296)

***

### ids

> **ids**: `ChunkId`[]

Defined in: [webpack/types.d.ts:1293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1293)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:1295](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1295)

***

### preventIntegration

> **preventIntegration**: `boolean`

Defined in: [webpack/types.d.ts:1297](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1297)

***

### rendered

> **rendered**: `boolean`

Defined in: [webpack/types.d.ts:1307](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1307)

***

### renderedHash?

> `optional` **renderedHash**: `string`

Defined in: [webpack/types.d.ts:1310](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1310)

***

### runtime

> **runtime**: `RuntimeSpec`

Defined in: [webpack/types.d.ts:1304](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1304)

## Accessors

### entryModule

#### Get Signature

> **get** **entryModule**(): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:1317](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1317)

##### Deprecated

##### Returns

[`Module`](Module.md)

***

### groupsIterable

#### Get Signature

> **get** **groupsIterable**(): `SortableSet`\<[`ChunkGroup`](ChunkGroup.md)\>

Defined in: [webpack/types.d.ts:1352](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1352)

##### Returns

`SortableSet`\<[`ChunkGroup`](ChunkGroup.md)\>

***

### modulesIterable

#### Get Signature

> **get** **modulesIterable**(): `Iterable`\<[`Module`](Module.md)\>

Defined in: [webpack/types.d.ts:1322](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1322)

##### Returns

`Iterable`\<[`Module`](Module.md)\>

## Methods

### addGroup()

> **addGroup**(`chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1348](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1348)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

***

### addModule()

> **addModule**(`module`): `boolean`

Defined in: [webpack/types.d.ts:1319](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1319)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### canBeInitial()

> **canBeInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1345](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1345)

#### Returns

`boolean`

***

### canBeIntegrated()

> **canBeIntegrated**(`otherChunk`): `boolean`

Defined in: [webpack/types.d.ts:1329](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1329)

#### Parameters

##### otherChunk

`Chunk`

#### Returns

`boolean`

***

### compareTo()

> **compareTo**(`otherChunk`): `-1` \| `0` \| `1`

Defined in: [webpack/types.d.ts:1323](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1323)

#### Parameters

##### otherChunk

`Chunk`

#### Returns

`-1` \| `0` \| `1`

***

### containsModule()

> **containsModule**(`module`): `boolean`

Defined in: [webpack/types.d.ts:1324](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1324)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### disconnectFromGroups()

> **disconnectFromGroups**(): `void`

Defined in: [webpack/types.d.ts:1353](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1353)

#### Returns

`void`

***

### getAllAsyncChunks()

> **getAllAsyncChunks**(): `Set`\<`Chunk`\>

Defined in: [webpack/types.d.ts:1356](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1356)

#### Returns

`Set`\<`Chunk`\>

***

### getAllInitialChunks()

> **getAllInitialChunks**(): `Set`\<`Chunk`\>

Defined in: [webpack/types.d.ts:1357](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1357)

#### Returns

`Set`\<`Chunk`\>

***

### getAllReferencedAsyncEntrypoints()

> **getAllReferencedAsyncEntrypoints**(): `Set`\<[`Entrypoint`](Entrypoint.md)\>

Defined in: [webpack/types.d.ts:1359](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1359)

#### Returns

`Set`\<[`Entrypoint`](Entrypoint.md)\>

***

### getAllReferencedChunks()

> **getAllReferencedChunks**(): `Set`\<`Chunk`\>

Defined in: [webpack/types.d.ts:1358](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1358)

#### Returns

`Set`\<`Chunk`\>

***

### getChildIdsByOrders()

> **getChildIdsByOrders**(`chunkGraph`, `filterFn?`): `Record`\<`string`, `ChunkId`[]\>

Defined in: [webpack/types.d.ts:1361](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1361)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### filterFn?

(`c`, `chunkGraph`) => `boolean`

#### Returns

`Record`\<`string`, `ChunkId`[]\>

***

### getChildIdsByOrdersMap()

> **getChildIdsByOrdersMap**(`chunkGraph`, `includeDirectChildren?`, `filterFn?`): `ChunkChildIdsByOrdersMapByData`

Defined in: [webpack/types.d.ts:1369](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1369)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### includeDirectChildren?

`boolean`

##### filterFn?

(`c`, `chunkGraph`) => `boolean`

#### Returns

`ChunkChildIdsByOrdersMapByData`

***

### getChildrenOfTypeInOrder()

> **getChildrenOfTypeInOrder**(`chunkGraph`, `type`): `ChunkChildOfTypeInOrder`[]

Defined in: [webpack/types.d.ts:1365](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1365)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### type

`string`

#### Returns

`ChunkChildOfTypeInOrder`[]

***

### ~~getChunkMaps()~~

> **getChunkMaps**(`realHash`): `ChunkMaps`

Defined in: [webpack/types.d.ts:1343](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1343)

#### Parameters

##### realHash

`boolean`

#### Returns

`ChunkMaps`

#### Deprecated

***

### getChunkModuleMaps()

> **getChunkModuleMaps**(`filterFn`): `ChunkModuleMaps`

Defined in: [webpack/types.d.ts:1334](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1334)

#### Parameters

##### filterFn

(`m`) => `boolean`

#### Returns

`ChunkModuleMaps`

***

### getEntryOptions()

> **getEntryOptions**(): [`EntryOptions`](../type-aliases/EntryOptions.md)

Defined in: [webpack/types.d.ts:1347](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1347)

#### Returns

[`EntryOptions`](../type-aliases/EntryOptions.md)

***

### getModules()

> **getModules**(): [`Module`](Module.md)[]

Defined in: [webpack/types.d.ts:1325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1325)

#### Returns

[`Module`](Module.md)[]

***

### getNumberOfGroups()

> **getNumberOfGroups**(): `number`

Defined in: [webpack/types.d.ts:1351](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1351)

#### Returns

`number`

***

### getNumberOfModules()

> **getNumberOfModules**(): `number`

Defined in: [webpack/types.d.ts:1321](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1321)

#### Returns

`number`

***

### hasAsyncChunks()

> **hasAsyncChunks**(): `boolean`

Defined in: [webpack/types.d.ts:1360](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1360)

#### Returns

`boolean`

***

### hasChildByOrder()

> **hasChildByOrder**(`chunkGraph`, `type`, `includeDirectChildren?`, `filterFn?`): `boolean`

Defined in: [webpack/types.d.ts:1374](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1374)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### type

`string`

##### includeDirectChildren?

`boolean`

##### filterFn?

(`c`, `chunkGraph`) => `boolean`

#### Returns

`boolean`

***

### hasEntryModule()

> **hasEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:1318](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1318)

#### Returns

`boolean`

***

### hasModuleInGraph()

> **hasModuleInGraph**(`filterFn`, `filterChunkFn?`): `boolean`

Defined in: [webpack/types.d.ts:1335](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1335)

#### Parameters

##### filterFn

(`m`) => `boolean`

##### filterChunkFn?

(`c`, `chunkGraph`) => `boolean`

#### Returns

`boolean`

***

### hasRuntime()

> **hasRuntime**(): `boolean`

Defined in: [webpack/types.d.ts:1344](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1344)

#### Returns

`boolean`

***

### integrate()

> **integrate**(`otherChunk`): `boolean`

Defined in: [webpack/types.d.ts:1328](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1328)

#### Parameters

##### otherChunk

`Chunk`

#### Returns

`boolean`

***

### integratedSize()

> **integratedSize**(`otherChunk`, `options`): `number`

Defined in: [webpack/types.d.ts:1333](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1333)

#### Parameters

##### otherChunk

`Chunk`

##### options

`ChunkSizeOptions`

#### Returns

`number`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [webpack/types.d.ts:1330](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1330)

#### Returns

`boolean`

***

### isInGroup()

> **isInGroup**(`chunkGroup`): `boolean`

Defined in: [webpack/types.d.ts:1350](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1350)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

***

### isOnlyInitial()

> **isOnlyInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1346](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1346)

#### Returns

`boolean`

***

### modulesSize()

> **modulesSize**(): `number`

Defined in: [webpack/types.d.ts:1331](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1331)

#### Returns

`number`

***

### moveModule()

> **moveModule**(`module`, `otherChunk`): `void`

Defined in: [webpack/types.d.ts:1327](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1327)

#### Parameters

##### module

[`Module`](Module.md)

##### otherChunk

`Chunk`

#### Returns

`void`

***

### remove()

> **remove**(): `void`

Defined in: [webpack/types.d.ts:1326](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1326)

#### Returns

`void`

***

### removeGroup()

> **removeGroup**(`chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1349](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1349)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

***

### removeModule()

> **removeModule**(`module`): `void`

Defined in: [webpack/types.d.ts:1320](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1320)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

***

### size()

> **size**(`options?`): `number`

Defined in: [webpack/types.d.ts:1332](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1332)

#### Parameters

##### options?

`ChunkSizeOptions`

#### Returns

`number`

***

### split()

> **split**(`newChunk`): `void`

Defined in: [webpack/types.d.ts:1354](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1354)

#### Parameters

##### newChunk

`Chunk`

#### Returns

`void`

***

### updateHash()

> **updateHash**(`hash`, `chunkGraph`): `void`

Defined in: [webpack/types.d.ts:1355](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1355)

#### Parameters

##### hash

`Hash`

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`void`
