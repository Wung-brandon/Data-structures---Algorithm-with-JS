function addNumbers(n){
    let total = 0;
    for (var i = 0; i < n.length; i++){
        total += n[i];
    }
    return total;
}
console.log(addNumbers[1,2,3])

function double(arr){
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(double([1, 2, 3, 4, 5]));

let instructor = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    courses: ['JavaScript', 'React', 'Node.js'],
    isStudent: true,
    grades: [85, 92, 78],
}
console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(Object.entries(instructor))
console.log(Object.hasOwnProperty('lastName'))