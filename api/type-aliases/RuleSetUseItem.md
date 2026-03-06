---
title: RuleSetUseItem
---

[**webpack**](../README.md)

***

[webpack](../README.md) / RuleSetUseItem

# Type Alias: RuleSetUseItem

> **RuleSetUseItem** = \{ `ident?`: `string`; `loader?`: `RuleSetLoader`; `options?`: `RuleSetLoaderOptions`; \} \| [`RuleSetUseFunction`](RuleSetUseFunction.md) \| `RuleSetLoader`

Defined in: [declarations/WebpackOptions.d.ts:386](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L386)

A description of an applied loader.

## Type Declaration

\{ `ident?`: `string`; `loader?`: `RuleSetLoader`; `options?`: `RuleSetLoaderOptions`; \}

### ident?

> `optional` **ident**: `string`

Unique loader options identifier.

### loader?

> `optional` **loader**: `RuleSetLoader`

Loader name.

### options?

> `optional` **options**: `RuleSetLoaderOptions`

Loader options.

[`RuleSetUseFunction`](RuleSetUseFunction.md)

`RuleSetLoader`
