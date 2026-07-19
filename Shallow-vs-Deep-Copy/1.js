// ==========================================
// JavaScript Shallow Copy vs Deep Copy
// ==========================================

// Original Object
const student = {
    name: "Saniya",
    address: {
        city: "Hyderabad"
    }
};

// ---------- Shallow Copy ----------

const shallowCopy = { ...student };

shallowCopy.name = "Ayesha";
shallowCopy.address.city = "Warangal";

console.log("Original Object:");
console.log(student);

console.log("Shallow Copy:");
console.log(shallowCopy);

// Notice:
// 'name' is copied independently.
// 'address' is shared between both objects.

// ---------- Deep Copy ----------

const deepCopy = structuredClone(student);

deepCopy.address.city = "Bangalore";

console.log("Original After Deep Copy:");
console.log(student);

console.log("Deep Copy:");
console.log(deepCopy);

// Notice:
// Changes in deepCopy do not affect the original object.