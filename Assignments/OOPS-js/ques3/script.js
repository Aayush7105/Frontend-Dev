// Q3: Product Discount System
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  // return new price after discount
  const newPrice = this.price * (1 - percent / 100);
  return Math.round(newPrice * 100) / 100;
};

// create products
const products = [
  new Product('Notebook', 299.99),
  new Product('Headphones', 1299.5),
  new Product('Keyboard', 799)
];

// apply different discounts
const discounts = [10, 25, 5];

const out = document.getElementById('out');
const table = document.createElement('table');
table.innerHTML = '<thead><tr><th>Product</th><th>Original Price (₹)</th><th>Discount</th><th>New Price (₹)</th></tr></thead>';
const tbody = document.createElement('tbody');

products.forEach((p, i) => {
  const d = discounts[i] || 0;
  const newP = p.applyDiscount(d);
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${p.name}</td><td>${p.price.toFixed(2)}</td><td>${d}%</td><td>${newP.toFixed(2)}</td>`;
  tbody.appendChild(tr);
});
table.appendChild(tbody);
out.appendChild(table);

console.group('Q3 Products');
products.forEach((p, i) => console.log(p.name, 'orig', p.price, 'after', discounts[i], '% →', p.applyDiscount(discounts[i])));
console.groupEnd();
