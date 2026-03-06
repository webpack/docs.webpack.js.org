---
title: ObjectSerializerContext
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ObjectSerializerContext

# Interface: ObjectSerializerContext

Defined in: [lib/serialization/ObjectMiddleware.js:63](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L63)

## Properties

### rollback()

> **rollback**: (`snapshot`) => `void`

Defined in: [lib/serialization/ObjectMiddleware.js:67](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L67)

#### Parameters

##### snapshot

`ObjectSerializerSnapshot`

#### Returns

`void`

***

### setCircularReference()

> **setCircularReference**: (`value`) => `void`

Defined in: [lib/serialization/ObjectMiddleware.js:65](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L65)

#### Parameters

##### value

`any`

#### Returns

`void`

***

### snapshot()

> **snapshot**: () => `ObjectSerializerSnapshot`

Defined in: [lib/serialization/ObjectMiddleware.js:66](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L66)

#### Returns

`ObjectSerializerSnapshot`

***

### write()

> **write**: (`value`) => `void`

Defined in: [lib/serialization/ObjectMiddleware.js:64](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L64)

#### Parameters

##### value

`EXPECTED_ANY`

#### Returns

`void`

***

### writeLazy()?

> `optional` **writeLazy**: (`item`) => `void`

Defined in: [lib/serialization/ObjectMiddleware.js:68](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L68)

#### Parameters

##### item

`any`

#### Returns

`void`

***

### writeSeparate()?

> `optional` **writeSeparate**: (`item`, `obj`) => `LazyFunction`\<`EXPECTED_ANY`, `EXPECTED_ANY`, `EXPECTED_ANY`, `LazyOptions`\>

Defined in: [lib/serialization/ObjectMiddleware.js:69](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/serialization/ObjectMiddleware.js#L69)

#### Parameters

##### item

`any`

##### obj

`LazyOptions`

#### Returns

`LazyFunction`\<`EXPECTED_ANY`, `EXPECTED_ANY`, `EXPECTED_ANY`, `LazyOptions`\>
