// Challenge 1
// Given;
const arr = [1, 2, 3, 4, 5];
// expected result is [6, 5, 4, 3, 2, 1, 0]

arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// Challenge 2
// Given;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
// Expected result is [1, 2, 3, 4, 5, 7, 8, 9, 10]

// Sloution 1
// const arr3 = arr1.concat(arr2);
// arr3.splice(4, 1);
// console.log(arr3); 

// Sloution 2
// const arr3 = [...arr1, ...arr2]
// arr3.splice(4, 1);
// console.log(arr3); 

// Sloution 3
// const arr3 = arr1.slice(0, 4).concat(arr2);
// console.log(arr3);

// Sloution 4
const arr3 = [...arr1, ...arr2].slice(0, 4).concat(arr2);
console.log(arr3);