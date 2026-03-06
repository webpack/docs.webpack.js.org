---
title: Stats
---

[webpack](../globals) / Stats

# Class: Stats

Defined in: [webpack/types.d.ts:17896](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17896)

## Constructors

### Constructor

> **new Stats**(`compilation`): `Stats`

Defined in: [webpack/types.d.ts:17897](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17897)

#### Parameters

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`Stats`

## Properties

### compilation

> **compilation**: [`Compilation`](Compilation.md)

Defined in: [webpack/types.d.ts:17898](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17898)

## Accessors

### endTime

#### Get Signature

> **get** **endTime**(): `number`

Defined in: [webpack/types.d.ts:17901](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17901)

##### Returns

`number`

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:17899](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17899)

##### Returns

`string`

***

### startTime

#### Get Signature

> **get** **startTime**(): `number`

Defined in: [webpack/types.d.ts:17900](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17900)

##### Returns

`number`

## Methods

### hasErrors()

> **hasErrors**(): `boolean`

Defined in: [webpack/types.d.ts:17903](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17903)

#### Returns

`boolean`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [webpack/types.d.ts:17902](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17902)

#### Returns

`boolean`

***

### toJson()

> **toJson**(`options?`): [`StatsCompilation`](../type-aliases/StatsCompilation)

Defined in: [webpack/types.d.ts:17904](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17904)

#### Parameters

##### options?

`boolean` | `"none"` | `"normal"` | `"summary"` | `"verbose"` | `"errors-only"` | `"errors-warnings"` | `"minimal"` | `"detailed"` | [`StatsOptions`](../interfaces/StatsOptions)

#### Returns

[`StatsCompilation`](../type-aliases/StatsCompilation)

***

### toString()

> **toString**(`options?`): `string`

Defined in: [webpack/types.d.ts:17917](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L17917)

#### Parameters

##### options?

`boolean` | `"none"` | `"normal"` | `"summary"` | `"verbose"` | `"errors-only"` | `"errors-warnings"` | `"minimal"` | `"detailed"` | [`StatsOptions`](../interfaces/StatsOptions)

#### Returns

`string`
