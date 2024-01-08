// Ways to define a variables

// var, let, const

// var is not often used now days in ES6 that version 2015 due to scope issues

// How to declare a variable
let firstName;
let lastName;
let a, b, c;

// FirstName is pascalcase
// firstName is camelcase
// firstname is lowercase
// first_name is underscore or snakecase

firstName = 'John';
lastName = 'Ado';

console.log("Your name is: ", firstName, lastName);

let age = 30;

console.log("Your age is:", age, "years old");

// How to override a value of a variable

age = 40;
console.log("Your age is:", age, "years old");


// Using const
// Variables defined using const can not be directly overriden

const email = "email@example.com";
console.log("Your email address is:", email);

//  const in array
const array = ["a", "b", "c", "d", "e"]
console.log(array);


// array = ["a", "b", "c", "d", "e", "f"] This is not allowed, but rather
array.push("f");
console.log(array);


// email = "your@example.com";
// console.log("Your email address is:", email);
// But const object can be overriden using its value and not value

const person = {
    "name": "John",
    "email": "john@example.com"
};

console.log(person);
person.name = "Mike";
person.email = "mike@example.com";
console.log(person);

// Const variables must be initialized
// const age;
const salary = 100;
console.log("Your salary is", salary, "Dollars per hour");