function countUniqueValue(arr){
    let unique = [...new Set(arr)];
    return unique.length;
}

console.log(countUniqueValue([1, 1, 1, 1, 2])); // Output: 6