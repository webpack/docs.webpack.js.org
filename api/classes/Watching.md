---
title: Watching
---

[webpack](../globals) / Watching

# Abstract Class: Watching

Defined in: [webpack/types.d.ts:18969](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18969)

## Constructors

### Constructor

> **new Watching**(): `Watching`

#### Returns

`Watching`

## Properties

### blocked

> **blocked**: `boolean`

Defined in: [webpack/types.d.ts:18976](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18976)

***

### callbacks

> **callbacks**: (`err`, `result?`) => `void`\[]

Defined in: [webpack/types.d.ts:18973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18973)

#### Parameters

##### err

`Error`

##### result?

`void`

#### Returns

`void`

***

### closed

> **closed**: `boolean`

Defined in: [webpack/types.d.ts:18974](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18974)

***

### compiler

> **compiler**: [`Compiler`](Compiler.md)

Defined in: [webpack/types.d.ts:18978](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18978)

***

### handler

> **handler**: `CallbackWebpackFunction_2`<[`Stats`](Stats.md), `void`>

Defined in: [webpack/types.d.ts:18972](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18972)

***

### invalid

> **invalid**: `boolean`

Defined in: [webpack/types.d.ts:18971](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18971)

***

### lastWatcherStartTime?

> `optional` **lastWatcherStartTime**: `number`

Defined in: [webpack/types.d.ts:18982](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18982)

***

### pausedWatcher?

> `optional` **pausedWatcher**: `Watcher`

Defined in: [webpack/types.d.ts:18981](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18981)

***

### running

> **running**: `boolean`

Defined in: [webpack/types.d.ts:18979](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18979)

***

### startTime

> **startTime**: `number`

Defined in: [webpack/types.d.ts:18970](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18970)

***

### suspended

> **suspended**: `boolean`

Defined in: [webpack/types.d.ts:18975](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18975)

***

### watcher?

> `optional` **watcher**: `Watcher`

Defined in: [webpack/types.d.ts:18980](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18980)

***

### watchOptions

> **watchOptions**: `WatchOptions`

Defined in: [webpack/types.d.ts:18977](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18977)

## Methods

### close()

> **close**(`callback`): `void`

Defined in: [webpack/types.d.ts:18991](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18991)

#### Parameters

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### invalidate()

> **invalidate**(`callback?`): `void`

Defined in: [webpack/types.d.ts:18988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18988)

#### Parameters

##### callback?

(`err`, `result?`) => `void`

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [webpack/types.d.ts:18990](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18990)

#### Returns

`void`

***

### suspend()

> **suspend**(): `void`

Defined in: [webpack/types.d.ts:18989](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18989)

#### Returns

`void`

***

### watch()

> **watch**(`files`, `dirs`, `missing`): `void`

Defined in: [webpack/types.d.ts:18983](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18983)

#### Parameters

##### files

`Iterable`<`string`>

##### dirs

`Iterable`<`string`>

##### missing

`Iterable`<`string`>

#### Returns

`void`
