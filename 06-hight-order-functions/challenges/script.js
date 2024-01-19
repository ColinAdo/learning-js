// Challenge 1
// Finding the object with name and email address of people

const people = [
    {
        firstName: 'John',
        lastName: 'Mark',
        email: 'mark@example.com',
        phone: '123-456-122',
        age: 30
    },
    {
        firstName: 'Sam',
        lastName: 'Moses',
        email: 'sam@example.com',
        phone: '123-456-122',
        age: 24
    },
    {
        firstName: 'Deluxe',
        lastName: 'Mika',
        email: 'mika@example.com',
        phone: '143-456-122',
        age: 45
    },
    {
        firstName: 'Titus',
        lastName: 'Mali',
        email: 'titus@example.com',
        phone: '123-456-111',
        age: 18
    },
    {
        firstName: 'Santo',
        lastName: 'Sannu',
        email: 'santo@example.com',
        phone: '123-444-122',
        age: 26
    }
];

const peopleWithLessThan26Years = people
    .filter((person) => person.age <= 25)
    .map((person) => {
        return {
            name: person.firstName +' '+ person.lastName,
            email: person.email
        }
    })

console.log(peopleWithLessThan26Years);
    
// Challenge 2
// Printing the sum of postive numbers

const numbers = [2, -4, -6, 4, 8, 9, -10, 3];

const postiveSum = numbers.filter(n => n > 0).reduce((acc, n) => acc + n, 0);
console.log(postiveSum);

// Challenege 3
// Capitalize the initial letter of words

const words = ['coder', 'programmer', 'author', 'developer'];

for (const word of words) { 
    const w = word[0].toUpperCase()+word.slice(1);
    console.log(w);
}

// Getting array of capitalize the initial letter of words 
const upperWords = words.map(word => {
    return word[0].toUpperCase()+word.slice(1);
})

console.log(upperWords);