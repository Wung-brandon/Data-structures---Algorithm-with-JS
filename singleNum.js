function singleNumber(arr){
    let unique = 0
    for (var i = 0; i < arr.length; i++){
        unique ^= arr[i]
    }
    return unique
}

console.log(singleNumber([2, 4, 6, 2, 4, 6, 8])) // Output: 8