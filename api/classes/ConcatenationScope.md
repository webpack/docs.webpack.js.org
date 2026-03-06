---
title: ConcatenationScope
---

[webpack](../globals) / ConcatenationScope

# Class: ConcatenationScope

Defined in: [webpack/types.d.ts:3113](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3113)

## Constructors

### Constructor

> **new ConcatenationScope**(`modulesMap`, `currentModule`, `usedNames`): `ConcatenationScope`

Defined in: [webpack/types.d.ts:3114](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3114)

#### Parameters

##### modulesMap

`Map`<[`Module`](Module.md), `ModuleInfo`> | `ModuleInfo`\[]

##### currentModule

`ConcatenatedModuleInfo`

##### usedNames

`Set`<`string`>

#### Returns

`ConcatenationScope`

## Properties

### usedNames

> **usedNames**: `Set`<`string`>

Defined in: [webpack/types.d.ts:3119](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3119)

***

### DEFAULT\_EXPORT

> `static` **DEFAULT\_EXPORT**: `string`

Defined in: [webpack/types.d.ts:3134](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3134)

***

### NAMESPACE\_OBJECT\_EXPORT

> `static` **NAMESPACE\_OBJECT\_EXPORT**: `string`

Defined in: [webpack/types.d.ts:3135](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3135)

## Methods

### createModuleReference()

> **createModuleReference**(`module`, `__namedParameters`): `string`

Defined in: [webpack/types.d.ts:3126](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3126)

#### Parameters

##### module

[`Module`](Module.md)

##### \_\_namedParameters

`Partial`<`ModuleReferenceOptions`>

#### Returns

`string`

***

### getRawExport()

> **getRawExport**(`exportName`): `string`

Defined in: [webpack/types.d.ts:3123](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3123)

#### Parameters

##### exportName

`string`

#### Returns

`string`

***

### isModuleInScope()

> **isModuleInScope**(`module`): `boolean`

Defined in: [webpack/types.d.ts:3120](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3120)

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`boolean`

***

### registerExport()

> **registerExport**(`exportName`, `symbol`): `void`

Defined in: [webpack/types.d.ts:3121](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3121)

#### Parameters

##### exportName

`string`

##### symbol

`string`

#### Returns

`void`

***

### registerNamespaceExport()

> **registerNamespaceExport**(`symbol`): `void`

Defined in: [webpack/types.d.ts:3125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3125)

#### Parameters

##### symbol

`string`

#### Returns

`void`

***

### registerRawExport()

> **registerRawExport**(`exportName`, `expression`): `void`

Defined in: [webpack/types.d.ts:3122](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3122)

#### Parameters

##### exportName

`string`

##### expression

`string`

#### Returns

`void`

***

### setRawExportMap()

> **setRawExportMap**(`exportName`, `expression`): `void`

Defined in: [webpack/types.d.ts:3124](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3124)

#### Parameters

##### exportName

`string`

##### expression

`string`

#### Returns

`void`

***

### isModuleReference()

> `static` **isModuleReference**(`name`): `boolean`

Defined in: [webpack/types.d.ts:3130](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3130)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### matchModuleReference()

> `static` **matchModuleReference**(`name`): `ModuleReferenceOptions` & `object`

Defined in: [webpack/types.d.ts:3131](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L3131)

#### Parameters

##### name

`string`

#### Returns

`ModuleReferenceOptions` & `object`
