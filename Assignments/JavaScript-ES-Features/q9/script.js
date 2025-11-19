"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}', 
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

rawData.forEach((entry, index) => {
    try {
        const obj = JSON.parse(entry);

        if (!("user" in obj) || !("age" in obj))
            throw new Error("Missing required keys (user, age)");

        let age = Number(obj.age);
        if (isNaN(age)) throw new Error("Age must be numeric");

        if (age >= 18) cleanData.push({ user: obj.user, age: age });
        else throw new Error("Under 18 user filtered out");

    } catch (err) {
        errors.push(`Line ${index + 1}: ${err.message}`);
    }
});

console.log("Valid Clean Data:", cleanData);
console.log("Errors Found:", errors);
