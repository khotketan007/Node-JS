// // Declaring the Add Function
// function add(a, b){
//     return a + b
// }
// // Declaring the Sub function
// function sub(a , b){
//     return a - b
// }

// // Exporting that Function
// // You want to pass the value in this export function in object type
// module.exports = {
//     addFunction : add,
//     subFunction : sub
// }

// we can also use the arrow function to export 
exports.addition = (a, b) => a + b
exports.substraction = (a, b) => a - b