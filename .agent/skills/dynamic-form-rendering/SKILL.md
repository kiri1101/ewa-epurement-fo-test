---
name: dynamic-form-rendering
description: Dynamic Form Rendering with Server-Driven UI in Nuxt 3
---

# Dynamic Form Rendering Using Server-Driven UI (SDUI) in Nuxt 3

## 🎯 Core Objective
Implement dynamic form rendering where:
- Form structure is defined on the backend.
- The frontend does not hardcode form fields.
- The frontend fetches a declarative JSON schema.
- The frontend renders UI based on schema.
- Validation rules mirror backend validation.
- Layout is configurable and recursive.
- Conditional logic is supported.
- UI implementation is decoupled from schema definition.

## 🏗 Architectural Principles

### 1️⃣ Declarative > Imperative
Backend sends semantic intent, not UI instructions.
❌ Do NOT send raw HTML attributes: `class`, `style`, `onclick`.
✅ Send semantic schema:
```json
{
  "component": "TextInput",
  "label": "First Name",
  "validation": { "required": true }
}
```
Frontend decides UI implementation.

### 2️⃣ Controlled Component Registry
Dynamic components must be resolved via a secure registry:
```ts
const fieldRegistry = {
  TextInput: BaseTextInput,
  SelectInput: BaseSelect
}
```
Never resolve arbitrary component names directly from API.

### 3️⃣ Separate Layout From Fields
Schema must separate layout tree from field definitions:
```json
{
  "layout": [...],
  "fields": { ... }
}
```
Enables: Grid systems, Sections, Nested layouts, Future tabs support.

### 4️⃣ Reactive Model Initialization
Model must be dynamically generated:
```ts
model[fieldKey] = field.default ?? null
```
No predefined static form state.

### 5️⃣ Conditional Logic Engine
Support: `visibleIf`, `readonlyIf`, `requiredIf`.
Operators: `equals`, `notEquals`, `includes`, `notEmpty`, `greaterThan`, `lessThan`.
Must evaluate reactively against model state.

### 6️⃣ Backend Validation Symmetry
Frontend validation complements backend validation — never replaces it.
Frontend example:
```json
"validation": {
  "required": true,
  "min": 3
}
```
Backend (Laravel example): `'required|min:3'`

### 7️⃣ Recursive Layout Rendering
Renderer must:
- Traverse layout tree recursively
- Render sections, rows, columns, and fields
Avoid flat iteration logic.

### 8️⃣ Async Data Source Support
Schema must allow async fetching:
```json
"dataSource": {
  "type": "api",
  "url": "/api/countries"
}
```
Component handles data fetching.

### 9️⃣ Schema-Driven Submission
Submission config defined in schema:
```json
"meta": {
  "endpoint": "/api/register",
  "method": "POST"
}
```
Renderer dynamically submits based on schema.

## 📦 Expected Schema Format (FDS v1)

```json
{
  "id": "form-id",
  "version": 1,
  "meta": {},
  "layout": [],
  "fields": {},
  "submit": {}
}
```

## 🔧 Required Frontend Modules

- `FormRenderer.vue`
- `FormLayoutRenderer.vue`
- `FormFieldRenderer.vue`
- `registry.ts`
- `useFormModel.ts`
- `useFieldVisibility.ts`
- `useValidation.ts` (recommended)

## 🔒 Security Constraints

- No raw HTML injection
- No inline scripts
- No eval usage
- Only whitelisted components renderable
- Validate schema before rendering

## 🚀 Rendering Flow

1. Fetch schema (`useAsyncData`)
2. Generate reactive model
3. Recursively render layout
4. Resolve components via registry
5. Apply conditional logic
6. Apply validation
7. Submit using schema meta config

## 🧠 Conceptual Classification

Architecture Pattern: **Server-Driven UI (SDUI)**
This is a Declarative UI Rendering Engine where forms are one use case.

## 🏁 Skill Summary

**Core Capabilities:**
- Interpret declarative JSON schema
- Render layout recursively
- Dynamically bind reactive model
- Evaluate conditional logic
- Mirror backend validation
- Secure component resolution
- Support async field data
- Perform schema-driven submission
