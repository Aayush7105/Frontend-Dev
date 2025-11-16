const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let total = 0;

for (let product of cart) {
  let discount = 0;

  if (product.category === "electronics") discount = 10;
  else if (product.category === "fashion") discount = 5;

  product.finalPrice = product.price - (product.price * discount) / 100;
  total += product.finalPrice;
}

if (total > 50000) {
  total -= total * 0.05;
}

console.log("Final Total:", Math.round(total));
