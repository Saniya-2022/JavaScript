# JavaScript Callbacks, Synchronous & Asynchronous Programming

## 1. Synchronous Programming

### Definition
Synchronous means **one task executes after another**.
The next task waits until the current task finishes.

### Example

```javascript
console.log("Start");
console.log("Learning");
console.log("End");
```

### Output

```
Start
Learning
End
```

### Real-Life Example
- Standing in a queue at a bank.
- One customer is served at a time.

---

## 2. Asynchronous Programming

### Definition
Asynchronous means **JavaScript starts a time-consuming task and continues executing the remaining code without waiting**.

### Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Downloaded");
}, 3000);

console.log("End");
```

### Output

```
Start
End
Downloaded
```

### Why?

Downloading takes time.
Instead of waiting for 3 seconds, JavaScript executes the next line immediately.

### Real-Life Example
- Order food.
- While the food is being prepared, you talk with your friends.
- When the food is ready, the waiter brings it.

---

# 3. Callback Function

## Definition

A **callback** is a function passed as an argument to another function so it can be executed later.

### Syntax

```javascript
functionA(callback);
```

### Example

```javascript
function greet(name){
    console.log("Hello " + name);
}

function process(callback){
    callback("Saniya");
}

process(greet);
```

### Output

```
Hello Saniya
```

---

## Why Do We Need Callbacks?

Suppose you have an array.

```javascript
let arr = [10,20,30];
```

Now you write

```javascript
arr.forEach();
```

What should JavaScript do?

- Print numbers?
- Square them?
- Multiply them?
- Store them?

It doesn't know.

So you pass a function that tells `forEach()` what to do.

Example

```javascript
arr.forEach(function(num){
    console.log(num);
});
```

Output

```
10
20
30
```

The callback tells `forEach()` **what action to perform on every element**.

---

# 4. Callback with setTimeout()

```javascript
setTimeout(function(){
    console.log("Executed after 2 seconds");
},2000);
```

Here,

- `setTimeout()` waits for 2 seconds.
- Then it executes the callback function.

---

# 5. Callback with forEach()

```javascript
let arr=[1,2,3];

arr.forEach(function(num){
    console.log(num);
});
```

### Internal Working

```javascript
for(let i=0;i<arr.length;i++){
    callback(arr[i]);
}
```

---

# 6. Advantages of Callbacks

### 1. Executes code after a task finishes

Example

```javascript
downloadFile(showFile);
```

The file is shown only after downloading completes.

---

### 2. Makes code reusable

Example

```javascript
arr.forEach(print);
```

or

```javascript
arr.forEach(square);
```

The loop is the same.
Only the callback changes.

---

### 3. Useful for events

Example

```javascript
button.addEventListener("click",function(){
    console.log("Button Clicked");
});
```

The callback runs only when the button is clicked.

---

### 4. Used in asynchronous programming

Example

```javascript
setTimeout(function(){
    console.log("Done");
},3000);
```

---

# 7. Disadvantages of Callbacks

## 1. Callback Hell

Too many nested callbacks make the code difficult to read.

Example

```javascript
login(function(){

    getProfile(function(){

        getPosts(function(){

            getComments(function(){

                console.log("Done");

            });

        });

    });

});
```

This is called **Callback Hell** or the **Pyramid of Doom**.

---

## 2. Hard to Read

Many nested functions make the code confusing.

---

## 3. Hard to Debug

Finding where an error occurred becomes difficult.

---

## 4. Difficult Error Handling

Every callback may need separate error handling.

---

# 8. Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Executes one task at a time | Starts a task and continues executing other code |
| Waits for each task to finish | Doesn't wait |
| Blocking | Non-blocking |
| Simple to understand | Better performance for long tasks |

---

# 9. Callback Flow

```
Start Program
      │
      ▼
Call Function
      │
      ▼
Long Task Starts
      │
      ▼
Task Completes
      │
      ▼
Execute Callback
```

---

# 10. Key Points

- **Synchronous** → Executes tasks one after another.
- **Asynchronous** → Doesn't wait for long-running tasks.
- **Callback** → A function passed to another function to execute later.
- `forEach()`, `setTimeout()`, and `addEventListener()` use callbacks.
- Too many nested callbacks create **Callback Hell**.
- Modern JavaScript uses **Promises** and **async/await** instead of deeply nested callbacks.

---

