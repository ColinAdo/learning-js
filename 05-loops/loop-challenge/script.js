// FizzFuzz Challenge: 

for (let i = 1; i <= 100; i++) { 

    if (i % 5 == 0 && i % 3 == 0) {
        console.log('FizzFuzz');
    } else if (i % 5 === 0) {
        console.log('Fuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}