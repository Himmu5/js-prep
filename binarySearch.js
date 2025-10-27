// const arr = [ 3, 5, 8, 10 , 16, 20 ]
// const searchItem = 10;

// const binarySearch = (searchArray, searchE)=>{
//     let start = 0;
//     let end = searchArray.length-1;

//     while(start <= end){
//         let mid = Math.floor((start + end) / 2);
        
//         if(searchArray[mid] == searchE){
//             console.log("Element is in ",mid , " index")
//             return mid;
//         }

//         if(searchArray[mid] > searchE){
            
//             end = mid - 1;
//         }else if(searchArray[mid] < searchE){
//             start = mid + 1;
//         }
//     }

// }

// binarySearch(arr, searchItem)



const arr = [ 2,4, 5, 6 , 8, 9 ,11, 14, 16 , 19, 21 , 24, 26 , 28 , 31, 35 ]
const binarySearch = (inptArr =[], target) => { 
    let start = 0;
    let end = arr.length -1;
    while(start <= end){
        let mid = Math.floor(end - ( end - start ) / 2);
        if(inptArr[mid] == target){
            console.log('index of target is: ', mid);
            return;
        }else if(inptArr[mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }
    console.log("Target not found");
    return;
}
binarySearch(arr, 11)