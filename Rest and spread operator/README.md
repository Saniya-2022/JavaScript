# JavaScript Rest and Spread Operator

## Introduction

The Rest (`...`) and Spread (`...`) operators use the same syntax but perform different tasks.

- **Rest Operator** → Collects multiple values into a single array.
- **Spread Operator** → Expands an array or object into individual elements.

---

# Rest Operator (...)

## Definition

The **Rest Operator** collects multiple values into a single array. It is mainly used in function parameters.

### Syntax

```javascript
function functionName(...parameter) {

}
```

### Example

```javascript
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10,20,30));
```

### Output

```
60
```

### Rules

- Only one rest parameter is allowed.
- The rest parameter must be the last parameter.

---

# Spread Operator (...)

## Definition

The **Spread Operator** expands arrays or objects into individual elements.

### Syntax

```javascript
...array
```

### Example 1: Expand Array

```javascript
const arr = [10,20,30];

console.log(...arr);
```

Output

```
10 20 30
```

---

### Example 2: Copy Array

```javascript
const arr1 = [1,2,3];

const copy = [...arr1];
```

---

### Example 3: Merge Arrays

```javascript
const arr1 = [1,2];
const arr2 = [3,4];

const arr3 = [...arr1,...arr2];
```

---

### Example 4: Copy Object

```javascript
const student = {
    name:"Saniya",
    age:20
};

const copy = {...student};
```

---

# Difference

| Rest Operator | Spread Operator |
|--------------|-----------------|
| Collects values | Expands values |
| Used in function parameters | Used with arrays, objects and function calls |

---

