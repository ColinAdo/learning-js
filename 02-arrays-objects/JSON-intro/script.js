const posts = {
    id: 1,
    author: 'John',
    content: 'This is my first post'
};

console.log(posts);

// Converting Object to JSON
const str = JSON.stringify(posts); 
/**
 * When object is converted to str it can't be used to access individual
 * properties. eg. console.log(str.id) is undefined;
 */
console.log(str);

// Converting JSON to Object
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.id);

// Working with array and JSON
const content = [
    {
        id: 1,
        title: 'foo',
        body: 'Get saved by Jesus',
    },
   {
        id: 2,
        title: 'Game',
        body: 'Get saved by Jesus for better',
    },
   {
        id: 3,
        title: 'foo',
        body: 'Get saved by Jesus to be filled by the Holy Spirit ',
    },
];
console.log(content);
// Converting arrays to strings
const str2 = JSON.stringify(content);
console.log(str2);

// Converting string to array
const obj2 = JSON.parse(str2);
console.log(obj2);
