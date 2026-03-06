---
title: MultiStats
---

[webpack](../globals.md) / MultiStats

# Abstract Class: MultiStats

Defined in: [webpack/types.d.ts:11699](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11699)

## Constructors

### Constructor

> **new MultiStats**(): `MultiStats`

#### Returns

`MultiStats`

## Properties

### stats

> **stats**: [`Stats`](Stats.md)[]

Defined in: [webpack/types.d.ts:11700](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11700)

## Accessors

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:11701](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11701)

##### Returns

`string`

## Methods

### hasErrors()

> **hasErrors**(): `boolean`

Defined in: [webpack/types.d.ts:11702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11702)

#### Returns

`boolean`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [webpack/types.d.ts:11703](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11703)

#### Returns

`boolean`

***

### toJson()

> **toJson**(`options?`): [`StatsCompilation`](../type-aliases/StatsCompilation.md)

Defined in: [webpack/types.d.ts:11704](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11704)

#### Parameters

##### options?

`boolean` | `"none"` | `"normal"` | `"summary"` | `"verbose"` | `"errors-only"` | `"errors-warnings"` | `"minimal"` | `"detailed"` | [`StatsOptions`](../interfaces/StatsOptions.md)

#### Returns

[`StatsCompilation`](../type-aliases/StatsCompilation.md)

***

### toString()

> **toString**(`options?`): `string`

Defined in: [webpack/types.d.ts:11717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11717)

#### Parameters

##### options?

`boolean` | `"none"` | `"normal"` | `"summary"` | `"verbose"` | `"errors-only"` | `"errors-warnings"` | `"minimal"` | `"detailed"` | [`StatsOptions`](../interfaces/StatsOptions.md)

#### Returns

`string`
