---
title: ReplaceSource
---

[webpack](../../../../../../globals) / [export=](../../../index) / [sources](../index) / ReplaceSource

# Class: ReplaceSource

Defined in: [webpack/types.d.ts:15323](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15323)

## Extends

* [`Source`](Source.md)

## Constructors

### Constructor

> **new ReplaceSource**(`source`, `name?`): `ReplaceSource`

Defined in: [webpack/types.d.ts:15324](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15324)

#### Parameters

##### source

[`Source`](Source.md)

##### name?

`string`

#### Returns

`ReplaceSource`

#### Overrides

[`Source`](Source.md).[`constructor`](Source.md#constructor)

## Properties

### Replacement

> `static` **Replacement**: *typeof* `Replacement`

Defined in: [webpack/types.d.ts:15348](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15348)

## Methods

### buffer()

> **buffer**(): `Buffer`

Defined in: [webpack/types.d.ts:17445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17445)

#### Returns

`Buffer`

#### Inherited from

[`Source`](Source.md).[`buffer`](Source.md#buffer)

***

### getName()

> **getName**(): `string`

Defined in: [webpack/types.d.ts:15325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15325)

#### Returns

`string`

***

### getReplacements()

> **getReplacements**(): `Replacement`\[]

Defined in: [webpack/types.d.ts:15326](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15326)

#### Returns

`Replacement`\[]

***

### insert()

> **insert**(`pos`, `newValue`, `name?`): `void`

Defined in: [webpack/types.d.ts:15328](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15328)

#### Parameters

##### pos

`number`

##### newValue

`string`

##### name?

`string`

#### Returns

`void`

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

Defined in: [webpack/types.d.ts:15329](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15329)

#### Returns

[`Source`](Source.md)

***

### replace()

> **replace**(`start`, `end`, `newValue`, `name?`): `void`

Defined in: [webpack/types.d.ts:15327](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15327)

#### Parameters

##### start

`number`

##### end

`number`

##### newValue

`string`

##### name?

`string`

#### Returns

`void`

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

Defined in: [webpack/types.d.ts:15330](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15330)

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
