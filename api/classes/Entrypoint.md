---
title: Entrypoint
---

[webpack](../globals) / Entrypoint

# Abstract Class: Entrypoint

Defined in: [webpack/types.d.ts:4964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4964)

## Extends

* [`ChunkGroup`](ChunkGroup.md)

## Constructors

### Constructor

> **new Entrypoint**(): `Entrypoint`

#### Returns

`Entrypoint`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`constructor`](ChunkGroup.md#constructor)

## Properties

### chunks

> **chunks**: [`Chunk`](Chunk.md)\[]

Defined in: [webpack/types.d.ts:1599](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1599)

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`chunks`](ChunkGroup.md#chunks)

***

### getModuleIndex()

> **getModuleIndex**: (`module`) => `number`

Defined in: [webpack/types.d.ts:1698](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1698)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getModuleIndex`](ChunkGroup.md#getmoduleindex)

***

### getModuleIndex2()

> **getModuleIndex2**: (`module`) => `number`

Defined in: [webpack/types.d.ts:1699](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1699)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`number`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getModuleIndex2`](ChunkGroup.md#getmoduleindex2)

***

### groupDebugId

> **groupDebugId**: `number`

Defined in: [webpack/types.d.ts:1597](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1597)

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`groupDebugId`](ChunkGroup.md#groupdebugid)

***

### index?

> `optional` **index**: `number`

Defined in: [webpack/types.d.ts:1601](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1601)

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`index`](ChunkGroup.md#index)

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:1612](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1612)

returns the name of current ChunkGroup
sets a new name for current ChunkGroup

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`name`](ChunkGroup.md#name)

***

### options

> **options**: `ChunkGroupOptions`

Defined in: [webpack/types.d.ts:1598](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1598)

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`options`](ChunkGroup.md#options)

***

### origins

> **origins**: `OriginRecord`\[]

Defined in: [webpack/types.d.ts:1600](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1600)

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`origins`](ChunkGroup.md#origins)

## Accessors

### asyncEntrypointsIterable

#### Get Signature

> **get** **asyncEntrypointsIterable**(): `SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

Defined in: [webpack/types.d.ts:1653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1653)

##### Returns

`SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`asyncEntrypointsIterable`](ChunkGroup.md#asyncentrypointsiterable)

***

### blocksIterable

#### Get Signature

> **get** **blocksIterable**(): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)>

Defined in: [webpack/types.d.ts:1657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1657)

##### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)>

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`blocksIterable`](ChunkGroup.md#blocksiterable)

***

### childrenIterable

#### Get Signature

> **get** **childrenIterable**(): `SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

Defined in: [webpack/types.d.ts:1644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1644)

##### Returns

`SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`childrenIterable`](ChunkGroup.md#childreniterable)

***

### debugId

#### Get Signature

> **get** **debugId**(): `string`

Defined in: [webpack/types.d.ts:1617](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1617)

get a uniqueId for ChunkGroup, made up of its member Chunk debugId's

##### Returns

`string`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`debugId`](ChunkGroup.md#debugid)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [webpack/types.d.ts:1622](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1622)

get a unique id for ChunkGroup, made up of its member Chunk id's

##### Returns

`string`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`id`](ChunkGroup.md#id)

***

### parentsIterable

#### Get Signature

> **get** **parentsIterable**(): `SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

Defined in: [webpack/types.d.ts:1650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1650)

##### Returns

`SortableSet`<[`ChunkGroup`](ChunkGroup.md)>

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`parentsIterable`](ChunkGroup.md#parentsiterable)

## Methods

### addAsyncEntrypoint()

> **addAsyncEntrypoint**(`entrypoint`): `boolean`

Defined in: [webpack/types.d.ts:1652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1652)

#### Parameters

##### entrypoint

`Entrypoint`

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addAsyncEntrypoint`](ChunkGroup.md#addasyncentrypoint)

***

### addBlock()

> **addBlock**(`block`): `boolean`

Defined in: [webpack/types.d.ts:1658](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1658)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addBlock`](ChunkGroup.md#addblock)

***

### addChild()

> **addChild**(`group`): `boolean`

Defined in: [webpack/types.d.ts:1641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1641)

#### Parameters

##### group

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addChild`](ChunkGroup.md#addchild)

***

### addDependOn()

> **addDependOn**(`entrypoint`): `void`

Defined in: [webpack/types.d.ts:4985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4985)

#### Parameters

##### entrypoint

`Entrypoint`

#### Returns

`void`

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addOptions`](ChunkGroup.md#addoptions)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addOrigin`](ChunkGroup.md#addorigin)

***

### addParent()

> **addParent**(`parentChunk`): `boolean`

Defined in: [webpack/types.d.ts:1646](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1646)

#### Parameters

##### parentChunk

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`addParent`](ChunkGroup.md#addparent)

***

### checkConstraints()

> **checkConstraints**(): `void`

Defined in: [webpack/types.d.ts:1697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1697)

#### Returns

`void`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`checkConstraints`](ChunkGroup.md#checkconstraints)

***

### compareTo()

> **compareTo**(`chunkGraph`, `otherGroup`): `-1` | `0` | `1`

Defined in: [webpack/types.d.ts:1672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1672)

Sorting predicate which allows current ChunkGroup to be compared against another.
Sorting values are based off of number of chunks in ChunkGroup.

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### otherGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`-1` | `0` | `1`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`compareTo`](ChunkGroup.md#compareto)

***

### dependOn()

> **dependOn**(`entrypoint`): `boolean`

Defined in: [webpack/types.d.ts:4986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4986)

#### Parameters

##### entrypoint

`Entrypoint`

#### Returns

`boolean`

***

### getBlocks()

> **getBlocks**(): [`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)\[]

Defined in: [webpack/types.d.ts:1654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1654)

#### Returns

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)\[]

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getBlocks`](ChunkGroup.md#getblocks)

***

### getChildren()

> **getChildren**(): [`ChunkGroup`](ChunkGroup.md)\[]

Defined in: [webpack/types.d.ts:1642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1642)

#### Returns

[`ChunkGroup`](ChunkGroup.md)\[]

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getChildren`](ChunkGroup.md#getchildren)

***

### getChildrenByOrders()

> **getChildrenByOrders**(`moduleGraph`, `chunkGraph`): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`ChunkGroup`](ChunkGroup.md)\[]>

Defined in: [webpack/types.d.ts:1673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1673)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`ChunkGroup`](ChunkGroup.md)\[]>

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getChildrenByOrders`](ChunkGroup.md#getchildrenbyorders)

***

### getEntrypointChunk()

> **getEntrypointChunk**(): [`Chunk`](Chunk.md)

Defined in: [webpack/types.d.ts:4984](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4984)

Returns the chunk which contains the entrypoint modules
(or at least the execution of them)

#### Returns

[`Chunk`](Chunk.md)

***

### getFiles()

> **getFiles**(): `string`\[]

Defined in: [webpack/types.d.ts:1664](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1664)

#### Returns

`string`\[]

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getFiles`](ChunkGroup.md#getfiles)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getModulePostOrderIndex`](ChunkGroup.md#getmodulepostorderindex)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getModulePreOrderIndex`](ChunkGroup.md#getmodulepreorderindex)

***

### getNumberOfBlocks()

> **getNumberOfBlocks**(): `number`

Defined in: [webpack/types.d.ts:1655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1655)

#### Returns

`number`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getNumberOfBlocks`](ChunkGroup.md#getnumberofblocks)

***

### getNumberOfChildren()

> **getNumberOfChildren**(): `number`

Defined in: [webpack/types.d.ts:1643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1643)

#### Returns

`number`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getNumberOfChildren`](ChunkGroup.md#getnumberofchildren)

***

### getNumberOfParents()

> **getNumberOfParents**(): `number`

Defined in: [webpack/types.d.ts:1648](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1648)

#### Returns

`number`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getNumberOfParents`](ChunkGroup.md#getnumberofparents)

***

### getParents()

> **getParents**(): [`ChunkGroup`](ChunkGroup.md)\[]

Defined in: [webpack/types.d.ts:1647](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1647)

#### Returns

[`ChunkGroup`](ChunkGroup.md)\[]

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`getParents`](ChunkGroup.md#getparents)

***

### getRuntimeChunk()

> **getRuntimeChunk**(): [`Chunk`](Chunk.md)

Defined in: [webpack/types.d.ts:4973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4973)

Fetches the chunk reference containing the webpack bootstrap code

#### Returns

[`Chunk`](Chunk.md)

***

### hasBlock()

> **hasBlock**(`block`): `boolean`

Defined in: [webpack/types.d.ts:1656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1656)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`hasBlock`](ChunkGroup.md#hasblock)

***

### hasParent()

> **hasParent**(`parent`): `boolean`

Defined in: [webpack/types.d.ts:1649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1649)

#### Parameters

##### parent

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`hasParent`](ChunkGroup.md#hasparent)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`insertChunk`](ChunkGroup.md#insertchunk)

***

### isInitial()

> **isInitial**(): `boolean`

Defined in: [webpack/types.d.ts:1640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1640)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`isInitial`](ChunkGroup.md#isinitial)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`pushChunk`](ChunkGroup.md#pushchunk)

***

### remove()

> **remove**(): `void`

Defined in: [webpack/types.d.ts:1665](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1665)

#### Returns

`void`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`remove`](ChunkGroup.md#remove)

***

### removeChild()

> **removeChild**(`group`): `boolean`

Defined in: [webpack/types.d.ts:1645](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1645)

#### Parameters

##### group

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`removeChild`](ChunkGroup.md#removechild)

***

### removeChunk()

> **removeChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:1639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1639)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`removeChunk`](ChunkGroup.md#removechunk)

***

### removeParent()

> **removeParent**(`chunkGroup`): `boolean`

Defined in: [webpack/types.d.ts:1651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1651)

#### Parameters

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

#### Returns

`boolean`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`removeParent`](ChunkGroup.md#removeparent)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`replaceChunk`](ChunkGroup.md#replacechunk)

***

### setEntrypointChunk()

> **setEntrypointChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:4978](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4978)

Sets the chunk with the entrypoint modules for an entrypoint.

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`setModulePostOrderIndex`](ChunkGroup.md#setmodulepostorderindex)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`setModulePreOrderIndex`](ChunkGroup.md#setmodulepreorderindex)

***

### setRuntimeChunk()

> **setRuntimeChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:4968](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4968)

Sets the runtimeChunk for an entrypoint.

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

***

### sortItems()

> **sortItems**(): `void`

Defined in: [webpack/types.d.ts:1666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1666)

#### Returns

`void`

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`sortItems`](ChunkGroup.md#sortitems)

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

#### Inherited from

[`ChunkGroup`](ChunkGroup.md).[`unshiftChunk`](ChunkGroup.md#unshiftchunk)
