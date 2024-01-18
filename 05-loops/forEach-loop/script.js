// Looping over an array
const colors = ['red', 'green', 'blue', 'alpha'];
colors.forEach((color, index) => console.log(index + ' - ' + color));

// Looping through an object
const students = [
    {
        name: 'John',
        age: 34,
        course: 'bsc'
    },
    {
        name: 'Markley',
        age: 20,
        course: 'bbit'
    }

];

students.forEach(student => console.log(
    student.name + ' - ' + student.age + ' - ' + student.course
));

// Passing a function as a callback function
const counrties = ['Sudan', 'Kenay', 'Ghana', 'Nigeria', 'South Africa'];

function country(item) { 
    console.log(item);
}

counrties.forEach(country);
