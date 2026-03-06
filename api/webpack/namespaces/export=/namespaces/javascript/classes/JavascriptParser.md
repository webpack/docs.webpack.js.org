---
title: JavascriptParser
---

[webpack](../../../../../../globals.md) / [export=](../../../index.md) / [javascript](../index.md) / JavascriptParser

# Class: JavascriptParser

Defined in: [webpack/types.d.ts:7168](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7168)

## Extends

- [`Parser`](../../../../../../classes/Parser.md)

## Constructors

### Constructor

> **new JavascriptParser**(`sourceType?`, `options?`): `JavascriptParser`

Defined in: [webpack/types.d.ts:7169](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7169)

#### Parameters

##### sourceType?

`"auto"` | `"module"` | `"script"`

##### options?

###### parse?

(`code`, `options`) => `ParseResult`

#### Returns

`JavascriptParser`

#### Overrides

[`Parser`](../../../../../../classes/Parser.md).[`constructor`](../../../../../../classes/Parser.md#constructor)

## Properties

### comments?

> `optional` **comments**: `CommentJavascriptParser`[]

Defined in: [webpack/types.d.ts:7615](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7615)

***

### currentTagData?

> `optional` **currentTagData**: `Record`\<`string`, `any`\> \| `CommonJsImportSettings` \| `CompatibilitySettings` \| `HarmonySettings` \| `HarmonySpecifierGuards` \| `ImportSettings` \| [`TopLevelSymbol`](../../optimize/namespaces/InnerGraph/classes/TopLevelSymbol.md)

Defined in: [webpack/types.d.ts:7678](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7678)

***

### destructuringAssignmentProperties?

> `optional` **destructuringAssignmentProperties**: `WeakMap`\<`Expression`, `Set`\<`DestructuringAssignmentProperty`\>\>

Defined in: [webpack/types.d.ts:7674](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7674)

***

### hooks

> **hooks**: `Readonly`\<\{ `assign`: `HookMap`\<`SyncBailHook`\<\[`AssignmentExpression`\], `boolean` \| `void`\>\>; `assignMemberChain`: `HookMap`\<`SyncBailHook`\<\[`AssignmentExpression`, `string`[]\], `boolean` \| `void`\>\>; `binaryExpression`: `SyncBailHook`\<\[`BinaryExpression`\], `boolean` \| `void`\>; `blockPreStatement`: `SyncBailHook`\<\[`ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportAllDeclaration` \| `FunctionDeclaration` \| `MaybeNamedFunctionDeclaration` \| `VariableDeclaration` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `ExportDefaultDeclaration`\], `boolean` \| `void`\>; `call`: `HookMap`\<`SyncBailHook`\<\[`CallExpression`\], `boolean` \| `void`\>\>; `callMemberChain`: `HookMap`\<`SyncBailHook`\<\[`CallExpression`, `string`[], `boolean`[], \[`number`, `number`\][]\], `boolean` \| `void`\>\>; `callMemberChainOfCallMemberChain`: `HookMap`\<`SyncBailHook`\<\[`CallExpression`, `string`[], `CallExpression`, `string`[], \[`number`, `number`\][]\], `boolean` \| `void`\>\>; `canRename`: `HookMap`\<`SyncBailHook`\<\[`Expression`\], `boolean` \| `void`\>\>; `classBodyElement`: `SyncBailHook`\<\[`StaticBlock` \| `MethodDefinition` \| `PropertyDefinition`, `ClassExpression` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration`\], `boolean` \| `void`\>; `classBodyValue`: `SyncBailHook`\<\[`Expression`, `MethodDefinition` \| `PropertyDefinition`, `ClassExpression` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration`\], `boolean` \| `void`\>; `classExtendsExpression`: `SyncBailHook`\<\[`Expression`, `ClassExpression` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration`\], `boolean` \| `void`\>; `collectDestructuringAssignmentProperties`: `SyncBailHook`\<\[`Expression`\], `boolean` \| `void`\>; `collectGuards`: `SyncBailHook`\<\[`Expression`\], `void` \| (`walk`) => `void`\>; `declarator`: `SyncBailHook`\<\[`VariableDeclarator`, `Statement`\], `boolean` \| `void`\>; `evaluate`: `HookMap`\<`SyncBailHook`\<\[`ImportExpressionImport` \| `UnaryExpression` \| `ArrayExpression` \| `ArrowFunctionExpression` \| `AssignmentExpression` \| `AwaitExpression` \| `BinaryExpression` \| `SimpleCallExpression` \| `NewExpression` \| `ChainExpression` \| `ClassExpression` \| `ConditionalExpression` \| `FunctionExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `LogicalExpression` \| `MemberExpression` \| `MetaProperty` \| `ObjectExpression` \| `SequenceExpression` \| `TaggedTemplateExpression` \| `TemplateLiteral` \| `ThisExpression` \| `UpdateExpression` \| `YieldExpression` \| `SpreadElement` \| `PrivateIdentifier` \| `Super`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateCallExpression`: `HookMap`\<`SyncBailHook`\<\[`CallExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateCallExpressionMember`: `HookMap`\<`SyncBailHook`\<\[`CallExpression`, `BasicEvaluatedExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateDefinedIdentifier`: `HookMap`\<`SyncBailHook`\<\[`Identifier` \| `MemberExpression` \| `ThisExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateIdentifier`: `HookMap`\<`SyncBailHook`\<\[`Identifier` \| `MemberExpression` \| `MetaProperty` \| `ThisExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateNewExpression`: `HookMap`\<`SyncBailHook`\<\[`NewExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `evaluateTypeof`: `HookMap`\<`SyncBailHook`\<\[`UnaryExpression`\], `undefined` \| `null` \| `BasicEvaluatedExpression`\>\>; `export`: `SyncBailHook`\<\[`ExportNamedDeclaration` \| `ExportDefaultDeclaration`\], `boolean` \| `void`\>; `exportDeclaration`: `SyncBailHook`\<\[`ExportNamedDeclaration` \| `ExportAllDeclaration` \| `ExportDefaultDeclaration`, `Declaration`\], `boolean` \| `void`\>; `exportExpression`: `SyncBailHook`\<\[`ExportDefaultDeclaration`, `ImportExpressionImport` \| `UnaryExpression` \| `ArrayExpression` \| `ArrowFunctionExpression` \| `AssignmentExpression` \| `AwaitExpression` \| `BinaryExpression` \| `SimpleCallExpression` \| `NewExpression` \| `ChainExpression` \| `ClassExpression` \| `ConditionalExpression` \| `FunctionExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `LogicalExpression` \| `MemberExpression` \| `MetaProperty` \| `ObjectExpression` \| `SequenceExpression` \| `TaggedTemplateExpression` \| `TemplateLiteral` \| `ThisExpression` \| `UpdateExpression` \| `YieldExpression` \| `MaybeNamedFunctionDeclaration` \| `MaybeNamedClassDeclaration`\], `boolean` \| `void`\>; `exportImport`: `SyncBailHook`\<\[`ExportNamedDeclaration` \| `ExportAllDeclaration`, `ImportSource`\], `boolean` \| `void`\>; `exportImportSpecifier`: `SyncBailHook`\<\[`ExportNamedDeclaration` \| `ExportAllDeclaration`, `ImportSource`, `null` \| `string`, `null` \| `string`, `undefined` \| `number`\], `boolean` \| `void`\>; `exportSpecifier`: `SyncBailHook`\<\[`ExportNamedDeclaration` \| `ExportAllDeclaration` \| `ExportDefaultDeclaration`, `string`, `string`, `undefined` \| `number`\], `boolean` \| `void`\>; `expression`: `HookMap`\<`SyncBailHook`\<\[`Expression`\], `boolean` \| `void`\>\>; `expressionConditionalOperator`: `SyncBailHook`\<\[`ConditionalExpression`\], `boolean` \| `void`\>; `expressionLogicalOperator`: `SyncBailHook`\<\[`LogicalExpression`\], `boolean` \| `void`\>; `expressionMemberChain`: `HookMap`\<`SyncBailHook`\<\[`MemberExpression`, `string`[], `boolean`[], \[`number`, `number`\][]\], `boolean` \| `void`\>\>; `finish`: `SyncBailHook`\<\[`Program`, `CommentJavascriptParser`[]\], `boolean` \| `void`\>; `import`: `SyncBailHook`\<\[`ImportDeclaration`, `ImportSource`\], `boolean` \| `void`\>; `importCall`: `SyncBailHook`\<\[`ImportExpressionJavascriptParser`, `undefined` \| `SimpleCallExpression` \| `NewExpression`\], `boolean` \| `void`\>; `importSpecifier`: `SyncBailHook`\<\[`ImportDeclaration`, `ImportSource`, `null` \| `string`, `string`\], `boolean` \| `void`\>; `isPure`: `HookMap`\<`SyncBailHook`\<\[`ImportExpressionImport` \| `UnaryExpression` \| `ArrayExpression` \| `ArrowFunctionExpression` \| `AssignmentExpression` \| `AwaitExpression` \| `BinaryExpression` \| `SimpleCallExpression` \| `NewExpression` \| `ChainExpression` \| `ClassExpression` \| `ConditionalExpression` \| `FunctionExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `LogicalExpression` \| `MemberExpression` \| `MetaProperty` \| `ObjectExpression` \| `SequenceExpression` \| `TaggedTemplateExpression` \| `TemplateLiteral` \| `ThisExpression` \| `UpdateExpression` \| `YieldExpression` \| `PrivateIdentifier` \| `FunctionDeclaration` \| `MaybeNamedFunctionDeclaration` \| `VariableDeclaration` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration`, `number`\], `boolean` \| `void`\>\>; `label`: `HookMap`\<`SyncBailHook`\<\[`LabeledStatement`\], `boolean` \| `void`\>\>; `memberChainOfCallMemberChain`: `HookMap`\<`SyncBailHook`\<\[`Expression`, `string`[], `CallExpression`, `string`[], \[`number`, `number`\][]\], `boolean` \| `void`\>\>; `new`: `HookMap`\<`SyncBailHook`\<\[`NewExpression`\], `boolean` \| `void`\>\>; `optionalChaining`: `SyncBailHook`\<\[`ChainExpression`\], `boolean` \| `void`\>; `pattern`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; `preDeclarator`: `SyncBailHook`\<\[`VariableDeclarator`, `Statement`\], `boolean` \| `void`\>; `preStatement`: `SyncBailHook`\<\[`ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportAllDeclaration` \| `FunctionDeclaration` \| `MaybeNamedFunctionDeclaration` \| `VariableDeclaration` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `ExportDefaultDeclaration`\], `boolean` \| `void`\>; `program`: `SyncBailHook`\<\[`Program`, `CommentJavascriptParser`[]\], `boolean` \| `void`\>; `rename`: `HookMap`\<`SyncBailHook`\<\[`Expression`\], `boolean` \| `void`\>\>; `statement`: `SyncBailHook`\<\[`ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportAllDeclaration` \| `FunctionDeclaration` \| `MaybeNamedFunctionDeclaration` \| `VariableDeclaration` \| `ClassDeclaration` \| `MaybeNamedClassDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `ExportDefaultDeclaration`\], `boolean` \| `void`\>; `statementIf`: `SyncBailHook`\<\[`IfStatement`\], `boolean` \| `void`\>; `terminate`: `SyncBailHook`\<\[`ReturnStatement` \| `ThrowStatement`\], `boolean` \| `void`\>; `topLevelAwait`: `SyncBailHook`\<\[`ImportExpressionImport` \| `UnaryExpression` \| `ArrayExpression` \| `ArrowFunctionExpression` \| `AssignmentExpression` \| `AwaitExpression` \| `BinaryExpression` \| `SimpleCallExpression` \| `NewExpression` \| `ChainExpression` \| `ClassExpression` \| `ConditionalExpression` \| `FunctionExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `LogicalExpression` \| `MemberExpression` \| `MetaProperty` \| `ObjectExpression` \| `SequenceExpression` \| `TaggedTemplateExpression` \| `TemplateLiteral` \| `ThisExpression` \| `UpdateExpression` \| `YieldExpression` \| `ForOfStatement`\], `boolean` \| `void`\>; `typeof`: `HookMap`\<`SyncBailHook`\<\[`Expression`\], `boolean` \| `void`\>\>; `unhandledExpressionMemberChain`: `HookMap`\<`SyncBailHook`\<\[`MemberExpression`, `string`[]\], `boolean` \| `void`\>\>; `unusedStatement`: `SyncBailHook`\<\[`Statement`\], `boolean` \| `void`\>; `varDeclaration`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; `varDeclarationConst`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; `varDeclarationLet`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; `varDeclarationUsing`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; `varDeclarationVar`: `HookMap`\<`SyncBailHook`\<\[`Identifier`\], `boolean` \| `void`\>\>; \}\>

Defined in: [webpack/types.d.ts:7173](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7173)

***

### magicCommentContext

> **magicCommentContext**: `Context`

Defined in: [webpack/types.d.ts:7686](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7686)

***

### options

> **options**: `object`

Defined in: [webpack/types.d.ts:7612](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7612)

#### parse()?

> `optional` **parse**: (`code`, `options`) => `ParseResult`

##### Parameters

###### code

`string`

###### options

`ParseOptions`

##### Returns

`ParseResult`

***

### prevStatement?

> `optional` **prevStatement**: `ClassDeclaration` \| `MaybeNamedClassDeclaration` \| `ClassExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `ThisExpression` \| `ArrayExpression` \| `ObjectExpression` \| `FunctionExpression` \| `UnaryExpression` \| `UpdateExpression` \| `BinaryExpression` \| `AssignmentExpression` \| `LogicalExpression` \| `MemberExpression` \| `ConditionalExpression` \| `SimpleCallExpression` \| `NewExpression` \| `SequenceExpression` \| `ArrowFunctionExpression` \| `YieldExpression` \| `TemplateLiteral` \| `TaggedTemplateExpression` \| `MetaProperty` \| `AwaitExpression` \| `ChainExpression` \| `ImportExpression` \| `FunctionDeclaration` \| `MaybeNamedFunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration`

Defined in: [webpack/types.d.ts:7618](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7618)

***

### scope

> **scope**: `ScopeInfo`

Defined in: [webpack/types.d.ts:7613](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7613)

***

### semicolons?

> `optional` **semicolons**: `Set`\<`number`\>

Defined in: [webpack/types.d.ts:7616](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7616)

***

### sourceType

> **sourceType**: `"auto"` \| `"module"` \| `"script"`

Defined in: [webpack/types.d.ts:7611](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7611)

***

### state

> **state**: `JavascriptParserState`

Defined in: [webpack/types.d.ts:7614](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7614)

***

### statementPath?

> `optional` **statementPath**: `StatementPathItem`[]

Defined in: [webpack/types.d.ts:7617](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7617)

***

### ALLOWED\_MEMBER\_TYPES\_ALL

> `static` **ALLOWED\_MEMBER\_TYPES\_ALL**: `3`

Defined in: [webpack/types.d.ts:8598](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8598)

***

### ALLOWED\_MEMBER\_TYPES\_CALL\_EXPRESSION

> `static` **ALLOWED\_MEMBER\_TYPES\_CALL\_EXPRESSION**: `1`

Defined in: [webpack/types.d.ts:8599](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8599)

***

### ALLOWED\_MEMBER\_TYPES\_EXPRESSION

> `static` **ALLOWED\_MEMBER\_TYPES\_EXPRESSION**: `2`

Defined in: [webpack/types.d.ts:8600](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8600)

***

### getImportAttributes()

> `static` **getImportAttributes**: (`node`) => `Record`\<`string`, `string`\>

Defined in: [webpack/types.d.ts:8608](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8608)

#### Parameters

##### node

`ImportDeclaration` | `ExportNamedDeclaration` | `ExportAllDeclaration` | `ImportExpressionJavascriptParser`

#### Returns

`Record`\<`string`, `string`\>

***

### VariableInfo

> `static` **VariableInfo**: *typeof* `VariableInfo`

Defined in: [webpack/types.d.ts:8601](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8601)

***

### VariableInfoFlags

> `static` **VariableInfoFlags**: `Readonly`\<\{ `Evaluated`: `0`; `Free`: `1`; `Normal`: `2`; `Tagged`: `4`; \}\>

Defined in: [webpack/types.d.ts:8602](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8602)

## Methods

### blockPreWalkClassDeclaration()

> **blockPreWalkClassDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8047](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8047)

#### Parameters

##### statement

`ClassDeclaration` | `MaybeNamedClassDeclaration`

#### Returns

`void`

***

### blockPreWalkExportDefaultDeclaration()

> **blockPreWalkExportDefaultDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8038](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8038)

#### Parameters

##### statement

`ExportDefaultDeclaration`

#### Returns

`void`

***

### blockPreWalkExportNamedDeclaration()

> **blockPreWalkExportNamedDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8036](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8036)

#### Parameters

##### statement

`ExportNamedDeclaration`

#### Returns

`void`

***

### blockPreWalkExpressionStatement()

> **blockPreWalkExpressionStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7996](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7996)

#### Parameters

##### statement

`ExpressionStatement`

#### Returns

`void`

***

### blockPreWalkStatement()

> **blockPreWalkStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7895](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7895)

#### Parameters

##### statement

`ClassDeclaration` | `MaybeNamedClassDeclaration` | `FunctionDeclaration` | `MaybeNamedFunctionDeclaration` | `ImportDeclaration` | `ExportNamedDeclaration` | `ExportDefaultDeclaration` | `ExportAllDeclaration` | `ExpressionStatement` | `BlockStatement` | `StaticBlock` | `EmptyStatement` | `DebuggerStatement` | `WithStatement` | `ReturnStatement` | `LabeledStatement` | `BreakStatement` | `ContinueStatement` | `IfStatement` | `SwitchStatement` | `ThrowStatement` | `TryStatement` | `WhileStatement` | `DoWhileStatement` | `ForStatement` | `ForInStatement` | `ForOfStatement` | `VariableDeclaration`

#### Returns

`void`

***

### blockPreWalkStatements()

> **blockPreWalkStatements**(`statements`): `void`

Defined in: [webpack/types.d.ts:7796](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7796)

Block pre walking iterates the scope for block variable declarations

#### Parameters

##### statements

(`ClassDeclaration` \| `FunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration`)[]

#### Returns

`void`

***

### blockPreWalkVariableDeclaration()

> **blockPreWalkVariableDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8044](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8044)

#### Parameters

##### statement

`VariableDeclaration`

#### Returns

`void`

***

### callHooksForExpression()

> **callHooksForExpression**\<`T`, `R`\>(`hookMap`, `expr`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8164](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8164)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### expr

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `Super`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### callHooksForExpressionWithFallback()

> **callHooksForExpressionWithFallback**\<`T`, `R`\>(`hookMap`, `expr`, `fallback`, `defined`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8197](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8197)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### expr

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `Super`

##### fallback

(`name`, `rootInfo`, `getMembers`) => `R`

##### defined

(`result?`) => `R`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### callHooksForInfo()

> **callHooksForInfo**\<`T`, `R`\>(`hookMap`, `info`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8243](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8243)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### info

`ExportedVariableInfo`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### callHooksForInfoWithFallback()

> **callHooksForInfoWithFallback**\<`T`, `R`\>(`hookMap`, `info`, `fallback`, `defined`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8248](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8248)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### info

`ExportedVariableInfo`

##### fallback

(`name`) => `R`

##### defined

(`result?`) => `R`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### callHooksForName()

> **callHooksForName**\<`T`, `R`\>(`hookMap`, `name`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8238](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8238)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### name

`string`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### callHooksForNameWithFallback()

> **callHooksForNameWithFallback**\<`T`, `R`\>(`hookMap`, `name`, `fallback`, `defined`, ...`args`): `R`

Defined in: [webpack/types.d.ts:8255](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8255)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### hookMap

`HookMap`\<`SyncBailHook`\<`T`, `R`, `UnsetAdditionalOptions`\>\>

##### name

`string`

##### fallback

(`value`) => `R`

##### defined

() => `R`

##### args

...`AsArray`\<`T`\>

#### Returns

`R`

***

### defineVariable()

> **defineVariable**(`name`): `void`

Defined in: [webpack/types.d.ts:8474](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8474)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### destructuringAssignmentPropertiesFor()

> **destructuringAssignmentPropertiesFor**(`node`): `Set`\<`DestructuringAssignmentProperty`\>

Defined in: [webpack/types.d.ts:7687](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7687)

#### Parameters

##### node

`Expression`

#### Returns

`Set`\<`DestructuringAssignmentProperty`\>

***

### detectMode()

> **detectMode**(`statements`): `void`

Defined in: [webpack/types.d.ts:8294](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8294)

#### Parameters

##### statements

(`ClassDeclaration` \| `FunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration` \| `Directive`)[]

#### Returns

`void`

***

### enterArrayPattern()

> **enterArrayPattern**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8357](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8357)

#### Parameters

##### pattern

`ArrayPattern`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterAssignmentPattern()

> **enterAssignmentPattern**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8365](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8365)

#### Parameters

##### pattern

`AssignmentPattern`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterDeclaration()

> **enterDeclaration**(`declaration`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8031](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8031)

#### Parameters

##### declaration

`Declaration`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterDestructuringAssignment()

> **enterDestructuringAssignment**(`pattern`, `expression`): `ClassExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `ThisExpression` \| `ArrayExpression` \| `ObjectExpression` \| `FunctionExpression` \| `UnaryExpression` \| `UpdateExpression` \| `BinaryExpression` \| `AssignmentExpression` \| `LogicalExpression` \| `MemberExpression` \| `ConditionalExpression` \| `SimpleCallExpression` \| `NewExpression` \| `SequenceExpression` \| `ArrowFunctionExpression` \| `YieldExpression` \| `TemplateLiteral` \| `TaggedTemplateExpression` \| `MetaProperty` \| `AwaitExpression` \| `ChainExpression` \| `ImportExpression`

Defined in: [webpack/types.d.ts:7998](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7998)

#### Parameters

##### pattern

`Pattern`

##### expression

`Expression`

#### Returns

`ClassExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `ThisExpression` \| `ArrayExpression` \| `ObjectExpression` \| `FunctionExpression` \| `UnaryExpression` \| `UpdateExpression` \| `BinaryExpression` \| `AssignmentExpression` \| `LogicalExpression` \| `MemberExpression` \| `ConditionalExpression` \| `SimpleCallExpression` \| `NewExpression` \| `SequenceExpression` \| `ArrowFunctionExpression` \| `YieldExpression` \| `TemplateLiteral` \| `TaggedTemplateExpression` \| `MetaProperty` \| `AwaitExpression` \| `ChainExpression` \| `ImportExpression`

***

### enterIdentifier()

> **enterIdentifier**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8349](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8349)

#### Parameters

##### pattern

`Identifier`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterObjectPattern()

> **enterObjectPattern**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8353](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8353)

#### Parameters

##### pattern

`ObjectPattern`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterPattern()

> **enterPattern**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8338](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8338)

#### Parameters

##### pattern

`Property` | `Identifier` | `MemberExpression` | `ObjectPattern` | `ArrayPattern` | `RestElement` | `AssignmentPattern`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### enterPatterns()

> **enterPatterns**(`patterns`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8325](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8325)

#### Parameters

##### patterns

(`string` \| `Property` \| `Identifier` \| `MemberExpression` \| `ObjectPattern` \| `ArrayPattern` \| `RestElement` \| `AssignmentPattern`)[]

##### onIdent

(`ident`) => `void`

#### Returns

`void`

***

### enterRestElement()

> **enterRestElement**(`pattern`, `onIdent`): `void`

Defined in: [webpack/types.d.ts:8361](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8361)

#### Parameters

##### pattern

`RestElement`

##### onIdent

(`ident`, `identifier`) => `void`

#### Returns

`void`

***

### evaluate()

> **evaluate**(`source`): `BasicEvaluatedExpression`

Defined in: [webpack/types.d.ts:8404](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8404)

#### Parameters

##### source

`string`

#### Returns

`BasicEvaluatedExpression`

***

### evaluatedVariable()

> **evaluatedVariable**(`tagInfo`): `VariableInfo`

Defined in: [webpack/types.d.ts:8479](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8479)

#### Parameters

##### tagInfo

`TagInfo`

#### Returns

`VariableInfo`

***

### evaluateExpression()

> **evaluateExpression**(`expression`): `BasicEvaluatedExpression`

Defined in: [webpack/types.d.ts:8369](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8369)

#### Parameters

##### expression

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `PrivateIdentifier` | `SpreadElement` | `Super`

#### Returns

`BasicEvaluatedExpression`

***

### extractMemberExpressionChain()

> **extractMemberExpressionChain**(`expression`): `object`

Defined in: [webpack/types.d.ts:8484](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8484)

#### Parameters

##### expression

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `Super`

#### Returns

`object`

##### memberRanges

> **memberRanges**: \[`number`, `number`\][]

##### members

> **members**: `string`[]

##### membersOptionals

> **membersOptionals**: `boolean`[]

##### object

> **object**: `ClassExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `ThisExpression` \| `ArrayExpression` \| `ObjectExpression` \| `FunctionExpression` \| `UnaryExpression` \| `UpdateExpression` \| `BinaryExpression` \| `AssignmentExpression` \| `LogicalExpression` \| `MemberExpression` \| `ConditionalExpression` \| `SimpleCallExpression` \| `NewExpression` \| `SequenceExpression` \| `ArrowFunctionExpression` \| `YieldExpression` \| `TemplateLiteral` \| `TaggedTemplateExpression` \| `MetaProperty` \| `AwaitExpression` \| `ChainExpression` \| `ImportExpression` \| `Super`

***

### getComments()

> **getComments**(`range`): `CommentJavascriptParser`[]

Defined in: [webpack/types.d.ts:8444](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8444)

#### Parameters

##### range

\[`number`, `number`\]

#### Returns

`CommentJavascriptParser`[]

***

### getFreeInfoFromVariable()

> **getFreeInfoFromVariable**(`varName`): `object`

Defined in: [webpack/types.d.ts:8548](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8548)

#### Parameters

##### varName

`string`

#### Returns

`object`

##### info

> **info**: `string` \| `VariableInfo`

##### name

> **name**: `string`

***

### getMemberExpressionInfo()

> **getMemberExpressionInfo**(`expression`, `allowedTypes`): `CallExpressionInfo` \| `ExpressionExpressionInfo`

Defined in: [webpack/types.d.ts:8554](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8554)

#### Parameters

##### expression

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `Super`

##### allowedTypes

`number`

#### Returns

`CallExpressionInfo` \| `ExpressionExpressionInfo`

***

### getNameForExpression()

> **getNameForExpression**(`expression`): `object`

Defined in: [webpack/types.d.ts:8586](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8586)

#### Parameters

##### expression

`Expression`

#### Returns

`object`

##### getMembers()

> **getMembers**: () => `string`[]

###### Returns

`string`[]

##### name

> **name**: `string`

##### rootInfo

> **rootInfo**: `ExportedVariableInfo`

***

### getNameInfoFromVariable()

> **getNameInfoFromVariable**(`varName`): `object`

Defined in: [webpack/types.d.ts:8551](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8551)

#### Parameters

##### varName

`string`

#### Returns

`object`

##### info

> **info**: `string` \| `VariableInfo`

##### name

> **name**: `string`

***

### getRenameIdentifier()

> **getRenameIdentifier**(`expr`): `string` \| `VariableInfo`

Defined in: [webpack/types.d.ts:7690](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7690)

#### Parameters

##### expr

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `SpreadElement`

#### Returns

`string` \| `VariableInfo`

***

### getTagData()

> **getTagData**(`name`, `tag`): `Record`\<`string`, `any`\> \| `CommonJsImportSettings` \| `CompatibilitySettings` \| `HarmonySettings` \| `HarmonySpecifierGuards` \| `ImportSettings` \| [`TopLevelSymbol`](../../optimize/namespaces/InnerGraph/classes/TopLevelSymbol.md)

Defined in: [webpack/types.d.ts:8449](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8449)

#### Parameters

##### name

`string`

##### tag

`symbol`

#### Returns

`Record`\<`string`, `any`\> \| `CommonJsImportSettings` \| `CompatibilitySettings` \| `HarmonySettings` \| `HarmonySpecifierGuards` \| `ImportSettings` \| [`TopLevelSymbol`](../../optimize/namespaces/InnerGraph/classes/TopLevelSymbol.md)

***

### getVariableInfo()

> **getVariableInfo**(`name`): `ExportedVariableInfo`

Defined in: [webpack/types.d.ts:8477](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8477)

#### Parameters

##### name

`string`

#### Returns

`ExportedVariableInfo`

***

### inBlockScope()

> **inBlockScope**(`fn`, `inExecutedPath?`): `void`

Defined in: [webpack/types.d.ts:8293](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8293)

#### Parameters

##### fn

() => `void`

##### inExecutedPath?

`boolean`

#### Returns

`void`

***

### inClassScope()

> **inClassScope**(`hasThis`, `params`, `fn`): `void`

Defined in: [webpack/types.d.ts:8279](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8279)

#### Parameters

##### hasThis

`boolean`

##### params

`Identifier`[]

##### fn

() => `void`

#### Returns

`void`

***

### inFunctionScope()

> **inFunctionScope**(`hasThis`, `params`, `fn`): `void`

Defined in: [webpack/types.d.ts:8280](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8280)

#### Parameters

##### hasThis

`boolean`

##### params

(`string` \| `Identifier` \| `MemberExpression` \| `ObjectPattern` \| `ArrayPattern` \| `RestElement` \| `AssignmentPattern`)[]

##### fn

() => `void`

#### Returns

`void`

***

### ~~inScope()~~

> **inScope**(`params`, `fn`): `void`

Defined in: [webpack/types.d.ts:8266](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8266)

#### Parameters

##### params

(`string` \| `Property` \| `Identifier` \| `MemberExpression` \| `ObjectPattern` \| `ArrayPattern` \| `RestElement` \| `AssignmentPattern`)[]

##### fn

() => `void`

#### Returns

`void`

#### Deprecated

***

### isAsiPosition()

> **isAsiPosition**(`pos`): `boolean`

Defined in: [webpack/types.d.ts:8445](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8445)

#### Parameters

##### pos

`number`

#### Returns

`boolean`

***

### isPure()

> **isPure**(`expr`, `commentsStartPos`): `boolean`

Defined in: [webpack/types.d.ts:8405](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8405)

#### Parameters

##### expr

`ClassDeclaration` | `MaybeNamedClassDeclaration` | `ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `FunctionDeclaration` | `MaybeNamedFunctionDeclaration` | `PrivateIdentifier` | `VariableDeclaration`

##### commentsStartPos

`number`

#### Returns

`boolean`

***

### isStatementLevelExpression()

> **isStatementLevelExpression**(`expr`): `boolean`

Defined in: [webpack/types.d.ts:8448](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8448)

#### Parameters

##### expr

`Expression`

#### Returns

`boolean`

***

### isVariableDefined()

> **isVariableDefined**(`name`): `boolean`

Defined in: [webpack/types.d.ts:8476](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8476)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### modulePreWalkExportAllDeclaration()

> **modulePreWalkExportAllDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8042](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8042)

#### Parameters

##### statement

`ExportAllDeclaration`

#### Returns

`void`

***

### modulePreWalkExportNamedDeclaration()

> **modulePreWalkExportNamedDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8035](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8035)

#### Parameters

##### statement

`ExportNamedDeclaration`

#### Returns

`void`

***

### modulePreWalkImportDeclaration()

> **modulePreWalkImportDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8030](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8030)

#### Parameters

##### statement

`ImportDeclaration`

#### Returns

`void`

***

### modulePreWalkStatements()

> **modulePreWalkStatements**(`statements`): `void`

Defined in: [webpack/types.d.ts:7728](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7728)

Module pre walking iterates the scope for import entries

#### Parameters

##### statements

(`ClassDeclaration` \| `FunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration`)[]

#### Returns

`void`

***

### parse()

> **parse**(`source`, `state`): [`ParserState`](../../../../../../type-aliases/ParserState.md)

Defined in: [webpack/types.d.ts:13964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L13964)

#### Parameters

##### source

`string` | `Buffer`\<`ArrayBufferLike`\> | `PreparsedAst`

##### state

[`ParserState`](../../../../../../type-aliases/ParserState.md)

#### Returns

[`ParserState`](../../../../../../type-aliases/ParserState.md)

#### Inherited from

[`Parser`](../../../../../../classes/Parser.md).[`parse`](../../../../../../classes/Parser.md#parse)

***

### parseCalculatedString()

> **parseCalculatedString**(`expression`): `CalculatedStringResult`

Defined in: [webpack/types.d.ts:8403](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8403)

#### Parameters

##### expression

`Expression`

#### Returns

`CalculatedStringResult`

***

### parseCommentOptions()

> **parseCommentOptions**(`range`): `object`

Defined in: [webpack/types.d.ts:8480](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8480)

#### Parameters

##### range

\[`number`, `number`\]

#### Returns

`object`

##### errors

> **errors**: `Error` & `object`[]

##### options

> **options**: `Record`\<`string`, `any`\>

***

### parseString()

> **parseString**(`expression`): `string`

Defined in: [webpack/types.d.ts:8402](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8402)

#### Parameters

##### expression

`Expression`

#### Returns

`string`

***

### preWalkAssignmentExpression()

> **preWalkAssignmentExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:7997](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7997)

#### Parameters

##### expression

`AssignmentExpression`

#### Returns

`void`

***

### preWalkBlockStatement()

> **preWalkBlockStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7964](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7964)

#### Parameters

##### statement

`BlockStatement`

#### Returns

`void`

***

### preWalkCatchClause()

> **preWalkCatchClause**(`catchClause`): `void`

Defined in: [webpack/types.d.ts:8055](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8055)

#### Parameters

##### catchClause

`CatchClause`

#### Returns

`void`

***

### preWalkDoWhileStatement()

> **preWalkDoWhileStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7982](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7982)

#### Parameters

##### statement

`DoWhileStatement`

#### Returns

`void`

***

### preWalkForInStatement()

> **preWalkForInStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7986](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7986)

#### Parameters

##### statement

`ForInStatement`

#### Returns

`void`

***

### preWalkForOfStatement()

> **preWalkForOfStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7988](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7988)

#### Parameters

##### statement

`ForOfStatement`

#### Returns

`void`

***

### preWalkForStatement()

> **preWalkForStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7984](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7984)

#### Parameters

##### statement

`ForStatement`

#### Returns

`void`

***

### preWalkFunctionDeclaration()

> **preWalkFunctionDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:7990](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7990)

#### Parameters

##### statement

`FunctionDeclaration` | `MaybeNamedFunctionDeclaration`

#### Returns

`void`

***

### preWalkIfStatement()

> **preWalkIfStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7967](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7967)

#### Parameters

##### statement

`IfStatement`

#### Returns

`void`

***

### preWalkLabeledStatement()

> **preWalkLabeledStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7969](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7969)

#### Parameters

##### statement

`LabeledStatement`

#### Returns

`void`

***

### preWalkStatement()

> **preWalkStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7864](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7864)

Walking iterates the statements and expressions and processes them

#### Parameters

##### statement

`ClassDeclaration` | `MaybeNamedClassDeclaration` | `FunctionDeclaration` | `MaybeNamedFunctionDeclaration` | `ImportDeclaration` | `ExportNamedDeclaration` | `ExportDefaultDeclaration` | `ExportAllDeclaration` | `ExpressionStatement` | `BlockStatement` | `StaticBlock` | `EmptyStatement` | `DebuggerStatement` | `WithStatement` | `ReturnStatement` | `LabeledStatement` | `BreakStatement` | `ContinueStatement` | `IfStatement` | `SwitchStatement` | `ThrowStatement` | `TryStatement` | `WhileStatement` | `DoWhileStatement` | `ForStatement` | `ForInStatement` | `ForOfStatement` | `VariableDeclaration`

#### Returns

`void`

***

### preWalkStatements()

> **preWalkStatements**(`statements`): `void`

Defined in: [webpack/types.d.ts:7762](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7762)

Pre walking iterates the scope for variable declarations

#### Parameters

##### statements

(`ClassDeclaration` \| `FunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration`)[]

#### Returns

`void`

***

### preWalkSwitchCases()

> **preWalkSwitchCases**(`switchCases`): `void`

Defined in: [webpack/types.d.ts:8053](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8053)

#### Parameters

##### switchCases

`SwitchCase`[]

#### Returns

`void`

***

### preWalkSwitchStatement()

> **preWalkSwitchStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7973](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7973)

#### Parameters

##### statement

`SwitchStatement`

#### Returns

`void`

***

### preWalkTryStatement()

> **preWalkTryStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7978](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7978)

#### Parameters

##### statement

`TryStatement`

#### Returns

`void`

***

### preWalkVariableDeclaration()

> **preWalkVariableDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8043](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8043)

#### Parameters

##### statement

`VariableDeclaration`

#### Returns

`void`

***

### preWalkVariableDeclarator()

> **preWalkVariableDeclarator**(`declarator`): `void`

Defined in: [webpack/types.d.ts:8045](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8045)

#### Parameters

##### declarator

`VariableDeclarator`

#### Returns

`void`

***

### preWalkWhileStatement()

> **preWalkWhileStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7980](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7980)

#### Parameters

##### statement

`WhileStatement`

#### Returns

`void`

***

### preWalkWithStatement()

> **preWalkWithStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7971](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7971)

#### Parameters

##### statement

`WithStatement`

#### Returns

`void`

***

### setAsiPosition()

> **setAsiPosition**(`pos`): `void`

Defined in: [webpack/types.d.ts:8446](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8446)

#### Parameters

##### pos

`number`

#### Returns

`void`

***

### setVariable()

> **setVariable**(`name`, `variableInfo`): `void`

Defined in: [webpack/types.d.ts:8478](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8478)

#### Parameters

##### name

`string`

##### variableInfo

`ExportedVariableInfo`

#### Returns

`void`

***

### tagVariable()

> **tagVariable**(`name`, `tag`, `data?`, `flags?`): `void`

Defined in: [webpack/types.d.ts:8461](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8461)

#### Parameters

##### name

`string`

##### tag

`symbol`

##### data?

`Record`\<`string`, `any`\> | `CommonJsImportSettings` | `CompatibilitySettings` | `HarmonySettings` | `HarmonySpecifierGuards` | `ImportSettings` | [`TopLevelSymbol`](../../optimize/namespaces/InnerGraph/classes/TopLevelSymbol.md)

##### flags?

`0` | `1` | `2` | `4`

#### Returns

`void`

***

### undefineVariable()

> **undefineVariable**(`name`): `void`

Defined in: [webpack/types.d.ts:8475](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8475)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### unsetAsiPosition()

> **unsetAsiPosition**(`pos`): `void`

Defined in: [webpack/types.d.ts:8447](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8447)

#### Parameters

##### pos

`number`

#### Returns

`void`

***

### walkArrayExpression()

> **walkArrayExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8129](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8129)

#### Parameters

##### expression

`ArrayExpression`

#### Returns

`void`

***

### walkArrayPattern()

> **walkArrayPattern**(`pattern`): `void`

Defined in: [webpack/types.d.ts:8060](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8060)

#### Parameters

##### pattern

`ArrayPattern`

#### Returns

`void`

***

### walkArrowFunctionExpression()

> **walkArrowFunctionExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8134](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8134)

#### Parameters

##### expression

`ArrowFunctionExpression`

#### Returns

`void`

***

### walkAssignmentExpression()

> **walkAssignmentExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8143](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8143)

#### Parameters

##### expression

`AssignmentExpression`

#### Returns

`void`

***

### walkAssignmentPattern()

> **walkAssignmentPattern**(`pattern`): `void`

Defined in: [webpack/types.d.ts:8058](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8058)

#### Parameters

##### pattern

`AssignmentPattern`

#### Returns

`void`

***

### walkAwaitExpression()

> **walkAwaitExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8128](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8128)

#### Parameters

##### expression

`AwaitExpression`

#### Returns

`void`

***

### walkBinaryExpression()

> **walkBinaryExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8141](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8141)

#### Parameters

##### expression

`BinaryExpression`

#### Returns

`void`

***

### walkBlockStatement()

> **walkBlockStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7965](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7965)

#### Parameters

##### statement

`BlockStatement` | `StaticBlock`

#### Returns

`void`

***

### walkCallExpression()

> **walkCallExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8152](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8152)

#### Parameters

##### expression

`CallExpression`

#### Returns

`void`

***

### walkCatchClause()

> **walkCatchClause**(`catchClause`): `void`

Defined in: [webpack/types.d.ts:8056](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8056)

#### Parameters

##### catchClause

`CatchClause`

#### Returns

`void`

***

### walkChainExpression()

> **walkChainExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8150](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8150)

#### Parameters

##### expression

`ChainExpression`

#### Returns

`void`

***

### walkClass()

> **walkClass**(`classy`): `void`

Defined in: [webpack/types.d.ts:7721](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7721)

#### Parameters

##### classy

`ClassDeclaration` | `MaybeNamedClassDeclaration` | `ClassExpression`

#### Returns

`void`

***

### walkClassDeclaration()

> **walkClassDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8050](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8050)

#### Parameters

##### statement

`ClassDeclaration` | `MaybeNamedClassDeclaration`

#### Returns

`void`

***

### walkClassExpression()

> **walkClassExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8149](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8149)

#### Parameters

##### expression

`ClassExpression`

#### Returns

`void`

***

### walkConditionalExpression()

> **walkConditionalExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8144](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8144)

#### Parameters

##### expression

`ConditionalExpression`

#### Returns

`void`

***

### walkDoWhileStatement()

> **walkDoWhileStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7983](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7983)

#### Parameters

##### statement

`DoWhileStatement`

#### Returns

`void`

***

### walkExportDefaultDeclaration()

> **walkExportDefaultDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8041](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8041)

#### Parameters

##### statement

`ExportDefaultDeclaration`

#### Returns

`void`

***

### walkExportNamedDeclaration()

> **walkExportNamedDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8037](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8037)

#### Parameters

##### statement

`ExportNamedDeclaration`

#### Returns

`void`

***

### walkExpression()

> **walkExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8095](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8095)

#### Parameters

##### expression

`ClassExpression` | `Identifier` | `SimpleLiteral` | `RegExpLiteral` | `BigIntLiteral` | `ThisExpression` | `ArrayExpression` | `ObjectExpression` | `FunctionExpression` | `UnaryExpression` | `UpdateExpression` | `BinaryExpression` | `AssignmentExpression` | `LogicalExpression` | `MemberExpression` | `ConditionalExpression` | `SimpleCallExpression` | `NewExpression` | `SequenceExpression` | `ArrowFunctionExpression` | `YieldExpression` | `TemplateLiteral` | `TaggedTemplateExpression` | `MetaProperty` | `AwaitExpression` | `ChainExpression` | `ImportExpression` | `PrivateIdentifier` | `SpreadElement` | `Super`

#### Returns

`void`

***

### walkExpressions()

> **walkExpressions**(`expressions`): `void`

Defined in: [webpack/types.d.ts:8062](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8062)

#### Parameters

##### expressions

(`ClassExpression` \| `Identifier` \| `SimpleLiteral` \| `RegExpLiteral` \| `BigIntLiteral` \| `ThisExpression` \| `ArrayExpression` \| `ObjectExpression` \| `FunctionExpression` \| `UnaryExpression` \| `UpdateExpression` \| `BinaryExpression` \| `AssignmentExpression` \| `LogicalExpression` \| `MemberExpression` \| `ConditionalExpression` \| `SimpleCallExpression` \| `NewExpression` \| `SequenceExpression` \| `ArrowFunctionExpression` \| `YieldExpression` \| `TemplateLiteral` \| `TaggedTemplateExpression` \| `MetaProperty` \| `AwaitExpression` \| `ChainExpression` \| `ImportExpression` \| `SpreadElement`)[]

#### Returns

`void`

***

### walkExpressionStatement()

> **walkExpressionStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7966](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7966)

#### Parameters

##### statement

`ExpressionStatement`

#### Returns

`void`

***

### walkForInStatement()

> **walkForInStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7987](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7987)

#### Parameters

##### statement

`ForInStatement`

#### Returns

`void`

***

### walkForOfStatement()

> **walkForOfStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7989](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7989)

#### Parameters

##### statement

`ForOfStatement`

#### Returns

`void`

***

### walkForStatement()

> **walkForStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7985](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7985)

#### Parameters

##### statement

`ForStatement`

#### Returns

`void`

***

### walkFunctionDeclaration()

> **walkFunctionDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:7993](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7993)

#### Parameters

##### statement

`FunctionDeclaration` | `MaybeNamedFunctionDeclaration`

#### Returns

`void`

***

### walkFunctionExpression()

> **walkFunctionExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8133](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8133)

#### Parameters

##### expression

`FunctionExpression`

#### Returns

`void`

***

### walkIdentifier()

> **walkIdentifier**(`expression`): `void`

Defined in: [webpack/types.d.ts:8162](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8162)

#### Parameters

##### expression

`Identifier`

#### Returns

`void`

***

### walkIfStatement()

> **walkIfStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7968](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7968)

#### Parameters

##### statement

`IfStatement`

#### Returns

`void`

***

### walkImportExpression()

> **walkImportExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8151](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8151)

#### Parameters

##### expression

`ImportExpressionJavascriptParser`

#### Returns

`void`

***

### walkLabeledStatement()

> **walkLabeledStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7970](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7970)

#### Parameters

##### statement

`LabeledStatement`

#### Returns

`void`

***

### walkLeftRightExpression()

> **walkLeftRightExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8138](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8138)

#### Parameters

##### expression

`BinaryExpression` | `LogicalExpression`

#### Returns

`void`

***

### walkLogicalExpression()

> **walkLogicalExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8142](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8142)

#### Parameters

##### expression

`LogicalExpression`

#### Returns

`void`

***

### walkMemberExpression()

> **walkMemberExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8153](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8153)

#### Parameters

##### expression

`MemberExpression`

#### Returns

`void`

***

### walkMemberExpressionWithExpressionName()

> **walkMemberExpressionWithExpressionName**\<`R`\>(`expression`, `name`, `rootInfo`, `members`, `onUnhandled`): `void`

Defined in: [webpack/types.d.ts:8154](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8154)

#### Type Parameters

##### R

`R`

#### Parameters

##### expression

`MemberExpression`

##### name

`string`

##### rootInfo

`string` | `VariableInfo`

##### members

`string`[]

##### onUnhandled

() => `R`

#### Returns

`void`

***

### walkMetaProperty()

> **walkMetaProperty**(`metaProperty`): `void`

Defined in: [webpack/types.d.ts:8163](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8163)

#### Parameters

##### metaProperty

`MetaProperty`

#### Returns

`void`

***

### walkNestedStatement()

> **walkNestedStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7963](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7963)

Walks a statements that is nested within a parent statement
and can potentially be a non-block statement.
This enforces the nested statement to never be in ASI position.

#### Parameters

##### statement

`Statement`

#### Returns

`void`

***

### walkNewExpression()

> **walkNewExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8145](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8145)

#### Parameters

##### expression

`NewExpression`

#### Returns

`void`

***

### walkObjectExpression()

> **walkObjectExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8131](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8131)

#### Parameters

##### expression

`ObjectExpression`

#### Returns

`void`

***

### walkObjectPattern()

> **walkObjectPattern**(`pattern`): `void`

Defined in: [webpack/types.d.ts:8059](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8059)

#### Parameters

##### pattern

`ObjectPattern`

#### Returns

`void`

***

### walkPattern()

> **walkPattern**(`pattern`): `void`

Defined in: [webpack/types.d.ts:8057](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8057)

#### Parameters

##### pattern

`Pattern`

#### Returns

`void`

***

### walkProperty()

> **walkProperty**(`prop`): `void`

Defined in: [webpack/types.d.ts:8132](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8132)

#### Parameters

##### prop

`Property` | `SpreadElement`

#### Returns

`void`

***

### walkRestElement()

> **walkRestElement**(`pattern`): `void`

Defined in: [webpack/types.d.ts:8061](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8061)

#### Parameters

##### pattern

`RestElement`

#### Returns

`void`

***

### walkReturnStatement()

> **walkReturnStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7976](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7976)

#### Parameters

##### statement

`ReturnStatement`

#### Returns

`void`

***

### walkSequenceExpression()

> **walkSequenceExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8135](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8135)

#### Parameters

##### expression

`SequenceExpression`

#### Returns

`void`

***

### walkSpreadElement()

> **walkSpreadElement**(`expression`): `void`

Defined in: [webpack/types.d.ts:8130](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8130)

#### Parameters

##### expression

`SpreadElement`

#### Returns

`void`

***

### walkStatement()

> **walkStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7926](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7926)

#### Parameters

##### statement

`ClassDeclaration` | `MaybeNamedClassDeclaration` | `FunctionDeclaration` | `MaybeNamedFunctionDeclaration` | `ImportDeclaration` | `ExportNamedDeclaration` | `ExportDefaultDeclaration` | `ExportAllDeclaration` | `ExpressionStatement` | `BlockStatement` | `StaticBlock` | `EmptyStatement` | `DebuggerStatement` | `WithStatement` | `ReturnStatement` | `LabeledStatement` | `BreakStatement` | `ContinueStatement` | `IfStatement` | `SwitchStatement` | `ThrowStatement` | `TryStatement` | `WhileStatement` | `DoWhileStatement` | `ForStatement` | `ForInStatement` | `ForOfStatement` | `VariableDeclaration`

#### Returns

`void`

***

### walkStatements()

> **walkStatements**(`statements`): `void`

Defined in: [webpack/types.d.ts:7830](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7830)

Walking iterates the statements and expressions and processes them

#### Parameters

##### statements

(`ClassDeclaration` \| `FunctionDeclaration` \| `ImportDeclaration` \| `ExportNamedDeclaration` \| `ExportDefaultDeclaration` \| `ExportAllDeclaration` \| `ExpressionStatement` \| `BlockStatement` \| `StaticBlock` \| `EmptyStatement` \| `DebuggerStatement` \| `WithStatement` \| `ReturnStatement` \| `LabeledStatement` \| `BreakStatement` \| `ContinueStatement` \| `IfStatement` \| `SwitchStatement` \| `ThrowStatement` \| `TryStatement` \| `WhileStatement` \| `DoWhileStatement` \| `ForStatement` \| `ForInStatement` \| `ForOfStatement` \| `VariableDeclaration`)[]

#### Returns

`void`

***

### walkSwitchCases()

> **walkSwitchCases**(`switchCases`): `void`

Defined in: [webpack/types.d.ts:8054](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8054)

#### Parameters

##### switchCases

`SwitchCase`[]

#### Returns

`void`

***

### walkSwitchStatement()

> **walkSwitchStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7974](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7974)

#### Parameters

##### statement

`SwitchStatement`

#### Returns

`void`

***

### walkTaggedTemplateExpression()

> **walkTaggedTemplateExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8148](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8148)

#### Parameters

##### expression

`TaggedTemplateExpression`

#### Returns

`void`

***

### walkTemplateLiteral()

> **walkTemplateLiteral**(`expression`): `void`

Defined in: [webpack/types.d.ts:8147](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8147)

#### Parameters

##### expression

`TemplateLiteral`

#### Returns

`void`

***

### walkTerminatingStatement()

> **walkTerminatingStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7975](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7975)

#### Parameters

##### statement

`ReturnStatement` | `ThrowStatement`

#### Returns

`void`

***

### walkThisExpression()

> **walkThisExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8161](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8161)

#### Parameters

##### expression

`ThisExpression`

#### Returns

`void`

***

### walkThrowStatement()

> **walkThrowStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7977](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7977)

#### Parameters

##### statement

`ThrowStatement`

#### Returns

`void`

***

### walkTryStatement()

> **walkTryStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7979](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7979)

#### Parameters

##### statement

`TryStatement`

#### Returns

`void`

***

### walkUnaryExpression()

> **walkUnaryExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8137](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8137)

#### Parameters

##### expression

`UnaryExpression`

#### Returns

`void`

***

### walkUpdateExpression()

> **walkUpdateExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8136](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8136)

#### Parameters

##### expression

`UpdateExpression`

#### Returns

`void`

***

### walkVariableDeclaration()

> **walkVariableDeclaration**(`statement`): `void`

Defined in: [webpack/types.d.ts:8046](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8046)

#### Parameters

##### statement

`VariableDeclaration`

#### Returns

`void`

***

### walkWhileStatement()

> **walkWhileStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7981](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7981)

#### Parameters

##### statement

`WhileStatement`

#### Returns

`void`

***

### walkWithStatement()

> **walkWithStatement**(`statement`): `void`

Defined in: [webpack/types.d.ts:7972](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L7972)

#### Parameters

##### statement

`WithStatement`

#### Returns

`void`

***

### walkYieldExpression()

> **walkYieldExpression**(`expression`): `void`

Defined in: [webpack/types.d.ts:8146](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8146)

#### Parameters

##### expression

`YieldExpression`

#### Returns

`void`

***

### extend()

> `static` **extend**(...`plugins`): *typeof* `JavascriptParser`

Defined in: [webpack/types.d.ts:8595](https://github.com/webpack/webpack/blob/e3298f1e7776ed66e31f70c8bc1bb2ac73f2c024/types.d.ts#L8595)

#### Parameters

##### plugins

...(`BaseParser`) => *typeof* `Parser`[]

#### Returns

*typeof* `JavascriptParser`
