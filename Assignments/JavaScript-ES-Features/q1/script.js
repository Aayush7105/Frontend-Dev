"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

apiData.forEach((item) => {
    
    const num = Number(item);
    const bool = Boolean(item);
    const str = String(item);

    console.log(`Original: ${item}, Number: ${num}, Boolean: ${bool}, String: "${str}"`);

    if (!isNaN(num) && item !== null && item !== undefined && item !== " ") {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(item);
    }
});

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Entries:", invalidNumbers);
