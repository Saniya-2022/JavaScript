# JavaScript setTimeout() and setInterval()

JavaScript provides timer functions to execute code after a delay or repeatedly.

---

# setTimeout()

## Definition

`setTimeout()` executes a function **only once** after the specified delay.

### Syntax

```javascript
setTimeout(function, delay);
```

### Example

```javascript
setTimeout(() => {
    console.log("Hello");
},1000);
```

### Output

```
Hello
```

(after 1 second)

---

# setInterval()

## Definition

`setInterval()` executes a function **repeatedly** after every specified interval.

### Syntax

```javascript
setInterval(function, delay);
```

### Example

```javascript
const id = setInterval(() => {
    console.log("Running...");
},1000);
```

---

# clearInterval()

## Definition

`clearInterval()` stops a running interval.

### Example

```javascript
clearInterval(id);
```

---

## Difference

| setTimeout() | setInterval() |
|--------------|---------------|
| Executes once | Executes repeatedly |
| Stops automatically | Runs until cleared |

---

