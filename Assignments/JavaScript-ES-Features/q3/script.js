"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

transactions.forEach((tx, index) => {
    try {
        if (tx === null) throw new Error(`Null entry at index ${index}`);

        if (!("id" in tx) || !("amount" in tx))
            throw new Error(`Missing id or amount at index ${index}`);

        if (tx.amount < 0)
            throw new Error(`Negative amount at id ${tx.id}`);

        valid.push(tx);
    } catch (err) {
        invalid.push(err.message);
    }
});

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
