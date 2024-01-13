// Other way to define object

const todo = Object({});

todo.id = 1;
todo.title = 'Wash cloths';
todo.completed = false;

x = todo;
console.log(x);

// Working with nesting
const person = {
    address: {
        coords: {
            lnt: 123.5,
            lat: -23,
        },
    },
};

console.log(person.address.coords.lat);

// Other way to form nested objects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const obj3 = { obj1, obj2 };
console.log(obj3);

// Working with spread
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

// Working with assign() function, which is same as spread
const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

// Data in database are stored in arrays
const todos = [
    {id: 1, title: 'Reading', isCompleted: false},
    {id: 2, title: 'Cooking', isCompleted: false},
    {id: 3, title: 'Washing', isCompleted: false},
    {id: 4, title: 'Coding', isCompleted: false},
];

console.log(todos);
// How to access individual elements
console.log(todos[0].title);
console.log(todos[1].title);
console.log(todos[2].title);
console.log(todos[3].title);

// Object methods
// How to access keys only from an object i.e obj1
x = Object.keys(todo);
console.log(x);

// How to access values only from an object i.e obj1
x = Object.values(todo);
console.log(x);

//  How an arry of indivitual key value pair of an object
x = Object.keys(todo).length;
console.log(x);

// How to check if an object has a particular property
x = obj2.hasOwnProperty('f');
console.log(x);