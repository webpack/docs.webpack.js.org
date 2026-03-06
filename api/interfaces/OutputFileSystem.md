---
title: OutputFileSystem
---

[**webpack**](../README.md)

***

[webpack](../README.md) / OutputFileSystem

# Interface: OutputFileSystem

Defined in: [lib/util/fs.js:356](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L356)

## Properties

### createReadStream?

> `optional` **createReadStream**: `CreateReadStream`

Defined in: [lib/util/fs.js:365](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L365)

***

### dirname()?

> `optional` **dirname**: (`dirname`) => `string`

Defined in: [lib/util/fs.js:368](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L368)

#### Parameters

##### dirname

`string`

#### Returns

`string`

***

### join()?

> `optional` **join**: (`path1`, `path2`) => `string`

Defined in: [lib/util/fs.js:366](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L366)

#### Parameters

##### path1

`string`

##### path2

`string`

#### Returns

`string`

***

### lstat?

> `optional` **lstat**: `LStat`

Defined in: [lib/util/fs.js:363](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L363)

***

### mkdir

> **mkdir**: `Mkdir`

Defined in: [lib/util/fs.js:357](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L357)

***

### readdir?

> `optional` **readdir**: `Readdir`

Defined in: [lib/util/fs.js:358](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L358)

***

### readFile

> **readFile**: `ReadFile`

Defined in: [lib/util/fs.js:364](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L364)

***

### relative()?

> `optional` **relative**: (`from`, `to`) => `string`

Defined in: [lib/util/fs.js:367](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L367)

#### Parameters

##### from

`string`

##### to

`string`

#### Returns

`string`

***

### rmdir?

> `optional` **rmdir**: `Rmdir`

Defined in: [lib/util/fs.js:359](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L359)

***

### stat

> **stat**: `Stat`

Defined in: [lib/util/fs.js:362](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L362)

***

### unlink?

> `optional` **unlink**: `Unlink`

Defined in: [lib/util/fs.js:361](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L361)

***

### writeFile

> **writeFile**: `WriteFile`

Defined in: [lib/util/fs.js:360](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/util/fs.js#L360)
