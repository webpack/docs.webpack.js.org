---
title: ModuleGraphConnection
---

[webpack](../globals) / ModuleGraphConnection

# Class: ModuleGraphConnection

Defined in: [webpack/types.d.ts:11195](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11195)

## Constructors

### Constructor

> **new ModuleGraphConnection**(`originModule`, `dependency`, `module`, `explanation?`, `weak?`, `condition?`): `ModuleGraphConnection`

Defined in: [webpack/types.d.ts:11196](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11196)

#### Parameters

##### originModule

[`Module`](Module.md)

##### dependency

[`Dependency`](Dependency.md)

##### module

[`Module`](Module.md)

##### explanation?

`string`

##### weak?

`boolean`

##### condition?

`false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

#### Returns

`ModuleGraphConnection`

## Properties

### condition?

> `optional` **condition**: `false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

Defined in: [webpack/types.d.ts:11217](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11217)

***

### conditional

> **conditional**: `boolean`

Defined in: [webpack/types.d.ts:11216](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11216)

***

### dependency

> **dependency**: [`Dependency`](Dependency.md)

Defined in: [webpack/types.d.ts:11212](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11212)

***

### explanations?

> `optional` **explanations**: `Set`<`string`>

Defined in: [webpack/types.d.ts:11224](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11224)

***

### module

> **module**: [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11214](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11214)

***

### originModule

> **originModule**: [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11210](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11210)

***

### resolvedModule

> **resolvedModule**: [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11213](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11213)

***

### resolvedOriginModule

> **resolvedOriginModule**: [`Module`](Module.md)

Defined in: [webpack/types.d.ts:11211](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11211)

***

### weak?

> `optional` **weak**: `boolean`

Defined in: [webpack/types.d.ts:11215](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11215)

***

### addConnectionStates()

> `static` **addConnectionStates**: (`a`, `b`) => `ConnectionState`

Defined in: [webpack/types.d.ts:11240](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11240)

#### Parameters

##### a

`ConnectionState`

##### b

`ConnectionState`

#### Returns

`ConnectionState`

***

### CIRCULAR\_CONNECTION

> `static` **CIRCULAR\_CONNECTION**: *typeof* `CIRCULAR_CONNECTION`

Defined in: [webpack/types.d.ts:11238](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11238)

***

### TRANSITIVE\_ONLY

> `static` **TRANSITIVE\_ONLY**: *typeof* `TRANSITIVE_ONLY`

Defined in: [webpack/types.d.ts:11239](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11239)

## Accessors

### explanation

#### Get Signature

> **get** **explanation**(): `string`

Defined in: [webpack/types.d.ts:11233](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11233)

##### Returns

`string`

## Methods

### addCondition()

> **addCondition**(`condition`): `void`

Defined in: [webpack/types.d.ts:11226](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11226)

#### Parameters

##### condition

(`moduleGraphConnection`, `runtime`) => `ConnectionState`

#### Returns

`void`

***

### addExplanation()

> **addExplanation**(`explanation`): `void`

Defined in: [webpack/types.d.ts:11232](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11232)

#### Parameters

##### explanation

`string`

#### Returns

`void`

***

### clone()

> **clone**(): `ModuleGraphConnection`

Defined in: [webpack/types.d.ts:11225](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11225)

#### Returns

`ModuleGraphConnection`

***

### getActiveState()

> **getActiveState**(`runtime`): `ConnectionState`

Defined in: [webpack/types.d.ts:11236](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11236)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`ConnectionState`

***

### isActive()

> **isActive**(`runtime`): `boolean`

Defined in: [webpack/types.d.ts:11234](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11234)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

***

### isTargetActive()

> **isTargetActive**(`runtime`): `boolean`

Defined in: [webpack/types.d.ts:11235](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11235)

#### Parameters

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

***

### setActive()

> **setActive**(`value`): `void`

Defined in: [webpack/types.d.ts:11237](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11237)

#### Parameters

##### value

`boolean`

#### Returns

`void`
