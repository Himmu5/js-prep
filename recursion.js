// const greet = (count = 0)=>{
//     if(count == 0){
//         return
//     }
//     console.log("Hello, Himanshu")
//     greet(count - 1)
// }
// greet(5)
// factorial
var num = 1;
var factorialNumber = function (inptNum) {
    if (inptNum == 0 || inptNum == 1) {
        return 1;
    }
    return inptNum * factorialNumber(inptNum - 1);
};
console.log(factorialNumber(num));
