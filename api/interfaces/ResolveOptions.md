---
title: ResolveOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ResolveOptions

# Interface: ResolveOptions

Defined in: [declarations/WebpackOptions.d.ts:1624](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1624)

Options object for resolving requests.

## Properties

### alias?

> `optional` **alias**: `ResolveAlias`

Defined in: [declarations/WebpackOptions.d.ts:1628](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1628)

Redirect module requests.

***

### aliasFields?

> `optional` **aliasFields**: (`string` \| `string`[])[]

Defined in: [declarations/WebpackOptions.d.ts:1632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1632)

Fields in the description file (usually package.json) which are used to redirect requests inside the module.

***

### byDependency?

> `optional` **byDependency**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1636)

Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".

#### Index Signature

\[`k`: `string`\]: `ResolveOptions`

Options object for resolving requests.

***

### cache?

> `optional` **cache**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1645](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1645)

Enable caching of successfully resolved requests (cache entries are revalidated).

***

### cachePredicate()?

> `optional` **cachePredicate**: (`request`) => `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1649)

Predicate function to decide which requests should be cached.

#### Parameters

##### request

`ResolveRequest`

#### Returns

`boolean`

***

### cacheWithContext?

> `optional` **cacheWithContext**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1655)

Include the context information in the cache identifier when caching.

***

### conditionNames?

> `optional` **conditionNames**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1659](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1659)

Condition names for exports field entry point.

***

### descriptionFiles?

> `optional` **descriptionFiles**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1663](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1663)

Filenames used to find a description file (like a package.json).

***

### enforceExtension?

> `optional` **enforceExtension**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1667)

Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).

***

### exportsFields?

> `optional` **exportsFields**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1671)

Field names from the description file (usually package.json) which are used to provide entry points of a package.

***

### extensionAlias?

> `optional` **extensionAlias**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1675)

An object which maps extension to extension aliases.

#### Index Signature

\[`k`: `string`\]: `string` \| `string`[]

Extension alias.

***

### extensions?

> `optional` **extensions**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1684)

Extensions added to the request when trying to find the file.

***

### fallback?

> `optional` **fallback**: `ResolveAlias`

Defined in: [declarations/WebpackOptions.d.ts:1688](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1688)

Redirect module requests when normal resolving fails.

***

### fileSystem?

> `optional` **fileSystem**: [`InputFileSystem`](InputFileSystem.md)

Defined in: [declarations/WebpackOptions.d.ts:1692](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1692)

Filesystem for the resolver.

***

### fullySpecified?

> `optional` **fullySpecified**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1696](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1696)

Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).

***

### importsFields?

> `optional` **importsFields**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1700](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1700)

Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).

***

### mainFields?

> `optional` **mainFields**: (`string` \| `string`[])[]

Defined in: [declarations/WebpackOptions.d.ts:1704](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1704)

Field names from the description file (package.json) which are used to find the default entry point.

***

### mainFiles?

> `optional` **mainFiles**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1708)

Filenames used to find the default entry point if there is no description file or main field.

***

### modules?

> `optional` **modules**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1712](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1712)

Folder names or directory paths where to find modules.

***

### plugins?

> `optional` **plugins**: (`"..."` \| [`ResolvePluginInstance`](../type-aliases/ResolvePluginInstance.md) \| `Falsy`)[]

Defined in: [declarations/WebpackOptions.d.ts:1716](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1716)

Plugins for the resolver.

***

### preferAbsolute?

> `optional` **preferAbsolute**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1720](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1720)

Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.

***

### preferRelative?

> `optional` **preferRelative**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1724)

Prefer to resolve module requests as relative request and fallback to resolving as module.

***

### resolver?

> `optional` **resolver**: `Resolver`

Defined in: [declarations/WebpackOptions.d.ts:1728](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1728)

Custom resolver.

***

### restrictions?

> `optional` **restrictions**: (`string` \| `RegExp`)[]

Defined in: [declarations/WebpackOptions.d.ts:1732](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1732)

A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.

***

### roots?

> `optional` **roots**: `string`[]

Defined in: [declarations/WebpackOptions.d.ts:1736](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1736)

A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.

***

### symlinks?

> `optional` **symlinks**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1740](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1740)

Enable resolving symlinks to the original location.

***

### tsconfig?

> `optional` **tsconfig**: `string` \| `boolean` \| \{ `configFile?`: `string`; `references?`: `string`; \}

Defined in: [declarations/WebpackOptions.d.ts:1744](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1744)

TypeScript config for paths mapping. Can be `false` (disabled), `true` (use default `tsconfig.json`), a string path to `tsconfig.json`, or an object with `configFile` and `references` options.

#### Type Declaration

`string`

`boolean`

\{ `configFile?`: `string`; `references?`: `string`; \}

#### configFile?

> `optional` **configFile**: `string`

A path to the tsconfig file.

#### references?

> `optional` **references**: `string`

References to other tsconfig files. 'auto' inherits from TypeScript config, or an array of relative/absolute paths.

***

### unsafeCache?

> `optional` **unsafeCache**: `boolean` \| \{\[`k`: `string`\]: `any`; \}

Defined in: [declarations/WebpackOptions.d.ts:1760](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1760)

Enable caching of successfully resolved requests (cache entries are not revalidated).

***

### useSyncFileSystemCalls?

> `optional` **useSyncFileSystemCalls**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1768](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1768)

Use synchronous filesystem calls for the resolver.
