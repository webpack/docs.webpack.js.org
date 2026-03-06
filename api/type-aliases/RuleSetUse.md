---
title: RuleSetUse
---

[webpack](../globals.md) / RuleSetUse

# Type Alias: RuleSetUse

> **RuleSetUse** = `string` \| (`undefined` \| `null` \| `string` \| `false` \| `0` \| `RuleSetUseFunction` \| \{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` \| \{\[`index`: `string`\]: `any`; \}; \})[] \| `RuleSetUseFunction` \| \{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` \| \{\[`index`: `string`\]: `any`; \}; \}

Defined in: [webpack/types.d.ts:16450](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16450)

## Type Declaration

`string`

(`undefined` \| `null` \| `string` \| `false` \| `0` \| `RuleSetUseFunction` \| \{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` \| \{\[`index`: `string`\]: `any`; \}; \})[]

`RuleSetUseFunction`

\{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` \| \{\[`index`: `string`\]: `any`; \}; \}

### ident?

> `optional` **ident**: `string`

Unique loader options identifier.

### loader?

> `optional` **loader**: `string`

Loader name.

### options?

> `optional` **options**: `string` \| \{\[`index`: `string`\]: `any`; \}

Loader options.
