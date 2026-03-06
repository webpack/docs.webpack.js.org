---
title: SourceMapSource
---

[webpack](../../../../../../globals) / [export=](../../../index) / [sources](../index) / SourceMapSource

# Class: SourceMapSource

Defined in: [webpack/types.d.ts:17599](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17599)

## Extends

* [`Source`](Source.md)

## Constructors

### Constructor

> **new SourceMapSource**(`value`, `name`, `sourceMap?`, `originalSource?`, `innerSourceMap?`, `removeOriginalSource?`): `SourceMapSource`

Defined in: [webpack/types.d.ts:17600](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17600)

#### Parameters

##### value

`string` | `Buffer`<`ArrayBufferLike`>

##### name

`string`

##### sourceMap?

`string` | `Buffer`<`ArrayBufferLike`> | `RawSourceMap`

##### originalSource?

`string` | `Buffer`<`ArrayBufferLike`>

##### innerSourceMap?

`string` | `Buffer`<`ArrayBufferLike`> | `RawSourceMap`

##### removeOriginalSource?

`boolean`

#### Returns

`SourceMapSource`

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

### getArgsAsBuffers()

> **getArgsAsBuffers**(): \[`Buffer`<`ArrayBufferLike`>, `string`, `Buffer`<`ArrayBufferLike`>, `Buffer`<`ArrayBufferLike`>, `Buffer`<`ArrayBufferLike`>, `boolean`]

Defined in: [webpack/types.d.ts:17608](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17608)

#### Returns

\[`Buffer`<`ArrayBufferLike`>, `string`, `Buffer`<`ArrayBufferLike`>, `Buffer`<`ArrayBufferLike`>, `Buffer`<`ArrayBufferLike`>, `boolean`]

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

Defined in: [webpack/types.d.ts:17616](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17616)

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
