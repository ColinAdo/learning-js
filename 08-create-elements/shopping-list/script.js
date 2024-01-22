const comment = document.createComment('div');
console.log(comment);

const div = document.createElement("div");

// const nextNode = document.createTextNode('Something goes here');

// div.appendChild(nextNode);


div.className = 'my-div';
div.innerText = "Hello, world!";
document.body.appendChild(div);
console.log(div);