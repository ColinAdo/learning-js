const num = new Number(5);

console.log(num);

x = num.toString(); // convert number to string
console.log(x, typeof x);

x = num.toString().length; // Finding the length of a number
console.log(x, typeof x);

x = num.toFixed(2);  // Give decimal point of specified value
console.log(x);

x = num.toLocaleString('ar-EG'); // This gives number based on a local language.
console.log(x, typeof x);

x = num.toExponential();
console.log(x);

x = num.valueOf();
console.log(x);

x = Number.EPSILON; 
console.log(x);

x = Number.MAX_SAFE_INTEGER;
console.log(x);

x = Number.MAX_VALUE;
console.log(x);

x = Number.parseFloat(num);
console.log(x, typeof x );


