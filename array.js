// const arr = []

// let prompt = require("prompt-sync")()
// let totalValues = Number(prompt("Enter length of array: "))

// for(let i = 0;i<totalValues;i++){
//     let userInput = Number(prompt(`Enter ${i+1} value of array: `))
//     arr.push(userInput)
// }

// console.log(arr.join(", "))


// Max value in this array
// const arr = [4, 5, 6, 7, 12, 10, 32, 9]
// if (arr.length == 0) console.log("Array is empty!!");
// else {
//     let max = arr[0]
//     for (let i = 1; i < arr.length - 1; i++) {
//         if(arr[i] > max) max = arr[i];
//     }
//     console.log("max: ", max)
// }

// Second Max value in array
// const arr = [4, 5, 6,6, 6, 7, 12, 10, 32, 32 , 32, 9]
// let max = arr[0]
// let sMax = max;

// for (let i = 0;i<arr.length;i++){
//     if(max < arr[i]){
//         sMax = max;
//         max = arr[i];
//     }
// }
// console.log("max: ", max, "  sMax: ", sMax)

// const arr = [1, 1, 0, 1, 0, 0 , 1, 1, 1 , 0]
// let i = 1;
// let j = 0;

// while (i < arr.length) { 
//     if(arr[i] != arr[j] && arr[j] == 1){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// } 
// console.log(arr)

// duplicate array

// const arr = [1, 2, 3, 4, 5]
// const duplicateArray = (arrInput = [], count = 2)=>{
//     let duplicateOut = []
//     for(let i = 0;i<count;i++){
//         duplicateOut = [...duplicateOut, ...arrInput]
//     }
//     return duplicateOut
// }
// console.log(duplicateArray(arr, 5))

// Reverse a number with inbuild methods
// const prompt = require("prompt-sync")();
// let userInput = prompt("Enter a number:");

// console.log(userInput.split("").reverse().join(""))

// Reverse a number without inbuild methods
// const prompt = require("prompt-sync")();
// let userInput = Number(prompt("Enter a number:"));
// let reverseNumber = 0;
// while(userInput > 0){
//     let lastDigit = userInput % 10;
//     reverseNumber = reverseNumber * 10 +lastDigit
//     userInput =Math.floor(userInput / 10);
// }
// console.log("reverse number: ", reverseNumber)