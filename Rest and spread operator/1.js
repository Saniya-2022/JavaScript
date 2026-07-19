// ==========================================
// JavaScript Rest and Spread Operator
// ==========================================

// ---------- Rest Operator ----------
// Rest operator collects multiple values into a single array.

function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log("Sum:", sum(10, 20, 30, 40));

// Rest parameter must be the last parameter.
function student(name, age, ...marks) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Marks:", marks);
}

student("Saniya", 20, 90, 95, 98);

// ---------- Spread Operator ----------
// Spread operator expands arrays or objects.

// Expanding an Array
const arr = [1, 2, 3, 4];

console.log(...arr);

// Copying an Array
const copyArray = [...arr];

console.log(copyArray);

// Merging Arrays
const arr1 = [10, 20];
const arr2 = [30, 40];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Copying an Object
const studentDetails = {
    name: "Saniya",
    age: 20
};

const copyObject = { ...studentDetails };

console.log(copyObject);