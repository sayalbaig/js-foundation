// JavaScript Loops

// for loop
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i);
}

// while loop
let j = 0;
while (j < 5) {
  console.log("while loop:", j);
  j++;
}

// do...while loop
let k = 0;
do {
  console.log("do...while loop:", k);
  k++;
} while (k < 5);

// for...of loop (iterables)
const arr = ["a", "b", "c"];
for (const item of arr) {
  console.log("for...of:", item);
}

// for...in loop (object properties)
const obj = { x: 1, y: 2 };
for (const key in obj) {
  console.log(`for...in: ${key} = ${obj[key]}`);
}
