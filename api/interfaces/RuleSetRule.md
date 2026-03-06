---
title: RuleSetRule
---

[**webpack**](../README.md)

***

[webpack](../README.md) / RuleSetRule

# Interface: RuleSetRule

Defined in: [declarations/WebpackOptions.d.ts:1459](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1459)

A rule description with conditions and effects for modules.

## Properties

### assert?

> `optional` **assert**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1463](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1463)

Match on import assertions of the dependency.

#### Index Signature

\[`k`: `string`\]: `RuleSetConditionOrConditions`

***

### compiler?

> `optional` **compiler**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1469](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1469)

Match the child compiler name.

***

### dependency?

> `optional` **dependency**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1473](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1473)

Match dependency type.

***

### descriptionData?

> `optional` **descriptionData**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1477](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1477)

Match values of properties in the description file (usually package.json).

#### Index Signature

\[`k`: `string`\]: `RuleSetConditionOrConditions`

***

### enforce?

> `optional` **enforce**: `"pre"` \| `"post"`

Defined in: [declarations/WebpackOptions.d.ts:1483](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1483)

Enforce this rule as pre or post step.

***

### exclude?

> `optional` **exclude**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1487](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1487)

Shortcut for resource.exclude.

***

### extractSourceMap?

> `optional` **extractSourceMap**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1491](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1491)

Enable/Disable extracting source map.

***

### generator?

> `optional` **generator**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1495](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1495)

The options for the module generator.

#### Index Signature

\[`k`: `string`\]: `any`

***

### include?

> `optional` **include**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1501](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1501)

Shortcut for resource.include.

***

### issuer?

> `optional` **issuer**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1505](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1505)

Match the issuer of the module (The module pointing to this module).

***

### issuerLayer?

> `optional` **issuerLayer**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1509](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1509)

Match layer of the issuer of this module (The module pointing to this module).

***

### layer?

> `optional` **layer**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1513](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1513)

Specifies the layer in which the module should be placed in.

***

### loader?

> `optional` **loader**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1517](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1517)

Shortcut for use.loader.

***

### mimetype?

> `optional` **mimetype**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1521](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1521)

Match module mimetype when load from Data URI.

***

### oneOf?

> `optional` **oneOf**: (`Falsy` \| `RuleSetRule`)[]

Defined in: [declarations/WebpackOptions.d.ts:1525](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1525)

Only execute the first matching rule in this array.

***

### options?

> `optional` **options**: `RuleSetLoaderOptions`

Defined in: [declarations/WebpackOptions.d.ts:1529](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1529)

Shortcut for use.options.

***

### parser?

> `optional` **parser**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1533](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1533)

Options for parsing.

#### Index Signature

\[`k`: `string`\]: `any`

***

### realResource?

> `optional` **realResource**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1539](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1539)

Match the real resource path of the module.

***

### resolve?

> `optional` **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [declarations/WebpackOptions.d.ts:1543](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1543)

Options for the resolver.

***

### resource?

> `optional` **resource**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1547](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1547)

Match the resource path of the module.

***

### resourceFragment?

> `optional` **resourceFragment**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1551](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1551)

Match the resource fragment of the module.

***

### resourceQuery?

> `optional` **resourceQuery**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1555](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1555)

Match the resource query of the module.

***

### rules?

> `optional` **rules**: (`Falsy` \| `RuleSetRule`)[]

Defined in: [declarations/WebpackOptions.d.ts:1559](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1559)

Match and execute these rules when this rule is matched.

***

### scheme?

> `optional` **scheme**: `RuleSetConditionOrConditions`

Defined in: [declarations/WebpackOptions.d.ts:1563](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1563)

Match module scheme.

***

### sideEffects?

> `optional` **sideEffects**: `boolean`

Defined in: [declarations/WebpackOptions.d.ts:1567](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1567)

Flags a module as with or without side effects.

***

### test?

> `optional` **test**: `RuleSetConditionOrConditionsAbsolute`

Defined in: [declarations/WebpackOptions.d.ts:1571](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1571)

Shortcut for resource.test.

***

### type?

> `optional` **type**: `string`

Defined in: [declarations/WebpackOptions.d.ts:1575](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1575)

Module type to use for the module.

***

### use?

> `optional` **use**: [`RuleSetUse`](../type-aliases/RuleSetUse.md)

Defined in: [declarations/WebpackOptions.d.ts:1579](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1579)

Modifiers applied to the module when rule is matched.

***

### with?

> `optional` **with**: `object`

Defined in: [declarations/WebpackOptions.d.ts:1583](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/declarations/WebpackOptions.d.ts#L1583)

Match on import attributes of the dependency.

#### Index Signature

\[`k`: `string`\]: `RuleSetConditionOrConditions`
