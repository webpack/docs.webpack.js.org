---
title: DynamicEntryPlugin
---

[webpack](../globals) / DynamicEntryPlugin

# Class: DynamicEntryPlugin

Defined in: [webpack/types.d.ts:4650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4650)

## Constructors

### Constructor

> **new DynamicEntryPlugin**(`context`, `entry`): `DynamicEntryPlugin`

Defined in: [webpack/types.d.ts:4651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4651)

#### Parameters

##### context

`string`

##### entry

() => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`EntryStaticNormalized`>

#### Returns

`DynamicEntryPlugin`

## Properties

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:4652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4652)

***

### entry()

> **entry**: () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`EntryStaticNormalized`>

Defined in: [webpack/types.d.ts:4653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4653)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`EntryStaticNormalized`>

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4658](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4658)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
