// Challenge 1
function calculator(num1, num2, operator) { 
    if (operator == '+') {
        const result = num1  + num2;
        console.log(result);
    } else if (operator == '-') {
        const result = num1  - num2;
        console.log(result);
    } else if (operator == '*') {
        const result = num1  * num2;
        console.log(result);
    } else if (operator == '/') {
        const result = num1  / num2;
        console.log(result);
    } else {
        alert('Invalid operator or mathematic error');
    }
}

calculator(1,2,'%');