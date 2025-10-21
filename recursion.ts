// const greet = (count = 0)=>{
//     if(count == 0){
//         return
//     }
//     console.log("Hello, Himanshu")
//     greet(count - 1)
// }

// greet(5)

// factorial

const num = 2;

const fibonachiNumber = ( inptNum: number ): number => {
    if(inptNum == 0 || inptNum == 1 ){
        return 1;
    }
    return inptNum * fibonachiNumber(inptNum - 1)
}

console.log(fibonachiNumber(num))
