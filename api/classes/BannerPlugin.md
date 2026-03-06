---
title: BannerPlugin
---

[webpack](../globals.md) / BannerPlugin

# Class: BannerPlugin

Defined in: [webpack/types.d.ts:575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L575)

## Constructors

### Constructor

> **new BannerPlugin**(`options`): `BannerPlugin`

Defined in: [webpack/types.d.ts:576](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L576)

#### Parameters

##### options

`BannerPluginArgument`

#### Returns

`BannerPlugin`

## Properties

### banner()

> **banner**: (`data`) => `string`

Defined in: [webpack/types.d.ts:578](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L578)

#### Parameters

##### data

###### chunk

[`Chunk`](Chunk.md)

###### filename

`string`

###### hash?

`string`

#### Returns

`string`

***

### options

> **options**: `BannerPluginOptions`

Defined in: [webpack/types.d.ts:577](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L577)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:583](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L583)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
