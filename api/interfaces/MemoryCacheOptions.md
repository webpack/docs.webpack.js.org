---
title: MemoryCacheOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / MemoryCacheOptions

# Interface: MemoryCacheOptions

Defined in: [declarations/WebpackOptions.d.ts:1053](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1053)

Options object for in-memory caching.

## Properties

### cacheUnaffected?

> `optional` **cacheUnaffected**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1057](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1057)

Additionally cache computation of modules that are unchanged and reference only unchanged modules.

***

### maxGenerations?

> `optional` **maxGenerations**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1061](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1061)

Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).

***

### type

> **type**: `"memory"`

Defined in: [declarations/WebpackOptions.d.ts:1065](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1065)

In memory caching.
