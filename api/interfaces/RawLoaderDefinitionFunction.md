---
title: RawLoaderDefinitionFunction
---

[webpack](../globals) / RawLoaderDefinitionFunction

# Interface: RawLoaderDefinitionFunction()\<OptionsType, ContextAdditions>

Defined in: [webpack/types.d.ts:14427](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14427)

## Type Parameters

### OptionsType

`OptionsType` = { }

### ContextAdditions

`ContextAdditions` = { }

> **RawLoaderDefinitionFunction**(`this`, `content`, `sourceMap?`, `additionalData?`): `string` | `void` | `Buffer`<`ArrayBufferLike`> | `Promise`<`string` | `Buffer`<`ArrayBufferLike`>>

Defined in: [webpack/types.d.ts:14431](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14431)

## Parameters

### this

`NormalModuleLoaderContext`<`OptionsType`> & `LoaderRunnerLoaderContext`<`OptionsType`> & `LoaderPluginLoaderContext` & `HotModuleReplacementPluginLoaderContext` & `ContextAdditions`

### content

`Buffer`

### sourceMap?

`string` | `RawSourceMap`

### additionalData?

`AdditionalData`

## Returns

`string` | `void` | `Buffer`<`ArrayBufferLike`> | `Promise`<`string` | `Buffer`<`ArrayBufferLike`>>
