const { error } = require('console')
const fs = require('fs')
const os = require('os')

console.log(os.cpus().length);

// Creating the New file 
// fs.writeFileSync('./Test.txt', 'Hello Node Js')

// Async file
// fs.writeFile('./Test.txt', 'Hello Ketan', (error) => {})

// Now we can do reading File properties with sync
// const result = fs.readFileSync('./myInfo.txt', "utf-8")
// console.log(result);

// with async
// const result = fs.readFile('./myInfo.txt', "utf-8", (error, result) => {
//     if(error){
//         console.log("Error", error);
//     }else{
//         console.log(result);
//     }
// })

// Append File
// fs.appendFileSync('./myInfo.txt', 'Hello\n')

// console.log("1");
// Non - Blocking
fs.readFile('myInfo.txt','utf-8',(err, result) => {
    // console.log(result);
})
// console.log("2");
// console.log("3");