---
title: HarmonyImportDependency
---

[webpack](../../../../../../globals) / [export=](../../../index) / [dependencies](../index) / HarmonyImportDependency

# Class: HarmonyImportDependency

Defined in: [webpack/types.d.ts:6566](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6566)

## Extends

* [`ModuleDependency`](ModuleDependency.md)

## Constructors

### Constructor

> **new HarmonyImportDependency**(`request`, `sourceOrder`, `phase?`, `attributes?`): `HarmonyImportDependency`

Defined in: [webpack/types.d.ts:6567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6567)

#### Parameters

##### request

`string`

##### sourceOrder

`number`

##### phase?

`0` | `1` | `2`

##### attributes?

`ImportAttributes`

#### Returns

`HarmonyImportDependency`

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`constructor`](ModuleDependency.md#constructor)

## Properties

### attributes?

> `optional` **attributes**: `ImportAttributes`

Defined in: [webpack/types.d.ts:6574](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6574)

***

### loc

> **loc**: `DependencyLocation`

Defined in: [webpack/types.d.ts:4140](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4140)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`loc`](ModuleDependency.md#loc)

***

### module

> **module**: `any`

Defined in: [webpack/types.d.ts:4204](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4204)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`module`](ModuleDependency.md#module)

***

### optional?

> `optional` **optional**: `boolean`

Defined in: [webpack/types.d.ts:4137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4137)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`optional`](ModuleDependency.md#optional)

***

### phase

> **phase**: `ImportPhaseType`

Defined in: [webpack/types.d.ts:6573](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6573)

***

### range?

> `optional` **range**: \[`number`, `number`]

Defined in: [webpack/types.d.ts:10831](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10831)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`range`](ModuleDependency.md#range)

***

### request

> **request**: `string`

Defined in: [webpack/types.d.ts:10828](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10828)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`request`](ModuleDependency.md#request)

***

### sourceOrder?

> `optional` **sourceOrder**: `number`

Defined in: [webpack/types.d.ts:10830](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10830)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`sourceOrder`](ModuleDependency.md#sourceorder)

***

### userRequest

> **userRequest**: `string`

Defined in: [webpack/types.d.ts:10829](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10829)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`userRequest`](ModuleDependency.md#userrequest)

***

### weak

> **weak**: `boolean`

Defined in: [webpack/types.d.ts:4136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4136)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`weak`](ModuleDependency.md#weak)

***

### ExportPresenceModes

> `static` **ExportPresenceModes**: `object`

Defined in: [webpack/types.d.ts:6587](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6587)

#### AUTO

> **AUTO**: `ExportPresenceMode`

#### ERROR

> **ERROR**: `ExportPresenceMode`

#### NONE

> **NONE**: `ExportPresenceMode`

#### WARN

> **WARN**: `ExportPresenceMode`

#### fromUserOption()

> **fromUserOption**(`str`): `ExportPresenceMode`

##### Parameters

###### str

`string` | `false`

##### Returns

`ExportPresenceMode`

#### resolveFromOptions()

> **resolveFromOptions**(`specificValue`, `options`): `ExportPresenceMode`

Resolve export presence mode from parser options with a specific key and shared fallbacks.

##### Parameters

###### specificValue

`string` | `false`

###### options

`JavascriptParserOptions`

##### Returns

`ExportPresenceMode`

***

### EXPORTS\_OBJECT\_REFERENCED

> `static` **EXPORTS\_OBJECT\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:6606](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6606)

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`EXPORTS_OBJECT_REFERENCED`](ModuleDependency.md#exports_object_referenced)

***

### getNonOptionalPart()

> `static` **getNonOptionalPart**: (`members`, `membersOptionals`) => `string`\[]

Defined in: [webpack/types.d.ts:6601](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6601)

#### Parameters

##### members

`string`\[]

##### membersOptionals

`boolean`\[]

#### Returns

`string`\[]

***

### NO\_EXPORTS\_REFERENCED

> `static` **NO\_EXPORTS\_REFERENCED**: `string`\[]\[]

Defined in: [webpack/types.d.ts:6605](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6605)

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`NO_EXPORTS_REFERENCED`](ModuleDependency.md#no_exports_referenced)

***

### Template

> `static` **Template**: *typeof* `HarmonyImportDependencyTemplate`

Defined in: [webpack/types.d.ts:6586](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6586)

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`Template`](ModuleDependency.md#template)

***

### TRANSITIVE

> `static` **TRANSITIVE**: *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:6608](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6608)

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`TRANSITIVE`](ModuleDependency.md#transitive)

## Accessors

### category

#### Get Signature

> **get** **category**(): `string`

Defined in: [webpack/types.d.ts:4139](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4139)

##### Returns

`string`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`category`](ModuleDependency.md#category)

***

### disconnect

#### Get Signature

> **get** **disconnect**(): `any`

Defined in: [webpack/types.d.ts:4205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4205)

##### Returns

`any`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`disconnect`](ModuleDependency.md#disconnect)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [webpack/types.d.ts:4138](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4138)

##### Returns

`string`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`type`](ModuleDependency.md#type)

## Methods

### couldAffectReferencingModule()

> **couldAffectReferencingModule**(): `boolean` | *typeof* `TRANSITIVE`

Defined in: [webpack/types.d.ts:4149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4149)

#### Returns

`boolean` | *typeof* `TRANSITIVE`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`couldAffectReferencingModule`](ModuleDependency.md#couldaffectreferencingmodule)

***

### createIgnoredModule()

> **createIgnoredModule**(`context`): [`Module`](../../../../../../classes/Module)

Defined in: [webpack/types.d.ts:4201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4201)

#### Parameters

##### context

`string`

#### Returns

[`Module`](../../../../../../classes/Module)

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`createIgnoredModule`](ModuleDependency.md#createignoredmodule)

***

### deserialize()

> **deserialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4203](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4203)

#### Parameters

##### \_\_namedParameters

[`ObjectDeserializerContext`](../../../../../../interfaces/ObjectDeserializerContext)

#### Returns

`void`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`deserialize`](ModuleDependency.md#deserialize)

***

### getCondition()

> **getCondition**(`moduleGraph`): `false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

Defined in: [webpack/types.d.ts:4164](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4164)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`false` | (`moduleGraphConnection`, `runtime`) => `ConnectionState`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getCondition`](ModuleDependency.md#getcondition)

***

### getContext()

> **getContext**(): `string`

Defined in: [webpack/types.d.ts:4147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4147)

#### Returns

`string`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getContext`](ModuleDependency.md#getcontext)

***

### getErrors()

> **getErrors**(`moduleGraph`): [`WebpackError`](../../../../../../classes/WebpackError)\[]

Defined in: [webpack/types.d.ts:4187](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4187)

Returns errors

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

[`WebpackError`](../../../../../../classes/WebpackError)\[]

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getErrors`](ModuleDependency.md#geterrors)

***

### getExports()

> **getExports**(`moduleGraph`): `ExportsSpec`

Defined in: [webpack/types.d.ts:4177](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4177)

Returns the exported names

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`ExportsSpec`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getExports`](ModuleDependency.md#getexports)

***

### getImportStatement()

> **getImportStatement**(`update`, `__namedParameters`): \[`string`, `string`]

Defined in: [webpack/types.d.ts:6577](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6577)

#### Parameters

##### update

`boolean`

##### \_\_namedParameters

`DependencyTemplateContext`

#### Returns

\[`string`, `string`]

***

### getImportVar()

> **getImportVar**(`moduleGraph`): `string`

Defined in: [webpack/types.d.ts:6575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6575)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`string`

***

### getLinkingErrors()

> **getLinkingErrors**(`moduleGraph`, `ids`, `additionalMessage`): [`WebpackError`](../../../../../../classes/WebpackError)\[]

Defined in: [webpack/types.d.ts:6581](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6581)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

##### ids

`string`\[]

##### additionalMessage

`string`

#### Returns

[`WebpackError`](../../../../../../classes/WebpackError)\[]

***

### getModuleEvaluationSideEffectsState()

> **getModuleEvaluationSideEffectsState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:4198](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4198)

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`ConnectionState`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getModuleEvaluationSideEffectsState`](ModuleDependency.md#getmoduleevaluationsideeffectsstate)

***

### getModuleExports()

> **getModuleExports**(`__namedParameters`): `string`

Defined in: [webpack/types.d.ts:6576](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6576)

#### Parameters

##### \_\_namedParameters

`DependencyTemplateContext`

#### Returns

`string`

***

### getNumberOfIdOccurrences()

> **getNumberOfIdOccurrences**(): `number`

Defined in: [webpack/types.d.ts:4197](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4197)

implement this method to allow the occurrence order plugin to count correctly

#### Returns

`number`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getNumberOfIdOccurrences`](ModuleDependency.md#getnumberofidoccurrences)

***

### ~~getReference()~~

> **getReference**(`moduleGraph`): `never`

Defined in: [webpack/types.d.ts:4155](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4155)

Returns the referenced module and export

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

`never`

#### Deprecated

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getReference`](ModuleDependency.md#getreference)

***

### getReferencedExports()

> **getReferencedExports**(`moduleGraph`, `runtime`): (`string`\[] | `ReferencedExport`)\[]

Defined in: [webpack/types.d.ts:4160](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4160)

Returns list of exports referenced by this dependency

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

##### runtime

`RuntimeSpec`

#### Returns

(`string`\[] | `ReferencedExport`)\[]

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getReferencedExports`](ModuleDependency.md#getreferencedexports)

***

### getResourceIdentifier()

> **getResourceIdentifier**(): `string`

Defined in: [webpack/types.d.ts:4148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4148)

#### Returns

`string`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getResourceIdentifier`](ModuleDependency.md#getresourceidentifier)

***

### getWarnings()

> **getWarnings**(`moduleGraph`): [`WebpackError`](../../../../../../classes/WebpackError)\[]

Defined in: [webpack/types.d.ts:4182](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4182)

Returns warnings

#### Parameters

##### moduleGraph

[`ModuleGraph`](../../../../../../classes/ModuleGraph)

#### Returns

[`WebpackError`](../../../../../../classes/WebpackError)\[]

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`getWarnings`](ModuleDependency.md#getwarnings)

***

### serialize()

> **serialize**(`__namedParameters`): `void`

Defined in: [webpack/types.d.ts:4202](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4202)

#### Parameters

##### \_\_namedParameters

[`ObjectSerializerContext`](../../../../../../interfaces/ObjectSerializerContext)

#### Returns

`void`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`serialize`](ModuleDependency.md#serialize)

***

### setLoc()

> **setLoc**(`startLine`, `startColumn`, `endLine`, `endColumn`): `void`

Defined in: [webpack/types.d.ts:4141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4141)

#### Parameters

##### startLine

`number`

##### startColumn

`number`

##### endLine

`number`

##### endColumn

`number`

#### Returns

`void`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`setLoc`](ModuleDependency.md#setloc)

***

### updateHash()

> **updateHash**(`hash`, `context`): `void`

Defined in: [webpack/types.d.ts:4192](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4192)

Update the hash

#### Parameters

##### hash

`Hash`

##### context

`UpdateHashContextDependency`

#### Returns

`void`

#### Inherited from

[`ModuleDependency`](ModuleDependency.md).[`updateHash`](ModuleDependency.md#updatehash)

***

### isLowPriorityDependency()

> `static` **isLowPriorityDependency**(`dependency`): `boolean`

Defined in: [webpack/types.d.ts:6607](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L6607)

#### Parameters

##### dependency

[`Dependency`](../../../../../../classes/Dependency)

#### Returns

`boolean`

#### Overrides

[`ModuleDependency`](ModuleDependency.md).[`isLowPriorityDependency`](ModuleDependency.md#islowprioritydependency)
