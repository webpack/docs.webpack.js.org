---
title: LibraryOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / LibraryOptions

# Interface: LibraryOptions

Defined in: [declarations/WebpackOptions.d.ts:1235](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1235)

Options for library.

## Properties

### amdContainer?

> `optional` **amdContainer**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1239](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1239)

Add a container for define/require functions in the AMD module.

***

### auxiliaryComment?

> `optional` **auxiliaryComment**: `AuxiliaryComment`

Defined in: [declarations/WebpackOptions.d.ts:1243](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1243)

Add a comment in the UMD wrapper.

***

### export?

> `optional` **export**: `LibraryExport`

Defined in: [declarations/WebpackOptions.d.ts:1247](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1247)

Specify which export should be exposed as library.

***

### name?

> `optional` **name**: `LibraryName`

Defined in: [declarations/WebpackOptions.d.ts:1251](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1251)

The name of the library (some types allow unnamed libraries too).

***

### type

> **type**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1255](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1255)

Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins).

***

### umdNamedDefine?

> `optional` **umdNamedDefine**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1259](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1259)

If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module.
