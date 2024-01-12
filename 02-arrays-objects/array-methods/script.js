const arr = [13, 778, 12, 30, 50]
console.log(arr);

x = arr.indexOf(13); // Returns index of the first occcurance element
console.log(x);

x = arr.indexOf(40); // Returns -1 if the element is not present
console.log(x);

arr.push(40);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(24); // Add element a the beginning of the array
console.log(arr);

arr.shift(); // Remove element a the begining of the array
console.log(arr);

x = arr.includes(778);
console.log(x);

arr.reverse();
console.log(arr);

x = arr.reverse().toString();
console.log(x);

x = arr.reverse().toString().charAt(14);
console.log(x);

x = arr.slice(0, 3); // Start at 0 and stop at 3(don't print value of index 3)
console.log(x);

console.log(arr);

// Start at 0 and stop at 3(don't print value of index 3) but it delete the specified elements from the array 
x = arr.splice(0, 3); 
console.log(x);

console.log(arr); // prints [778,13]

// How to delete or remove specific elements using splice() function e.g 13
x = arr.splice(1, 1); // Removes element 13.
console.log(x); // prints the removed elements

console.log(arr);