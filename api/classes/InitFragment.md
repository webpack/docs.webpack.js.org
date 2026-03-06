---
title: InitFragment
---

[webpack](../globals.md) / InitFragment

# Class: InitFragment\<GenerateContext\>

Defined in: [webpack/types.d.ts:6978](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6978)

## Type Parameters

### GenerateContext

`GenerateContext`

## Constructors

### Constructor

> **new InitFragment**\<`GenerateContext`\>(`content`, `stage`, `position`, `key?`, `endContent?`): `InitFragment`\<`GenerateContext`\>

Defined in: [webpack/types.d.ts:6979](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6979)

#### Parameters

##### content

`string` | [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

##### stage

`number`

##### position

`number`

##### key?

`string`

##### endContent?

`string` | [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

#### Returns

`InitFragment`\<`GenerateContext`\>

## Properties

### content?

> `optional` **content**: `string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:6986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6986)

***

### endContent?

> `optional` **endContent**: `string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:6990](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6990)

***

### key?

> `optional` **key**: `string`

Defined in: [webpack/types.d.ts:6989](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6989)

***

### position

> **position**: `number`

Defined in: [webpack/types.d.ts:6988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6988)

***

### stage

> **stage**: `number`

Defined in: [webpack/types.d.ts:6987](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6987)

***

### STAGE\_ASYNC\_BOUNDARY

> `static` **STAGE\_ASYNC\_BOUNDARY**: `number`

Defined in: [webpack/types.d.ts:7001](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7001)

***

### STAGE\_ASYNC\_DEPENDENCIES

> `static` **STAGE\_ASYNC\_DEPENDENCIES**: `number`

Defined in: [webpack/types.d.ts:7005](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7005)

***

### STAGE\_ASYNC\_HARMONY\_IMPORTS

> `static` **STAGE\_ASYNC\_HARMONY\_IMPORTS**: `number`

Defined in: [webpack/types.d.ts:7006](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7006)

***

### STAGE\_CONSTANTS

> `static` **STAGE\_CONSTANTS**: `number`

Defined in: [webpack/types.d.ts:7000](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7000)

***

### STAGE\_HARMONY\_EXPORTS

> `static` **STAGE\_HARMONY\_EXPORTS**: `number`

Defined in: [webpack/types.d.ts:7002](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7002)

***

### STAGE\_HARMONY\_IMPORTS

> `static` **STAGE\_HARMONY\_IMPORTS**: `number`

Defined in: [webpack/types.d.ts:7003](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7003)

***

### STAGE\_PROVIDES

> `static` **STAGE\_PROVIDES**: `number`

Defined in: [webpack/types.d.ts:7004](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7004)

## Methods

### deserialize()

> **deserialize**(`context`): `void`

Defined in: [webpack/types.d.ts:6994](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6994)

#### Parameters

##### context

[`ObjectDeserializerContext`](../interfaces/ObjectDeserializerContext.md)

#### Returns

`void`

***

### getContent()

> **getContent**(`context`): `string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:6991](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6991)

#### Parameters

##### context

`GenerateContext`

#### Returns

`string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

***

### getEndContent()

> **getEndContent**(`context`): `string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:6992](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6992)

#### Parameters

##### context

`GenerateContext`

#### Returns

`string` \| [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

***

### serialize()

> **serialize**(`context`): `void`

Defined in: [webpack/types.d.ts:6993](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6993)

#### Parameters

##### context

[`ObjectSerializerContext`](../interfaces/ObjectSerializerContext.md)

#### Returns

`void`

***

### addToSource()

> `static` **addToSource**\<`Context`\>(`source`, `initFragments`, `context`): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

Defined in: [webpack/types.d.ts:6995](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6995)

#### Type Parameters

##### Context

`Context`

#### Parameters

##### source

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)

##### initFragments

`MaybeMergeableInitFragment`\<`Context`\>[]

##### context

`Context`

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source.md)
