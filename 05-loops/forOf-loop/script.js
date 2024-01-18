// Looping through arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (const num of numbers) { 
    console.log(num);
}

// Loop through arrays objects
const names = [
    {name: 'John'},
    {name: 'Marl'},
    {name: 'Simon'},
    {name: 'Kiki'},
];

for (const name of names) {
    console.log(name.name);
 }


//  Looping over maps
const map = new Map();

map.set('name', 'John');
map.set('country', 'Sudan');
map.set('age', 28);

for (const [key, value] of map) {
    console.log(key, value);
}

// Looping through strings
const str = 'hello';
for (const letter of str) {
    console.log(letter);
}