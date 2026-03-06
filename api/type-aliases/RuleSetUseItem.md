---
title: RuleSetUseItem
---

[webpack](../globals) / RuleSetUseItem

# Type Alias: RuleSetUseItem

> **RuleSetUseItem** = `string` | `RuleSetUseFunction` | { `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; }

Defined in: [webpack/types.d.ts:16528](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16528)

## Type Declaration

`string`

`RuleSetUseFunction`

{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; }

### ident?

> `optional` **ident**: `string`

Unique loader options identifier.

### loader?

> `optional` **loader**: `string`

Loader name.

### options?

> `optional` **options**: `string` | {\[`index`: `string`]: `any`; }

Loader options.
