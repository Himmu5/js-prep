const arr = []

let prompt = require("prompt-sync")()
let totalValues = Number(prompt("Enter length of array: "))

for(let i = 0;i<totalValues;i++){
    let userInput = Number(prompt(`Enter ${i+1} value of array: `))
    arr.push(userInput)
}

console.log(arr.join(", "))