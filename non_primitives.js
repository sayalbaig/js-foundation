// Non-Primitives in JavaScript

// Objects, Arrays, and Functions are non-primitive (reference types)

// Object
const person = {
  name: "Alice",
  age: 25,
};

// Array
const numbers = [1, 2, 3, 4];

// Function
function greet() {
  console.log("Hello");
}

// Reference equality
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 === obj2); // false

const obj3 = obj1;
console.log(obj1 === obj3); // true

/*
Explanation:
- Non-primitives are compared by reference, not by value.
*/
