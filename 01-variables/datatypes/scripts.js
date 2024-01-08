// Data types in javascript are divided into two:
// 1. Primitive types
/*
This includes
1. String - This returns sequence of characters in single quotes or double quotes
2. Number - THis is integers including floating point numbers
3. Bigint - This is bigger than Number types
4. Boolean - This returns true or fals
5. Symbol - This a buildin object whose constructor return unique value
6. Null - This the defult value of any variable
7. Undefined - This is a avariable that is not defined 
*/

// 2. Non primitive types
/*
This includes
1. Array
2. Object
3. Reference types
*/

/*Javascript is dynamically typed language which means 
you don't have to explicitly state the type when defining a variable
*/

// How to see the type of a variable
// Stirng
const myName = "Jackson"
console.log(myName, typeof myName);

// Number
const age = 20;
console.log(age, typeof age);

// Bigint
const bigint = 900272172172172818n;
console.log(bigint, typeof bigint);

// Boolean
const isMarried = false;
console.log(isMarried, typeof isMarried);

// Symbol 
const id = Symbol("id");
console.log(id, typeof id);

// Null
const nullValue = null;
console.log(nullValue, typeof nullValue); //Theere is an errror when returning ther type of a Null variable

// Undefined
const score = undefined; // Or let score;
console.log(score, typeof score);

// Referenced Type
// Array
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array, typeof array);

// Object
const person = {
    "email": "test@example.com",
}
console.log(person, typeof person);

// NB: Any Referenced Type is an object

// Function 
function hello(){
    console.log("Hello World!");
}

console.log(hello, typeof hello);