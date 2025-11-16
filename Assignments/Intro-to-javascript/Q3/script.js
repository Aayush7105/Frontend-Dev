const expenses = [5000, 1500, 10000, 2500, 1200];

const total = expenses.reduce((acc, v) => acc + v, 0);
const average = total / expenses.length;

let finalAmount = total;
finalAmount += finalAmount * 0.1; // 10% tax

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final after tax:", finalAmount.toFixed(2));
