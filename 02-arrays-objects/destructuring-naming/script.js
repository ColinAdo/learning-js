// Naming in objects. Given;
const firstName = 'john';
const lastName = 'Maek';
const age = 28;

const personOne = {
    firstName: firstName,
    lastName: lastName,
    age: age,
};

console.log(personOne); 
// To avoid repeating the same code
const personTwo = {
    firstName,
    lastName,
    age
};
console.log(personTwo);

// Working with code restructuring
const todo = {
    id: 1,
    title: 'Reading Think and Grow Rich',
    isCompleted: false,
    user: {
        name: 'John',
        age: 28,
        address: {
            country: 'United States',
        }
    },
};

const myId = todo.id;
console.log(myId);

const { id } = todo; // Best way of writing the above code. Destructuring
console.log(id);

const { id: todoId, title, user: { name }, user: { address } } = todo; // When using carly brackets you are destructuring else renaming the
console.log(todoId, title, name, address.country);

// Destructuring arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/** 
 * The ...rest operator gets the rest of the array after it has been destructured
 * the name can be anything other than keywords i.e others
 */
const [first, second, ...rest] = arr; 
console.log(first, second, rest);







