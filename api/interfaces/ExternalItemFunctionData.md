---
title: ExternalItemFunctionData
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ExternalItemFunctionData

# Interface: ExternalItemFunctionData

Defined in: [lib/ExternalModuleFactoryPlugin.js:36](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L36)

## Properties

### context

> **context**: `string`

Defined in: [lib/ExternalModuleFactoryPlugin.js:37](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L37)

the directory in which the request is placed

***

### contextInfo

> **contextInfo**: `ModuleFactoryCreateDataContextInfo`

Defined in: [lib/ExternalModuleFactoryPlugin.js:38](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L38)

contextual information

***

### dependencyType

> **dependencyType**: `string`

Defined in: [lib/ExternalModuleFactoryPlugin.js:39](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L39)

the category of the referencing dependency

***

### getResolve

> **getResolve**: [`ExternalItemFunctionDataGetResolve`](../type-aliases/ExternalItemFunctionDataGetResolve.md)

Defined in: [lib/ExternalModuleFactoryPlugin.js:40](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L40)

get a resolve function with the current resolver options

***

### request

> **request**: `string`

Defined in: [lib/ExternalModuleFactoryPlugin.js:41](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/lib/ExternalModuleFactoryPlugin.js#L41)

the request as written by the user in the require/import expression/statement
