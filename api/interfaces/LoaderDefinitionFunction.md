---
title: LoaderDefinitionFunction
---

[webpack](../globals) / LoaderDefinitionFunction

# Interface: LoaderDefinitionFunction()\<OptionsType, ContextAdditions>

Defined in: [webpack/types.d.ts:9946](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9946)

## Type Parameters

### OptionsType

`OptionsType` = { }

### ContextAdditions

`ContextAdditions` = { }

> **LoaderDefinitionFunction**(`this`, `content`, `sourceMap?`, `additionalData?`): `string` | `void` | `Buffer`<`ArrayBufferLike`> | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string` | `Buffer`<`ArrayBufferLike`>>

Defined in: [webpack/types.d.ts:9950](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9950)

## Parameters

### this

`NormalModuleLoaderContext`<`OptionsType`> & `LoaderRunnerLoaderContext`<`OptionsType`> & `LoaderPluginLoaderContext` & `HotModuleReplacementPluginLoaderContext` & `ContextAdditions`

### content

`string`

### sourceMap?

`string` | `RawSourceMap`

### additionalData?

`AdditionalData`

## Returns

`string` | `void` | `Buffer`<`ArrayBufferLike`> | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string` | `Buffer`<`ArrayBufferLike`>>
