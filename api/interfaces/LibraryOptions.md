---
title: LibraryOptions
---

[webpack](../globals.md) / LibraryOptions

# Interface: LibraryOptions

Defined in: [webpack/types.d.ts:9821](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9821)

Options for library.

## Properties

### amdContainer?

> `optional` **amdContainer**: `string`

Defined in: [webpack/types.d.ts:9825](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9825)

Add a container for define/require functions in the AMD module.

***

### auxiliaryComment?

> `optional` **auxiliaryComment**: `string` \| `LibraryCustomUmdCommentObject`

Defined in: [webpack/types.d.ts:9830](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9830)

Add a comment in the UMD wrapper.

***

### export?

> `optional` **export**: `string` \| `string`[]

Defined in: [webpack/types.d.ts:9835](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9835)

Specify which export should be exposed as library.

***

### name?

> `optional` **name**: `string` \| `string`[] \| `LibraryCustomUmdObject`

Defined in: [webpack/types.d.ts:9840](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9840)

The name of the library (some types allow unnamed libraries too).

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:9845](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9845)

Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).

***

### umdNamedDefine?

> `optional` **umdNamedDefine**: `boolean`

Defined in: [webpack/types.d.ts:9850](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9850)

If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
