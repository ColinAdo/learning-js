// Primitive values are stored in stack

let name = 'Ado'
let age = 30

let newName = name;
let newAge = age;

console.log(name, newName);
console.log(age, newAge);

// Reference values are stored in a heap

let person = {
    'firstName': 'Sonny',
    'lastName': 'Santo',
}

let newPerson = person;

console.log(person, newPerson);

newPerson.firstName = 'John';
console.log(newPerson);