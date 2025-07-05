// Higher-Order and Nested Functions in JavaScript

// Higher-Order Function: Accepts or returns a function
function higherOrder(fn) {
  console.log("Inside higher order function");
  fn();
}

higherOrder(() => console.log("Callback executed"));

// Function returning a function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

// Nested Functions
function outer() {
  const name = "JS";
  function inner() {
    console.log("Hello from", name);
  }
  inner();
}

outer();
