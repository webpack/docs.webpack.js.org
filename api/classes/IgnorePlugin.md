---
title: IgnorePlugin
---

[webpack](../globals) / IgnorePlugin

# Class: IgnorePlugin

Defined in: [webpack/types.d.ts:6844](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6844)

## Constructors

### Constructor

> **new IgnorePlugin**(`options`): `IgnorePlugin`

Defined in: [webpack/types.d.ts:6845](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6845)

#### Parameters

##### options

`IgnorePluginOptions`

#### Returns

`IgnorePlugin`

## Properties

### options

> **options**: `IgnorePluginOptions`

Defined in: [webpack/types.d.ts:6846](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6846)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:6858](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6858)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### checkIgnore()

> **checkIgnore**(`resolveData`): `false`

Defined in: [webpack/types.d.ts:6851](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6851)

Note that if "contextRegExp" is given, both the "resourceRegExp" and "contextRegExp" have to match.

#### Parameters

##### resolveData

`BeforeContextResolveData` | [`ResolveData`](../interfaces/ResolveData)

#### Returns

`false`
