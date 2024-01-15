// Converting temperature in celsius to fahrenheit
// Challenge 1
function getCelsuis(f) {
    const temp = (f - 32) * 5 / 9;
    return`The temperature is ${temp} \xB0C.`;
}

console.log(getCelsuis(50));

// Challenge 1
const getCelsuisArrow = (f) => ((f - 32) * 5 / 9);
console.log(getCelsuisArrow(50));


// Challenge 2
const minMax = (arr) => console.log({
    max: Math.min(...arr),
    min: Math.max(...arr)
});

minMax([1, 2, 3, 10, 0]);

// Challenge 3
(function (l, w) {
    const area = l * w;
    console.log(`The area of your rectangle with length of ${l}, and width of ${w} is ${area}`);
})(5, 2);

((l, w) => {
    const area = l * w;
    console.log(`The area of your rectangle with length of ${l}, and width of ${w} is ${area}`);
})(5, 2);

