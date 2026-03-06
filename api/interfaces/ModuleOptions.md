---
title: ModuleOptions
---

[webpack](../globals) / ModuleOptions

# Interface: ModuleOptions

Defined in: [webpack/types.d.ts:11256](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11256)

Options affecting the normal modules (`NormalModuleFactory`).

## Properties

### defaultRules?

> `optional` **defaultRules**: (`false` | `""` | `0` | `"..."` | [`RuleSetRule`](RuleSetRule.md))\[]

Defined in: [webpack/types.d.ts:11260](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11260)

An array of rules applied by default for modules.

***

### exprContextCritical?

> `optional` **exprContextCritical**: `boolean`

Defined in: [webpack/types.d.ts:11265](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11265)

Enable warnings for full dynamic dependencies.

***

### exprContextRecursive?

> `optional` **exprContextRecursive**: `boolean`

Defined in: [webpack/types.d.ts:11270](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11270)

Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'.

***

### exprContextRegExp?

> `optional` **exprContextRegExp**: `boolean` | `RegExp`

Defined in: [webpack/types.d.ts:11275](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11275)

Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'.

***

### exprContextRequest?

> `optional` **exprContextRequest**: `string`

Defined in: [webpack/types.d.ts:11280](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11280)

Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'.

***

### generator?

> `optional` **generator**: `GeneratorOptionsByModuleType`

Defined in: [webpack/types.d.ts:11285](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11285)

Specify options for each generator.

***

### noParse?

> `optional` **noParse**: `string` | `RegExp` | (`content`) => `boolean` | (`string` | `RegExp` | (`content`) => `boolean`)\[]

Defined in: [webpack/types.d.ts:11290](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11290)

Don't parse files matching. It's matched against the full resolved request.

***

### parser?

> `optional` **parser**: `ParserOptionsByModuleType`

Defined in: [webpack/types.d.ts:11299](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11299)

Specify options for each parser.

***

### rules?

> `optional` **rules**: (`false` | `""` | `0` | `"..."` | [`RuleSetRule`](RuleSetRule.md))\[]

Defined in: [webpack/types.d.ts:11304](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11304)

An array of rules applied for modules.

***

### strictExportPresence?

> `optional` **strictExportPresence**: `boolean`

Defined in: [webpack/types.d.ts:11309](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11309)

Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'.

***

### strictThisContextOnImports?

> `optional` **strictThisContextOnImports**: `boolean`

Defined in: [webpack/types.d.ts:11314](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11314)

Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'.

***

### unknownContextCritical?

> `optional` **unknownContextCritical**: `boolean`

Defined in: [webpack/types.d.ts:11319](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11319)

Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'.

***

### unknownContextRecursive?

> `optional` **unknownContextRecursive**: `boolean`

Defined in: [webpack/types.d.ts:11324](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11324)

Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'.

***

### unknownContextRegExp?

> `optional` **unknownContextRegExp**: `boolean` | `RegExp`

Defined in: [webpack/types.d.ts:11329](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11329)

Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'.

***

### unknownContextRequest?

> `optional` **unknownContextRequest**: `string`

Defined in: [webpack/types.d.ts:11334](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11334)

Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'.

***

### unsafeCache?

> `optional` **unsafeCache**: `boolean` | (`module`) => `boolean`

Defined in: [webpack/types.d.ts:11339](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11339)

Cache the resolving of module requests.

***

### wrappedContextCritical?

> `optional` **wrappedContextCritical**: `boolean`

Defined in: [webpack/types.d.ts:11344](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11344)

Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'.

***

### wrappedContextRecursive?

> `optional` **wrappedContextRecursive**: `boolean`

Defined in: [webpack/types.d.ts:11349](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11349)

Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'.

***

### wrappedContextRegExp?

> `optional` **wrappedContextRegExp**: `RegExp`

Defined in: [webpack/types.d.ts:11354](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L11354)

Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'.
