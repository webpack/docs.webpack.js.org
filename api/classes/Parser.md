---
title: Parser
---

[webpack](../globals) / Parser

# Class: Parser

Defined in: [webpack/types.d.ts:13962](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13962)

## Extended by

* [`JavascriptParser`](../webpack/namespaces/javascript/classes/JavascriptParser)

## Constructors

### Constructor

> **new Parser**(): `ParserClass`

Defined in: [webpack/types.d.ts:13963](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13963)

#### Returns

`ParserClass`

## Methods

### parse()

> **parse**(`source`, `state`): [`ParserState`](../type-aliases/ParserState)

Defined in: [webpack/types.d.ts:13964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13964)

#### Parameters

##### source

`string` | `Buffer`<`ArrayBufferLike`> | `PreparsedAst`

##### state

[`ParserState`](../type-aliases/ParserState)

#### Returns

[`ParserState`](../type-aliases/ParserState)
