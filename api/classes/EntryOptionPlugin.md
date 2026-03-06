---
title: EntryOptionPlugin
---

[webpack](../globals.md) / EntryOptionPlugin

# Class: EntryOptionPlugin

Defined in: [webpack/types.d.ts:4915](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4915)

## Constructors

### Constructor

> **new EntryOptionPlugin**(): `EntryOptionPlugin`

Defined in: [webpack/types.d.ts:4916](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4916)

#### Returns

`EntryOptionPlugin`

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:4917](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4917)

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

`void`

***

### applyEntryOption()

> `static` **applyEntryOption**(`compiler`, `context`, `entry`): `void`

Defined in: [webpack/types.d.ts:4918](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4918)

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

##### context

`string`

##### entry

[`EntryNormalized`](../type-aliases/EntryNormalized.md)

#### Returns

`void`

***

### entryDescriptionToOptions()

> `static` **entryDescriptionToOptions**(`compiler`, `name`, `desc`): [`EntryOptions`](../type-aliases/EntryOptions.md)

Defined in: [webpack/types.d.ts:4923](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4923)

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

##### name

`string`

##### desc

`EntryDescriptionNormalized`

#### Returns

[`EntryOptions`](../type-aliases/EntryOptions.md)
