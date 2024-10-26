function addUpTo(n){
    let total = 0;
    for (var i = 1; i <=n; i++){
        total += i;
    }
    return total;
}

console.log(addUpTo(5)); // Output: 15

// The big O notation of this function is O(n) where n is the number
// The number of operations is eventually bounded by a multiple of n (say, 10n)

function printAllPairs(n){
    for (var i=0; i < n; i++) {
        for (var j=0; j < n; j++) {
            // console.log(i, j);
        }
    }
}

console.log(printAllPairs(5)); // Output: 25 pairs (5*5)

function logAtLeast5(n){
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtLeast5(3)); // Output: 1, 2, 3, 4, 5

function logAtMost5(n){
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtMost5(7)); // Output: 1, 2, 3, 4, 5

function onlyElementsAtEvenIndex(array){
    var newArray = Array(Math.ceil(array.length / 2))
    // let evenArray = []
    for (var i = 0; i < array.length; i++){
        if (i % 2 === 0) {
            // evenArray.push(array[i])
            newArray[i / 2] = array[i]
        }
    }
    // return evenArray
    return newArray
}
console.log(onlyElementsAtEvenIndex([1, 2, 5, 7, 6, 8, 10, 14, 7]))