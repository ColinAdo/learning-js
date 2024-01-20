// There are three ways to get mutiple items:
// 1. querySectorAll() - Returns a NodeList that can be iterated over

const items = document.querySelectorAll('.item');
console.log(items);

items.forEach((item, index) => {
    item.style.color = 'red'

    // if (index === 0) { 
    //     item.remove();
    // }
    if (index === 2) {
        item.innerHTML = `Honey <a href="">x</a>`;
    }

});

/* 2. getElementByClassName() -Returns HTMLCollection
 which can be converted toarray first before iterating through
 */

const elements = document.getElementsByClassName('item');
console.log(elements.length);
console.log(elements[0]);

const itmes2 = Array.from(elements)
itmes2.forEach((item,) => {
    item.style.color = 'green';
});

/* 2. getElementByTagName() -Returns HTMLCollection
 which can be converted to array first before iterating through
 */

const elements2 = document.getElementsByTagName('li');
console.log(elements[2]);

const items3 = Array.from(elements)
items3.forEach((element) => { 
    element.style.color = 'blue';
})