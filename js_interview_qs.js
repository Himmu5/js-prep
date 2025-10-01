// const  str = "Himanshu kese ho";


// const reverseString = (s)=>{
//     if(s.length == 0){
//         return;
//     }
//     const splitString = s.split(" ")

//     for(let i = 0;i<splitString.length;i++){
//         const stringChunk = splitString[i]
//         console.log("stringChunk.reverse(): ", stringChunk)
//         splitString[i] = stringChunk.split("").reverse().join("")
//     }
//     return splitString.join(" ")
// }

// console.log(reverseString(str))

// const arr = [ 5, 10 , 15 , 20, 25 ];
// let firstElement = arr[0];
// for(let i =0;i<arr.length;i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length - 1] = firstElement;
// console.log(arr)

// Diamond Shape

// let prompt = require("prompt-sync")()
// const number = Number(prompt("Enter a number: "))

// for(let i = 0;i<number;i++){
//     for(let j = 0;j<2*number;j++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }