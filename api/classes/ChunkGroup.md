---
title: ChunkGroup
---

[webpack](../globals.md) / ChunkGroup

# Abstract Class: ChunkGroup

Defined in: [webpack/types.d.ts:1596](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1596)

## Extended by

- [`Entrypoint`](Entrypoint.md)

## Constructors

### Constructor

> **new ChunkGroup**(): `ChunkGroup`

#### Returns

`ChunkGroup`

## Properties

### chunks

> **chunks**: [`Chunk`](Chunk.md)[]

Defined in: [webpack/types.d.ts:1599](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1599)

***

### getModuleIndex()

> **getModuleIndex**: (`module`) => `number`

Defined in: [webpack/types.d.ts:1698](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1698)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getModuleIndex2()

> **getModuleIndex2**: (`module`) => `number`

Defined in: [webpack/types.d.ts:1699](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1699)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### groupDebugId

> **groupDebugId**: `number`

Defined in: [webpack/types.d.ts:1597](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1597)

***

### index?

> `optional` **index**: `number`

Defined in: [webpack/types.d.ts:1601](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1601)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:1612](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1612)

returns the name of current ChunkGroup
sets a new name for current ChunkGroup

***

### options

> **options**: `ChunkGroupOptions`

Defined in: [webpack/types.d.ts:1598](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1598)

***

### origins

> **origins**: `OriginRecord`[]

Defined in: [webpack/types.d.ts:1600](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1600)

## Accessors

### asyncEntrypointsIterable

#### Get Signature

> **get** **asyncEntrypointsIterable**(): `SortableSet`\<`ChunkGroup`\>

Defined in: [webpack/types.d.ts:1653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1653)

##### Returns

`SortableSet`\<`ChunkGroup`\>

***

### blocksIterable

#### Get Signature

> **get** **blocksIterable**(): `Iterable`\<[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)\>

Defined in: [webpack/types.d.ts:1657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1657)

##### Returns

`Iterable`\<[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)\>

***

### childrenIterable

#### Get Signature

> **get** **childrenIterable**(): `SortableSet`\<`ChunkGroup`\>

Defined in: [webpack/types.d.ts:1644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1644)

##### Returns

`SortableSet`\<`ChunkGroup`\>

***

### debugId

#### Get Signature

> **get** **debugId**(): `string`

Defined in: [webpack/types.d.ts:1617](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1617)

get a uniqueId for ChunkGroup, made up of its member Chunk debugId's

##### Returns

`string`

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [webpack/types.d.ts:1622](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1622)

get a unique id for ChunkGroup, made up of its member Chunk id's

##### Returns

`string`

***

### parentsIterable

#### Get Signature

> **get** **parentsIterable**(): `SortableSet`\<`ChunkGroup`\>

Defined in: [webpack/types.d.ts:1650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1650)

##### Returns

`SortableSet`\<`ChunkGroup`\>

## Methods

### addAsyncEntrypoint()

> **addAsyncEntrypoint**(`entrypoint`): `boolean`

Defined in: [webpack/types.d.ts:1652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1652)

#### Parameters

##### entrypoint

[`Entrypoint`](Entrypoint.md)

#### Returns

`boolean`

***

### addBlock()

> **addBlock**(`block`): `boolean`

Defined in: [webpack/types.d.ts:1658](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1658)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`boolean`

***

### addChild()

> **addChild**(`group`): `boolean`

Defined in: [webpack/types.d.ts:1641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1641)

#### Parameters

##### group

`ChunkGroup`

#### Returns

`boolean`

***

### addOptions()

> **addOptions**(`options`): `void`

Defined in: [webpack/types.d.ts:1606](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1606)

when a new chunk is added to a chunkGroup, addingOptions will occur.

#### Parameters

##### options

`ChunkGroupOptions`

#### Returns

`void`

***

### addOrigin()

> **addOrigin**(`module`, `loc`, `request`): `void`

Defined in: [webpack/types.d.ts:1659](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1659)

#### Parameters

##### module

[`Module`](Module.md)

##### loc

`DependencyLocation`

##### request

`string`

#### Returns

`void`

***

### addParent()

> **addParent**(`parentChunk`): `boolean`

Defined in: [webpack/types.d.ts:1646](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1646)

#### Parameters

##### parentChunk

`ChunkGroup`

#### Returns

`boolean`

***

### checkConstraints()

> **checkConstraints**(): `void`

Defined in: [webpack/types.d.ts:1697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1697)

#### Returns

`void`

***

### compareTo()

> **compareTo**(`chunkGraph`, `otherGroup`): `-1` \| `0` \| `1`

Defined in: [webpack/types.d.ts:1672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1672)

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### otherGroup

`ChunkGroup`

#### Returns

`-1` \| `0` \| `1`

***

### getBlocks()

> **getBlocks**(): [`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)[]

Defined in: [webpack/types.d.ts:1654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1654)

#### Returns

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)[]

***

### getChildren()

> **getChildren**(): `ChunkGroup`[]

Defined in: [webpack/types.d.ts:1642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1642)

#### Returns

`ChunkGroup`[]

***

### getChildrenByOrders()

> **getChildrenByOrders**(`moduleGraph`, `chunkGraph`): `Record`\<`string`, `ChunkGroup`[]\>

Defined in: [webpack/types.d.ts:1673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1673)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`Record`\<`string`, `ChunkGroup`[]\>

***

### getFiles()

> **getFiles**(): `string`[]

Defined in: [webpack/types.d.ts:1664](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1664)

#### Returns

`string`[]

***

### getModulePostOrderIndex()

> **getModulePostOrderIndex**(`module`): `number`

Defined in: [webpack/types.d.ts:1696](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1696)

Gets the bottom-up index of a module in this ChunkGroup

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getModulePreOrderIndex()

> **getModulePreOrderIndex**(`module`): `number`

Defined in: [webpack/types.d.ts:1686](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1686)

Gets the top-down index of a module in this ChunkGroup

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

***

### getNumberOfBlocks()

> **getNumberOfBlocks**(): `number`

Defined in: [webpack/types.d.ts:1655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1655)

#### Returns

`number`

***

### getNumberOfChildren()

> **getNumberOfChildren**(): `number`

Defined in: [webpack/types.d.ts:1643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1643)

#### Returns

`number`

***

### getNumberOfParents()

> **getNumberOfParents**(): `number`

Defined in: [webpack/types.d.ts:1648](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1648)

#### Returns

`number`

***

### getParents()

> **getParents**(): `ChunkGroup`[]

Defined in: [webpack/types.d.ts:1647](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1647)

#### Returns

`ChunkGroup`[]

***

### hasBlock()

> **hasBlock**(`block`): `boolean`

Defined in: [webpack/types.d.ts:1656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1656)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`boolean`

***

### hasParent()

> **hasParent**(`parent`): `boolean`

Defined in: [webpack/types.d.ts:1649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1649)

#### Parameters

##### parent

`ChunkGroup`

#### Returns

`boolean`

***

### insertChunk()

> **insertChunk**(`chunk`, `before`): `boolean`

Defined in: [webpack/types.d.ts:1632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1632)

inserts a chunk before another existing chunk in group

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### before

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### isInitial()

> **isInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1640)

#### Returns

`boolean`

***

### pushChunk()

> **pushChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:1637](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1637)

add a chunk into ChunkGroup. Is pushed on or prepended

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### remove()

> **remove**(): `void`

Defined in: [webpack/types.d.ts:1665](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1665)

#### Returns

`void`

***

### removeChild()

> **removeChild**(`group`): `boolean`

Defined in: [webpack/types.d.ts:1645](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1645)

#### Parameters

##### group

`ChunkGroup`

#### Returns

`boolean`

***

### removeChunk()

> **removeChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:1639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1639)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### removeParent()

> **removeParent**(`chunkGroup`): `boolean`

Defined in: [webpack/types.d.ts:1651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1651)

#### Parameters

##### chunkGroup

`ChunkGroup`

#### Returns

`boolean`

***

### replaceChunk()

> **replaceChunk**(`oldChunk`, `newChunk`): `boolean`

Defined in: [webpack/types.d.ts:1638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1638)

#### Parameters

##### oldChunk

[`Chunk`](Chunk.md)

##### newChunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

***

### setModulePostOrderIndex()

> **setModulePostOrderIndex**(`module`, `index`): `void`

Defined in: [webpack/types.d.ts:1691](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1691)

Sets the bottom-up index of a module in this ChunkGroup

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`void`

***

### setModulePreOrderIndex()

> **setModulePreOrderIndex**(`module`, `index`): `void`

Defined in: [webpack/types.d.ts:1681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1681)

Sets the top-down index of a module in this ChunkGroup

#### Parameters

##### module

[`Module`](Module.md)

##### index

`number`

#### Returns

`void`

***

### sortItems()

> **sortItems**(): `void`

Defined in: [webpack/types.d.ts:1666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1666)

#### Returns

`void`

***

### unshiftChunk()

> **unshiftChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:1627](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1627)

Performs an unshift of a specific chunk

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`
