---
title: ExternalModule
---

[webpack](../globals) / ExternalModule

# Class: ExternalModule

Defined in: [webpack/types.d.ts:5683](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5683)

## Extends

* [`Module`](Module.md)

## Constructors

### Constructor

> **new ExternalModule**(`request`, `type`, `userRequest`, `dependencyMeta?`): `ExternalModule`

Defined in: [webpack/types.d.ts:5684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5684)

#### Parameters

##### request

`ExternalModuleRequest`

##### type

`ExternalsType`

##### userRequest

`string`

##### dependencyMeta?

`AssetDependencyMeta` | `CssImportDependencyMeta` | `ImportDependencyMeta`

#### Returns

`ExternalModule`

#### Overrides

[`Module`](Module.md).[`constructor`](Module.md#constructor)

## Properties

### blocks

> **blocks**: [`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)\[]

Defined in: [webpack/types.d.ts:4110](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4110)

#### Inherited from

[`Module`](Module.md).[`blocks`](Module.md#blocks)

***

### buildInfo?

> `optional` **buildInfo**: `BuildInfo`

Defined in: [webpack/types.d.ts:10642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10642)

#### Inherited from

[`Module`](Module.md).[`buildInfo`](Module.md#buildinfo)

***

### buildMeta?

> `optional` **buildMeta**: `BuildMeta`

Defined in: [webpack/types.d.ts:10641](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10641)

#### Inherited from

[`Module`](Module.md).[`buildMeta`](Module.md#buildmeta)

***

### codeGenerationDependencies?

> `optional` **codeGenerationDependencies**: [`Dependency`](Dependency.md)\[]

Defined in: [webpack/types.d.ts:10644](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10644)

#### Inherited from

[`Module`](Module.md).[`codeGenerationDependencies`](Module.md#codegenerationdependencies)

***

### context

> **context**: `string`

Defined in: [webpack/types.d.ts:10632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10632)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`context`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### debugId

> **debugId**: `number`

Defined in: [webpack/types.d.ts:10635](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10635)

#### Inherited from

[`Module`](Module.md).[`debugId`](Module.md#debugid)

***

### dependencies

> **dependencies**: [`Dependency`](Dependency.md)\[]

Defined in: [webpack/types.d.ts:4109](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4109)

#### Inherited from

[`Module`](Module.md).[`dependencies`](Module.md#dependencies)

***

### dependencyMeta?

> `optional` **dependencyMeta**: `AssetDependencyMeta` | `CssImportDependencyMeta` | `ImportDependencyMeta`

Defined in: [webpack/types.d.ts:5696](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5696)

***

### depth

> **depth**: `number`

Defined in: [webpack/types.d.ts:10655](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10655)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`depth`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### externalType

> **externalType**: `ExternalsType`

Defined in: [webpack/types.d.ts:5694](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5694)

***

### factoryMeta?

> `optional` **factoryMeta**: `FactoryMeta`

Defined in: [webpack/types.d.ts:10637](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10637)

#### Inherited from

[`Module`](Module.md).[`factoryMeta`](Module.md#factorymeta)

***

### hot

> **hot**: `boolean`

Defined in: [webpack/types.d.ts:10640](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10640)

#### Inherited from

[`Module`](Module.md).[`hot`](Module.md#hot)

***

### ~~id~~

> **id**: `string` | `number`

Defined in: [webpack/types.d.ts:10649](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10649)

#### Deprecated

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`id`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### index

> **index**: `number`

Defined in: [webpack/types.d.ts:10653](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10653)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`index`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### index2

> **index2**: `number`

Defined in: [webpack/types.d.ts:10654](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10654)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`index2`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### issuer?

> `optional` **issuer**: [`Module`](Module.md)

Defined in: [webpack/types.d.ts:10656](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10656)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`issuer`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### layer

> **layer**: `string`

Defined in: [webpack/types.d.ts:10633](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10633)

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`layer`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### needId

> **needId**: `boolean`

Defined in: [webpack/types.d.ts:10634](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10634)

#### Inherited from

[`Module`](Module.md).[`needId`](Module.md#needid)

***

### parent?

> `optional` **parent**: `DependenciesBlock`

Defined in: [webpack/types.d.ts:4111](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4111)

#### Inherited from

[`Module`](Module.md).[`parent`](Module.md#parent)

***

### presentationalDependencies?

> `optional` **presentationalDependencies**: [`Dependency`](Dependency.md)\[]

Defined in: [webpack/types.d.ts:10643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10643)

#### Inherited from

[`Module`](Module.md).[`presentationalDependencies`](Module.md#presentationaldependencies)

***

### profile?

> `optional` **profile**: `ModuleProfile`

Defined in: [webpack/types.d.ts:10652](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10652)

#### Inherited from

[`Module`](Module.md).[`profile`](Module.md#profile)

***

### request

> **request**: `ExternalModuleRequest`

Defined in: [webpack/types.d.ts:5693](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5693)

***

### resolveOptions?

> `optional` **resolveOptions**: [`ResolveOptions`](../interfaces/ResolveOptions)

Defined in: [webpack/types.d.ts:10636](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10636)

#### Inherited from

[`Module`](Module.md).[`resolveOptions`](Module.md#resolveoptions)

***

### type

> **type**: `string`

Defined in: [webpack/types.d.ts:10631](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10631)

#### Inherited from

[`Module`](Module.md).[`type`](Module.md#type)

***

### used

> **used**: `any`

Defined in: [webpack/types.d.ts:10790](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10790)

#### Inherited from

[`Module`](Module.md).[`used`](Module.md#used)

***

### userRequest

> **userRequest**: `string`

Defined in: [webpack/types.d.ts:5695](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5695)

***

### useSimpleSourceMap

> **useSimpleSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10639](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10639)

#### Inherited from

[`Module`](Module.md).[`useSimpleSourceMap`](Module.md#usesimplesourcemap)

***

### useSourceMap

> **useSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:10638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10638)

#### Inherited from

[`Module`](Module.md).[`useSourceMap`](Module.md#usesourcemap)

***

### getExternalModuleNodeCommonjsInitFragment()

> `static` **getExternalModuleNodeCommonjsInitFragment**: (`runtimeTemplate`) => [`InitFragment`](InitFragment.md)<`ChunkRenderContextJavascriptModulesPlugin`>

Defined in: [webpack/types.d.ts:5709](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5709)

#### Parameters

##### runtimeTemplate

`RuntimeTemplate`

#### Returns

[`InitFragment`](InitFragment.md)<`ChunkRenderContextJavascriptModulesPlugin`>

***

### ModuleExternalInitFragment

> `static` **ModuleExternalInitFragment**: *typeof* `ModuleExternalInitFragment`

Defined in: [webpack/types.d.ts:5708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5708)

## Accessors

### chunksIterable

#### Get Signature

> **get** **chunksIterable**(): `Iterable`<[`Chunk`](Chunk.md)>

Defined in: [webpack/types.d.ts:10673](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10673)

##### Returns

`Iterable`<[`Chunk`](Chunk.md)>

#### Inherited from

[`Module`](Module.md).[`chunksIterable`](Module.md#chunksiterable)

***

### errors

#### Get Signature

> **get** **errors**(): `any`

Defined in: [webpack/types.d.ts:10788](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10788)

##### Returns

`any`

#### Inherited from

[`Module`](Module.md).[`errors`](Module.md#errors)

***

### exportsArgument

#### Get Signature

> **get** **exportsArgument**(): `string`

Defined in: [webpack/types.d.ts:10675](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10675)

##### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`exportsArgument`](Module.md#exportsargument)

***

### hasEqualsChunks

#### Get Signature

> **get** **hasEqualsChunks**(): `any`

Defined in: [webpack/types.d.ts:10786](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10786)

##### Returns

`any`

#### Inherited from

[`Module`](Module.md).[`hasEqualsChunks`](Module.md#hasequalschunks)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: [webpack/types.d.ts:10650](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10650)

##### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`hash`](Module.md#hash)

***

### isUsed

#### Get Signature

> **get** **isUsed**(): `any`

Defined in: [webpack/types.d.ts:10787](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10787)

##### Returns

`any`

#### Inherited from

[`Module`](Module.md).[`isUsed`](Module.md#isused)

***

### moduleArgument

#### Get Signature

> **get** **moduleArgument**(): `string`

Defined in: [webpack/types.d.ts:10676](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10676)

##### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`moduleArgument`](Module.md#moduleargument)

***

### optimizationBailout

#### Get Signature

> **get** **optimizationBailout**(): (`string` | (`requestShortener`) => `string`)\[]

Defined in: [webpack/types.d.ts:10662](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10662)

##### Deprecated

##### Returns

(`string` | (`requestShortener`) => `string`)\[]

#### Inherited from

[`Module`](Module.md).[`optimizationBailout`](Module.md#optimizationbailout)

***

### optional

#### Get Signature

> **get** **optional**(): `boolean`

Defined in: [webpack/types.d.ts:10666](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10666)

##### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`optional`](Module.md#optional)

***

### renderedHash

#### Get Signature

> **get** **renderedHash**(): `string`

Defined in: [webpack/types.d.ts:10651](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10651)

##### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`renderedHash`](Module.md#renderedhash)

***

### usedExports

#### Get Signature

> **get** **usedExports**(): `boolean` | `SortableSet`<`string`>

Defined in: [webpack/types.d.ts:10657](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10657)

##### Returns

`boolean` | `SortableSet`<`string`>

#### Inherited from

[`ModuleChunkLoadingRuntimeModule`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule).[`usedExports`](../webpack/namespaces/export=/namespaces/esm/classes/ModuleChunkLoadingRuntimeModule)

***

### warnings

#### Get Signature

> **get** **warnings**(): `any`

Defined in: [webpack/types.d.ts:10789](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10789)

##### Returns

`any`

#### Inherited from

[`Module`](Module.md).[`warnings`](Module.md#warnings)

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [webpack/types.d.ts:4118](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4118)

Adds a DependencyBlock to DependencyBlock relationship.
This is used for when a Module has a AsyncDependencyBlock tie (for code-splitting)

#### Parameters

##### block

[`AsyncDependenciesBlock`](AsyncDependenciesBlock.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addBlock`](Module.md#addblock)

***

### addCacheDependencies()

> **addCacheDependencies**(`fileDependencies`, `contextDependencies`, `missingDependencies`, `buildDependencies`): `void`

Defined in: [webpack/types.d.ts:10780](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10780)

#### Parameters

##### fileDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet)<`string`>

##### contextDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet)<`string`>

##### missingDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet)<`string`>

##### buildDependencies

[`LazySet`](../webpack/namespaces/export=/namespaces/util/classes/LazySet)<`string`>

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addCacheDependencies`](Module.md#addcachedependencies)

***

### addChunk()

> **addChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10667](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10667)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`addChunk`](Module.md#addchunk)

***

### addCodeGenerationDependency()

> **addCodeGenerationDependency**(`codeGenerationDependency`): `void`

Defined in: [webpack/types.d.ts:10679](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10679)

#### Parameters

##### codeGenerationDependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addCodeGenerationDependency`](Module.md#addcodegenerationdependency)

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

[`Module`](Module.md).[`addDependency`](Module.md#adddependency)

***

### addError()

> **addError**(`error`): `void`

Defined in: [webpack/types.d.ts:10683](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10683)

#### Parameters

##### error

[`WebpackError`](WebpackError.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addError`](Module.md#adderror)

***

### addPresentationalDependency()

> **addPresentationalDependency**(`presentationalDependency`): `void`

Defined in: [webpack/types.d.ts:10678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10678)

#### Parameters

##### presentationalDependency

[`Dependency`](Dependency.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addPresentationalDependency`](Module.md#addpresentationaldependency)

***

### addWarning()

> **addWarning**(`warning`): `void`

Defined in: [webpack/types.d.ts:10680](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10680)

#### Parameters

##### warning

[`WebpackError`](WebpackError.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`addWarning`](Module.md#addwarning)

***

### build()

> **build**(`options`, `compilation`, `resolver`, `fs`, `callback`): `void`

Defined in: [webpack/types.d.ts:10724](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10724)

#### Parameters

##### options

`WebpackOptionsNormalizedWithDefaults`

##### compilation

[`Compilation`](Compilation.md)

##### resolver

`ResolverWithOptions`

##### fs

[`InputFileSystem`](../interfaces/InputFileSystem)

##### callback

(`err?`) => `void`

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`build`](Module.md#build)

***

### chunkCondition()

> **chunkCondition**(`chunk`, `compilation`): `boolean`

Defined in: [webpack/types.d.ts:10759](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10759)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### compilation

[`Compilation`](Compilation.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`chunkCondition`](Module.md#chunkcondition)

***

### cleanupForCache()

> **cleanupForCache**(): `void`

Defined in: [webpack/types.d.ts:10778](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10778)

Assuming this module is in the cache. Remove internal references to allow freeing some memory.

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`cleanupForCache`](Module.md#cleanupforcache)

***

### clearDependenciesAndBlocks()

> **clearDependenciesAndBlocks**(): `void`

Defined in: [webpack/types.d.ts:4125](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4125)

Removes all dependencies and blocks

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`clearDependenciesAndBlocks`](Module.md#cleardependenciesandblocks)

***

### clearWarningsAndErrors()

> **clearWarningsAndErrors**(): `void`

Defined in: [webpack/types.d.ts:10690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10690)

removes all warnings and errors

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`clearWarningsAndErrors`](Module.md#clearwarningsanderrors)

***

### codeGeneration()

> **codeGeneration**(`context`): `CodeGenerationResult`

Defined in: [webpack/types.d.ts:10758](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10758)

#### Parameters

##### context

`CodeGenerationContext`

#### Returns

`CodeGenerationResult`

#### Inherited from

[`Module`](Module.md).[`codeGeneration`](Module.md#codegeneration)

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

[`Module`](Module.md).[`deserialize`](Module.md#deserialize)

***

### getChunks()

> **getChunks**(): [`Chunk`](Chunk.md)\[]

Defined in: [webpack/types.d.ts:10671](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10671)

#### Returns

[`Chunk`](Chunk.md)\[]

#### Inherited from

[`Module`](Module.md).[`getChunks`](Module.md#getchunks)

***

### getConcatenationBailoutReason()

> **getConcatenationBailoutReason**(`context`): `string`

Defined in: [webpack/types.d.ts:10754](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10754)

#### Parameters

##### context

`ConcatenationBailoutReasonContext`

#### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`getConcatenationBailoutReason`](Module.md#getconcatenationbailoutreason)

***

### getErrors()

> **getErrors**(): `Iterable`<[`WebpackError`](WebpackError.md), `any`, `any`>

Defined in: [webpack/types.d.ts:10684](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10684)

#### Returns

`Iterable`<[`WebpackError`](WebpackError.md), `any`, `any`>

#### Inherited from

[`Module`](Module.md).[`getErrors`](Module.md#geterrors)

***

### getExportsType()

> **getExportsType**(`moduleGraph`, `strict?`): `ExportsType`

Defined in: [webpack/types.d.ts:10677](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10677)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### strict?

`boolean`

#### Returns

`ExportsType`

#### Inherited from

[`Module`](Module.md).[`getExportsType`](Module.md#getexportstype)

***

### getNumberOfChunks()

> **getNumberOfChunks**(): `number`

Defined in: [webpack/types.d.ts:10672](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10672)

#### Returns

`number`

#### Inherited from

[`Module`](Module.md).[`getNumberOfChunks`](Module.md#getnumberofchunks)

***

### getNumberOfErrors()

> **getNumberOfErrors**(): `number`

Defined in: [webpack/types.d.ts:10685](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10685)

#### Returns

`number`

#### Inherited from

[`Module`](Module.md).[`getNumberOfErrors`](Module.md#getnumberoferrors)

***

### getNumberOfWarnings()

> **getNumberOfWarnings**(): `number`

Defined in: [webpack/types.d.ts:10682](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10682)

#### Returns

`number`

#### Inherited from

[`Module`](Module.md).[`getNumberOfWarnings`](Module.md#getnumberofwarnings)

***

### getRootBlock()

> **getRootBlock**(): `DependenciesBlock`

Defined in: [webpack/types.d.ts:4112](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L4112)

#### Returns

`DependenciesBlock`

#### Inherited from

[`Module`](Module.md).[`getRootBlock`](Module.md#getrootblock)

***

### getSideEffectsConnectionState()

> **getSideEffectsConnectionState**(`moduleGraph`): `ConnectionState`

Defined in: [webpack/types.d.ts:10757](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10757)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

#### Returns

`ConnectionState`

#### Inherited from

[`Module`](Module.md).[`getSideEffectsConnectionState`](Module.md#getsideeffectsconnectionstate)

***

### getSourceBasicTypes()

> **getSourceBasicTypes**(): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:10740](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10740)

Basic source types are high-level categories like javascript, css, webassembly, etc.
We only have built-in knowledge about the javascript basic type here; other basic types may be
added or changed over time by generators and do not need to be handled or detected here.
Some modules, e.g. RemoteModule, may return non-basic source types like "remote" and "share-init"
from getSourceTypes(), but their generated output is still JavaScript, i.e. their basic type is JS.

#### Returns

`ReadonlySet`<`string`>

#### Inherited from

[`Module`](Module.md).[`getSourceBasicTypes`](Module.md#getsourcebasictypes)

***

### getSourceTypes()

> **getSourceTypes**(): `ReadonlySet`<`string`>

Defined in: [webpack/types.d.ts:10731](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10731)

#### Returns

`ReadonlySet`<`string`>

#### Inherited from

[`Module`](Module.md).[`getSourceTypes`](Module.md#getsourcetypes)

***

### getUnsafeCacheData()

> **getUnsafeCacheData**(): `UnsafeCacheData`

Defined in: [webpack/types.d.ts:10773](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10773)

Module should be unsafe cached. Get data that's needed for that.
This data will be passed to restoreFromUnsafeCache later.

#### Returns

`UnsafeCacheData`

#### Inherited from

[`Module`](Module.md).[`getUnsafeCacheData`](Module.md#getunsafecachedata)

***

### getWarnings()

> **getWarnings**(): `Iterable`<[`WebpackError`](WebpackError.md), `any`, `any`>

Defined in: [webpack/types.d.ts:10681](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10681)

#### Returns

`Iterable`<[`WebpackError`](WebpackError.md), `any`, `any`>

#### Inherited from

[`Module`](Module.md).[`getWarnings`](Module.md#getwarnings)

***

### hasChunkCondition()

> **hasChunkCondition**(): `boolean`

Defined in: [webpack/types.d.ts:10760](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10760)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`hasChunkCondition`](Module.md#haschunkcondition)

***

### hasReasonForChunk()

> **hasReasonForChunk**(`chunk`, `moduleGraph`, `chunkGraph`): `boolean`

Defined in: [webpack/types.d.ts:10702](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10702)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`hasReasonForChunk`](Module.md#hasreasonforchunk)

***

### hasReasons()

> **hasReasons**(`moduleGraph`, `runtime`): `boolean`

Defined in: [webpack/types.d.ts:10707](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10707)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

##### runtime

`RuntimeSpec`

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`hasReasons`](Module.md#hasreasons)

***

### identifier()

> **identifier**(): `string`

Defined in: [webpack/types.d.ts:10722](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10722)

#### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`identifier`](Module.md#identifier)

***

### invalidateBuild()

> **invalidateBuild**(): `void`

Defined in: [webpack/types.d.ts:10721](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10721)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`invalidateBuild`](Module.md#invalidatebuild)

***

### isAccessibleInChunk()

> **isAccessibleInChunk**(`chunkGraph`, `chunk`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10692](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10692)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### chunk

[`Chunk`](Chunk.md)

##### ignoreChunk?

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isAccessibleInChunk`](Module.md#isaccessibleinchunk)

***

### isAccessibleInChunkGroup()

> **isAccessibleInChunkGroup**(`chunkGraph`, `chunkGroup`, `ignoreChunk?`): `boolean`

Defined in: [webpack/types.d.ts:10697](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10697)

#### Parameters

##### chunkGraph

[`ChunkGraph`](ChunkGraph.md)

##### chunkGroup

[`ChunkGroup`](ChunkGroup.md)

##### ignoreChunk?

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isAccessibleInChunkGroup`](Module.md#isaccessibleinchunkgroup)

***

### isEntryModule()

> **isEntryModule**(): `boolean`

Defined in: [webpack/types.d.ts:10670](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10670)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isEntryModule`](Module.md#isentrymodule)

***

### isInChunk()

> **isInChunk**(`chunk`): `boolean`

Defined in: [webpack/types.d.ts:10669](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10669)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isInChunk`](Module.md#isinchunk)

***

### isOptional()

> **isOptional**(`moduleGraph`): `boolean`

Defined in: [webpack/types.d.ts:10691](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10691)

#### Parameters

##### moduleGraph

[`ModuleGraph`](ModuleGraph.md)

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isOptional`](Module.md#isoptional)

***

### isProvided()

> **isProvided**(`exportName`): `boolean`

Defined in: [webpack/types.d.ts:10674](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10674)

#### Parameters

##### exportName

`string`

#### Returns

`boolean`

#### Inherited from

[`Module`](Module.md).[`isProvided`](Module.md#isprovided)

***

### libIdent()

> **libIdent**(`options`): `string`

Defined in: [webpack/types.d.ts:10752](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10752)

#### Parameters

##### options

`LibIdentOptions`

#### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`libIdent`](Module.md#libident)

***

### nameForCondition()

> **nameForCondition**(): `string`

Defined in: [webpack/types.d.ts:10753](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10753)

#### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`nameForCondition`](Module.md#nameforcondition)

***

### needBuild()

> **needBuild**(`context`, `callback`): `void`

Defined in: [webpack/types.d.ts:10708](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10708)

#### Parameters

##### context

`NeedBuildContext`

##### callback

(`err?`, `needBuild?`) => `void`

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`needBuild`](Module.md#needbuild)

***

### ~~needRebuild()~~

> **needRebuild**(`fileTimestamps`, `contextTimestamps`): `boolean`

Defined in: [webpack/types.d.ts:10717](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10717)

Use needBuild instead

#### Parameters

##### fileTimestamps

`Map`<`string`, `number`>

##### contextTimestamps

`Map`<`string`, `number`>

#### Returns

`boolean`

#### Deprecated

#### Inherited from

[`Module`](Module.md).[`needRebuild`](Module.md#needrebuild)

***

### originalSource()

> **originalSource**(): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:10779](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10779)

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

#### Inherited from

[`Module`](Module.md).[`originalSource`](Module.md#originalsource)

***

### readableIdentifier()

> **readableIdentifier**(`requestShortener`): `string`

Defined in: [webpack/types.d.ts:10723](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10723)

#### Parameters

##### requestShortener

`RequestShortener`

#### Returns

`string`

#### Inherited from

[`Module`](Module.md).[`readableIdentifier`](Module.md#readableidentifier)

***

### removeChunk()

> **removeChunk**(`chunk`): `void`

Defined in: [webpack/types.d.ts:10668](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10668)

#### Parameters

##### chunk

[`Chunk`](Chunk.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`removeChunk`](Module.md#removechunk)

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

[`Module`](Module.md).[`removeDependency`](Module.md#removedependency)

***

### restoreFromUnsafeCache()

> **restoreFromUnsafeCache**(`unsafeCacheData`, `normalModuleFactory`): `void`

Defined in: [webpack/types.d.ts:5704](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L5704)

restore unsafe cache data

#### Parameters

##### unsafeCacheData

`UnsafeCacheData`

##### normalModuleFactory

`NormalModuleFactory`

#### Returns

`void`

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

[`Module`](Module.md).[`serialize`](Module.md#serialize)

***

### size()

> **size**(`type?`): `number`

Defined in: [webpack/types.d.ts:10751](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10751)

#### Parameters

##### type?

`string`

#### Returns

`number`

#### Inherited from

[`Module`](Module.md).[`size`](Module.md#size)

***

### ~~source()~~

> **source**(`dependencyTemplates`, `runtimeTemplate`, `type?`): [`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:10746](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10746)

Use codeGeneration() instead

#### Parameters

##### dependencyTemplates

`DependencyTemplates`

##### runtimeTemplate

`RuntimeTemplate`

##### type?

`string`

#### Returns

[`Source`](../webpack/namespaces/export=/namespaces/sources/classes/Source)

#### Deprecated

#### Inherited from

[`Module`](Module.md).[`source`](Module.md#source)

***

### updateCacheModule()

> **updateCacheModule**(`module`): `void`

Defined in: [webpack/types.d.ts:10767](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L10767)

Assuming this module is in the cache. Update the (cached) module with
the fresh module from the factory. Usually updates internal references
and properties.

#### Parameters

##### module

[`Module`](Module.md)

#### Returns

`void`

#### Inherited from

[`Module`](Module.md).[`updateCacheModule`](Module.md#updatecachemodule)

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

[`Module`](Module.md).[`updateHash`](Module.md#updatehash)
