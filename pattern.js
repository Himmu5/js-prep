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
// const prompt = require("prompt-sync")()
// const number = Number(prompt("Enter a number: "))

// for(let i = 0;i<number;i++){
//     for(let j = 0;j<= i;j++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n")
// }

// const prompt = require("prompt-sync")()
// const number = Number(prompt("Enter a number: "))
// for(let i = 0;i<number;i++){
//     let ascii = 65;
//     for(let j = 0;j<=i;j++){
//         process.stdout.write(String.fromCharCode(ascii));
//         ascii++;
//     }
//     process.stdout.write("\n");
// }


// Inverted Right Angle Pattern

// const prompt = require("prompt-sync")()
// const number = Number(prompt("Enter a number: "))
// for(let i = 0;i<number;i++){
//     for(let j = number - 1;j>=i;j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n")
// }


// Inverted Left Angle Pattern

// const prompt = require("prompt-sync")()
// const number = Number(prompt("Enter a number: "))
// for(let i = 0;i<number;i++){
//     for(let j = number-1;j>=number - 1;j--){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n");
// }


// Inverted RIght Angle Pattern
// let prompt = require("prompt-sync")()
// let number = Number(prompt("Enter a number: "));
// for(let i = 0;i<number;i++){
//     for(let j = 0;j<number - i - 1;j++){
//         process.stdout.write(" ");
//     }
//     for(let j = number - 1;j>=number -i - 1;j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n")
// }

// X pattern

let prompt = require("prompt-sync")()
let number = Number(prompt("Enter a number: "));

for(let i =0;i<number;i++){
    for(let j = 0;j<number;j++){
        if(i == j || i+j == number -1){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write('\n')
}