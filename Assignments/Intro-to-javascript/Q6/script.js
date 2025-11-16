const total = 6200;

let discount = 0;

if (total >= 10000) discount = 25;
else if (total >= 5000) discount = 15;
else if (total >= 2000) discount = 5;

const finalPrice = Math.round(total - (total * discount) / 100);

console.log("Original:", total);
console.log("Discount %:", discount);
console.log("Final Price:", finalPrice);
