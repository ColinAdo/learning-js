// DOM - Is an interface that allow us to interact with page elements dynamically
console.log(document);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);


console.log(document.links[0]);

console.log(document.images[0]);

console.log(document.forms[0].action);
console.log(document.forms[0].method);

document.forms[0].id = 'new_id';  //defining id from js
document.forms[0].className = 'new_class';  //defining id from js

console.log(document.doctype);
console.log(document.characterSet);
console.log(document.contentType);


// HTMLCOLLECTION IS an array but you cannot iterate throuht it directly
const forms = document.forms;

const formArray = Array.from(forms)
formArray.forEach((form) =>console.log('1. ',form));


