// Capitalize first character Challenge
// Solution 1
let job = 'developer';
capitalized = job.charAt(0).toUpperCase();
otherCharacters = job.substring(1)

newJobTitle = capitalized + otherCharacters;
console.log(newJobTitle);

// Soluton 2
capitalized = job.charAt(0).toUpperCase();
otherCharacters = job.slice(1);
newJobTitle = capitalized + otherCharacters;
console.log(newJobTitle);

// Solution 3
newJobTitle = job[0].toLocaleUpperCase() + job.substring(1);
console.log(newJobTitle);

// Solution 4
capitalized = job.charAt(0).toUpperCase();
otherCharacters = job.substring(1)
newJobTitle = `${capitalized}${otherCharacters}`;
console.log(newJobTitle);