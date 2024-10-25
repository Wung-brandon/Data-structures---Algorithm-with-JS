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