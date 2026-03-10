---
title: JavascriptModulesPlugin
---

[webpack](../globals) / JavascriptModulesPlugin

# Class: JavascriptModulesPlugin

Defined in: [webpack/types.d.ts:7124](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7124)

## Constructors

### Constructor

> **new JavascriptModulesPlugin**(`options?`): `JavascriptModulesPlugin`

Defined in: [webpack/types.d.ts:7125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7125)

#### Parameters

##### options?

`object`

#### Returns

`JavascriptModulesPlugin`

## Properties

### options

> **options**: `object`

Defined in: [webpack/types.d.ts:7126](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7126)

***

### chunkHasJs()

> `static` **chunkHasJs**: (`chunk`, `chunkGraph`) => `boolean`

Defined in: [webpack/types.d.ts:7166](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7166)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`boolean`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:7131](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7131)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### renderBootstrap()

> **renderBootstrap**(`renderContext`, `hooks`): `Bootstrap`

Defined in: [webpack/types.d.ts:7151](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7151)

#### Parameters

##### renderContext

`RenderBootstrapContext`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

#### Returns

`Bootstrap`

***

### renderChunk()

> **renderChunk**(`renderContext`, `hooks`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:7137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7137)

#### Parameters

##### renderContext

`RenderContextJavascriptModulesPlugin`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### renderMain()

> **renderMain**(`renderContext`, `hooks`, `compilation`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:7141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7141)

#### Parameters

##### renderContext

`MainRenderContext`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

##### compilation

[`Compilation`](Compilation.md)

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### renderModule()

> **renderModule**(`module`, `renderContext`, `hooks`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:7132](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7132)

#### Parameters

##### module

[`Module`](Module.md)

##### renderContext

`ModuleRenderContext`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### renderRequire()

> **renderRequire**(`renderContext`, `hooks`): `string`

Defined in: [webpack/types.d.ts:7155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7155)

#### Parameters

##### renderContext

`RenderBootstrapContext`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

#### Returns

`string`

***

### updateHashWithBootstrap()

> **updateHashWithBootstrap**(`hash`, `renderContext`, `hooks`): `void`

Defined in: [webpack/types.d.ts:7146](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7146)

#### Parameters

##### hash

`Hash`

##### renderContext

`RenderBootstrapContext`

##### hooks

`CompilationHooksJavascriptModulesPlugin`

#### Returns

`void`

***

### getChunkFilenameTemplate()

> `static` **getChunkFilenameTemplate**(`chunk`, `outputOptions`): [`TemplatePath`](../type-aliases/TemplatePath)

Defined in: [webpack/types.d.ts:7162](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7162)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### outputOptions

`OutputNormalizedWithDefaults`

#### Returns

[`TemplatePath`](../type-aliases/TemplatePath)

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CompilationHooksJavascriptModulesPlugin`

Defined in: [webpack/types.d.ts:7159](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7159)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`CompilationHooksJavascriptModulesPlugin`
