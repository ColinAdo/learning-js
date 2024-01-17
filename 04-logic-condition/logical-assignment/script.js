// &&= -> This assigns a value when the its truthy or assign to the left side
let a = 10;

if (true) {
    a = 20;
}
console.log(a);

// Alernative assignment
a = a && 20;
console.log(a);

// The same thing
a &&= 20;
console.log(a);

// ||= -> This assigns a value to the right side when the left is falsy
let b = false;
if (!b) {
    b = 6;
}
console.log(b);

// Alternaive assignment
b = b || 6;
console.log(b);

// Alternaive assignment
b ||= 6;
console.log(b);

// ??= -> This assigns a value to the right side only if the left side is null or undefined
let c = undefined;
if (c==undefined) { 
    c = 7;
}
console.log(c);

// Alternative assignment
c = c ?? 7;
console.log(c);

// Alternative assignment
c ??= 7;
console.log(c);
