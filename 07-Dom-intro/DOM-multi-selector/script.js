// 1. getElementById()
// Getting / changing attributes
console.log(document.getElementById('title'));
console.log(document.getElementById('title').innerText);
console.log(document.getElementById('title').getAttribute('id'));

// Changing styles
const item = document.getElementById('title');
item.style.backgroundColor = 'black';
item.style.color = 'white';
item.style.padding = '10px';
item.style.borderRadius = '10px';

// QuerySelector()
const query = document.querySelector('#shopping-list');
console.log(query);

console.log(document.querySelector('input[type="text"]'));

console.log(document.querySelector('.container'));

const firstItem = document.querySelector('li:nth-child(1)');
firstItem.style.color = 'red';
firstItem.style.fontWeight = 'bold';
