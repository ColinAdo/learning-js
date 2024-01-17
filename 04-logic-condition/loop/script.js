// Loop execution
for (let i = 0; i <= 10; i++) { 
    console.log('Some number: ' + i);
}
// Loop and If-statement execution
for (let i = 1; i <= 10; i++) { 
    if (i % 2 == 0) {
        console.log('Even number: ' + i);
    }
}

// Nested loop execution

for (let i = 1; i <= 10; i++) { 
    for (let j = 1; j <= 10; j++) { 
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// Looping through array
const names = ['John', 'Mark', 'Yusified', 'Hassan'];

for (let i = 0; i < names.length; i++) {
    if (names[i] == 'Yusified') {
        names[i] = 'Yusif';
    }
    console.log(names[i]);
}

// Break keyword
for (let i = 1; i < 10; i++) { 
    if (i % 2 == 0) {
        console.log('The first Even number: ',i);
        break;
    }
}

// continue keyword
for (let i = 1; i < 10; i++) { 
    if (i % 2 != 0) {
        console.log('Odd number: ',i);
        continue;
    }
}