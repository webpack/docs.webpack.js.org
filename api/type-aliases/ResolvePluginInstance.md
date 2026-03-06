---
title: ResolvePluginInstance
---

[webpack](../globals.md) / ResolvePluginInstance

# Type Alias: ResolvePluginInstance

> **ResolvePluginInstance** = \{\[`index`: `string`\]: `any`; `apply`: (`arg0`) => `void`; \} \| (`this`, `arg1`) => `void`

Defined in: [webpack/types.d.ts:15959](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15959)

## Type Declaration

\{\[`index`: `string`\]: `any`; `apply`: (`arg0`) => `void`; \}

## Index Signature

\[`index`: `string`\]: `any`

### apply()

> **apply**: (`arg0`) => `void`

The run point of the plugin, required method.

#### Parameters

##### arg0

[`Resolver`](../classes/Resolver.md)

#### Returns

`void`

(`this`, `arg1`) => `void`

## Parameters

### this

[`Resolver`](../classes/Resolver.md)

### arg1

[`Resolver`](../classes/Resolver.md)

## Returns

`void`
