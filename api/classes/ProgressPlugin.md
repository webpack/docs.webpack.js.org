---
title: ProgressPlugin
---

[webpack](../globals.md) / ProgressPlugin

# Class: ProgressPlugin

Defined in: [webpack/types.d.ts:14277](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14277)

## Constructors

### Constructor

> **new ProgressPlugin**(`options?`): `ProgressPlugin`

Defined in: [webpack/types.d.ts:14278](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14278)

#### Parameters

##### options?

`ProgressPluginArgument`

#### Returns

`ProgressPlugin`

## Properties

### dependenciesCount

> **dependenciesCount**: `number`

Defined in: [webpack/types.d.ts:14283](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14283)

***

### handler()?

> `optional` **handler**: (`percentage`, `msg`, ...`args`) => `void`

Defined in: [webpack/types.d.ts:14281](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14281)

#### Parameters

##### percentage

`number`

##### msg

`string`

##### args

...`string`[]

#### Returns

`void`

***

### modulesCount

> **modulesCount**: `number`

Defined in: [webpack/types.d.ts:14282](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14282)

***

### options

> **options**: `ProgressPluginOptions`

Defined in: [webpack/types.d.ts:14279](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14279)

***

### percentBy

> **percentBy**: `"entries"` \| `"dependencies"` \| `"modules"`

Defined in: [webpack/types.d.ts:14288](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14288)

***

### profile

> **profile**: `boolean`

Defined in: [webpack/types.d.ts:14280](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14280)

***

### showActiveModules

> **showActiveModules**: `boolean`

Defined in: [webpack/types.d.ts:14287](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14287)

***

### showDependencies

> **showDependencies**: `boolean`

Defined in: [webpack/types.d.ts:14286](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14286)

***

### showEntries

> **showEntries**: `boolean`

Defined in: [webpack/types.d.ts:14284](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14284)

***

### showModules

> **showModules**: `boolean`

Defined in: [webpack/types.d.ts:14285](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14285)

***

### createDefaultHandler()

> `static` **createDefaultHandler**: (`profile`, `logger`) => (`percentage`, `msg`, ...`args`) => `void`

Defined in: [webpack/types.d.ts:14294](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14294)

#### Parameters

##### profile

`boolean`

##### logger

`WebpackLogger`

#### Returns

> (`percentage`, `msg`, ...`args`): `void`

##### Parameters

###### percentage

`number`

###### msg

`string`

###### args

...`string`[]

##### Returns

`void`

***

### defaultOptions

> `static` **defaultOptions**: `Required`\<`Omit`\<`ProgressPluginOptions`, `"handler"`\>\>

Defined in: [webpack/types.d.ts:14293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14293)

## Methods

### apply()

> **apply**(`compiler`): `void`

Defined in: [webpack/types.d.ts:14289](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14289)

#### Parameters

##### compiler

[`Compiler`](Compiler.md) | [`MultiCompiler`](MultiCompiler.md)

#### Returns

`void`

***

### getReporter()

> `static` **getReporter**(`compiler`): (`p`, ...`args`) => `void`

Defined in: [webpack/types.d.ts:14290](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L14290)

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

#### Returns

> (`p`, ...`args`): `void`

##### Parameters

###### p

`number`

###### args

...`string`[]

##### Returns

`void`
