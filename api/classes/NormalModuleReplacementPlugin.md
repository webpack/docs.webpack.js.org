---
title: NormalModuleReplacementPlugin
---

[webpack](../globals) / NormalModuleReplacementPlugin

# Class: NormalModuleReplacementPlugin

Defined in: [webpack/types.d.ts:12387](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12387)

## Constructors

### Constructor

> **new NormalModuleReplacementPlugin**(`resourceRegExp`, `newResource`): `NormalModuleReplacementPlugin`

Defined in: [webpack/types.d.ts:12391](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12391)

Create an instance of the plugin

#### Parameters

##### resourceRegExp

[`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### newResource

`string` | (`resolveData`) => `void`

#### Returns

`NormalModuleReplacementPlugin`

## Properties

### newResource

> **newResource**: `string` | (`resolveData`) => `void`

Defined in: [webpack/types.d.ts:12396](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12396)

***

### resourceRegExp

> **resourceRegExp**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Defined in: [webpack/types.d.ts:12395](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12395)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:12401](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12401)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
