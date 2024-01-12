// Defining an object

const student = {
    'name': 'John',
    'age': 28,
    'onSession': true,
    'subjects': ['CRE', 'BIO', 'CHEM', 'MATHS'],
    address: {
        'country': 'United States',
        'city': 'Washington',
    },
}
student.gender = 'male'; // Ading property

student.learning = function () { // Adding function to an object
    console.log(`I am learning ${student.subjects[1]}`);
}

console.log(student);

delete student.age;

console.log(student);

student.learning();

x = student.address.country;
console.log(x);

// How to access individual properties
// 1. Using the dot notation
x = student.name;
console.log(x);

// 2. Using brackets
student.age = 30;   
x = student['age'];
console.log(x);

const subject = student.subjects[0];
console.log(subject);