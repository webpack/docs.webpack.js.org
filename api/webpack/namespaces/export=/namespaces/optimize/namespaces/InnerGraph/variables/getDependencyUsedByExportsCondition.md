---
title: getDependencyUsedByExportsCondition
---

[webpack](../../../../../../../../globals) / [export=](../../../../../index) / [optimize](../../../index) / [InnerGraph](../index) / getDependencyUsedByExportsCondition

# Variable: getDependencyUsedByExportsCondition()

> **getDependencyUsedByExportsCondition**: (`dependency`, `usedByExports`, `moduleGraph`) => `null` | `false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

Defined in: [webpack/types.d.ts:19812](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L19812)

## Parameters

### dependency

[`Dependency`](../../../../../../../../classes/Dependency)

### usedByExports

`undefined` | `boolean` | `Set`<`string`>

### moduleGraph

[`ModuleGraph`](../../../../../../../../classes/ModuleGraph)

## Returns

`null` | `false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`
