const arr = [ 3, 5, 8, 10 , 16, 20 ]
const searchItem = 10;

const binarySearch = (searchArray, searchE)=>{
    let start = 0;
    let end = searchArray.length-1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        
        if(searchArray[mid] == searchE){
            console.log("Element is in ",mid , " index")
            return mid;
        }

        if(searchArray[mid] > searchE){
            
            end = mid - 1;
        }else if(searchArray[mid] < searchE){
            start = mid + 1;
        }
    }

}

binarySearch(arr, searchItem)