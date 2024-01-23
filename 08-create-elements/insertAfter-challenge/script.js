// Insert adjacent  functions
/**
 * 1. first parameter = newEl
 * 2. second parameter = existingEl
 * 3. insertAdjacentText()
 */

// Examples

function insertAfter(newEl, existingEl) {
    existingEl.parentNode.insertBefore(newEl, existingEl.nextSibling); //Or paraneElement
}

const h3 = document.createElement('h3');
h3.textContent = 'Here we go';

const li = document.querySelector('li');

insertAfter(h3, li);
