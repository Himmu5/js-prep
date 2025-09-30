// Right Half Pyramid Pattern

// const prompt = require("prompt-sync")();
// const number = Number(prompt("Enter a number: "));

// for(let i =0;i<number;i++){
//     for(let j = 0;j<=i;j++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// Inverted Right Half Pyramid Pattern

// const prompt = require("prompt-sync")();
// const number = Number(prompt("Enter a number: "));
// for(let i = 0;i<number;i++){
//     for(let j = number-1;j>=i;j--){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// Inverted Left Half Pyramid Pattern
// const prompt = require("prompt-sync")();
// const number = Number(prompt("Enter a number: ")); 

// for(let i = 0;i<number;i++){

//     for(let j = 0;j<=i;j++){
//         process.stdout.write(" ")
//     }

//     for(let j = number-1;j>=i;j--){
//         process.stdout.write("*")
//     }

//     process.stdout.write("\n")

// }
// const prompt  = require("prompt-sync")()
// const number  = Number(prompt("Enter a number: "))

// for(let i = 0;i<number;i++){
//     for(let j = number -1;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j = 0;j<=i;j++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// Print Full Pyramid Pattern
// const prompt  = require("prompt-sync")()
// const number  = Number(prompt("Enter a number: "))

// for(let i = 0;i<number;i++){
//     for(let j = number -1;j>=i;j--){
//         process.stdout.write(" ")
//     }
//     for(let j = 0;j<= 2 * i;j++){
//         process.stdout.write("*")
//     }
//     process.stdout.write("\n")
// }

// X pattern
// const prompt  = require("prompt-sync")()
// const number  = Number(prompt("Enter a number: "))

// for(let i = 0;i<number;i++){
//     for(let j = 0;j<number;j++){
//         if(i == j || i + j == number - 1){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     process.stdout.write("\n")
// }

const prompt = require("prompt-sync")()
const number = Number(prompt("Enter a number: "))

for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")

}
for (let i = 0; i < number; i++) {
    for (let j = number - 1; j >= i; j--) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}