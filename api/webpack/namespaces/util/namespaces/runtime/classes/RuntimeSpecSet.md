---
title: RuntimeSpecSet
---

[webpack](../../../../../../globals) / [util](../../../index) / [runtime](../index) / RuntimeSpecSet

# Class: RuntimeSpecSet

Defined in: [webpack/types.d.ts:16619](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16619)

## Constructors

### Constructor

> **new RuntimeSpecSet**(`iterable?`): `RuntimeSpecSet`

Defined in: [webpack/types.d.ts:16620](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16620)

#### Parameters

##### iterable?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)<`RuntimeSpec`>

#### Returns

`RuntimeSpecSet`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [webpack/types.d.ts:16623](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16623)

##### Returns

`number`

## Methods

### \[iterator]\()

> **\[iterator]**(): `IterableIterator`<`RuntimeSpec`>

Defined in: [webpack/types.d.ts:16624](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16624)

#### Returns

`IterableIterator`<`RuntimeSpec`>

***

### add()

> **add**(`runtime`): `void`

Defined in: [webpack/types.d.ts:16621](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16621)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`void`

***

### has()

> **has**(`runtime`): `boolean`

Defined in: [webpack/types.d.ts:16622](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16622)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`boolean`
