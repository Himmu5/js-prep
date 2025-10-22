// GCD
var a = 50;
var b = 40;
// let a_divisor = []
// let b_divisor = []
// for(let i = 1;i<=a;i++){
//     if(a % i == 0){
//         a_divisor.push(i)
//     }
// }
// for(let i = 1;i<=b;i++){
//     if(b % i == 0){
//         b_divisor.push(i)
//     }
// } 
// console.log(b_divisor)
// console.log(a_divisor)
// const min = Math.max(a_divisor.length, b_divisor.length)
// let result = 1;
// for(let i =0;i<min;i++){
//     if(a_divisor[i] == b_divisor[i]){
//         result = a_divisor[i];
//     }
// }
// console.log(result)
// while(a != b){
//     if(a > b) a = a-b
//     else b = b - a
// }
// console.log(a)
var getGCD = function (first, second) {
    if (first == second) {
        return first;
    }
    else {
        if (first > second)
            return getGCD(first - second, second);
        else
            return getGCD(first, second - first);
    }
};
console.log(getGCD(a, b));
