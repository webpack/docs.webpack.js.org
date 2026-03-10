---
title: RuntimeSpecMap
---

[webpack](../../../../../../globals) / [util](../../../index) / [runtime](../index) / RuntimeSpecMap

# Class: RuntimeSpecMap\<T, R>

Defined in: [webpack/types.d.ts:16607](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16607)

## Type Parameters

### T

`T`

### R

`R` = `T`

## Constructors

### Constructor

> **new RuntimeSpecMap**<`T`, `R`>(`clone?`): `RuntimeSpecMap`<`T`, `R`>

Defined in: [webpack/types.d.ts:16608](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16608)

#### Parameters

##### clone?

`RuntimeSpecMap`<`T`, `R`>

#### Returns

`RuntimeSpecMap`<`T`, `R`>

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [webpack/types.d.ts:16617](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16617)

##### Returns

`number`

## Methods

### delete()

> **delete**(`runtime`): `void`

Defined in: [webpack/types.d.ts:16613](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16613)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`void`

***

### get()

> **get**(`runtime`): `R`

Defined in: [webpack/types.d.ts:16609](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16609)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`R`

***

### has()

> **has**(`runtime`): `boolean`

Defined in: [webpack/types.d.ts:16610](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16610)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

***

### keys()

> **keys**(): `RuntimeSpec`\[]

Defined in: [webpack/types.d.ts:16615](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16615)

#### Returns

`RuntimeSpec`\[]

***

### provide()

> **provide**(`runtime`, `computer`): `R`

Defined in: [webpack/types.d.ts:16612](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16612)

#### Parameters

##### runtime

`RuntimeSpec`

##### computer

() => `R`

#### Returns

`R`

***

### set()

> **set**(`runtime`, `value`): `void`

Defined in: [webpack/types.d.ts:16611](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16611)

#### Parameters

##### runtime

`RuntimeSpec`

##### value

`R`

#### Returns

`void`

***

### update()

> **update**(`runtime`, `fn`): `void`

Defined in: [webpack/types.d.ts:16614](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16614)

#### Parameters

##### runtime

`RuntimeSpec`

##### fn

(`value?`) => `R`

#### Returns

`void`

***

### values()

> **values**(): `IterableIterator`<`R`>

Defined in: [webpack/types.d.ts:16616](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16616)

#### Returns

`IterableIterator`<`R`>
