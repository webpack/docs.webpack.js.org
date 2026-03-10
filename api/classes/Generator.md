---
title: Generator
---

[webpack](../globals) / Generator

# Class: Generator

Defined in: [webpack/types.d.ts:6311](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6311)

## Constructors

### Constructor

> **new Generator**(): `Generator`

Defined in: [webpack/types.d.ts:6312](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6312)

#### Returns

`Generator`

## Methods

### generate()

> **generate**(`module`, `__namedParameters`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:6315](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6315)

#### Parameters

##### module

[`NormalModule`](NormalModule.md)

##### \_\_namedParameters

`GenerateContext`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### getConcatenationBailoutReason()

> **getConcatenationBailoutReason**(`module`, `context`): `string`

Defined in: [webpack/types.d.ts:6316](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6316)

#### Parameters

##### module

[`NormalModule`](NormalModule.md)

##### context

`ConcatenationBailoutReasonContext`

#### Returns

`string`

***

### getSize()

> **getSize**(`module`, `type?`): `number`

Defined in: [webpack/types.d.ts:6314](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6314)

#### Parameters

##### module

[`NormalModule`](NormalModule.md)

##### type?

`string`

#### Returns

`number`

***

### getTypes()

> **getTypes**(`module`): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:6313](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6313)

#### Parameters

##### module

[`NormalModule`](NormalModule.md)

#### Returns

`ReadonlySet`<`string`>

***

### updateHash()

> **updateHash**(`hash`, `__namedParameters`): `void`

Defined in: [webpack/types.d.ts:6320](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6320)

#### Parameters

##### hash

`Hash`

##### \_\_namedParameters

`UpdateHashContextGenerator`

#### Returns

`void`

***

### byType()

> `static` **byType**(`map`): `ByTypeGenerator`

Defined in: [webpack/types.d.ts:6321](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6321)

#### Parameters

##### map

#### Returns

`ByTypeGenerator`
