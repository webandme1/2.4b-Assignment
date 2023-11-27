// 1. maxOfTwoNumbers Function
function maxOfTwoNumbers(x, y) {
    return x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9));

// 2. maxOfThree Function
const maxOfThree = function(x, y, z) {
    let max = x;
    if (y > max) max = y;
    if (z > max) max = z;
    return max;
};
console.log(maxOfThree(1, 2, 3));

// 3. isCharAVowel Function
function isCharAVowel(char) {
    return 'aeiou'.includes(char.toLowerCase());
}
console.log(isCharAVowel('A'));

// 4. sumArray Function
const sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([2, 4, 5]));

// 5. multiplyArray Function
function multiplyArray(arr) {
    return arr.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyArray([2, 4, 5]));

// 6. numArgs Function
const numArgs = function() {
    return arguments.length;
};
console.log(numArgs(1, 2, 3));

// 7. reverseString Function
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('rockstar'));

// 8. longestStringInArray Function
const longestStringInArray = function(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b).length;
};
console.log(longestStringInArray(['one', 'two', 'three']));

// 9. stringsLongerThan Function
function stringsLongerThan(arr, len) {
    return arr.filter(str => str.length > len);
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
