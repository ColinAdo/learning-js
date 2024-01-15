// The difference between const, var and let
// 1. Const - is block and function scoped
// 2. let - is block and function scoped
// 3. var - is not block but function scoped
// Example: 

// 1. Function scope
function run (){
    const x = 100;
    let y = 50;
    var z = 25;

    console.log(x+y+z);
}

run();

// console.log(x); // Returns x is not defined
// console.log(y); // Returns y is not defined
// console.log(y); // Returns y is not defined

// 2. Block scope
if (true) { 
    const x = 100;
    let y = 50;
    var z = 25;
}

// console.log(x); // Returns x is not defined
// console.log(y); // Returns y is not defined
console.log(z); // Returns the value of z

for (let i = 1; i <= 10; i++) { 
    console.log(i);
}
// console.log(i); // Returns x is not defined

for (var i = 1; i <= 10; i++) { 
    console.log(i);
}
console.log(i);

/* Const variables can be accessed by the children 
in a function and no the other way around
*/
// Example 1: function

function first() {
    const x = 100;
    // console.log(x+y); This will throw an error y is not defined

    function second() { 
        const y = 100;
        console.log(x+y); // It is possible to x from here
    }
    second();
}
first();

// Example 2: block

if (true) { 
    const x = 100;

    if (x == 100) { 
        const y = 500;
        console.log(x+y);
    }
}