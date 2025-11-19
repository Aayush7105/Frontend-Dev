"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

rawData.forEach((line, index) => {
    try {
        const parsed = JSON.parse(line);

        if (!("user" in parsed) || !("age" in parsed))
            throw new Error("Missing user or age");

        parsed.age = Number(parsed.age);

        clean.push(parsed);

    } catch (err) {
        errors.push(`Line ${index}: ${err.message}`);
    }
});

console.log("Valid JSON:", clean);
console.log("Errors:", errors);
