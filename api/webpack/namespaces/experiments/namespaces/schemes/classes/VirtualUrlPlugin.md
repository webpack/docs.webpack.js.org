---
title: VirtualUrlPlugin
---

[webpack](../../../../../../globals) / [experiments](../../../index) / [schemes](../index) / VirtualUrlPlugin

# Class: VirtualUrlPlugin

Defined in: [webpack/types.d.ts:18787](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18787)

## Constructors

### Constructor

> **new VirtualUrlPlugin**(`modules`, `scheme?`): `VirtualUrlPlugin`

Defined in: [webpack/types.d.ts:18788](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18788)

#### Parameters

##### modules

`VirtualModules`

##### scheme?

`string`

#### Returns

`VirtualUrlPlugin`

## Properties

### modules

> **modules**: `NormalizedModules`

Defined in: [webpack/types.d.ts:18790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18790)

***

### scheme

> **scheme**: `string`

Defined in: [webpack/types.d.ts:18789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18789)

***

### DEFAULT\_SCHEME

> `static` **DEFAULT\_SCHEME**: `string`

Defined in: [webpack/types.d.ts:18802](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18802)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:18795](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18795)

Apply the plugin

#### Parameters

##### compiler

[`Compiler`](../../../../../../classes/Compiler)

#### Returns

`void`

***

### findVirtualModuleConfigById()

> **findVirtualModuleConfigById**(`id`): `VirtualModuleConfig`

Defined in: [webpack/types.d.ts:18796](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18796)

#### Parameters

##### id

`string`

#### Returns

`VirtualModuleConfig`

***

### getCacheVersion()

> **getCacheVersion**(`version`): `string`

Defined in: [webpack/types.d.ts:18801](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18801)

Get the cache version for a given version value

#### Parameters

##### version

`string` | `true` | () => `string`

#### Returns

`string`
