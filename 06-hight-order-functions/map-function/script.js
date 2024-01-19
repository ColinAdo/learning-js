// Map function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const evenNumbers = numbers.map((number) => Math.floor(Math.sqrt(number)));
console.log(evenNumbers);

// Same using forEach 

const evenNumbers2 = [];

numbers.forEach((number) => {
    evenNumbers2.push(Math.floor(Math.sqrt(number)));
});

console.log(evenNumbers2);

const companies = [
    { name: 'One', industry: 'FinTech', est: 2023, upto: 2024, number_ofemploy: 10},
    { name: 'Two', industry: 'Stock', est: 1994, upto: 2002, number_ofemploy: 60},
    { name: 'Three', industry: 'Insurance', est: 2000, upto: 2020, number_ofemploy: 15},
    { name: 'Four', industry: 'Stock', est: 2021, upto: 2024, number_ofemploy: 40},
];

// Getting an array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames);

// getting an object company names and number of years existed
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        years: company.upto - company.est
    }
});

console.log(companyInfo);

// Nested or chained map

// find the squre root of an array and multiply them by 100

const numberProduct = numbers
    .map((number) => Math.sqrt(number))
    .map((sqrt_number) => sqrt_number * 100);

console.log(numberProduct);

// Chained map with other functions
// Get all the even numbers and the squre them

const numSqure = numbers
    .filter(number => number % 2 == 0)
    .map(evenNumbers => evenNumbers * evenNumbers)
    .map(squred => squred * 2);
console.log(numSqure);
