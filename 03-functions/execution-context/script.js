/* Execution context is environment variable that is created to hand the the
transformation and execution of a code.
There are 2 phases of Execution context.
1. Creation phase 
Here variable are assigned to undefined, while functions are stored in memory
2. Execution phase 
Here the variables are assigned with values one by one, while functions are skipped.
The second time the code is executed, the functions create an execution context and iterate 
the same process
*/

const num1 = 100;
const num2 = 200;

function sum(a, b) {
    const sum = a + b;
    return sum
}

const ans1 = sum(num1, num2);
const ans2 = sum(10, 20);
