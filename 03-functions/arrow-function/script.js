// Regular function
function demo(x, y) { 
    return x+y; 
}

console.log(demo(2, 3));

// Arrow functions
const sum = (x, y) => x + y;
console.log(sum(2, 3));

const multi = x => x * 5;
console.log(multi(2));

// Returning object
const createUser = () => ({
    name: 'John'
});
console.log(createUser());


// Using forEach

const number = [1, 2, 3, 4, 5, 6, 7, 8]

number.forEach(function (n) {
    console.log(n);
});
 
number.forEach((n) => console.log(n));