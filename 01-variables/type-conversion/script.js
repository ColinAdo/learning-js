// Converting string to number
console.log('Converting String to a number');
let scoreOne = "100"
console.log(scoreOne, typeof scoreOne);

// 1. Using Number constructor
scoreOne = Number(scoreOne)
console.log(scoreOne, typeof scoreOne);

// 2. Using parseInt method
let scoreTwo = "150"
console.log(scoreTwo, typeof scoreTwo);

scoreTwo = parseInt(scoreTwo)
console.log(scoreTwo, typeof scoreTwo);

//  Using unary operator
let scoreThree = "200"
console.log(scoreThree, typeof scoreThree);

scoreThree = +scoreThree;
console.log(scoreThree, typeof scoreThree);

console.log('Converting Number to a String');
// Convering to number to a string

// Using String constructor
let amountOne = 100;
console.log(amountOne, typeof amountOne);

amountOne = String(amountOne);
console.log(amountOne, typeof amountOne);

console.log('Converting String to a Decimal');

// Using parseFloat
let amountTwo = '99.4';
console.log(amountTwo, typeof amountTwo);


amountTwo = parseFloat(amountTwo);
console.log(amountTwo, typeof amountTwo);

console.log('Converting Number to Boolean');
let num = 0;
console.log(num, typeof num);

num = Boolean(num);
console.log(num, typeof num);

// Ways to get NaN (Not a Number)
// 1. When parsing sting to a number
let greeting = 'Hello';
console.log(greeting, typeof greeting);

greeting = Number(greeting);
console.log(greeting, typeof greeting);

// 2. When getting the square root of -1
console.log(Math.sqrt(-1));

// 3. When perfoming operation on NaN
console.log(NaN + NaN);

// 4. When performing operation on a string
console.log('Hi' * 3);

// When performing operation on undefined 
console.log(undefined + NaN);