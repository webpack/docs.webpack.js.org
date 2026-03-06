---
title: CssModulesPlugin
---

[webpack](../../../../../../globals) / [export=](../../../index) / [css](../index) / CssModulesPlugin

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

[`Compiler`](../../../../../../classes/Compiler)

#### Returns

`void`

***

### getModulesInOrder()

> **getModulesInOrder**(`chunk`, `modules`, `compilation`): [`Module`](../../../../../../classes/Module)\[]

Defined in: [webpack/types.d.ts:3959](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3959)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### modules

`Iterable`<[`Module`](../../../../../../classes/Module), `any`, `any`>

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

#### Returns

[`Module`](../../../../../../classes/Module)\[]

***

### getOrderedChunkCssModules()

> **getOrderedChunkCssModules**(`chunk`, `chunkGraph`, `compilation`): `CssModule`\[]

Defined in: [webpack/types.d.ts:3964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3964)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

#### Returns

`CssModule`\[]

***

### renderChunk()

> **renderChunk**(`__namedParameters`, `hooks`): [`Source`](../../sources/classes/Source)

Defined in: [webpack/types.d.ts:3969](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3969)

#### Parameters

##### \_\_namedParameters

`RenderContextCssModulesPlugin`

##### hooks

`CompilationHooksCssModulesPlugin`

#### Returns

[`Source`](../../sources/classes/Source)

***

### chunkHasCss()

> `static` **chunkHasCss**(`chunk`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:3985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3985)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph)

#### Returns

`boolean`

***

### getChunkFilenameTemplate()

> `static` **getChunkFilenameTemplate**(`chunk`, `outputOptions`): [`TemplatePath`](../../../../../../type-aliases/TemplatePath)

Defined in: [webpack/types.d.ts:3981](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3981)

#### Parameters

##### chunk

[`Chunk`](../../../../../../classes/Chunk)

##### outputOptions

`OutputNormalizedWithDefaults`

#### Returns

[`TemplatePath`](../../../../../../type-aliases/TemplatePath)

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CompilationHooksCssModulesPlugin`

Defined in: [webpack/types.d.ts:3973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3973)

#### Parameters

##### compilation

[`Compilation`](../../../../../../classes/Compilation)

#### Returns

`CompilationHooksCssModulesPlugin`

***

### renderModule()

> `static` **renderModule**(`module`, `renderContext`, `hooks`): [`Source`](../../sources/classes/Source)

Defined in: [webpack/types.d.ts:3976](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3976)

#### Parameters

##### module

`CssModule`

##### renderContext

`ChunkRenderContextCssModulesPlugin`

##### hooks

`CompilationHooksCssModulesPlugin`

#### Returns

[`Source`](../../sources/classes/Source)
