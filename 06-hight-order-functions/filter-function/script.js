// Long versions
// 1.  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenNumber(number) { 
    return number % 2 === 0;
}
const even = numbers.filter(evenNumber);
console.log(even);

// 2. 
const even2 = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(even2);

// Using short syntax
const even3 = numbers.filter(number => number % 2 === 0);
console.log(even3);

// Using filter in ForEach loop
// 1. 
numbers.forEach(element => element % 2 === 0 && console.log(element));

// 2. 
const evenNumbers = [];

numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);


const companies = [
    { name: 'One', industry: 'FinTech', est: '2023'},
    { name: 'Two', industry: 'Stock', est: '1994'},
    { name: 'Three', industry: 'Insurance', est: '2023'},
    { name: 'Four', industry: 'Stock', est: '2024'},
];

// Getting companies of stock industry

function getIndustry(company) { 
    if (company.industry == 'Stock') { 
        return company.industry;
    }
}

const stockCompanies = companies.filter(getIndustry);
console.log(stockCompanies);

const stockCompanies2 = companies.filter(company => company.industry === 'Stock' && company.industry );
console.log(stockCompanies2);