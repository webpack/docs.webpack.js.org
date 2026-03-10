---
title: EnableChunkLoadingPlugin
---

[webpack](../../../../globals) / [javascript](../index) / EnableChunkLoadingPlugin

# Class: EnableChunkLoadingPlugin

Defined in: [webpack/types.d.ts:4706](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4706)

## Constructors

### Constructor

> **new EnableChunkLoadingPlugin**(`type`): `EnableChunkLoadingPlugin`

Defined in: [webpack/types.d.ts:4707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4707)

#### Parameters

##### type

`string`

#### Returns

`EnableChunkLoadingPlugin`

## Properties

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:4708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4708)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4713](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4713)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../classes/Compiler)

#### Returns

`void`

***

### checkEnabled()

> `static` **checkEnabled**(`compiler`, `type`): `void`

Defined in: [webpack/types.d.ts:4715](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4715)

#### Parameters

##### compiler

[`Compiler`](../../../../classes/Compiler)

##### type

`string`

#### Returns

`void`

***

### setEnabled()

> `static` **setEnabled**(`compiler`, `type`): `void`

Defined in: [webpack/types.d.ts:4714](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4714)

#### Parameters

##### compiler

[`Compiler`](../../../../classes/Compiler)

##### type

`string`

#### Returns

`void`
