---
title: ModuleFederationPlugin
---

[webpack](../../../../globals) / [container](../index) / ModuleFederationPlugin

# Class: ModuleFederationPlugin

Defined in: [webpack/types.d.ts:10912](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10912)

## Constructors

### Constructor

> **new ModuleFederationPlugin**(`options`): `ModuleFederationPlugin`

Defined in: [webpack/types.d.ts:10913](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10913)

#### Parameters

##### options

`ModuleFederationPluginOptions`

#### Returns

`ModuleFederationPlugin`

## Properties

### options

> **options**: `ModuleFederationPluginOptions`

Defined in: [webpack/types.d.ts:10914](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10914)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:10919](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10919)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../classes/Compiler)

#### Returns

`void`

***

### getCompilationHooks()

> `static` **getCompilationHooks**(`compilation`): `CompilationHooksModuleFederationPlugin`

Defined in: [webpack/types.d.ts:10924](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10924)

Get the compilation hooks associated with this plugin.

#### Parameters

##### compilation

[`Compilation`](../../../../classes/Compilation)

#### Returns

`CompilationHooksModuleFederationPlugin`
