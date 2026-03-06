---
title: SourceMapDevToolPlugin
---

[webpack](../globals.md) / SourceMapDevToolPlugin

# Class: SourceMapDevToolPlugin

Defined in: [webpack/types.d.ts:17493](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17493)

## Constructors

### Constructor

> **new SourceMapDevToolPlugin**(`options?`): `SourceMapDevToolPlugin`

Defined in: [webpack/types.d.ts:17494](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17494)

#### Parameters

##### options?

`SourceMapDevToolPluginOptions`

#### Returns

`SourceMapDevToolPlugin`

## Properties

### fallbackModuleFilenameTemplate

> **fallbackModuleFilenameTemplate**: `DevtoolFallbackModuleFilenameTemplate`

Defined in: [webpack/types.d.ts:17501](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17501)

***

### moduleFilenameTemplate

> **moduleFilenameTemplate**: `DevtoolModuleFilenameTemplate`

Defined in: [webpack/types.d.ts:17500](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17500)

***

### namespace

> **namespace**: `string`

Defined in: [webpack/types.d.ts:17502](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17502)

***

### options

> **options**: `SourceMapDevToolPluginOptions`

Defined in: [webpack/types.d.ts:17503](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17503)

***

### sourceMapFilename?

> `optional` **sourceMapFilename**: `string` \| `false`

Defined in: [webpack/types.d.ts:17495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17495)

***

### sourceMappingURLComment

> **sourceMappingURLComment**: `string` \| `false` \| (`pathData`, `assetInfo?`) => `string`

Defined in: [webpack/types.d.ts:17496](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17496)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:17508](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17508)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
