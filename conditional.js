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

const purchases = Number(prompt("What is the final amount?"));
let payableAmount = purchases;

let discount = 0; 
if(isNaN(purchases)){
    alert('incorrect input!!!!')
}else if(purchases >= 0 && purchases <= 5000){
   discount = 0;
}else if(purchases >= 5001 && purchases <= 7000){
    discount = 5;
} else if(purchases >= 7001 && purchases <= 9000){
    discount = 10;
}else if(purchases >9000){
    discount = 20;
}else{
    alert("Not a valid value!!!!")
}
payableAmount = Math.floor(purchases - (purchases * discount) / 100);
alert(`Payable amount is: ${Math.floor(payableAmount)}`)