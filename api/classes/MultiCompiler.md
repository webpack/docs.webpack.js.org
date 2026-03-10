---
title: MultiCompiler
---

[webpack](../globals) / MultiCompiler

# Class: MultiCompiler

Defined in: [webpack/types.d.ts:11642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11642)

## Constructors

### Constructor

> **new MultiCompiler**(`compilers`, `options`): `MultiCompiler`

Defined in: [webpack/types.d.ts:11643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11643)

#### Parameters

##### compilers

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Compiler`](Compiler.md)> | [`Compiler`](Compiler.md)\[]

##### options

[`MultiCompilerOptions`](../interfaces/MultiCompilerOptions)

#### Returns

`MultiCompiler`

## Properties

### compilers

> **compilers**: [`Compiler`](Compiler.md)\[]

Defined in: [webpack/types.d.ts:11657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11657)

***

### dependencies

> **dependencies**: [`WeakMap`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)<[`Compiler`](Compiler.md), `string`\[]>

Defined in: [webpack/types.d.ts:11658](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11658)

***

### hooks

> **hooks**: [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)<{ `done`: `SyncHook`<\[[`MultiStats`](MultiStats.md)]>; `infrastructureLog`: `MultiHook`<`SyncBailHook`<\[`string`, `string`, `undefined` | `any`\[]], `true` | `void`>>; `invalid`: `MultiHook`<`SyncHook`<\[`null` | `string`, `number`]>>; `run`: `MultiHook`<`AsyncSeriesHook`<\[[`Compiler`](Compiler.md)]>>; `watchClose`: `SyncHook`<\[]>; `watchRun`: `MultiHook`<`AsyncSeriesHook`<\[[`Compiler`](Compiler.md)]>>; }>

Defined in: [webpack/types.d.ts:11647](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11647)

***

### inputFileSystem

> **inputFileSystem**: [`InputFileSystem`](../interfaces/InputFileSystem)

Defined in: [webpack/types.d.ts:11662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11662)

***

### intermediateFileSystem

> **intermediateFileSystem**: `IntermediateFileSystem`

Defined in: [webpack/types.d.ts:11665](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11665)

***

### outputFileSystem

> **outputFileSystem**: [`OutputFileSystem`](../interfaces/OutputFileSystem)

Defined in: [webpack/types.d.ts:11663](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11663)

***

### running

> **running**: `boolean`

Defined in: [webpack/types.d.ts:11659](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11659)

***

### watchFileSystem

> **watchFileSystem**: `WatchFileSystem`

Defined in: [webpack/types.d.ts:11664](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11664)

## Accessors

### options

#### Get Signature

> **get** **options**(): [`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized)\[] & [`MultiCompilerOptions`](../interfaces/MultiCompilerOptions)

Defined in: [webpack/types.d.ts:11660](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11660)

##### Returns

[`WebpackOptionsNormalized`](../interfaces/WebpackOptionsNormalized)\[] & [`MultiCompilerOptions`](../interfaces/MultiCompilerOptions)

***

### outputPath

#### Get Signature

> **get** **outputPath**(): `string`

Defined in: [webpack/types.d.ts:11661](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11661)

##### Returns

`string`

## Methods

### close()

> **close**(`callback`): `void`

Defined in: [webpack/types.d.ts:11690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11690)

#### Parameters

##### callback

(`err`, `result?`) => `void`

#### Returns

`void`

***

### getInfrastructureLogger()

> **getInfrastructureLogger**(`name`): `WebpackLogger`

Defined in: [webpack/types.d.ts:11666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11666)

#### Parameters

##### name

`string` | () => `string`

#### Returns

`WebpackLogger`

***

### purgeInputFileSystem()

> **purgeInputFileSystem**(): `void`

Defined in: [webpack/types.d.ts:11689](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11689)

#### Returns

`void`

***

### run()

> **run**(`callback`): `void`

Defined in: [webpack/types.d.ts:11688](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11688)

#### Parameters

##### callback

`CallbackWebpackFunction_2`<[`MultiStats`](MultiStats.md), `void`>

#### Returns

`void`

***

### ~~runWithDependencies()~~

> **runWithDependencies**(`compilers`, `fn`, `callback`): `void`

Defined in: [webpack/types.d.ts:11676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11676)

This method should have been private

#### Parameters

##### compilers

[`Compiler`](Compiler.md)\[]

##### fn

(`compiler`, `callback`) => `void`

##### callback

`CallbackWebpackFunction_2`<[`Stats`](Stats.md)\[], `void`>

#### Returns

`void`

#### Deprecated

***

### setDependencies()

> **setDependencies**(`compiler`, `dependencies`): `void`

Defined in: [webpack/types.d.ts:11667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11667)

#### Parameters

##### compiler

[`Compiler`](Compiler.md)

##### dependencies

`string`\[]

#### Returns

`void`

***

### validateDependencies()

> **validateDependencies**(`callback`): `boolean`

Defined in: [webpack/types.d.ts:11668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11668)

#### Parameters

##### callback

`CallbackWebpackFunction_2`<[`MultiStats`](MultiStats.md), `void`>

#### Returns

`boolean`

***

### watch()

> **watch**(`watchOptions`, `handler`): `MultiWatching`

Defined in: [webpack/types.d.ts:11684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11684)

#### Parameters

##### watchOptions

`WatchOptions` | `WatchOptions`\[]

##### handler

`CallbackWebpackFunction_2`<[`MultiStats`](MultiStats.md), `void`>

#### Returns

`MultiWatching`
