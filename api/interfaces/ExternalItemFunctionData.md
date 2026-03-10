---
title: ExternalItemFunctionData
---

[webpack](../globals) / ExternalItemFunctionData

# Interface: ExternalItemFunctionData

Defined in: [webpack/types.d.ts:5625](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5625)

## Properties

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:5629](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5629)

the directory in which the request is placed

***

### contextInfo

> **contextInfo**: `ModuleFactoryCreateDataContextInfo`

Defined in: [webpack/types.d.ts:5634](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5634)

contextual information

***

### dependencyType

> **dependencyType**: `string`

Defined in: [webpack/types.d.ts:5639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5639)

the category of the referencing dependency

***

### getResolve()

> **getResolve**: (`options?`) => (`context`, `request`, `callback`) => `void` | (`context`, `request`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

Defined in: [webpack/types.d.ts:5644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5644)

get a resolve function with the current resolver options

#### Parameters

##### options?

[`ResolveOptions`](ResolveOptions.md)

#### Returns

(`context`, `request`, `callback`) => `void` | (`context`, `request`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string`>

***

### request

> **request**: `string`

Defined in: [webpack/types.d.ts:5661](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5661)

the request as written by the user in the require/import expression/statement
