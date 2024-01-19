/**  Working with reduce method - 
 * It takes the previous number formally known as accumulator (acc)
 * It also takes the number known as current (any) - Is the item (number) itself 
 * It returna value and not an array
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);

// Nested function
const sunOfEven = numbers
    .filter((n) => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0)
console.log(sunOfEven);

// Cart example
const carts = [
    { user: 1, product: 'Product 1', price: 200 },
    { user: 2, product: 'Product 1', price: 150 },
    { user: 3, product: 'Product 1', price: 300 },
];

const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);