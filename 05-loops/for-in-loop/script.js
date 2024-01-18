// For-In loop - Gives the keys of an array or object

// Looping through object literals
const person = {
    name: 'John',
    age: 34,
    location: 'Limuru',
};

// This prints keys
for (const key in person) { 
    console.log(key);
}

// Keys and values
for (const key in person) { 
    console.log(key, person[key]);
}

// Looping through an array
const colors = ['red', 'green', 'blue', 'yellow', 'indigo'];
for (const color in colors) { 
    console.log(color, colors[color]);
}