// Primitive Data Types in JavaScript

// These are immutable and compared by value

let str = "Hello";       // String
let num = 100;           // Number
let bool = false;        // Boolean
let und = undefined;     // Undefined
let nul = null;          // Null
let sym = Symbol("id"); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof und); // undefined
console.log(typeof nul); // object (JS bug)
console.log(typeof sym); // symbol
console.log(typeof bigInt); // bigint
