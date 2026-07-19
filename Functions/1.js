// ================================
// JavaScript Functions
// ================================

// Normal Function
function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();

// Function with Parameters
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("Sum:", result);

// Function with Default Parameter
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 4));

// Arrow Function
const subtract = (a, b) => a - b;

console.log("Difference:", subtract(20, 10));

// Arrow Function with Multiple Statements
const square = (num) => {
    return num * num;
};

console.log("Square:", square(6));