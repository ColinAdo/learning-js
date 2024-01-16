// If statement
if (true) { 
    console.log('This is printed in the console');
}

if (false) {
    console.log('This is not printed in the console');
}

const a = 10;
let b = 10;

if (a == b) { 
    console.log(`${a} is equal to ${b}`);
}

b = 5;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
}


b = 15;
if (a < b) {
    console.log(`${a} is less than ${b}`);
}


// IF-else statement

if (a > b) { 
    console.log(`${a} is greater than ${b} by ${a - b}`);
} else {
    console.log(`${a} is less than ${b} by ${a - b}`);
}

// If statement shorthand

b = 3;
if (a > b) console.log(`${a} is greater`), console.log('This is magic');

// If statement shorthand
b = 50;
if (a > b) console.log(`${a} is greater`), console.log('This is magic');
else console.log(`${b} is greater`), console.log('Another is magic');
