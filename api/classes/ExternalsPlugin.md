---
title: ExternalsPlugin
---

[webpack](../globals) / ExternalsPlugin

# Class: ExternalsPlugin

Defined in: [webpack/types.d.ts:5789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5789)

## Constructors

### Constructor

> **new ExternalsPlugin**(`type`, `externals`): `ExternalsPlugin`

Defined in: [webpack/types.d.ts:5790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5790)

#### Parameters

##### type

`"window"` | `"promise"` | `"module"` | `"script"` | `"var"` | `"self"` | `"global"` | `"asset"` | `"css-import"` | `"css-url"` | `"commonjs"` | `"import"` | `"jsonp"` | `"this"` | `"assign"` | `"commonjs2"` | `"commonjs-module"` | `"commonjs-static"` | `"amd"` | `"amd-require"` | `"umd"` | `"umd2"` | `"system"` | `"module-import"` | `"node-commonjs"` | (`dependency`) => `ExternalsType`

##### externals

[`Externals`](../type-aliases/Externals)

#### Returns

`ExternalsPlugin`

## Properties

### externals

> **externals**: [`Externals`](../type-aliases/Externals)

Defined in: [webpack/types.d.ts:5847](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5847)

***

### type

> **type**: `"window"` | `"promise"` | `"module"` | `"script"` | `"var"` | `"self"` | `"global"` | `"asset"` | `"css-import"` | `"css-url"` | `"commonjs"` | `"import"` | `"jsonp"` | `"this"` | `"assign"` | `"commonjs2"` | `"commonjs-module"` | `"commonjs-static"` | `"amd"` | `"amd-require"` | `"umd"` | `"umd2"` | `"system"` | `"module-import"` | `"node-commonjs"` | (`dependency`) => `ExternalsType`

Defined in: [webpack/types.d.ts:5820](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5820)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:5852](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5852)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
