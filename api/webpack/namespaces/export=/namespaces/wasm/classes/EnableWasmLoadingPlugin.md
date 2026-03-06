---
title: EnableWasmLoadingPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [wasm](../index.md) / EnableWasmLoadingPlugin

# Class: EnableWasmLoadingPlugin

Defined in: [webpack/types.d.ts:4735](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4735)

## Constructors

### Constructor

> **new EnableWasmLoadingPlugin**(`type`): `EnableWasmLoadingPlugin`

Defined in: [webpack/types.d.ts:4736](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4736)

#### Parameters

##### type

`string`

#### Returns

`EnableWasmLoadingPlugin`

## Properties

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:4737](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4737)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4742](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4742)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`

***

### checkEnabled()

> `static` **checkEnabled**(`compiler`, `type`): `void`

Defined in: [webpack/types.d.ts:4744](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4744)

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

##### type

`string`

#### Returns

`void`

***

### setEnabled()

> `static` **setEnabled**(`compiler`, `type`): `void`

Defined in: [webpack/types.d.ts:4743](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4743)

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

##### type

`string`

#### Returns

`void`
