---
title: ConcatSource
---

[webpack](../../../../globals) / [sources](../index) / ConcatSource

# Class: ConcatSource

Defined in: [webpack/types.d.ts:3029](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3029)

## Extends

* [`Source`](Source.md)

## Constructors

### Constructor

> **new ConcatSource**(...`args`): `ConcatSource`

Defined in: [webpack/types.d.ts:3030](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3030)

#### Parameters

##### args

...`ConcatSourceChild`\[]

#### Returns

`ConcatSource`

#### Overrides

[`Source`](Source.md).[`constructor`](Source.md#constructor)

## Methods

### add()

> **add**(`item`): `void`

Defined in: [webpack/types.d.ts:3032](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3032)

#### Parameters

##### item

`ConcatSourceChild`

#### Returns

`void`

***

### addAllSkipOptimizing()

> **addAllSkipOptimizing**(`items`): `void`

Defined in: [webpack/types.d.ts:3033](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3033)

#### Parameters

##### items

`ConcatSourceChild`\[]

#### Returns

`void`

***

### buffer()

> **buffer**(): `Buffer`

Defined in: [webpack/types.d.ts:17445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17445)

#### Returns

`Buffer`

#### Inherited from

[`Source`](Source.md).[`buffer`](Source.md#buffer)

***

### getChildren()

> **getChildren**(): [`Source`](Source.md)\[]

Defined in: [webpack/types.d.ts:3031](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3031)

#### Returns

[`Source`](Source.md)\[]

***

### map()

> **map**(`options?`): `RawSourceMap`

Defined in: [webpack/types.d.ts:17447](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17447)

#### Parameters

##### options?

`MapOptions`

#### Returns

`RawSourceMap`

#### Inherited from

[`Source`](Source.md).[`map`](Source.md#map)

***

### size()

> **size**(): `number`

Defined in: [webpack/types.d.ts:17446](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17446)

#### Returns

`number`

#### Inherited from

[`Source`](Source.md).[`size`](Source.md#size)

***

### source()

> **source**(): `SourceValue`

Defined in: [webpack/types.d.ts:17444](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17444)

#### Returns

`SourceValue`

#### Inherited from

[`Source`](Source.md).[`source`](Source.md#source)

***

### sourceAndMap()

> **sourceAndMap**(`options?`): `SourceAndMap`

Defined in: [webpack/types.d.ts:17448](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17448)

#### Parameters

##### options?

`MapOptions`

#### Returns

`SourceAndMap`

#### Inherited from

[`Source`](Source.md).[`sourceAndMap`](Source.md#sourceandmap)

***

### streamChunks()

> **streamChunks**(`options`, `onChunk`, `onSource`, `onName`): `GeneratedSourceInfo`

Defined in: [webpack/types.d.ts:3034](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3034)

#### Parameters

##### options

`StreamChunksOptions`

##### onChunk

(`chunk`, `generatedLine`, `generatedColumn`, `sourceIndex`, `originalLine`, `originalColumn`, `nameIndex`) => `void`

##### onSource

(`sourceIndex`, `source`, `sourceContent?`) => `void`

##### onName

(`nameIndex`, `name`) => `void`

#### Returns

`GeneratedSourceInfo`

***

### updateHash()

> **updateHash**(`hash`): `void`

Defined in: [webpack/types.d.ts:17449](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17449)

#### Parameters

##### hash

`HashLike`

#### Returns

`void`

#### Inherited from

[`Source`](Source.md).[`updateHash`](Source.md#updatehash)
