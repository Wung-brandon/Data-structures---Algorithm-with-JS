function validAnagram(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    }
    let strCounter1 = {}
    let strCounter2 = {}
    for (var char1 in str1) {

        // console.log('str1', str1[char1])
        strCounter1[str1[char1]] = (strCounter1[char1] || 0) + 1;
    }
    for (var char2 in str2) {
        strCounter2[str2[char2]] = (strCounter2[char2] || 0) + 1;
    }
    console.log('counter1', strCounter1)
    console.log('counter2', strCounter2)
    
}
console.log('valid anagram', validAnagram('hello', 'llohe'))