// Bubble sort

let arr = [4, 12, 2, 5, 8, 10, 9]

// const bubbleSort = (inpArray: number[])=>{
//     let n = inpArray.length;
//     for(let i = 0;i<n-1;i++){
//         for(let j = 0;j<n-1-i;j++){
//             if(inpArray[j] > inpArray[j+1]){
//                 let temp = inpArray[j+1];
//                 inpArray[j+1] = inpArray[j]
//                 inpArray[j] = temp;
//             }
//         }
//     }
//     return inpArray;
// }

// console.log(bubbleSort(arr))


// selection sort

const selectionSort = (inptArr: number[] = []) => {
    let currentIndex = 0;
    while (currentIndex < inptArr.length-1) {
        let minIndex = currentIndex;
        let min = inptArr[currentIndex];
        for (let j = currentIndex + 1; j < inptArr.length; j++) {
            if(min > inptArr[j]){
                min = inptArr[j];
                minIndex = j;
            }
        }
        let temp = inptArr[currentIndex]
        inptArr[currentIndex] = min;
        inptArr[minIndex] = temp;
        currentIndex++;
    }
    return inptArr;
}
console.log(selectionSort(arr))