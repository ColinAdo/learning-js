// Function Declaration
function addDollarSign(value) {
    return '$' + value
}

// Function can also be called before declaration
console.log(addDollarSign(5000));

// Function Expression 
const addDollarSignAgain = function (value) {
    return '$' + value
};
console.log(addDollarSignAgain(5000));
