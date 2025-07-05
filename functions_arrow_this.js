// Functions, Arrow Functions, and 'this' Context

// Regular Function
function greet(name) {
  console.log("Hello, " + name);
}
greet("Alice");

// Arrow Function
const greetArrow = (name) => {
  console.log("Hi, " + name);
};
greetArrow("Bob");

// 'this' in regular vs arrow function
const person = {
  name: "Charlie",
  regularFunction: function () {
    console.log("Regular function:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.name);
  },
};

person.regularFunction(); // 'Charlie'
person.arrowFunction();   // 'undefined' or window.name in browser
