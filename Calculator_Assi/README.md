# JavaScript Hoisting

## What is Hoisting?

**Hoisting** is JavaScript's behavior of **processing declarations before executing the code**.

It does **not** move your code. Instead, before execution starts, JavaScript first finds all variable and function declarations and prepares them.

---

# Why is Hoisting Important?

Hoisting helps you understand:

* Why `var` prints `undefined`.
* Why `let` and `const` throw a `ReferenceError`.
* Why function declarations can be called before they are written.
* How JavaScript executes code internally.

---

# How JavaScript Executes Code

JavaScript works in two phases.

### Phase 1: Creation Phase

* Finds all variable declarations.
* Finds all function declarations.
* Allocates memory.

### Phase 2: Execution Phase

* Executes the code from top to bottom.
* Assigns values to variables.
* Executes function calls.

---

# Hoisting with `var`

### Code

```javascript
console.log(a);

var a = 10;
```

### Output

```
undefined
```

### Explanation

During the creation phase:

```javascript
var a;
```

So before execution:

```
a = undefined
```

Execution:

```javascript
console.log(a);   // undefined

a = 10;
```

**Key Point:**

* Declaration is hoisted.
* Assignment is **not** hoisted.

---

# Hoisting with `let`

### Code

```javascript
console.log(a);

let a = 10;
```

### Output

```
ReferenceError
```

### Explanation

JavaScript knows `a` exists, but it cannot be accessed before its declaration.

---

# Hoisting with `const`

### Code

```javascript
console.log(a);

const a = 10;
```

### Output

```
ReferenceError
```

### Explanation

`const` behaves like `let`. It is hoisted but cannot be accessed before its declaration.

---

# Hoisting with Function Declaration

### Code

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

### Output

```
Hello
```

### Explanation

The entire function is hoisted, so it can be called before its definition.

---

# Function Expression

### Code

```javascript
sayHello();

var sayHello = function () {
    console.log("Hello");
};
```

### Output

```
TypeError: sayHello is not a function
```

### Explanation

Only the variable is hoisted.

Before execution:

```javascript
var sayHello;
```

At the function call:

```javascript
sayHello(); // undefined()
```

So JavaScript throws a **TypeError**.

---

# Arrow Function

### Code

```javascript
greet();

const greet = () => {
    console.log("Hi");
};
```

### Output

```
ReferenceError
```

Because `const` cannot be accessed before its declaration.

---

# Summary Table

| Declaration          | Hoisted?      | Can use before declaration? |
| -------------------- | ------------- | --------------------------- |
| `var`                | Yes           | Yes (`undefined`)           |
| `let`                | Yes           | No (`ReferenceError`)       |
| `const`              | Yes           | No (`ReferenceError`)       |
| Function Declaration | Yes           | Yes                         |
| Function Expression  | Variable only | No                          |
| Arrow Function       | Variable only | No                          |

---



> **Hoisting is JavaScript's default behavior of processing variable and function declarations before executing the code.**

---

 Why is Hoisting Important?

> Hoisting helps us understand how JavaScript executes code. It explains why `var` prints `undefined`, why `let` and `const` throw a `ReferenceError` when accessed before declaration, and why function declarations can be called before they are defined.

---

# Easy Way to Remember

* `var` → **Created first, value = `undefined`**
* `let` → **Created first, cannot use before declaration**
* `const` → **Created first, cannot use before declaration**
* `function` → **Completely ready before execution**

---



**"JavaScript first remembers declarations, then runs the code."**
