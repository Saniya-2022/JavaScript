# JavaScript Object Methods

## What is an Object?

An **object** is a non-primitive data type that stores data in the form of **key-value pairs**. It is used to represent real-world entities by grouping related properties and methods together.

### Example

```javascript
const student = {
    name: "Saniya",
    age: 20,
    branch: "CSE"
};
```

Here:
- `name`, `age`, and `branch` are **keys (properties)**.
- `"Saniya"`, `20`, and `"CSE"` are their **values**.

---

# Object Methods

Object methods are built-in methods provided by JavaScript to perform operations on objects.

---

## 1. Object.keys()

### Definition

`Object.keys()` returns an array containing all the **keys (property names)** of an object.

### Syntax

```javascript
Object.keys(objectName);
```

### Example

```javascript
const student = {
    name: "Saniya",
    age: 20,
    branch: "CSE"
};

console.log(Object.keys(student));
```

### Output

```text
["name", "age", "branch"]
```

---

## 2. Object.values()

### Definition

`Object.values()` returns an array containing all the **values** of an object.

### Syntax

```javascript
Object.values(objectName);
```

### Example

```javascript
console.log(Object.values(student));
```

### Output

```text
["Saniya", 20, "CSE"]
```

---

## 3. Object.entries()

### Definition

`Object.entries()` returns an array of **key-value pairs**.

### Syntax

```javascript
Object.entries(objectName);
```

### Example

```javascript
console.log(Object.entries(student));
```

### Output

```text
[
  ["name", "Saniya"],
  ["age", 20],
  ["branch", "CSE"]
]
```

---

## 4. Object.freeze()

### Definition

`Object.freeze()` prevents an object from being modified. After freezing:
- New properties cannot be added.
- Existing properties cannot be deleted.
- Existing properties cannot be modified.

### Syntax

```javascript
Object.freeze(objectName);
```

### Example

```javascript
Object.freeze(student);

student.name = "Ayesha";

console.log(student);
```

### Output

```text
{
  name: "Saniya",
  age: 20,
  branch: "CSE"
}
```

> **Note:** `Object.freeze()` is **shallow**. Nested objects can still be modified unless they are frozen separately.

---

## 5. Object.assign()

### Definition

`Object.assign()` copies the properties of one or more source objects into a target object. It creates a **shallow copy**.

### Syntax

```javascript
Object.assign(target, source);
```

### Example

```javascript
const copy = Object.assign({}, student);

console.log(copy);
```

---

## Summary

| Method | Purpose |
|--------|---------|
| `Object.keys()` | Returns all keys |
| `Object.values()` | Returns all values |
| `Object.entries()` | Returns key-value pairs |
| `Object.freeze()` | Prevents object modification |
| `Object.assign()` | Creates a shallow copy of an object |

---

