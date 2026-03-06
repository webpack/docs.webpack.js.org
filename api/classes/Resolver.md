---
title: Resolver
---

[webpack](../globals) / Resolver

# Abstract Class: Resolver

Defined in: [webpack/types.d.ts:15984](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15984)

## Constructors

### Constructor

> **new Resolver**(): `Resolver`

#### Returns

`Resolver`

## Properties

### fileSystem

> **fileSystem**: `FileSystem`

Defined in: [webpack/types.d.ts:15985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15985)

***

### hooks

> **hooks**: `KnownHooks`

Defined in: [webpack/types.d.ts:15987](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15987)

***

### options

> **options**: `ResolveOptionsResolverFactoryObject1`

Defined in: [webpack/types.d.ts:15986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15986)

## Methods

### doResolve()

> **doResolve**(`hook`, `request`, `message`, `resolveContext`, `callback`): `void`

Defined in: [webpack/types.d.ts:16026](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16026)

#### Parameters

##### hook

`AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`>

##### request

`ResolveRequest`

##### message

`string`

##### resolveContext

`ResolveContext`

##### callback

(`err?`, `result?`) => `void`

#### Returns

`void`

***

### ensureHook()

> **ensureHook**(`name`): `AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`>

Defined in: [webpack/types.d.ts:15988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15988)

#### Parameters

##### name

`string` | `AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`, `UnsetAdditionalOptions`>

#### Returns

`AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`>

***

### getHook()

> **getHook**(`name`): `AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`>

Defined in: [webpack/types.d.ts:15999](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L15999)

#### Parameters

##### name

`string` | `AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`, `UnsetAdditionalOptions`>

#### Returns

`AsyncSeriesBailHook`<\[`ResolveRequest`, `ResolveContext`], `ResolveRequest`>

***

### isDirectory()

> **isDirectory**(`path`): `boolean`

Defined in: [webpack/types.d.ts:16039](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16039)

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isModule()

> **isModule**(`path`): `boolean`

Defined in: [webpack/types.d.ts:16037](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16037)

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### isPrivate()

> **isPrivate**(`path`): `boolean`

Defined in: [webpack/types.d.ts:16038](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16038)

#### Parameters

##### path

`string`

#### Returns

`boolean`

***

### join()

> **join**(`path`, `request`): `string`

Defined in: [webpack/types.d.ts:16040](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16040)

#### Parameters

##### path

`string`

##### request

`string`

#### Returns

`string`

***

### normalize()

> **normalize**(`path`): `string`

Defined in: [webpack/types.d.ts:16041](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16041)

#### Parameters

##### path

`string`

#### Returns

`string`

***

### parse()

> **parse**(`identifier`): `ParsedIdentifier`

Defined in: [webpack/types.d.ts:16036](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16036)

#### Parameters

##### identifier

`string`

#### Returns

`ParsedIdentifier`

***

### resolve()

> **resolve**(`context`, `path`, `request`, `resolveContext`, `callback`): `void`

Defined in: [webpack/types.d.ts:16015](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16015)

#### Parameters

##### context

`ContextTypes`

##### path

`string`

##### request

`string`

##### resolveContext

`ResolveContext`

##### callback

(`err`, `res?`, `req?`) => `void`

#### Returns

`void`

***

### resolveSync()

> **resolveSync**(`context`, `path`, `request`): `string` | `false`

Defined in: [webpack/types.d.ts:16010](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16010)

#### Parameters

##### context

`ContextTypes`

##### path

`string`

##### request

`string`

#### Returns

`string` | `false`
