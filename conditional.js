// conditional statement

// let age = Number(prompt("Enter you age: "));

// if (isNaN(age)) {
//     console.log("Wrong input!!!!")
// } else {
//     if (age >= 18) {
//         console.log("Voter is valid!!!!")
//     } else {
//         console.log("Voter is not valid!!!!")
//     }
// }

// const purchases = Number(prompt("What is the final amount?"));
// let payableAmount = purchases;

// let discount = 0; 
// if(isNaN(purchases)){
//     alert('incorrect input!!!!')
// }else if(purchases >= 0 && purchases <= 5000){
//    discount = 0;
// }else if(purchases >= 5001 && purchases <= 7000){
//     discount = 5;
// } else if(purchases >= 7001 && purchases <= 9000){
//     discount = 10;
// }else if(purchases >9000){
//     discount = 20;
// }else{
//     alert("Not a valid value!!!!")
// }
// payableAmount = Math.floor(purchases - (purchases * discount) / 100);
// alert(`Payable amount is: ${Math.floor(payableAmount)}`)


// note calc

let amount = 5287

if(amount >= 500){
    console.log(`count of 500 notes is: ${Math.floor(amount/500)}`)
    amount %= 500;
}if(amount >= 200){
    console.log(`count of 200 notes is: ${Math.floor(amount/200)}`)
    amount %= 200;
} 
if(amount >= 100){
    console.log(`count of 100 notes is: ${Math.floor(amount/100)}`)
    amount %= 100;
} if(amount >= 50){
    console.log(`count of 50 notes is: ${Math.floor(amount/50)}`)
    amount %= 50;
} if(amount >= 20){
    console.log(`count of 20 notes is: ${Math.floor(amount/20)}`)
    amount %= 20;
} if(amount >= 10){
    console.log(`count of 10 notes is: ${Math.floor(amount/10)}`)
    amount %= 10;
} if(amount >= 5){
    console.log(`count of 5 notes is: ${Math.floor(amount/5)}`)
    amount %= 5;
} if(amount >= 2){
    console.log(`count of 2 notes is: ${Math.floor(amount/2)}`)
    amount %= 2;
} if(amount == 1){
    console.log(`count of 1 notes is: ${Math.floor(amount/1)}`)
} 