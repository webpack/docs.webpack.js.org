---
title: SideEffectsFlagPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [optimize](../index.md) / SideEffectsFlagPlugin

# Class: SideEffectsFlagPlugin

Defined in: [webpack/types.d.ts:17205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17205)

## Constructors

### Constructor

> **new SideEffectsFlagPlugin**(`analyseSource?`): `SideEffectsFlagPlugin`

Defined in: [webpack/types.d.ts:17206](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17206)

#### Parameters

##### analyseSource?

`boolean`

#### Returns

`SideEffectsFlagPlugin`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:17211](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17211)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`

***

### moduleHasSideEffects()

> `static` **moduleHasSideEffects**(`moduleName`, `flagValue`, `cache`): `boolean`

Defined in: [webpack/types.d.ts:17212](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17212)

#### Parameters

##### moduleName

`string`

##### flagValue

`SideEffectsFlagValue`

##### cache

`Map`\<`string`, `RegExp`\>

#### Returns

`boolean`
