---
title: EnableLibraryPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [library](../index.md) / EnableLibraryPlugin

# Class: EnableLibraryPlugin

Defined in: [webpack/types.d.ts:4717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4717)

## Constructors

### Constructor

> **new EnableLibraryPlugin**(`type`, `options?`): `EnableLibraryPlugin`

Defined in: [webpack/types.d.ts:4718](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4718)

#### Parameters

##### type

`string`

##### options?

`EnableLibraryPluginOptions`

#### Returns

`EnableLibraryPlugin`

## Properties

### options

> **options**: `EnableLibraryPluginOptions`

Defined in: [webpack/types.d.ts:4720](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4720)

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:4719](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4719)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4725](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4725)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`

***

### checkEnabled()

> `static` **checkEnabled**(`compiler`, `type`): `void`

Defined in: [webpack/types.d.ts:4727](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4727)

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

Defined in: [webpack/types.d.ts:4726](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4726)

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

##### type

`string`

#### Returns

`void`
