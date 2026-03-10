---
title: AsyncWebAssemblyModulesPlugin
---

[webpack](../../../../globals) / [wasm](../index) / AsyncWebAssemblyModulesPlugin

# Class: AsyncWebAssemblyModulesPlugin

Defined in: [webpack/types.d.ts:538](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L538)

## Constructors

### Constructor

> **new AsyncWebAssemblyModulesPlugin**(`options`): `AsyncWebAssemblyModulesPlugin`

Defined in: [webpack/types.d.ts:539](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L539)

#### Parameters

##### options

`AsyncWebAssemblyModulesPluginOptions`

#### Returns

`AsyncWebAssemblyModulesPlugin`

## Properties

### options

> **options**: `AsyncWebAssemblyModulesPluginOptions`

Defined in: [webpack/types.d.ts:540](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L540)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:545](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L545)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../classes/Compiler)

#### Returns

`void`

***

### renderModule()

> **renderModule**(`module`, `renderContext`, `hooks`): [`Source`](../../sources/classes/Source)

Defined in: [webpack/types.d.ts:546](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L546)

#### Parameters

##### module

[`Module`](../../../../classes/Module)

##### renderContext

`WebAssemblyRenderContext`

##### hooks

`CompilationHooksAsyncWebAssemblyModulesPlugin`

#### Returns

[`Source`](../../sources/classes/Source)

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CompilationHooksAsyncWebAssemblyModulesPlugin`

Defined in: [webpack/types.d.ts:551](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L551)

#### Parameters

##### compilation

[`Compilation`](../../../../classes/Compilation)

#### Returns

`CompilationHooksAsyncWebAssemblyModulesPlugin`
