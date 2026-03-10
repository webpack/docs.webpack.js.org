---
title: Template
---

[webpack](../globals) / Template

# Class: Template

Defined in: [webpack/types.d.ts:18613](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18613)

## Constructors

### Constructor

> **new Template**(): `Template`

Defined in: [webpack/types.d.ts:18614](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18614)

#### Returns

`Template`

## Properties

### NUMBER\_OF\_IDENTIFIER\_CONTINUATION\_CHARS

> `static` **NUMBER\_OF\_IDENTIFIER\_CONTINUATION\_CHARS**: `number`

Defined in: [webpack/types.d.ts:18642](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18642)

***

### NUMBER\_OF\_IDENTIFIER\_START\_CHARS

> `static` **NUMBER\_OF\_IDENTIFIER\_START\_CHARS**: `number`

Defined in: [webpack/types.d.ts:18643](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18643)

## Methods

### asString()

> `static` **asString**(`str`): `string`

Defined in: [webpack/types.d.ts:18624](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18624)

#### Parameters

##### str

`string` | `string`\[]

#### Returns

`string`

***

### getFunctionContent()

> `static` **getFunctionContent**(`fn`): `string`

Defined in: [webpack/types.d.ts:18615](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18615)

#### Parameters

##### fn

`Stringable`

#### Returns

`string`

***

### getModulesArrayBounds()

> `static` **getModulesArrayBounds**(`modules`): `false` | \[`number`, `number`]

Defined in: [webpack/types.d.ts:18625](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18625)

#### Parameters

##### modules

`WithId`\[]

#### Returns

`false` | \[`number`, `number`]

***

### indent()

> `static` **indent**(`s`): `string`

Defined in: [webpack/types.d.ts:18622](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18622)

#### Parameters

##### s

`string` | `string`\[]

#### Returns

`string`

***

### numberToIdentifier()

> `static` **numberToIdentifier**(`n`): `string`

Defined in: [webpack/types.d.ts:18620](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18620)

#### Parameters

##### n

`number`

#### Returns

`string`

***

### numberToIdentifierContinuation()

> `static` **numberToIdentifierContinuation**(`n`): `string`

Defined in: [webpack/types.d.ts:18621](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18621)

#### Parameters

##### n

`number`

#### Returns

`string`

***

### prefix()

> `static` **prefix**(`s`, `prefix`): `string`

Defined in: [webpack/types.d.ts:18623](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18623)

#### Parameters

##### s

`string` | `string`\[]

##### prefix

`string`

#### Returns

`string`

***

### renderChunkModules()

> `static` **renderChunkModules**(`renderContext`, `modules`, `renderModule`, `prefix?`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:18626](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18626)

#### Parameters

##### renderContext

`ChunkRenderContextJavascriptModulesPlugin`

##### modules

[`Module`](Module.md)\[]

##### renderModule

(`module`, `renderInArray?`) => [`Source`](../webpack/namespaces/sources/classes/Source)

##### prefix?

`string`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### renderChunkRuntimeModules()

> `static` **renderChunkRuntimeModules**(`runtimeModules`, `renderContext`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:18638](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18638)

#### Parameters

##### runtimeModules

[`RuntimeModule`](RuntimeModule.md)\[]

##### renderContext

`RenderContextJavascriptModulesPlugin`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### renderRuntimeModules()

> `static` **renderRuntimeModules**(`runtimeModules`, `renderContext`): [`Source`](../webpack/namespaces/sources/classes/Source)

Defined in: [webpack/types.d.ts:18632](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18632)

#### Parameters

##### runtimeModules

[`RuntimeModule`](RuntimeModule.md)\[]

##### renderContext

`RenderContextJavascriptModulesPlugin` & `object`

#### Returns

[`Source`](../webpack/namespaces/sources/classes/Source)

***

### toComment()

> `static` **toComment**(`str`): `string`

Defined in: [webpack/types.d.ts:18617](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18617)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### toIdentifier()

> `static` **toIdentifier**(`str`): `string`

Defined in: [webpack/types.d.ts:18616](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18616)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### toNormalComment()

> `static` **toNormalComment**(`str`): `string`

Defined in: [webpack/types.d.ts:18618](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18618)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### toPath()

> `static` **toPath**(`str`): `string`

Defined in: [webpack/types.d.ts:18619](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L18619)

#### Parameters

##### str

`string`

#### Returns

`string`
