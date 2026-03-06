---
title: ExternalItem
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ExternalItem

# Type Alias: ExternalItem

> **ExternalItem** = `RegExp` \| `string` \| [`ExternalItemObjectKnown`](../interfaces/ExternalItemObjectKnown.md) & [`ExternalItemObjectUnknown`](../interfaces/ExternalItemObjectUnknown.md) \| [`ExternalItemFunction`](ExternalItemFunction.md)

Defined in: [declarations/WebpackOptions.d.ts:199](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L199)

Specify dependency that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`.
