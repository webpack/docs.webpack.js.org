---
title: ResolveOptions
---

[webpack](../globals.md) / ResolveOptions

# Interface: ResolveOptions

Defined in: [webpack/types.d.ts:15461](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15461)

Options object for resolving requests.

## Properties

### alias?

> `optional` **alias**: \{\[`index`: `string`\]: `string` \| `false` \| `string`[]; \} \| `object`[]

Defined in: [webpack/types.d.ts:15465](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15465)

Redirect module requests.

#### Type Declaration

\{\[`index`: `string`\]: `string` \| `false` \| `string`[]; \}

#### Index Signature

\[`index`: `string`\]: `string` \| `false` \| `string`[]

`object`[]

***

### aliasFields?

> `optional` **aliasFields**: (`string` \| `string`[])[]

Defined in: [webpack/types.d.ts:15485](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15485)

Fields in the description file (usually package.json) which are used to redirect requests inside the module.

***

### byDependency?

> `optional` **byDependency**: `object`

Defined in: [webpack/types.d.ts:15490](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15490)

Extra resolve options per dependency category. Typical categories are "commonjs", "amd", "esm".

#### Index Signature

\[`index`: `string`\]: `ResolveOptions`

***

### cache?

> `optional` **cache**: `boolean`

Defined in: [webpack/types.d.ts:15495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15495)

Enable caching of successfully resolved requests (cache entries are revalidated).

***

### cachePredicate()?

> `optional` **cachePredicate**: (`request`) => `boolean`

Defined in: [webpack/types.d.ts:15500](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15500)

Predicate function to decide which requests should be cached.

#### Parameters

##### request

`ResolveRequest`

#### Returns

`boolean`

***

### cacheWithContext?

> `optional` **cacheWithContext**: `boolean`

Defined in: [webpack/types.d.ts:15505](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15505)

Include the context information in the cache identifier when caching.

***

### conditionNames?

> `optional` **conditionNames**: `string`[]

Defined in: [webpack/types.d.ts:15510](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15510)

Condition names for exports field entry point.

***

### descriptionFiles?

> `optional` **descriptionFiles**: `string`[]

Defined in: [webpack/types.d.ts:15515](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15515)

Filenames used to find a description file (like a package.json).

***

### enforceExtension?

> `optional` **enforceExtension**: `boolean`

Defined in: [webpack/types.d.ts:15520](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15520)

Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension).

***

### exportsFields?

> `optional` **exportsFields**: `string`[]

Defined in: [webpack/types.d.ts:15525](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15525)

Field names from the description file (usually package.json) which are used to provide entry points of a package.

***

### extensionAlias?

> `optional` **extensionAlias**: `object`

Defined in: [webpack/types.d.ts:15530](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15530)

An object which maps extension to extension aliases.

#### Index Signature

\[`index`: `string`\]: `string` \| `string`[]

***

### extensions?

> `optional` **extensions**: `string`[]

Defined in: [webpack/types.d.ts:15535](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15535)

Extensions added to the request when trying to find the file.

***

### fallback?

> `optional` **fallback**: \{\[`index`: `string`\]: `string` \| `false` \| `string`[]; \} \| `object`[]

Defined in: [webpack/types.d.ts:15540](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15540)

Redirect module requests when normal resolving fails.

#### Type Declaration

\{\[`index`: `string`\]: `string` \| `false` \| `string`[]; \}

#### Index Signature

\[`index`: `string`\]: `string` \| `false` \| `string`[]

`object`[]

***

### fileSystem?

> `optional` **fileSystem**: [`InputFileSystem`](InputFileSystem.md)

Defined in: [webpack/types.d.ts:15560](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15560)

Filesystem for the resolver.

***

### fullySpecified?

> `optional` **fullySpecified**: `boolean`

Defined in: [webpack/types.d.ts:15565](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15565)

Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases).

***

### importsFields?

> `optional` **importsFields**: `string`[]

Defined in: [webpack/types.d.ts:15570](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15570)

Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal).

***

### mainFields?

> `optional` **mainFields**: (`string` \| `string`[])[]

Defined in: [webpack/types.d.ts:15575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15575)

Field names from the description file (package.json) which are used to find the default entry point.

***

### mainFiles?

> `optional` **mainFiles**: `string`[]

Defined in: [webpack/types.d.ts:15580](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15580)

Filenames used to find the default entry point if there is no description file or main field.

***

### modules?

> `optional` **modules**: `string`[]

Defined in: [webpack/types.d.ts:15585](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15585)

Folder names or directory paths where to find modules.

***

### plugins?

> `optional` **plugins**: (`false` \| `""` \| `0` \| `"..."` \| \{\[`index`: `string`\]: `any`; `apply`: (`arg0`) => `void`; \} \| (`this`, `arg1`) => `void`)[]

Defined in: [webpack/types.d.ts:15590](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15590)

Plugins for the resolver.

***

### preferAbsolute?

> `optional` **preferAbsolute**: `boolean`

Defined in: [webpack/types.d.ts:15610](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15610)

Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'.

***

### preferRelative?

> `optional` **preferRelative**: `boolean`

Defined in: [webpack/types.d.ts:15615](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15615)

Prefer to resolve module requests as relative request and fallback to resolving as module.

***

### resolver?

> `optional` **resolver**: [`Resolver`](../classes/Resolver.md)

Defined in: [webpack/types.d.ts:15620](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15620)

Custom resolver.

***

### restrictions?

> `optional` **restrictions**: (`string` \| `RegExp`)[]

Defined in: [webpack/types.d.ts:15625](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15625)

A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met.

***

### roots?

> `optional` **roots**: `string`[]

Defined in: [webpack/types.d.ts:15630](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15630)

A list of directories in which requests that are server-relative URLs (starting with '/') are resolved.

***

### symlinks?

> `optional` **symlinks**: `boolean`

Defined in: [webpack/types.d.ts:15635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15635)

Enable resolving symlinks to the original location.

***

### tsconfig?

> `optional` **tsconfig**: `string` \| `boolean` \| \{ `configFile?`: `string`; `references?`: `string`; \}

Defined in: [webpack/types.d.ts:15640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15640)

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

> `optional` **unsafeCache**: `boolean` \| \{\[`index`: `string`\]: `any`; \}

Defined in: [webpack/types.d.ts:15657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15657)

Enable caching of successfully resolved requests (cache entries are not revalidated).

***

### useSyncFileSystemCalls?

> `optional` **useSyncFileSystemCalls**: `boolean`

Defined in: [webpack/types.d.ts:15662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15662)

Use synchronous filesystem calls for the resolver.
