---
title: DefinePlugin
---

[webpack](../globals) / DefinePlugin

# Class: DefinePlugin

Defined in: [webpack/types.d.ts:4069](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4069)

## Constructors

### Constructor

> **new DefinePlugin**(`definitions`): `DefinePlugin`

Defined in: [webpack/types.d.ts:4073](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4073)

Create a new define plugin

#### Parameters

##### definitions

`Definitions`

#### Returns

`DefinePlugin`

## Properties

### definitions

> **definitions**: `Definitions`

Defined in: [webpack/types.d.ts:4074](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4074)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4079](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4079)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `DefinePluginHooks`

Defined in: [webpack/types.d.ts:4080](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4080)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`DefinePluginHooks`

***

### runtimeValue()

> `static` **runtimeValue**(`fn`, `options?`): `RuntimeValue`

Defined in: [webpack/types.d.ts:4081](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4081)

#### Parameters

##### fn

(`value`) => `CodeValuePrimitive`

##### options?

`true` | `string`\[] | `RuntimeValueOptions`

#### Returns

`RuntimeValue`
