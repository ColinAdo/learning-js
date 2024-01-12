// There's two ways to create arrays

// 1. Using arrays literals
const num = [12, 18, 199, 122, 20];
console.log(num);

// 2. Using Array object
const fruits = new Array('apple', 'orange', 'banana', 'mango');
console.log(fruits);

const mixed = [12, 'Hi', true];
console.log(mixed);

x = num.length;
console.log(x);

x = fruits[2];
console.log(x);

fruits[3] = 'grape'; // Updating the specific value
console.log(fruits);

fruits[4] = 'Mango'; // Appending a value to specific index
console.log(fruits);

fruits[fruits.length] = 'Berry'; // Alternative to the above 
console.log(fruits);