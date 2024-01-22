/**
 * Parent has
 * 1. FirstElementChild
 * 2. SecondElementChild accessed using psoudo seletor
 * 3. ThirdElementChild 
 */

const parent = document.querySelector('.parent');
console.log(parent.innerText);

// Getting the first child
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;

firstChild.style.color = 'red';
lastChild.style.color = 'green';
console.log(firstChild);
console.log(lastChild);

// Getting sibling from a child

const child = document.querySelector('.child:nth-child(2)');
console.log(child.innerText);

const output = child.nextElementSibling; 
console.log(output);

output.style.textDecoration = 'underline';

const output3 = child.previousElementSibling; 
console.log(output3.innerText);

output3.style.textDecoration = 'underline';

// getting A parent from a child
const baby = document.querySelector('.child:nth-child(2)');
console.log(baby.parentElement.className);

baby.parentElement.style.border = '1px solid black';
baby.parentElement.style.padding = '10px';


