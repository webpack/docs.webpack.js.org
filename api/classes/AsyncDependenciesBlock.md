---
title: AsyncDependenciesBlock
---

[webpack](../globals) / AsyncDependenciesBlock

# Class: AsyncDependenciesBlock

Defined in: [webpack/types.d.ts:498](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L498)

## Extends

* `DependenciesBlock`

## Constructors

### Constructor

> **new AsyncDependenciesBlock**(`groupOptions`, `loc?`, `request?`): `AsyncDependenciesBlock`

Defined in: [webpack/types.d.ts:499](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L499)

#### Parameters

##### groupOptions

`string` | `GroupOptionsAsyncDependenciesBlock`

##### loc?

`SyntheticDependencyLocation` | `RealDependencyLocation`

##### request?

`string`

#### Returns

`AsyncDependenciesBlock`

#### Overrides

`DependenciesBlock.constructor`

## Properties

### blocks

> **blocks**: `AsyncDependenciesBlock`\[]

Defined in: [webpack/types.d.ts:4110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4110)

#### Inherited from

`DependenciesBlock.blocks`

***

### chunkName?

> `optional` **chunkName**: `string`

Defined in: [webpack/types.d.ts:507](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L507)

***

### dependencies

> **dependencies**: [`Dependency`](Dependency.md)\[]

Defined in: [webpack/types.d.ts:4109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4109)

#### Inherited from

`DependenciesBlock.dependencies`

***

### groupOptions

> **groupOptions**: `GroupOptionsAsyncDependenciesBlock`

Defined in: [webpack/types.d.ts:504](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L504)

***

### loc?

> `optional` **loc**: `SyntheticDependencyLocation` | `RealDependencyLocation`

Defined in: [webpack/types.d.ts:505](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L505)

***

### module

> **module**: `any`

Defined in: [webpack/types.d.ts:509](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L509)

***

### parent?

> `optional` **parent**: `DependenciesBlock`

Defined in: [webpack/types.d.ts:4111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4111)

#### Inherited from

`DependenciesBlock.parent`

***

### request?

> `optional` **request**: `string`

Defined in: [webpack/types.d.ts:506](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L506)

## Accessors

### circular

#### Get Signature

> **get** **circular**(): `boolean`

Defined in: [webpack/types.d.ts:508](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L508)

##### Returns

`boolean`

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [webpack/types.d.ts:4118](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4118)

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### Parameters

##### block

`AsyncDependenciesBlock`

#### Returns

`void`

#### Inherited from

`DependenciesBlock.addBlock`

***

### addDependency()

> **addDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4119)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.addDependency`

***

### clearDependenciesAndBlocks()

> **clearDependenciesAndBlocks**(): `void`

Defined in: [webpack/types.d.ts:4125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4125)

Removes all dependencies and blocks

#### Returns

`void`

#### Inherited from

`DependenciesBlock.clearDependenciesAndBlocks`

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4128)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../interfaces/ObjectDeserializerContext)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.deserialize`

***

### getRootBlock()

> **getRootBlock**(): `DependenciesBlock`

Defined in: [webpack/types.d.ts:4112](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4112)

#### Returns

`DependenciesBlock`

#### Inherited from

`DependenciesBlock.getRootBlock`

***

### removeDependency()

> **removeDependency**(`dependency`): `void`

Defined in: [webpack/types.d.ts:4120](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4120)

#### Parameters

##### dependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.removeDependency`

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4127](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4127)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../interfaces/ObjectSerializerContext)

#### Returns

`void`

#### Inherited from

`DependenciesBlock.serialize`

***

### updateHash()

> **updateHash**(`hash`, `context`): `void`

Defined in: [webpack/types.d.ts:4126](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4126)

#### Parameters

##### hash

`Hash`

##### context

`UpdateHashContextDependency`

#### Returns

`void`

#### Inherited from

`DependenciesBlock.updateHash`
