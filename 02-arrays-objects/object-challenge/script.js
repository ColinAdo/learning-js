// Challenge 1 - Create an array object with three objects:
const library = [
    {
        title: 'Think and Grow Rich',
        author: 'Napolian Hill',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Charater in Leadership',
        author: 'Myles Monreo',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Atomic Habit',
        author: 'James Clear',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
]
// Challenge 2
// You have read all books modify the read status to true.

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Challenge 3
// Change the title of the first book using destructuring
const {title: firstBook} = library[0];
console.log(firstBook);

// Challenge 4
// Change the library into JSON STRING
const str = JSON.stringify(library);
console.log(str);