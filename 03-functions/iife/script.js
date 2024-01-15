// IIFE - is used to avoid global variables collisions
/**
 *   Syntax:
 * (function () {
 * expression here
 * })(); argument (s) here
 * */ 

(function () {
    const user = 'Mark';
    console.log(user);

    const greeting = () => console.log("Hey from IIFE");

    greeting();
})();

// IIFE Using parameters
(function (user) {
    console.log(`user ${user} is created successfully`);
})('Ado');

// Infinite Loop
// (function hello() { 
//     const greeting = () => console.log("Hey IIFE");
//     greeting();
//     hello();
// })();