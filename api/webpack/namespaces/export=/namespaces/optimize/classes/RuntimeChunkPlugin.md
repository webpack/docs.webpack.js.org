---
title: RuntimeChunkPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [optimize](../index.md) / RuntimeChunkPlugin

# Class: RuntimeChunkPlugin

Defined in: [webpack/types.d.ts:16545](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16545)

## Constructors

### Constructor

> **new RuntimeChunkPlugin**(`options?`): `RuntimeChunkPlugin`

Defined in: [webpack/types.d.ts:16546](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16546)

#### Parameters

##### options?

###### name?

(`entrypoint`) => `string`

The name factory for the runtime chunks.

#### Returns

`RuntimeChunkPlugin`

## Properties

### options

> **options**: `object`

Defined in: [webpack/types.d.ts:16552](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16552)

#### name

> **name**: `string` \| (`entrypoint`) => `string`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:16557](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16557)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`
