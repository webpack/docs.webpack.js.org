---
title: ContextReplacementPlugin
---

[webpack](../globals) / ContextReplacementPlugin

# Class: ContextReplacementPlugin

Defined in: [webpack/types.d.ts:3693](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3693)

## Constructors

### Constructor

> **new ContextReplacementPlugin**(`resourceRegExp`, `newContentResource?`, `newContentRecursive?`, `newContentRegExp?`): `ContextReplacementPlugin`

Defined in: [webpack/types.d.ts:3694](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3694)

#### Parameters

##### resourceRegExp

[`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### newContentResource?

`string` | `boolean` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | (`context`) => `void`

##### newContentRecursive?

`boolean` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `NewContentCreateContextMap`

##### newContentRegExp?

[`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

#### Returns

`ContextReplacementPlugin`

## Properties

### newContentCallback()?

> `optional` **newContentCallback**: (`context`) => `void`

Defined in: [webpack/types.d.ts:3705](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3705)

#### Parameters

##### context

`AfterContextResolveData` | `BeforeContextResolveData`

#### Returns

`void`

***

### newContentCreateContextMap()?

> `optional` **newContentCreateContextMap**: (`fs`, `callback`) => `void`

Defined in: [webpack/types.d.ts:3709](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3709)

#### Parameters

##### fs

[`InputFileSystem`](../interfaces/InputFileSystem)

##### callback

(`err`, `newContentRecursive`) => `void`

#### Returns

`void`

***

### newContentRecursive?

> `optional` **newContentRecursive**: `boolean`

Defined in: [webpack/types.d.ts:3716](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3716)

***

### newContentRegExp?

> `optional` **newContentRegExp**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Defined in: [webpack/types.d.ts:3717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3717)

***

### newContentResource?

> `optional` **newContentResource**: `string`

Defined in: [webpack/types.d.ts:3708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3708)

***

### resourceRegExp

> **resourceRegExp**: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

Defined in: [webpack/types.d.ts:3704](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3704)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:3722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3722)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`
