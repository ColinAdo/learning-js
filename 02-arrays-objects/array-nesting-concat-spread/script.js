// Nesting - Is having two or more arrays in one array
const vowels = ['a', 'e', 'i', 'o', 'u '];
const consonantes = ['b', 'c', 'd', 'r', 'q'];

// Approach 1
// vowels.push(consonantes);
// console.log(vowels);

// Approach 2
vowels[5] = consonantes;
console.log(vowels);

// How to access a certain element in a nested array
x = vowels[5][0];
console.log('Whats here?', x);

// How to change a certain element in a nested array
x = vowels[5][0] = 'x';
console.log(vowels);

// Deleting an element in first array
x = vowels.splice(0, 1);
console.log(x);
console.log(vowels);

//How to delete a certain element in a nested array
const index = vowels[4].indexOf('x');    
x = vowels[4].splice(index, 1);
console.log(x);
console.log(vowels);

// How to form arrays
// 1 Using concat function
console.log('Working with concat...................');
const firstNames = ['San', 'Roni', 'Abdi', 'Suzi']
console.log(firstNames);
const names = ['Mark', 'Colin', 'Hassan', 'Titus']
console.log(names);

x = names.concat(firstNames);
console.log(x);     

// 2 Using Spread
x = [...names, ...firstNames];
console.log(x);

// 3. Using from function
x = Array.from('1234567890');
console.log(x); 

// 4. Using of function 
const a = 2;
const b = 4;
const c = 6;

x = Array.of(a, b, c);
console.log(x);

// Checking if it is an array
x = Array.isArray(names);
console.log(x);