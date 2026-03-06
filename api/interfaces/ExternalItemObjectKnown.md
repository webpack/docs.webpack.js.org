---
title: ExternalItemObjectKnown
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ExternalItemObjectKnown

# Interface: ExternalItemObjectKnown

Defined in: [declarations/WebpackOptions.d.ts:4027](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L4027)

If an dependency matches exactly a property of the object, the property value is used as dependency.

## Properties

### byLayer?

> `optional` **byLayer**: \{\[`k`: `string`\]: [`ExternalItem`](../type-aliases/ExternalItem.md); \} \| `ExternalItemByLayerFn`

Defined in: [declarations/WebpackOptions.d.ts:4031](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L4031)

Specify externals depending on the layer.
