# JavaScript Shallow Copy vs Deep Copy

When copying an object, JavaScript provides two approaches:

- Shallow Copy
- Deep Copy

---

# Shallow Copy

## Definition

A **Shallow Copy** copies only the first level of an object.

If the object contains nested objects, both copies share the same nested object.

### Example

```javascript
const student = {
    name:"Saniya",
    address:{
        city:"Hyderabad"
    }
};

const copy = {...student};

copy.address.city = "Warangal";
```

Both objects will have `"Warangal"` as the city because the nested object is shared.

---

# Deep Copy

## Definition

A **Deep Copy** creates a completely independent copy of an object, including all nested objects.

### Example

```javascript
const copy = structuredClone(student);

copy.address.city = "Warangal";
```

Now the original object remains unchanged.

---

# Difference

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies only the first level | Copies all levels |
| Nested objects are shared | Nested objects are independent |
| Faster | Slightly slower |

---

