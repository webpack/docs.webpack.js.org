---
title: CodeGenerationResults
---

[webpack](../globals) / CodeGenerationResults

# Abstract Class: CodeGenerationResults

Defined in: [webpack/types.d.ts:2098](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2098)

## Constructors

### Constructor

> **new CodeGenerationResults**(): `CodeGenerationResults`

#### Returns

`CodeGenerationResults`

## Properties

### map

> **map**: `Map`<[`Module`](Module.md), [`RuntimeSpecMap`](../webpack/namespaces/export=/namespaces/util/namespaces/runtime/classes/RuntimeSpecMap)<`CodeGenerationResult`, `CodeGenerationResult`>>

Defined in: [webpack/types.d.ts:2099](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2099)

## Methods

### add()

> **add**(`module`, `runtime`, `result`): `void`

Defined in: [webpack/types.d.ts:2109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2109)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### result

`CodeGenerationResult`

#### Returns

`void`

***

### get()

> **get**(`module`, `runtime`): `CodeGenerationResult`

Defined in: [webpack/types.d.ts:2100](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2100)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`CodeGenerationResult`

***

### getData()

> **getData**(`module`, `runtime`, `key`): `any`

Defined in: [webpack/types.d.ts:2107](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2107)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### key

`string`

#### Returns

`any`

***

### getHash()

> **getHash**(`module`, `runtime`): `string`

Defined in: [webpack/types.d.ts:2108](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2108)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`string`

***

### getRuntimeRequirements()

> **getRuntimeRequirements**(`module`, `runtime`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:2103](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2103)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`ReadonlySet`<`string`>

***

### getSource()

> **getSource**(`module`, `runtime`, `sourceType`): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:2102](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2102)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

##### sourceType

`string`

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

***

### has()

> **has**(`module`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:2101](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L2101)

#### Parameters

##### module

[`Module`](Module.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`
