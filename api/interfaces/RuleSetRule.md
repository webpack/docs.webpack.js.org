---
title: RuleSetRule
---

[webpack](../globals) / RuleSetRule

# Interface: RuleSetRule

Defined in: [webpack/types.d.ts:16201](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16201)

A rule description with conditions and effects for modules.

## Properties

### assert?

> `optional` **assert**: `object`

Defined in: [webpack/types.d.ts:16205](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16205)

Match on import assertions of the dependency.

#### Index Signature

\[`index`: `string`]: `RuleSetConditionOrConditions`

***

### compiler?

> `optional` **compiler**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16210](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16210)

Match the child compiler name.

***

### dependency?

> `optional` **dependency**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16220](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16220)

Match dependency type.

***

### descriptionData?

> `optional` **descriptionData**: `object`

Defined in: [webpack/types.d.ts:16230](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16230)

Match values of properties in the description file (usually package.json).

#### Index Signature

\[`index`: `string`]: `RuleSetConditionOrConditions`

***

### enforce?

> `optional` **enforce**: `"pre"` | `"post"`

Defined in: [webpack/types.d.ts:16235](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16235)

Enforce this rule as pre or post step.

***

### exclude?

> `optional` **exclude**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16240](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16240)

Shortcut for resource.exclude.

***

### extractSourceMap?

> `optional` **extractSourceMap**: `boolean`

Defined in: [webpack/types.d.ts:16250](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16250)

Enable/Disable extracting source map.

***

### generator?

> `optional` **generator**: `object`

Defined in: [webpack/types.d.ts:16255](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16255)

The options for the module generator.

#### Index Signature

\[`index`: `string`]: `any`

***

### include?

> `optional` **include**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16260](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16260)

Shortcut for resource.include.

***

### issuer?

> `optional` **issuer**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16270](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16270)

Match the issuer of the module (The module pointing to this module).

***

### issuerLayer?

> `optional` **issuerLayer**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16280](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16280)

Match layer of the issuer of this module (The module pointing to this module).

***

### layer?

> `optional` **layer**: `string`

Defined in: [webpack/types.d.ts:16290](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16290)

Specifies the layer in which the module should be placed in.

***

### loader?

> `optional` **loader**: `string`

Defined in: [webpack/types.d.ts:16295](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16295)

Shortcut for use.loader.

***

### mimetype?

> `optional` **mimetype**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16300](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16300)

Match module mimetype when load from Data URI.

***

### oneOf?

> `optional` **oneOf**: (`false` | `""` | `0` | `RuleSetRule`)\[]

Defined in: [webpack/types.d.ts:16310](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16310)

Only execute the first matching rule in this array.

***

### options?

> `optional` **options**: `string` | {\[`index`: `string`]: `any`; }

Defined in: [webpack/types.d.ts:16315](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16315)

Shortcut for use.options.

***

### parser?

> `optional` **parser**: `object`

Defined in: [webpack/types.d.ts:16320](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16320)

Options for parsing.

#### Index Signature

\[`index`: `string`]: `any`

***

### realResource?

> `optional` **realResource**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16325)

Match the real resource path of the module.

***

### resolve?

> `optional` **resolve**: [`ResolveOptions`](ResolveOptions.md)

Defined in: [webpack/types.d.ts:16335](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16335)

Options for the resolver.

***

### resource?

> `optional` **resource**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16340](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16340)

Match the resource path of the module.

***

### resourceFragment?

> `optional` **resourceFragment**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16350](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16350)

Match the resource fragment of the module.

***

### resourceQuery?

> `optional` **resourceQuery**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16360](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16360)

Match the resource query of the module.

***

### rules?

> `optional` **rules**: (`false` | `""` | `0` | `RuleSetRule`)\[]

Defined in: [webpack/types.d.ts:16370](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16370)

Match and execute these rules when this rule is matched.

***

### scheme?

> `optional` **scheme**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditions` | [`RuleSetCondition`](../type-aliases/RuleSetCondition)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16375](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16375)

Match module scheme.

***

### sideEffects?

> `optional` **sideEffects**: `boolean`

Defined in: [webpack/types.d.ts:16385](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16385)

Flags a module as with or without side effects.

***

### test?

> `optional` **test**: `string` | [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) | `RuleSetLogicalConditionsAbsolute` | [`RuleSetConditionAbsolute`](../type-aliases/RuleSetConditionAbsolute)\[] | (`value`) => `boolean`

Defined in: [webpack/types.d.ts:16390](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16390)

Shortcut for resource.test.

***

### type?

> `optional` **type**: `string`

Defined in: [webpack/types.d.ts:16400](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16400)

Module type to use for the module.

***

### use?

> `optional` **use**: `string` | `RuleSetUseFunction` | { `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; } | (`string` | `false` | `0` | `RuleSetUseFunction` | { `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; })\[]

Defined in: [webpack/types.d.ts:16405](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16405)

Modifiers applied to the module when rule is matched.

#### Type Declaration

`string`

`RuleSetUseFunction`

{ `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; }

#### ident?

> `optional` **ident**: `string`

Unique loader options identifier.

#### loader?

> `optional` **loader**: `string`

Loader name.

#### options?

> `optional` **options**: `string` | {\[`index`: `string`]: `any`; }

Loader options.

(`string` | `false` | `0` | `RuleSetUseFunction` | { `ident?`: `string`; `loader?`: `string`; `options?`: `string` | {\[`index`: `string`]: `any`; }; })\[]

***

### with?

> `optional` **with**: `object`

Defined in: [webpack/types.d.ts:16448](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L16448)

Match on import attributes of the dependency.

#### Index Signature

\[`index`: `string`]: `RuleSetConditionOrConditions`
