// Insert adjacent  functions
/**
 * 1. insertAdjacentElement()
 * 2. insertAdjacentHTML()
 * 3. insertAdjacentText()
 * 
 * These can be inserted in one of the following locations
 * 1. beforeend
 * 2. afterend
 * 3. beforebegin
 * 4. afterbegin
 */

// Examples
function inserElement() {
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    const form = document.querySelector('form');

    form.insertAdjacentElement("afterbegin", h1);
}

function insertHTML() {
    const html = "<a href=''>Detail</a>";

    const li = document.querySelector('li');

    li.insertAdjacentHTML("beforebegin",html);
}

function insertText() {
    const li = document.querySelector("li:nth-child(4)");

    li.insertAdjacentText("beforebegin",'insertAdjacentText');

}

// InsertBefore - This method is ................
// called on a parent element to insert before a particular element.

function InsertBeforeItem() {
    const ul = document.querySelector('ul');

    const link = document.createElement('a');
    link.href = '';
    link.textContent = 'Insert before';

    ul.insertBefore(link, ul.lastElementChild);
    
}

inserElement();
insertHTML();
insertText();
InsertBeforeItem();