---
title: CleanPlugin
---

[webpack](../globals.md) / CleanPlugin

# Class: CleanPlugin

Defined in: [webpack/types.d.ts:1978](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1978)

## Constructors

### Constructor

> **new CleanPlugin**(`options?`): `CleanPlugin`

Defined in: [webpack/types.d.ts:1979](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1979)

#### Parameters

##### options?

`CleanOptions`

#### Returns

`CleanPlugin`

## Properties

### options

> **options**: `CleanOptions`

Defined in: [webpack/types.d.ts:1980](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1980)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:1985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1985)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CleanPluginCompilationHooks`

Defined in: [webpack/types.d.ts:1986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1986)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`CleanPluginCompilationHooks`
