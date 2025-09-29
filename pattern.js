// console.log("Hello")
// console.log("World")

// process.stdout.write("Hello")
// process.stdout.write("World")
// console.log("hello")

// const prompt = require("prompt-sync")()
// const number = prompt("Enter a number: ")
// process.stdout.write(number)

// Print five star
// for(let i =0;i<5;i++) process.stdout.write("*")

// Print box patter

// const prompt = require("prompt-sync")()
// const number = +prompt("Enter a number:")

// for(let i =0;i<number;i++){
//     for(let j = 0;j<number;j++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// Right Angle Triagle
const prompt = require("prompt-sync")()
const number = Number(prompt("Enter a number: "))

for(let i = 0;i<number;i++){
    for(let j = 0;j<= i;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n")
}