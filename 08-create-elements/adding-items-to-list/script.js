// Cleen Code
function addItemOne(item) {
    const li = document.createElement('li');

    li.innerText = item

    const link = document.createElement('a');
    link.href = '';

    // link.innerText = ' x'; Same as
    link.appendChild(document.createTextNode(' x'));

    li.appendChild(link);

    document.querySelector('.item').appendChild(li);
}

addItemOne('Milk');

//  Dirty Code
function addItemTwo(item) {
    const li = document.createElement('li');

    li.innerHTML = ` ${item} <a href=""> x</a>`;
    document.querySelector('.item').appendChild(li);
}

// Refactored code
function addCleanItemCode(item) { 
    const li = createList();
    li.appendChild(document.createTextNode(item))

    const link = createLink();

    li.appendChild(link);

    document.querySelector('.item').appendChild(li);
}

function createList() {
    const li = document.createElement('li');
    return li
 }

function createLink() {
    const link = document.createElement('a');
    link.href = '';
    link.innerText = ' x';
    return link;
}

addItemTwo('Sugar');
addCleanItemCode("Cheese");