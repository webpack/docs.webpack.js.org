---
title: AbstractLibraryPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [library](../index.md) / AbstractLibraryPlugin

# Class: AbstractLibraryPlugin\<T\>

Defined in: [webpack/types.d.ts:133](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L133)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new AbstractLibraryPlugin**\<`T`\>(`__namedParameters`): `AbstractLibraryPlugin`\<`T`\>

Defined in: [webpack/types.d.ts:134](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L134)

#### Parameters

##### \_\_namedParameters

`AbstractLibraryPluginOptions`

#### Returns

`AbstractLibraryPlugin`\<`T`\>

## Properties

### COMMON\_LIBRARY\_NAME\_MESSAGE

> `static` **COMMON\_LIBRARY\_NAME\_MESSAGE**: `string`

Defined in: [webpack/types.d.ts:183](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L183)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L139)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`

***

### chunkHash()

> **chunkHash**(`chunk`, `hash`, `chunkHashContext`, `libraryContext`): `void`

Defined in: [webpack/types.d.ts:177](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L177)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### hash

`Hash`

##### chunkHashContext

`ChunkHashContext`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

`void`

***

### embedInRuntimeBailout()

> **embedInRuntimeBailout**(`module`, `renderContext`, `libraryContext`): `string`

Defined in: [webpack/types.d.ts:146](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L146)

#### Parameters

##### module

[`Module`](../../../../../../classes/Module.md)

##### renderContext

`RenderContextJavascriptModulesPlugin`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

`string`

***

### finishEntryModule()

> **finishEntryModule**(`module`, `entryName`, `libraryContext`): `void`

Defined in: [webpack/types.d.ts:141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L141)

#### Parameters

##### module

[`Module`](../../../../../../classes/Module.md)

##### entryName

`string`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

`void`

***

### parseOptions()

> **parseOptions**(`library`): `T`

Defined in: [webpack/types.d.ts:140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L140)

#### Parameters

##### library

[`LibraryOptions`](../../../../../../interfaces/LibraryOptions.md)

#### Returns

`T`

***

### render()

> **render**(`source`, `renderContext`, `libraryContext`): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:160](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L160)

#### Parameters

##### source

[`Source`](../../sources/classes/Source.md)

##### renderContext

`RenderContextJavascriptModulesPlugin`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

[`Source`](../../sources/classes/Source.md)

***

### renderModuleContent()

> **renderModuleContent**(`source`, `module`, `renderContext`, `libraryContext`): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:171](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L171)

#### Parameters

##### source

[`Source`](../../sources/classes/Source.md)

##### module

[`Module`](../../../../../../classes/Module.md)

##### renderContext

`ModuleRenderContext`

##### libraryContext

`Omit`\<`LibraryContext`\<`T`\>, `"options"`\>

#### Returns

[`Source`](../../sources/classes/Source.md)

***

### renderStartup()

> **renderStartup**(`source`, `module`, `renderContext`, `libraryContext`): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:165](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L165)

#### Parameters

##### source

[`Source`](../../sources/classes/Source.md)

##### module

[`Module`](../../../../../../classes/Module.md)

##### renderContext

`StartupRenderContext`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

[`Source`](../../sources/classes/Source.md)

***

### runtimeRequirements()

> **runtimeRequirements**(`chunk`, `set`, `libraryContext`): `void`

Defined in: [webpack/types.d.ts:155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L155)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### set

`Set`\<`string`\>

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

`void`

***

### strictRuntimeBailout()

> **strictRuntimeBailout**(`renderContext`, `libraryContext`): `string`

Defined in: [webpack/types.d.ts:151](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L151)

#### Parameters

##### renderContext

`RenderContextJavascriptModulesPlugin`

##### libraryContext

`LibraryContext`\<`T`\>

#### Returns

`string`
