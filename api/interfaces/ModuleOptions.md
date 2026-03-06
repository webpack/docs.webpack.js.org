---
title: ModuleOptions
---

[**webpack**](../README.md)

***

[webpack](../README.md) / ModuleOptions

# Interface: ModuleOptions

Defined in: [declarations/WebpackOptions.d.ts:1378](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1378)

Options affecting the normal modules (`NormalModuleFactory`).

## Properties

### defaultRules?

> `optional` **defaultRules**: `RuleSetRules`

Defined in: [declarations/WebpackOptions.d.ts:1382](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1382)

An array of rules applied by default for modules.

***

### exprContextCritical?

> `optional` **exprContextCritical**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1386](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1386)

Enable warnings for full dynamic dependencies.

***

### exprContextRecursive?

> `optional` **exprContextRecursive**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1390](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1390)

Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.

***

### exprContextRegExp?

> `optional` **exprContextRegExp**: `boolean` \| `RegExp`

Defined in: [declarations/WebpackOptions.d.ts:1394](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1394)

Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.

***

### exprContextRequest?

> `optional` **exprContextRequest**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1398](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1398)

Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.

***

### generator?

> `optional` **generator**: `GeneratorOptionsByModuleType`

Defined in: [declarations/WebpackOptions.d.ts:1402](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1402)

Specify options for each generator.

***

### noParse?

> `optional` **noParse**: `NoParse`

Defined in: [declarations/WebpackOptions.d.ts:1406](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1406)

Don't parse files matching. It's matched against the full resolved request.

***

### parser?

> `optional` **parser**: `ParserOptionsByModuleType`

Defined in: [declarations/WebpackOptions.d.ts:1410](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1410)

Specify options for each parser.

***

### rules?

> `optional` **rules**: `RuleSetRules`

Defined in: [declarations/WebpackOptions.d.ts:1414](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1414)

An array of rules applied for modules.

***

### strictExportPresence?

> `optional` **strictExportPresence**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1418](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1418)

Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.

***

### strictThisContextOnImports?

> `optional` **strictThisContextOnImports**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1422](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1422)

Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.

***

### unknownContextCritical?

> `optional` **unknownContextCritical**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1426](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1426)

Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.

***

### unknownContextRecursive?

> `optional` **unknownContextRecursive**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1430](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1430)

Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.

***

### unknownContextRegExp?

> `optional` **unknownContextRegExp**: `boolean` \| `RegExp`

Defined in: [declarations/WebpackOptions.d.ts:1434](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1434)

Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.

***

### unknownContextRequest?

> `optional` **unknownContextRequest**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1438](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1438)

Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.

***

### unsafeCache?

> `optional` **unsafeCache**: `boolean` \| `UnsafeCachePredicate`

Defined in: [declarations/WebpackOptions.d.ts:1442](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1442)

Cache the resolving of module requests.

***

### wrappedContextCritical?

> `optional` **wrappedContextCritical**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1446](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1446)

Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.

***

### wrappedContextRecursive?

> `optional` **wrappedContextRecursive**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1450](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1450)

Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.

***

### wrappedContextRegExp?

> `optional` **wrappedContextRegExp**: `RegExp`

Defined in: [declarations/WebpackOptions.d.ts:1454](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1454)

Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.
