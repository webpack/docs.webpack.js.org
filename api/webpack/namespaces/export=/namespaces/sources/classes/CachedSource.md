---
title: CachedSource
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [sources](../index.md) / CachedSource

# Class: CachedSource

Defined in: [webpack/types.d.ts:1229](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1229)

## Extends

- [`Source`](Source.md)

## Constructors

### Constructor

> **new CachedSource**(`source`, `cachedData?`): `CachedSource`

Defined in: [webpack/types.d.ts:1230](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1230)

#### Parameters

##### source

[`Source`](Source.md) | () => [`Source`](Source.md)

##### cachedData?

`CachedData`

#### Returns

`CachedSource`

#### Overrides

[`Source`](Source.md).[`constructor`](Source.md#constructor)

## Methods

### buffer()

> **buffer**(): `Buffer`

Defined in: [webpack/types.d.ts:17445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17445)

#### Returns

`Buffer`

#### Inherited from

[`Source`](Source.md).[`buffer`](Source.md#buffer)

***

### getCachedData()

> **getCachedData**(): `CachedData`

Defined in: [webpack/types.d.ts:1231](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1231)

#### Returns

`CachedData`

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

### original()

> **original**(): [`Source`](Source.md)

Defined in: [webpack/types.d.ts:1233](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1233)

#### Returns

[`Source`](Source.md)

***

### originalLazy()

> **originalLazy**(): [`Source`](Source.md) \| () => [`Source`](Source.md)

Defined in: [webpack/types.d.ts:1232](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1232)

#### Returns

[`Source`](Source.md) \| () => [`Source`](Source.md)

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

Defined in: [webpack/types.d.ts:1234](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1234)

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
