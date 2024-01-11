let d = new Date();

console.log(typeof d);

d = d.toString();
console.log(typeof d);

d = new Date(2025, 7, 12, 12, 30, 0); // When passing number to date the month is based on index
console.log(d);

d = new Date('2025-07-12T12:30:00');
console.log(d);

d = new Date('07/12/2025 12:30:00'); 
console.log(d);

d = new Date('2025-07-12'); 
console.log(d);

d = new Date('07-12-2025'); 
console.log(d);

d = Date.now(); // Timestamp in js are expressed in milliseconds
console.log(d);

d = new Date('07-12-2026'); // Getting milliseconds of a particular date
d = d.getTime();
console.log(d);

d = new Date('07-12-2026'); // Getting milliseconds of a particular date
d = d.valueOf();
console.log(d);


d = new Date(1783803600000); // Getting a date based on milliseconds
console.log(d);

d = Date.now(); // convert milliseconds to seconds
console.log(d);

d = new Date(1704989544412);
console.log(d);

// Date object methods

let x;
const date = new Date();
x = date.toString();
console.log(x);

x = date.getTime(); 
console.log(x);

x = date.valueOf();
console.log(x);

x = date.getFullYear(); 
console.log(x);

x = date.getMonth() + 1; // Month is always represented as index
console.log(x);

x = date.getDate();
console.log(x);

x = date.getDay() + 1;
console.log('day', x);

x = date.getHours();
console.log(x);

x = date.getMinutes();
console.log(x);

x = date.getSeconds();
console.log(x);

x = date.getMilliseconds();
console.log(x);

// Constructing date from exiting date
x = `Today is ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
console.log(x);

x =Intl.DateTimeFormat('en-US').format(date);
console.log(x);

x =Intl.DateTimeFormat('en-GB').format(date);
console.log(x);

x =Intl.DateTimeFormat('default').format(date);
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'short' }).format(date);
console.log(x);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(date);
console.log(x);

x = Intl.DateTimeFormat('default', { day: 'numeric' }).format(date);
console.log(x);

x = Intl.DateTimeFormat('default', { weekday: 'long' }).format(date);
console.log(x);

x = date.toLocaleString('default', { month: 'short' }); // alternative
console.log(x);

x = new Intl.DateTimeFormat(['ban', 'id']).format(date)
console.log(x);

options = {
    weekday: 'long', 
    day: 'numeric',
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Egypt",
    timeZoneName: "long",
};
x = new Intl.DateTimeFormat("en-EG", options).format(date);
console.log(x);

x = date.toLocaleString("en-EG", {
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Egypt',
    timeZoneName: 'short',
});

console.log(x);