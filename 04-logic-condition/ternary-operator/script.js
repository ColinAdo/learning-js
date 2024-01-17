// Using normal if statements
const age = 20;

if (age >= 18) {
    console.log('You are an adult!');
} else {
    console.log('You you are a minor!');
}

// Using Ternary operator
/**
 * It has three parts:
 * 1. conditional statements
 * 2. ? same as if
 * 3. The statement to be executed
 * 4. : which else statement
 * 5. The Statement to be executed
 */

age >= 18 ? console.log('You can Vote!') : console.log('You cannot vote');

// Returning two statements at the same time
let auth = true;
let redirect;

// if (auth) { 
//     alert('Login Successfully!');
//     redirect = '/homepage';
// } else {
//     alert('Sign-In')
//     redirect = '/login';
// }

// console.log(redirect);

// auth ? (alert('Login Successfully'), redirect = '/home'):(alert('Sign-In'), redirect = '/Login')

// console.log(redirect);

// Not returning else statement using Ternary operator
auth && console.log('This is the deal');