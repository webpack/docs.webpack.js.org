---
title: FileCacheOptions
---

[webpack](../globals) / FileCacheOptions

# Interface: FileCacheOptions

Defined in: [webpack/types.d.ts:5990](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5990)

Options object for persistent file-based caching.

## Properties

### allowCollectingMemory?

> `optional` **allowCollectingMemory**: `boolean`

Defined in: [webpack/types.d.ts:5994](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5994)

Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost.

***

### buildDependencies?

> `optional` **buildDependencies**: `object`

Defined in: [webpack/types.d.ts:5999](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5999)

Dependencies the build depends on (in multiple categories, default categories: 'defaultWebpack').

#### Index Signature

\[`index`: `string`]: `string`\[]

***

### cacheDirectory?

> `optional` **cacheDirectory**: `string`

Defined in: [webpack/types.d.ts:6004](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6004)

Base directory for the cache (defaults to node\_modules/.cache/webpack).

***

### cacheLocation?

> `optional` **cacheLocation**: `string`

Defined in: [webpack/types.d.ts:6009](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6009)

Locations for the cache (defaults to cacheDirectory / name).

***

### compression?

> `optional` **compression**: `false` | `"gzip"` | `"brotli"`

Defined in: [webpack/types.d.ts:6014](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6014)

Compression type used for the cache files.

***

### hashAlgorithm?

> `optional` **hashAlgorithm**: `string`

Defined in: [webpack/types.d.ts:6019](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6019)

Algorithm used for generation the hash (see node.js crypto package).

***

### idleTimeout?

> `optional` **idleTimeout**: `number`

Defined in: [webpack/types.d.ts:6024](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6024)

Time in ms after which idle period the cache storing should happen.

***

### idleTimeoutAfterLargeChanges?

> `optional` **idleTimeoutAfterLargeChanges**: `number`

Defined in: [webpack/types.d.ts:6029](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6029)

Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time).

***

### idleTimeoutForInitialStore?

> `optional` **idleTimeoutForInitialStore**: `number`

Defined in: [webpack/types.d.ts:6034](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6034)

Time in ms after which idle period the initial cache storing should happen.

***

### immutablePaths?

> `optional` **immutablePaths**: (`string` | `RegExp`)\[]

Defined in: [webpack/types.d.ts:6039](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6039)

List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable.

***

### managedPaths?

> `optional` **managedPaths**: (`string` | `RegExp`)\[]

Defined in: [webpack/types.d.ts:6044](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6044)

List of paths that are managed by a package manager and can be trusted to not be modified otherwise.

***

### maxAge?

> `optional` **maxAge**: `number`

Defined in: [webpack/types.d.ts:6049](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6049)

Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds).

***

### maxMemoryGenerations?

> `optional` **maxMemoryGenerations**: `number`

Defined in: [webpack/types.d.ts:6054](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6054)

Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache.

***

### memoryCacheUnaffected?

> `optional` **memoryCacheUnaffected**: `boolean`

Defined in: [webpack/types.d.ts:6059](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6059)

Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory.

***

### name?

> `optional` **name**: `string`

Defined in: [webpack/types.d.ts:6064](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6064)

Name for the cache. Different names will lead to different coexisting caches.

***

### profile?

> `optional` **profile**: `boolean`

Defined in: [webpack/types.d.ts:6069](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6069)

Track and log detailed timing information for individual cache items.

***

### readonly?

> `optional` **readonly**: `boolean`

Defined in: [webpack/types.d.ts:6074](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6074)

Enable/disable readonly mode.

***

### store?

> `optional` **store**: `"pack"`

Defined in: [webpack/types.d.ts:6079](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6079)

When to store data to the filesystem. (pack: Store data when compiler is idle in a single file).

***

### type

> **type**: `"filesystem"`

Defined in: [webpack/types.d.ts:6084](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6084)

Filesystem caching.

***

### version?

> `optional` **version**: `string`

Defined in: [webpack/types.d.ts:6089](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6089)

Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache.
