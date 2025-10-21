// const greet = (count = 0)=>{
//     if(count == 0){
//         return
//     }
//     console.log("Hello, Himanshu")
//     greet(count - 1)
// }
// greet(5)
// factorial
var num = 2;
var fibonachiNumber = function (inptNum) {
    if (inptNum == 0 || inptNum == 1) {
        return 1;
    }
    return inptNum * fibonachiNumber(inptNum - 1);
};
console.log(fibonachiNumber(num));
