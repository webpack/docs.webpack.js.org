---
title: ExternalItemObjectKnown
---

[webpack](../globals) / ExternalItemObjectKnown

# Interface: ExternalItemObjectKnown

Defined in: [webpack/types.d.ts:5667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5667)

If an dependency matches exactly a property of the object, the property value is used as dependency.

## Properties

### byLayer?

> `optional` **byLayer**: {\[`index`: `string`]: [`ExternalItem`](../type-aliases/ExternalItem); } | (`layer`) => [`ExternalItem`](../type-aliases/ExternalItem)

Defined in: [webpack/types.d.ts:5671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5671)

Specify externals depending on the layer.
