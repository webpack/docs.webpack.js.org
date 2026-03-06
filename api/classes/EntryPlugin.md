---
title: EntryPlugin
---

[webpack](../globals.md) / EntryPlugin

# Class: EntryPlugin

Defined in: [webpack/types.d.ts:4933](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4933)

## Constructors

### Constructor

> **new EntryPlugin**(`context`, `entry`, `options?`): `EntryPlugin`

Defined in: [webpack/types.d.ts:4937](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4937)

An entry plugin which will handle creation of the EntryDependency

#### Parameters

##### context

`string`

##### entry

`string`

##### options?

`string` | [`EntryOptions`](../type-aliases/EntryOptions.md)

#### Returns

`EntryPlugin`

## Properties

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:4938](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4938)

***

### entry

> **entry**: `string`

Defined in: [webpack/types.d.ts:4939](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4939)

***

### options

> **options**: `string` \| [`EntryOptions`](../type-aliases/EntryOptions.md)

Defined in: [webpack/types.d.ts:4940](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4940)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4945](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4945)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### createDependency()

> `static` **createDependency**(`entry`, `options`): `EntryDependency`

Defined in: [webpack/types.d.ts:4946](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4946)

#### Parameters

##### entry

`string`

##### options

`string` | [`EntryOptions`](../type-aliases/EntryOptions.md)

#### Returns

`EntryDependency`
