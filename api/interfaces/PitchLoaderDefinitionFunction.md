---
title: PitchLoaderDefinitionFunction
---

[webpack](../globals) / PitchLoaderDefinitionFunction

# Interface: PitchLoaderDefinitionFunction()\<OptionsType, ContextAdditions>

Defined in: [webpack/types.d.ts:14117](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14117)

## Type Parameters

### OptionsType

`OptionsType` = { }

### ContextAdditions

`ContextAdditions` = { }

> **PitchLoaderDefinitionFunction**(`this`, `remainingRequest`, `previousRequest`, `data`): `string` | `void` | `Buffer`<`ArrayBufferLike`> | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string` | `Buffer`<`ArrayBufferLike`>>

Defined in: [webpack/types.d.ts:14121](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14121)

## Parameters

### this

`NormalModuleLoaderContext`<`OptionsType`> & `LoaderRunnerLoaderContext`<`OptionsType`> & `LoaderPluginLoaderContext` & `HotModuleReplacementPluginLoaderContext` & `ContextAdditions`

### remainingRequest

`string`

### previousRequest

`string`

### data

`object`

## Returns

`string` | `void` | `Buffer`<`ArrayBufferLike`> | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`string` | `Buffer`<`ArrayBufferLike`>>
