// Type coercion refers to the automatic conversion of value from one type to another.

let x;
x = 5 + '5';
console.log(x, typeof x);

x = 5 * '5'; // The String will automatically converted to Number
console.log('With string value',x, typeof x);


x = 5 + true; // The Boolean will automatically converted to Number (true = 1)
console.log('With true value',x, typeof x);
x = 5 * false; // The Boolean will automatically converted to Number (flase = 0)
console.log('With false value',x, typeof x);

x = 5 + null;
console.log('With NUll type', x, typeof x);

x = 5 + undefined; 
console.log('With undefined value',x, typeof x);