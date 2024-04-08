console.log("Hello");

// this is First way to use the another Module to in our function
// const checkFn = require('./math')
// console.log(checkFn.addFunctin(10,20));

// Another way to Import the function 
const math = require('./math')
// console.log(add(100,200));
console.log(math.addition(12,22));
console.log((math.substraction(122,33)));