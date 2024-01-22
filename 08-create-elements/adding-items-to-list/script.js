function addItemOne(item) {
    const li = document.createElement('li');

    li.innerHTML = item

    const link = document.createElement('a');

    link.appendChild(document.createTextNode(' x'));

    li.appendChild(link);

    document.querySelector('#item').appendChild(li);
}

addItemOne('Milk');

function addItemTwo(item) {
    const li = document.createElement('li');

    li.innerHTML = ` ${item} <a href=""> x</a>`;
    document.querySelector('#item').appendChild(li);
}

addItemTwo('Sugar');