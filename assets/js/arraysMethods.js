// Task 1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatedArr = arr1.concat(arr2);
console.log(concatedArr);

// Task 2

/*const reversedArr = arr1.reverse();
console.log(reversedArr);*/

// Task 3

// const newArr = arr1.concat(4, 5, 6);
console.log(arr1.push(4, 5, 6));

// Task 4

const taskArray = [1, 2, 3];
console.log(taskArray.unshift(7, 8, 9));

// Task 5

const letterArr = ['aaa', 'bbb', 'ccc'];
console.log(letterArr.shift());

// Task 6

const letterArr2 = ['ddd', 'fff', 'eee'];
console.log(letterArr2.pop());

// Task 7

const numArr = [1, 2, 3, 4, 5];
// const result = numArr.slice(-3);
// console.log(result);

// Task 8

// const result2 = numArr.slice(1, 4);
// console.log(result2);

// Task 9

// const oneMoreRes = numArr.splice(1, 2);
// console.log(numArr);

// Task 10

// const oneMoreRes = numArr.splice(1, 3);
// console.log(oneMoreRes);

// Task 11

numArr.splice(1, 0, 'w', 'tr')
console.log(numArr);
numArr.splice(6, 0, 'vv');
console.log(numArr);
numArr.splice(9, 0, 'a');
console.log(numArr);

// Task 12

const finalArr = [5, 8, 2, 4, 7, 1];
finalArr.sort((a, b) => a - b);
console.log(finalArr);

// Решение последней таски подсмотрел на мдн, но суть сравнения не понял

