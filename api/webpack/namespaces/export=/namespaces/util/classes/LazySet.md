---
title: LazySet
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [util](../index.md) / LazySet

# Class: LazySet\<T\>

Defined in: [webpack/types.d.ts:9695](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9695)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new LazySet**\<`T`\>(`iterable?`): `LazySet`\<`T`\>

Defined in: [webpack/types.d.ts:9696](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9696)

#### Parameters

##### iterable?

`Iterable`\<`T`\>

#### Returns

`LazySet`\<`T`\>

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [webpack/types.d.ts:9697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9697)

##### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `SetIterator`\<`T`\>

Defined in: [webpack/types.d.ts:9711](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9711)

#### Returns

`SetIterator`\<`T`\>

***

### add()

> **add**(`item`): `LazySet`\<`T`\>

Defined in: [webpack/types.d.ts:9698](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9698)

#### Parameters

##### item

`T`

#### Returns

`LazySet`\<`T`\>

***

### addAll()

> **addAll**(`iterable`): `LazySet`\<`T`\>

Defined in: [webpack/types.d.ts:9699](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9699)

#### Parameters

##### iterable

`LazySet`\<`T`\> | `Iterable`\<`T`, `any`, `any`\>

#### Returns

`LazySet`\<`T`\>

***

### clear()

> **clear**(): `void`

Defined in: [webpack/types.d.ts:9700](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9700)

#### Returns

`void`

***

### delete()

> **delete**(`value`): `boolean`

Defined in: [webpack/types.d.ts:9701](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9701)

#### Parameters

##### value

`T`

#### Returns

`boolean`

***

### entries()

> **entries**(): `SetIterator`\<\[`T`, `T`\]\>

Defined in: [webpack/types.d.ts:9702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9702)

#### Returns

`SetIterator`\<\[`T`, `T`\]\>

***

### forEach()

> **forEach**\<`K`\>(`callbackFn`, `thisArg`): `void`

Defined in: [webpack/types.d.ts:9703](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9703)

#### Type Parameters

##### K

`K`

#### Parameters

##### callbackFn

(`value`, `value2`, `set`) => `void`

##### thisArg

`K`

#### Returns

`void`

***

### has()

> **has**(`item`): `boolean`

Defined in: [webpack/types.d.ts:9707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9707)

#### Parameters

##### item

`T`

#### Returns

`boolean`

***

### keys()

> **keys**(): `SetIterator`\<`T`\>

Defined in: [webpack/types.d.ts:9708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9708)

#### Returns

`SetIterator`\<`T`\>

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:9710](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9710)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../../../interfaces/ObjectSerializerContext.md)

#### Returns

`void`

***

### values()

> **values**(): `SetIterator`\<`T`\>

Defined in: [webpack/types.d.ts:9709](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9709)

#### Returns

`SetIterator`\<`T`\>

***

### deserialize()

> `static` **deserialize**\<`T`\>(`__namedParameters`): `LazySet`\<`T`\>

Defined in: [webpack/types.d.ts:9712](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L9712)

#### Type Parameters

##### T

`T`

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../../../interfaces/ObjectDeserializerContext.md)

#### Returns

`LazySet`\<`T`\>
