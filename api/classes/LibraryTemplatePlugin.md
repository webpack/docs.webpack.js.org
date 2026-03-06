---
title: LibraryTemplatePlugin
---

[webpack](../globals.md) / LibraryTemplatePlugin

# Class: LibraryTemplatePlugin

Defined in: [webpack/types.d.ts:9852](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9852)

## Constructors

### Constructor

> **new LibraryTemplatePlugin**(`name`, `target`, `umdNamedDefine`, `auxiliaryComment`, `exportProperty`): `LibraryTemplatePlugin`

Defined in: [webpack/types.d.ts:9853](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9853)

#### Parameters

##### name

`LibraryName`

##### target

`string`

##### umdNamedDefine

`boolean`

##### auxiliaryComment

`AuxiliaryComment`

##### exportProperty

`LibraryExport`

#### Returns

`LibraryTemplatePlugin`

## Properties

### library

> **library**: `object`

Defined in: [webpack/types.d.ts:9860](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9860)

#### auxiliaryComment

> **auxiliaryComment**: `AuxiliaryComment`

#### export

> **export**: `LibraryExport`

#### name

> **name**: `LibraryName`

#### type

> **type**: `string`

#### umdNamedDefine

> **umdNamedDefine**: `boolean`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:9871](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9871)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
