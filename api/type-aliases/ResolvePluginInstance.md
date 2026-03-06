---
title: ResolvePluginInstance
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ResolvePluginInstance

# Type Alias: ResolvePluginInstance

> **ResolvePluginInstance** = \{\[`k`: `string`\]: `any`; `apply`: (`arg0`) => `void`; \} \| (`this`, `arg1`) => `void`

Defined in: [declarations/WebpackOptions.d.ts:364](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L364)

Plugin instance.

## Type Declaration

\{\[`k`: `string`\]: `any`; `apply`: (`arg0`) => `void`; \}

## Index Signature

\[`k`: `string`\]: `any`

### apply()

> **apply**: (`arg0`) => `void`

The run point of the plugin, required method.

#### Parameters

##### arg0

`Resolver`

#### Returns

`void`

(`this`, `arg1`) => `void`

## Parameters

### this

`Resolver`

### arg1

`Resolver`

## Returns

`void`
