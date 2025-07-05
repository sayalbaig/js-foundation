// JavaScript Arrays

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3
console.log(fruits[1]); // Banana

// Array methods
fruits.push("Orange");       // Add to end
fruits.pop();                // Remove from end
fruits.unshift("Strawberry"); // Add to start
fruits.shift();              // Remove from start

// Iterating arrays
fruits.forEach(fruit => console.log(fruit));

// Map and Filter
const lengths = fruits.map(f => f.length);
const filtered = fruits.filter(f => f.includes("a"));

console.log(lengths);
console.log(filtered);
