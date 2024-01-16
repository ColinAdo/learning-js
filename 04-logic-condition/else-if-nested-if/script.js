// Else If statement 
const grade = 39;

if (grade >= 70) {
    console.log("This is an 'A' ");
} else if (grade >= 50) {
    console.log("This is a 'B' ");
} else if (grade >= 40) {
    console.log("This is a 'C' ");
} else {
    console.log("This is a 'F' ");
}

// Nested If
const raining = true;

if (raining) {
    console.log('Is it raining heavily?');
    if (true) { 
        console.log('Carry umbrella');
    }
} else {
    console.log('It is not raining');
}
