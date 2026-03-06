---
title: OutputFileSystem
---

[webpack](../globals) / OutputFileSystem

# Interface: OutputFileSystem

Defined in: [webpack/types.d.ts:13550](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13550)

## Properties

### createReadStream()?

> `optional` **createReadStream**: (`path`, `options?`) => `ReadableStream`

Defined in: [webpack/types.d.ts:13565](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13565)

#### Parameters

##### path

`PathLikeFs`

##### options?

`"ascii"` | `"utf8"` | `"utf-8"` | `"utf16le"` | `"utf-16le"` | `"ucs2"` | `"ucs-2"` | `"base64"` | `"base64url"` | `"latin1"` | `"binary"` | `"hex"` | `ReadStreamOptions`

#### Returns

`ReadableStream`

***

### dirname()?

> `optional` **dirname**: (`dirname`) => `string`

Defined in: [webpack/types.d.ts:13584](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13584)

#### Parameters

##### dirname

`string`

#### Returns

`string`

***

### join()?

> `optional` **join**: (`path1`, `path2`) => `string`

Defined in: [webpack/types.d.ts:13582](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13582)

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

Defined in: [webpack/types.d.ts:13563](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13563)

***

### mkdir

> **mkdir**: `Mkdir`

Defined in: [webpack/types.d.ts:13551](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13551)

***

### readdir?

> `optional` **readdir**: `ReaddirFs`

Defined in: [webpack/types.d.ts:13552](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13552)

***

### readFile

> **readFile**: `ReadFileFs`

Defined in: [webpack/types.d.ts:13564](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13564)

***

### relative()?

> `optional` **relative**: (`from`, `to`) => `string`

Defined in: [webpack/types.d.ts:13583](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13583)

#### Parameters

##### from

`string`

##### to

`string`

#### Returns

`string`

***

### rmdir()?

> `optional` **rmdir**: (`file`, `callback`) => `void`

Defined in: [webpack/types.d.ts:13553](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13553)

#### Parameters

##### file

`PathLikeFs`

##### callback

(`err`) => `void`

#### Returns

`void`

***

### stat

> **stat**: `StatFs`

Defined in: [webpack/types.d.ts:13562](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13562)

***

### unlink()?

> `optional` **unlink**: (`pathLike`, `callback`) => `void`

Defined in: [webpack/types.d.ts:13558](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13558)

#### Parameters

##### pathLike

`PathLikeFs`

##### callback

(`err`) => `void`

#### Returns

`void`

***

### writeFile

> **writeFile**: `WriteFile`

Defined in: [webpack/types.d.ts:13557](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13557)
