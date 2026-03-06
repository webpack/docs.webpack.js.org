---
title: createFilename
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [ModuleFilenameHelpers](../index.md) / createFilename

# Variable: createFilename()

> **createFilename**: (`module`, `options`, `__namedParameters`) => `string`

Defined in: [webpack/types.d.ts:19636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19636)

## Parameters

### module

`string` | [`Module`](../../../../../../classes/Module.md)

### options

#### moduleFilenameTemplate?

`string` \| (`context`) => `string`

#### namespace?

`string`

### \_\_namedParameters

#### chunkGraph

[`ChunkGraph`](../../../../../../classes/ChunkGraph.md)

#### hashFunction?

`string` \| *typeof* `Hash`

#### requestShortener

`RequestShortener`

## Returns

`string`
