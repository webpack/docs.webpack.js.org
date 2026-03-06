---
title: MemoryCacheOptions
---

[webpack](../globals.md) / MemoryCacheOptions

# Interface: MemoryCacheOptions

Defined in: [webpack/types.d.ts:10517](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10517)

Options object for in-memory caching.

## Properties

### cacheUnaffected?

> `optional` **cacheUnaffected**: `boolean`

Defined in: [webpack/types.d.ts:10521](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10521)

Additionally cache computation of modules that are unchanged and reference only unchanged modules.

***

### maxGenerations?

> `optional` **maxGenerations**: `number`

Defined in: [webpack/types.d.ts:10526](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10526)

Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever).

***

### type

> **type**: `"memory"`

Defined in: [webpack/types.d.ts:10531](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10531)

In memory caching.
