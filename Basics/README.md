# JavaScript Basics

This folder contains the basic concepts of JavaScript with simple examples.

## Topics Covered

### 1. Console Methods
Used to display messages in the browser console.

```javascript
console.log("Hello");
console.warn("Warning");
console.error("Error");
```

---

### 2. Variables

JavaScript provides three ways to declare variables.

#### var
- Function scoped
- Can be redeclared

```javascript
var name = "Saniya";
```

#### let
- Block scoped
- Can be reassigned

```javascript
let age = 20;
age = 21;
```

#### const
- Block scoped
- Cannot be reassigned
- Must be initialized during declaration

```javascript
const college = "VNR VJIET";
```

---

### 3. Template Literals

Used to insert variables inside strings.

```javascript
const name = "Saniya";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

### 4. Data Types

#### Primitive Data Types
- Number
- String
- Boolean
- Undefined
- Null
- Symbol
- BigInt

#### Non-Primitive Data Types
- Object
- Array
- Function

Example:

```javascript
let age = 20;
let name = "Saniya";
let isStudent = true;
let value;
let data = null;
```

---

### 5. Dynamic Typing

JavaScript is a dynamically typed language.

```javascript
let value = 20;

value = "Hello";
```

The same variable can store different types of values.

---

### 6. Operators

Arithmetic operators:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
```

---

### 7. Conditional Statements

```javascript
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}
```

---

### 8. Loops

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

---

### 9. Comments

Single-line comment

```javascript
// This is a comment
```

Multi-line comment

```javascript
/*
This is a
multi-line comment
*/
```

---



## Learning Outcome

After completing this folder, you will understand:

- Console methods
- Variables (`var`, `let`, `const`)
- Template literals
- JavaScript data types
- Dynamic typing
- Arithmetic operators
- Conditional statements
- Loops
- Comments

---

## Author

**Saniya**