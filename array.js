// const arr = []

// let prompt = require("prompt-sync")()
// let totalValues = Number(prompt("Enter length of array: "))

// for(let i = 0;i<totalValues;i++){
//     let userInput = Number(prompt(`Enter ${i+1} value of array: `))
//     arr.push(userInput)
// }

// console.log(arr.join(", "))


// Max value in this array
const arr = [4, 5, 6, 7, 12, 10, 32, 9]
if (arr.length == 0) console.log("Array is empty!!");
else {
    let max = arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
        if(arr[i] > max) max = arr[i];
    }
    console.log("max: ", max)
}