---
title: HotUpdateChunk
---

[webpack](../globals.md) / HotUpdateChunk

# Class: HotUpdateChunk

Defined in: [webpack/types.d.ts:6733](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6733)

## Extends

- [`Chunk`](Chunk.md)

## Constructors

### Constructor

> **new HotUpdateChunk**(): `HotUpdateChunk`

Defined in: [webpack/types.d.ts:6734](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6734)

#### Returns

`HotUpdateChunk`

#### Overrides

[`Chunk`](Chunk.md).[`constructor`](Chunk.md#constructor)

## Properties

### auxiliaryFiles

> **auxiliaryFiles**: `Set`\<`string`\>

Defined in: [webpack/types.d.ts:1306](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1306)

#### Inherited from

[`Chunk`](Chunk.md).[`auxiliaryFiles`](Chunk.md#auxiliaryfiles)

***

### chunkReason?

> `optional` **chunkReason**: `string`

Defined in: [webpack/types.d.ts:1311](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1311)

#### Inherited from

[`Chunk`](Chunk.md).[`chunkReason`](Chunk.md#chunkreason)

***

### contentHash

> **contentHash**: `Record`\<`string`, `string`\>

Defined in: [webpack/types.d.ts:1309](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1309)

#### Inherited from

[`Chunk`](Chunk.md).[`contentHash`](Chunk.md#contenthash)

***

### cssFilenameTemplate?

> `optional` **cssFilenameTemplate**: `string` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:1301](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1301)

#### Inherited from

[`Chunk`](Chunk.md).[`cssFilenameTemplate`](Chunk.md#cssfilenametemplate)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:1294](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1294)

#### Inherited from

[`Chunk`](Chunk.md).[`debugId`](Chunk.md#debugid)

***

### extraAsync

> **extraAsync**: `boolean`

Defined in: [webpack/types.d.ts:1312](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1312)

#### Inherited from

[`Chunk`](Chunk.md).[`extraAsync`](Chunk.md#extraasync)

***

### filenameTemplate?

> `optional` **filenameTemplate**: `string` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:1298](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1298)

#### Inherited from

[`Chunk`](Chunk.md).[`filenameTemplate`](Chunk.md#filenametemplate)

***

### files

> **files**: `Set`\<`string`\>

Defined in: [webpack/types.d.ts:1305](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1305)

#### Inherited from

[`Chunk`](Chunk.md).[`files`](Chunk.md#files)

***

### hash?

> `optional` **hash**: `string`

Defined in: [webpack/types.d.ts:1308](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1308)

#### Inherited from

[`Chunk`](Chunk.md).[`hash`](Chunk.md#hash)

***

### id

> **id**: `string` \| `number`

Defined in: [webpack/types.d.ts:1292](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1292)

#### Inherited from

[`Chunk`](Chunk.md).[`id`](Chunk.md#id)

***

### idNameHints

> **idNameHints**: `SortableSet`\<`string`\>

Defined in: [webpack/types.d.ts:1296](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1296)

#### Inherited from

[`Chunk`](Chunk.md).[`idNameHints`](Chunk.md#idnamehints)

***

### ids

> **ids**: `ChunkId`[]

Defined in: [webpack/types.d.ts:1293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1293)

#### Inherited from

[`Chunk`](Chunk.md).[`ids`](Chunk.md#ids)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:1295](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1295)

#### Inherited from

[`Chunk`](Chunk.md).[`name`](Chunk.md#name)

***

### preventIntegration

> **preventIntegration**: `boolean`

Defined in: [webpack/types.d.ts:1297](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1297)

#### Inherited from

[`Chunk`](Chunk.md).[`preventIntegration`](Chunk.md#preventintegration)

***

### rendered

> **rendered**: `boolean`

Defined in: [webpack/types.d.ts:1307](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1307)

#### Inherited from

[`Chunk`](Chunk.md).[`rendered`](Chunk.md#rendered)

***

### renderedHash?

> `optional` **renderedHash**: `string`

Defined in: [webpack/types.d.ts:1310](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1310)

#### Inherited from

[`Chunk`](Chunk.md).[`renderedHash`](Chunk.md#renderedhash)

***

### runtime

> **runtime**: `RuntimeSpec`

Defined in: [webpack/types.d.ts:1304](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1304)

#### Inherited from

[`Chunk`](Chunk.md).[`runtime`](Chunk.md#runtime)

## Accessors

### entryModule

#### Get Signature

> **get** **entryModule**(): [`Module`](Module.md)

Defined in: [webpack/types.d.ts:1317](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1317)

##### Deprecated

##### Returns

[`Module`](Module.md)

#### Inherited from

[`Chunk`](Chunk.md).[`entryModule`](Chunk.md#entrymodule)

***

### groupsIterable

#### Get Signature

> **get** **groupsIterable**(): `SortableSet`\<[`ChunkGroup`](ChunkGroup.md)\>

Defined in: [webpack/types.d.ts:1352](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1352)

##### Returns

`SortableSet`\<[`ChunkGroup`](ChunkGroup.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`groupsIterable`](Chunk.md#groupsiterable)

***

### modulesIterable

#### Get Signature

> **get** **modulesIterable**(): `Iterable`\<[`Module`](Module.md)\>

Defined in: [webpack/types.d.ts:1322](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1322)

##### Returns

`Iterable`\<[`Module`](Module.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`modulesIterable`](Chunk.md#modulesiterable)

## Methods

### addGroup()

> **addGroup**(`chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1348](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1348)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`addGroup`](Chunk.md#addgroup)

***

### addModule()

> **addModule**(`module`): `boolean`

Defined in: [webpack/types.d.ts:1319](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1319)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`addModule`](Chunk.md#addmodule)

***

### canBeInitial()

> **canBeInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1345](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1345)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`canBeInitial`](Chunk.md#canbeinitial)

***

### canBeIntegrated()

> **canBeIntegrated**(`otherChunk`): `boolean`

Defined in: [webpack/types.d.ts:1329](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1329)

#### Parameters

##### otherChunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`canBeIntegrated`](Chunk.md#canbeintegrated)

***

### compareTo()

> **compareTo**(`otherChunk`): `-1` \| `0` \| `1`

Defined in: [webpack/types.d.ts:1323](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1323)

#### Parameters

##### otherChunk

[`Chunk`](Chunk.md)

#### Returns

`-1` \| `0` \| `1`

#### Inherited from

[`Chunk`](Chunk.md).[`compareTo`](Chunk.md#compareto)

***

### containsModule()

> **containsModule**(`module`): `boolean`

Defined in: [webpack/types.d.ts:1324](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1324)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`containsModule`](Chunk.md#containsmodule)

***

### disconnectFromGroups()

> **disconnectFromGroups**(): `void`

Defined in: [webpack/types.d.ts:1353](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1353)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`disconnectFromGroups`](Chunk.md#disconnectfromgroups)

***

### getAllAsyncChunks()

> **getAllAsyncChunks**(): `Set`\<[`Chunk`](Chunk.md)\>

Defined in: [webpack/types.d.ts:1356](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1356)

#### Returns

`Set`\<[`Chunk`](Chunk.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`getAllAsyncChunks`](Chunk.md#getallasyncchunks)

***

### getAllInitialChunks()

> **getAllInitialChunks**(): `Set`\<[`Chunk`](Chunk.md)\>

Defined in: [webpack/types.d.ts:1357](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1357)

#### Returns

`Set`\<[`Chunk`](Chunk.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`getAllInitialChunks`](Chunk.md#getallinitialchunks)

***

### getAllReferencedAsyncEntrypoints()

> **getAllReferencedAsyncEntrypoints**(): `Set`\<[`Entrypoint`](Entrypoint.md)\>

Defined in: [webpack/types.d.ts:1359](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1359)

#### Returns

`Set`\<[`Entrypoint`](Entrypoint.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`getAllReferencedAsyncEntrypoints`](Chunk.md#getallreferencedasyncentrypoints)

***

### getAllReferencedChunks()

> **getAllReferencedChunks**(): `Set`\<[`Chunk`](Chunk.md)\>

Defined in: [webpack/types.d.ts:1358](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1358)

#### Returns

`Set`\<[`Chunk`](Chunk.md)\>

#### Inherited from

[`Chunk`](Chunk.md).[`getAllReferencedChunks`](Chunk.md#getallreferencedchunks)

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

#### Inherited from

[`Chunk`](Chunk.md).[`getChildIdsByOrders`](Chunk.md#getchildidsbyorders)

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

#### Inherited from

[`Chunk`](Chunk.md).[`getChildIdsByOrdersMap`](Chunk.md#getchildidsbyordersmap)

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

#### Inherited from

[`Chunk`](Chunk.md).[`getChildrenOfTypeInOrder`](Chunk.md#getchildrenoftypeinorder)

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

#### Inherited from

[`Chunk`](Chunk.md).[`getChunkMaps`](Chunk.md#getchunkmaps)

***

### getChunkModuleMaps()

> **getChunkModuleMaps**(`filterFn`): `ChunkModuleMaps`

Defined in: [webpack/types.d.ts:1334](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1334)

#### Parameters

##### filterFn

(`m`) => `boolean`

#### Returns

`ChunkModuleMaps`

#### Inherited from

[`Chunk`](Chunk.md).[`getChunkModuleMaps`](Chunk.md#getchunkmodulemaps)

***

### getEntryOptions()

> **getEntryOptions**(): [`EntryOptions`](../type-aliases/EntryOptions.md)

Defined in: [webpack/types.d.ts:1347](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1347)

#### Returns

[`EntryOptions`](../type-aliases/EntryOptions.md)

#### Inherited from

[`Chunk`](Chunk.md).[`getEntryOptions`](Chunk.md#getentryoptions)

***

### getModules()

> **getModules**(): [`Module`](Module.md)[]

Defined in: [webpack/types.d.ts:1325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1325)

#### Returns

[`Module`](Module.md)[]

#### Inherited from

[`Chunk`](Chunk.md).[`getModules`](Chunk.md#getmodules)

***

### getNumberOfGroups()

> **getNumberOfGroups**(): `number`

Defined in: [webpack/types.d.ts:1351](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1351)

#### Returns

`number`

#### Inherited from

[`Chunk`](Chunk.md).[`getNumberOfGroups`](Chunk.md#getnumberofgroups)

***

### getNumberOfModules()

> **getNumberOfModules**(): `number`

Defined in: [webpack/types.d.ts:1321](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1321)

#### Returns

`number`

#### Inherited from

[`Chunk`](Chunk.md).[`getNumberOfModules`](Chunk.md#getnumberofmodules)

***

### hasAsyncChunks()

> **hasAsyncChunks**(): `boolean`

Defined in: [webpack/types.d.ts:1360](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1360)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`hasAsyncChunks`](Chunk.md#hasasyncchunks)

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

#### Inherited from

[`Chunk`](Chunk.md).[`hasChildByOrder`](Chunk.md#haschildbyorder)

***

### hasEntryModule()

> **hasEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:1318](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1318)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`hasEntryModule`](Chunk.md#hasentrymodule)

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

#### Inherited from

[`Chunk`](Chunk.md).[`hasModuleInGraph`](Chunk.md#hasmoduleingraph)

***

### hasRuntime()

> **hasRuntime**(): `boolean`

Defined in: [webpack/types.d.ts:1344](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1344)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`hasRuntime`](Chunk.md#hasruntime)

***

### integrate()

> **integrate**(`otherChunk`): `boolean`

Defined in: [webpack/types.d.ts:1328](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1328)

#### Parameters

##### otherChunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`integrate`](Chunk.md#integrate)

***

### integratedSize()

> **integratedSize**(`otherChunk`, `options`): `number`

Defined in: [webpack/types.d.ts:1333](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1333)

#### Parameters

##### otherChunk

[`Chunk`](Chunk.md)

##### options

`ChunkSizeOptions`

#### Returns

`number`

#### Inherited from

[`Chunk`](Chunk.md).[`integratedSize`](Chunk.md#integratedsize)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [webpack/types.d.ts:1330](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1330)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`isEmpty`](Chunk.md#isempty)

***

### isInGroup()

> **isInGroup**(`chunkGroup`): `boolean`

Defined in: [webpack/types.d.ts:1350](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1350)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`isInGroup`](Chunk.md#isingroup)

***

### isOnlyInitial()

> **isOnlyInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1346](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1346)

#### Returns

`boolean`

#### Inherited from

[`Chunk`](Chunk.md).[`isOnlyInitial`](Chunk.md#isonlyinitial)

***

### modulesSize()

> **modulesSize**(): `number`

Defined in: [webpack/types.d.ts:1331](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1331)

#### Returns

`number`

#### Inherited from

[`Chunk`](Chunk.md).[`modulesSize`](Chunk.md#modulessize)

***

### moveModule()

> **moveModule**(`module`, `otherChunk`): `void`

Defined in: [webpack/types.d.ts:1327](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1327)

#### Parameters

##### module

[`Module`](Module.md)

##### otherChunk

[`Chunk`](Chunk.md)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`moveModule`](Chunk.md#movemodule)

***

### remove()

> **remove**(): `void`

Defined in: [webpack/types.d.ts:1326](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1326)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`remove`](Chunk.md#remove)

***

### removeGroup()

> **removeGroup**(`chunkGroup`): `void`

Defined in: [webpack/types.d.ts:1349](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1349)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`removeGroup`](Chunk.md#removegroup)

***

### removeModule()

> **removeModule**(`module`): `void`

Defined in: [webpack/types.d.ts:1320](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1320)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`removeModule`](Chunk.md#removemodule)

***

### size()

> **size**(`options?`): `number`

Defined in: [webpack/types.d.ts:1332](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1332)

#### Parameters

##### options?

`ChunkSizeOptions`

#### Returns

`number`

#### Inherited from

[`Chunk`](Chunk.md).[`size`](Chunk.md#size)

***

### split()

> **split**(`newChunk`): `void`

Defined in: [webpack/types.d.ts:1354](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1354)

#### Parameters

##### newChunk

[`Chunk`](Chunk.md)

#### Returns

`void`

#### Inherited from

[`Chunk`](Chunk.md).[`split`](Chunk.md#split)

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

#### Inherited from

[`Chunk`](Chunk.md).[`updateHash`](Chunk.md#updatehash)
