// Working with String concatinations

// First approach
let x;
const name = 'Intense';
const age = 28;

x = 'My name is ' + name + ' and i am ' + age + ' years old.';
console.log(x);

// Second approach using template literals
x = `My name is ${name} and i am ${age} years old.`;
console.log(x);

// Accessing single itme of a string
x = 'Intense';

console.log(x[5]);

// Find the length of the string using length property
x = 'Ado'
console.log(x.length);

// Converting string into object
let s = 'Cosmos';

console.log(s, typeof s);

s = new String(s);
console.log(s, typeof s);

// Accessing prototype
x = s.__proto__
console.log(x);

// String manipulation
x = 'Hello world!';
s = x.toLocaleUpperCase();
console.log(s);

s = x.toLocaleLowerCase();
console.log(s);

s = x.charAt(0);
console.log(s);


s = x.charCodeAt(0);
console.log(s);

s = x.codePointAt(0);
console.log(s);

s = x.concat(', JavaScript!'); //Same as s = s + ', JavaScript!';
console.log(s);

s = x.endsWith('!'); // Returns true or false value
console.log(s);

s = x.indexOf('!'); 
console.log(s);

s = x.startsWith('H'); 
console.log(s);

s = x.substring(0, 4 ) // 0 is same as from, 4 is same as to
console.log(s);

s = x.substring(6); // It starts from 6th index of the string
console.log(s);

s = x.slice(1, 5); //Hello world - It starts from most right index of the string to left.
// 1 index starts from the left, while 5 starts from the right
console.log(s);

x = '  Hello world world';
console.log(x);

s = x.trim(); //  It trims the starting whitespace
console.log(s);

s = x.repeat(5); //
console.log(s);

s = x.replace('l', 'x');  // Replaces the first match letter, word or character
console.log(s);


s = x.includes('H'); 
console.log(s);

s = x.split('');
console.log(s);

