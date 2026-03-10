---
title: EnvironmentPlugin
---

[webpack](../globals) / EnvironmentPlugin

# Class: EnvironmentPlugin

Defined in: [webpack/types.d.ts:5083](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5083)

## Constructors

### Constructor

> **new EnvironmentPlugin**(...`keys`): `EnvironmentPlugin`

Defined in: [webpack/types.d.ts:5084](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5084)

#### Parameters

##### keys

...(`string` | `string`\[] | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>)\[]

#### Returns

`EnvironmentPlugin`

## Properties

### defaultValues

> **defaultValues**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>

Defined in: [webpack/types.d.ts:5086](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5086)

***

### keys

> **keys**: `string`\[]

Defined in: [webpack/types.d.ts:5085](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5085)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:5091](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5091)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
