---
title: InputFileSystem
---

[webpack](../globals) / InputFileSystem

# Interface: InputFileSystem

Defined in: [webpack/types.d.ts:7008](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7008)

## Properties

### dirname()?

> `optional` **dirname**: (`dirname`) => `string`

Defined in: [webpack/types.d.ts:7032](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7032)

#### Parameters

##### dirname

`string`

#### Returns

`string`

***

### join()?

> `optional` **join**: (`path1`, `path2`) => `string`

Defined in: [webpack/types.d.ts:7030](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7030)

#### Parameters

##### path1

`string`

##### path2

`string`

#### Returns

`string`

***

### lstat?

> `optional` **lstat**: `LStatFs`

Defined in: [webpack/types.d.ts:7017](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7017)

***

### lstatSync?

> `optional` **lstatSync**: `LStatSync`

Defined in: [webpack/types.d.ts:7018](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7018)

***

### purge()?

> `optional` **purge**: (`value?`) => `void`

Defined in: [webpack/types.d.ts:7029](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7029)

#### Parameters

##### value?

`string` | `string`\[] | [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<`string`>

#### Returns

`void`

***

### readdir

> **readdir**: `ReaddirFs`

Defined in: [webpack/types.d.ts:7013](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7013)

***

### readdirSync?

> `optional` **readdirSync**: `ReaddirSync`

Defined in: [webpack/types.d.ts:7014](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7014)

***

### readFile

> **readFile**: `ReadFileFs`

Defined in: [webpack/types.d.ts:7009](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7009)

***

### readFileSync?

> `optional` **readFileSync**: `ReadFileSync`

Defined in: [webpack/types.d.ts:7010](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7010)

***

### readJson()?

> `optional` **readJson**: (`pathOrFileDescriptor`, `callback`) => `void`

Defined in: [webpack/types.d.ts:7021](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7021)

#### Parameters

##### pathOrFileDescriptor

`PathOrFileDescriptorFs`

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### readJsonSync()?

> `optional` **readJsonSync**: (`pathOrFileDescriptor`) => `JsonObjectFs`

Defined in: [webpack/types.d.ts:7028](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7028)

#### Parameters

##### pathOrFileDescriptor

`PathOrFileDescriptorFs`

#### Returns

`JsonObjectFs`

***

### readlink

> **readlink**: `ReadlinkFs`

Defined in: [webpack/types.d.ts:7011](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7011)

***

### readlinkSync?

> `optional` **readlinkSync**: `ReadlinkSync`

Defined in: [webpack/types.d.ts:7012](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7012)

***

### realpath?

> `optional` **realpath**: `RealPathFs`

Defined in: [webpack/types.d.ts:7019](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7019)

***

### realpathSync?

> `optional` **realpathSync**: `RealPathSync`

Defined in: [webpack/types.d.ts:7020](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7020)

***

### relative()?

> `optional` **relative**: (`from`, `to`) => `string`

Defined in: [webpack/types.d.ts:7031](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7031)

#### Parameters

##### from

`string`

##### to

`string`

#### Returns

`string`

***

### stat

> **stat**: `StatFs`

Defined in: [webpack/types.d.ts:7015](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7015)

***

### statSync?

> `optional` **statSync**: `StatSync`

Defined in: [webpack/types.d.ts:7016](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7016)
