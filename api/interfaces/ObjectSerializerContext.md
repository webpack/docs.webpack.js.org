---
title: ObjectSerializerContext
---

[webpack](../globals) / ObjectSerializerContext

# Interface: ObjectSerializerContext

Defined in: [webpack/types.d.ts:12494](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12494)

## Properties

### rollback()

> **rollback**: (`snapshot`) => `void`

Defined in: [webpack/types.d.ts:12498](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12498)

#### Parameters

##### snapshot

`ObjectSerializerSnapshot`

#### Returns

`void`

***

### setCircularReference()

> **setCircularReference**: (`value`) => `void`

Defined in: [webpack/types.d.ts:12496](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12496)

#### Parameters

##### value

`ReferenceableItem`

#### Returns

`void`

***

### snapshot()

> **snapshot**: () => `ObjectSerializerSnapshot`

Defined in: [webpack/types.d.ts:12497](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12497)

#### Returns

`ObjectSerializerSnapshot`

***

### write()

> **write**: (`value?`) => `void`

Defined in: [webpack/types.d.ts:12495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12495)

#### Parameters

##### value?

`any`

#### Returns

`void`

***

### writeLazy()?

> `optional` **writeLazy**: (`item?`) => `void`

Defined in: [webpack/types.d.ts:12499](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12499)

#### Parameters

##### item?

`any`

#### Returns

`void`

***

### writeSeparate()?

> `optional` **writeSeparate**: (`item`, `obj?`) => `LazyFunction`<`any`, `any`, `any`, `LazyOptions`>

Defined in: [webpack/types.d.ts:12500](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L12500)

#### Parameters

##### item

`any`

##### obj?

`LazyOptions`

#### Returns

`LazyFunction`<`any`, `any`, `any`, `LazyOptions`>
