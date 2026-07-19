// ===============================
// JavaScript Basics
// ===============================

// Printing Output
console.log("Hello, JavaScript!");
console.warn("This is a warning.");
console.error("This is an error.");

// ===============================
// Variables
// ===============================

// var (Function Scoped)
var college = "VNR VJIET";
console.log(college);

// let (Block Scoped)
let studentName = "Saniya";
studentName = "Ayesha";
console.log(studentName);

// const (Cannot be reassigned)
const age = 20;
console.log(age);

// ===============================
// Template Literals
// ===============================

console.log(`My name is ${studentName} and I am ${age} years old.`);

// ===============================
// Data Types
// ===============================

let marks = 95;                 // Number
let city = "Hyderabad";         // String
let isStudent = true;           // Boolean
let value;                      // Undefined
let data = null;                // Null
let id = Symbol("id");          // Symbol
let bigNumber = 12345678901234567890n; // BigInt

console.log(typeof marks);
console.log(typeof city);
console.log(typeof isStudent);
console.log(typeof value);
console.log(typeof data);       // object (JavaScript quirk)
console.log(typeof id);
console.log(typeof bigNumber);

// ===============================
// Dynamic Typing
// ===============================

let sample = 100;
console.log(sample);

sample = "Now I am a String";
console.log(sample);

// ===============================
// Operators
// ===============================

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ===============================
// Conditional Statements
// ===============================

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// ===============================
// Loops
// ===============================

console.log("For Loop");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ===============================
// Comments
// ===============================

// Single-line comment

/*
Multi-line
comment
*/

// ===============================
// End of Basics
// ===============================