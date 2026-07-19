// ================================
// Object Methods
// ================================

const student = {
    name: "Saniya",
    age: 20,
    branch: "CSE",
    address: {
        city: "Hyderabad"
    }
};

// Object.keys()
console.log(Object.keys(student));

// Object.values()
console.log(Object.values(student));

// Object.entries()
console.log(Object.entries(student));

// Object.freeze()
Object.freeze(student);

student.name = "Ayesha"; // Will not change

console.log(student);

// Nested object can still change
student.address.city = "Warangal";

console.log(student);

// Object.assign() - Shallow Copy
const copy = Object.assign({}, student);

console.log(copy);