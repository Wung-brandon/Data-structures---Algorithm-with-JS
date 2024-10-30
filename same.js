// Method 1
function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    for (var i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1){
            return false;
        } 
        arr2.splice(correctIndex, 1);

    }
    return true
   
    
}

console.log('same', same([1, 2, 3, 4, 2], [1, 4, 9, 4, 16]))

// method 2 using frequency counter
function sameArr(arr1, arr2){
    if (arr1.length!== arr2.length){
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    for (let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }
    console.log('counter1', counter1)
    console.log('counter2', counter2)
    for (let key in counter1){
        if (!(key ** 2 in counter2) || counter1[key]!== counter2[key ** 2]){
            return false;
        }
    }
    return true;
}
console.log('same', sameArr([1, 2, 3, 4, 2], [1, 4, 9, 4, 16]))