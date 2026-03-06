---
title: Cache
---

[webpack](../globals.md) / Cache

# Class: Cache

Defined in: [webpack/types.d.ts:1099](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1099)

## Constructors

### Constructor

> **new Cache**(): `CacheClass`

Defined in: [webpack/types.d.ts:1100](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1100)

#### Returns

`CacheClass`

## Properties

### hooks

> **hooks**: `object`

Defined in: [webpack/types.d.ts:1101](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1101)

#### beginIdle

> **beginIdle**: `SyncHook`\<\[\]\>

#### endIdle

> **endIdle**: `AsyncParallelHook`\<\[\]\>

#### get

> **get**: `AsyncSeriesBailHook`\<\[`string`, `Etag`, `GotHandler`\<`any`\>[]\], `any`\>

#### shutdown

> **shutdown**: `AsyncParallelHook`\<\[\]\>

#### store

> **store**: `AsyncParallelHook`\<\[`string`, `Etag`, `any`\]\>

#### storeBuildDependencies

> **storeBuildDependencies**: `AsyncParallelHook`\<\[`Iterable`\<`string`, `any`, `any`\>\]\>

***

### STAGE\_DEFAULT

> `static` **STAGE\_DEFAULT**: `number`

Defined in: [webpack/types.d.ts:1132](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1132)

***

### STAGE\_DISK

> `static` **STAGE\_DISK**: `number`

Defined in: [webpack/types.d.ts:1133](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1133)

***

### STAGE\_MEMORY

> `static` **STAGE\_MEMORY**: `number`

Defined in: [webpack/types.d.ts:1131](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1131)

***

### STAGE\_NETWORK

> `static` **STAGE\_NETWORK**: `number`

Defined in: [webpack/types.d.ts:1134](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1134)

## Methods

### beginIdle()

> **beginIdle**(): `void`

Defined in: [webpack/types.d.ts:1128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1128)

#### Returns

`void`

***

### endIdle()

> **endIdle**(`callback`): `void`

Defined in: [webpack/types.d.ts:1129](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1129)

#### Parameters

##### callback

`CallbackCacheCache`\<`void`\>

#### Returns

`void`

***

### get()

> **get**\<`T`\>(`identifier`, `etag`, `callback`): `void`

Defined in: [webpack/types.d.ts:1109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1109)

#### Type Parameters

##### T

`T`

#### Parameters

##### identifier

`string`

##### etag

`Etag`

##### callback

`CallbackCacheCache`\<`T`\>

#### Returns

`void`

***

### shutdown()

> **shutdown**(`callback`): `void`

Defined in: [webpack/types.d.ts:1130](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1130)

#### Parameters

##### callback

`CallbackCacheCache`\<`void`\>

#### Returns

`void`

***

### store()

> **store**\<`T`\>(`identifier`, `etag`, `data`, `callback`): `void`

Defined in: [webpack/types.d.ts:1114](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1114)

#### Type Parameters

##### T

`T`

#### Parameters

##### identifier

`string`

##### etag

`Etag`

##### data

`T`

##### callback

`CallbackCacheCache`\<`void`\>

#### Returns

`void`

***

### storeBuildDependencies()

> **storeBuildDependencies**(`dependencies`, `callback`): `void`

Defined in: [webpack/types.d.ts:1124](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L1124)

After this method has succeeded the cache can only be restored when build dependencies are

#### Parameters

##### dependencies

`Iterable`\<`string`\>

##### callback

`CallbackCacheCache`\<`void`\>

#### Returns

`void`
