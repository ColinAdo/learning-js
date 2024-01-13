// Defaults parameters
function registerUser(user = 'Ado') {
    /**
     * The user = 'Ado' parameter is an alternative of;
     * if (!user) {
     *  user = 'Ado';
     * }
     */
    return `user ${user} registered successfully`;
}

x = registerUser('Michel');
console.log(x);

// Object parameters
function loginUser(user) { 
    return `User ${user.name} with id ${user.id} login successfully`;
}
const user = {
        name: 'Michel',
        id: 1,
}
    
x = loginUser(user);

console.log(x);
console.log(loginUser({
    name: 'Michel',
    id: 1,
}));

// Rest parameters
function numbers(...num) { // addes numbers in an array
    return num;
}

x = numbers(1,2, 3, 4, 5, 6, 7)
console.log(x);

// Fing the total sum of an array of numbers
function sum(...numbers) { 
    let total = 0;
    for (const num of numbers) { 
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Array parameters
function randomArray(arr) {
    // getting random index of an array
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    console.log('Index',index,'Item',item);
}

randomArray([3, 5, 7, 1, 2, 10, 4]);