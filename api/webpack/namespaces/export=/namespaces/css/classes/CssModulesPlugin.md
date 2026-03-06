---
title: CssModulesPlugin
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [css](../index.md) / CssModulesPlugin

# Class: CssModulesPlugin

Defined in: [webpack/types.d.ts:3952](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3952)

## Constructors

### Constructor

> **new CssModulesPlugin**(): `CssModulesPlugin`

Defined in: [webpack/types.d.ts:3953](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3953)

#### Returns

`CssModulesPlugin`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:3958](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3958)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler.md)

#### Returns

`void`

***

### getModulesInOrder()

> **getModulesInOrder**(`chunk`, `modules`, `compilation`): [`Module`](../../../../../../classes/Module.md)[]

Defined in: [webpack/types.d.ts:3959](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3959)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### modules

`Iterable`\<[`Module`](../../../../../../classes/Module.md), `any`, `any`\>

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

#### Returns

[`Module`](../../../../../../classes/Module.md)[]

***

### getOrderedChunkCssModules()

> **getOrderedChunkCssModules**(`chunk`, `chunkGraph`, `compilation`): `CssModule`[]

Defined in: [webpack/types.d.ts:3964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3964)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

#### Returns

`CssModule`[]

***

### renderChunk()

> **renderChunk**(`__namedParameters`, `hooks`): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:3969](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3969)

#### Parameters

##### \_\_namedParameters

`RenderContextCssModulesPlugin`

##### hooks

`CompilationHooksCssModulesPlugin`

#### Returns

[`Source`](../../sources/classes/Source.md)

***

### chunkHasCss()

> `static` **chunkHasCss**(`chunk`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:3985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3985)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

#### Returns

`boolean`

***

### getChunkFilenameTemplate()

> `static` **getChunkFilenameTemplate**(`chunk`, `outputOptions`): [`TemplatePath`](../../../../../../type-aliases/TemplatePath.md)

Defined in: [webpack/types.d.ts:3981](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3981)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk.md)

##### outputOptions

`OutputNormalizedWithDefaults`

#### Returns

[`TemplatePath`](../../../../../../type-aliases/TemplatePath.md)

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CompilationHooksCssModulesPlugin`

Defined in: [webpack/types.d.ts:3973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3973)

#### Parameters

##### compilation

[`Compilation`](../../../../../../classes/Compilation.md)

#### Returns

`CompilationHooksCssModulesPlugin`

***

### renderModule()

> `static` **renderModule**(`module`, `renderContext`, `hooks`): [`Source`](../../sources/classes/Source.md)

Defined in: [webpack/types.d.ts:3976](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3976)

#### Parameters

##### module

`CssModule`

##### renderContext

`ChunkRenderContextCssModulesPlugin`

##### hooks

`CompilationHooksCssModulesPlugin`

#### Returns

[`Source`](../../sources/classes/Source.md)
