// linear search O(N)
function search(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}
let searchLog = search([1,2,3,4,5,6], 4)
console.log(searchLog)

// method 2 
function searchNum(arr, num){
    let min = 0
    console.log('min', min)
    let max = arr.length - 1
    console.log('max', max)
    let sortedArray = arr.sort((a, b) => a - b)
    while(min <= max){
        let middle = Math.floor((min + max) / 2)
        console.log('middle', middle)
        let currentElement = sortedArray[middle]
        console.log('current element', currentElement)
        if(currentElement === num){
            return middle
        }
        else if(currentElement < num){
            min = middle + 1
            console.log('min-middle', min)
        } else if(currentElement > num){ 
            max = middle - 1
            console.log('max-middle', max)
        }
    }
}
console.log(searchNum([2, 5, 4, 3, 6, 1], 5)) // [1, 2, 4, 5, 6]