---
title: FileCacheOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / FileCacheOptions

# Interface: FileCacheOptions

Defined in: [declarations/WebpackOptions.d.ts:1070](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1070)

Options object for persistent file-based caching.

## Properties

### allowCollectingMemory?

> `optional` **allowCollectingMemory**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1074](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1074)

Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.

***

### buildDependencies?

> `optional` **buildDependencies**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1078](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1078)

Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').

#### Index Signature

\[`k`: `string`\]: `string`[]

List of dependencies the build depends on.

***

### cacheDirectory?

> `optional` **cacheDirectory**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1087](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1087)

Base directory for the cache (defaults to node_modules/.cache/webpack).

***

### cacheLocation?

> `optional` **cacheLocation**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1091](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1091)

Locations for the cache (defaults to cacheDirectory / name).

***

### compression?

> `optional` **compression**: `false` \| `"gzip"` \| `"brotli"`

Defined in: [declarations/WebpackOptions.d.ts:1095](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1095)

Compression type used for the cache files.

***

### hashAlgorithm?

> `optional` **hashAlgorithm**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1099](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1099)

Algorithm used for generation the hash (see node.js crypto package).

***

### idleTimeout?

> `optional` **idleTimeout**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1103](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1103)

Time in ms after which idle period the cache storing should happen.

***

### idleTimeoutAfterLargeChanges?

> `optional` **idleTimeoutAfterLargeChanges**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1107](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1107)

Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).

***

### idleTimeoutForInitialStore?

> `optional` **idleTimeoutForInitialStore**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1111)

Time in ms after which idle period the initial cache storing should happen.

***

### immutablePaths?

> `optional` **immutablePaths**: (`string` \| `RegExp`)[]

Defined in: [declarations/WebpackOptions.d.ts:1115](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1115)

List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.

***

### managedPaths?

> `optional` **managedPaths**: (`string` \| `RegExp`)[]

Defined in: [declarations/WebpackOptions.d.ts:1119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1119)

List of paths that are managed by a package manager and can be trusted to not be modified otherwise.

***

### maxAge?

> `optional` **maxAge**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1123](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1123)

Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).

***

### maxMemoryGenerations?

> `optional` **maxMemoryGenerations**: `number`

Defined in: [declarations/WebpackOptions.d.ts:1127](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1127)

Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.

***

### memoryCacheUnaffected?

> `optional` **memoryCacheUnaffected**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1131](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1131)

Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.

***

### name?

> `optional` **name**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1135](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1135)

Name for the cache. Different names will lead to different coexisting caches.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1139)

Track and log detailed timing information for individual cache items.

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1143](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1143)

Enable/disable readonly mode.

***

### store?

> `optional` **store**: `"pack"`

Defined in: [declarations/WebpackOptions.d.ts:1147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1147)

When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).

***

### type

> **type**: `"filesystem"`

Defined in: [declarations/WebpackOptions.d.ts:1151](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1151)

Filesystem caching.

***

### version?

> `optional` **version**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1155)

Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
