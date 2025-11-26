// Q6: Inventory functions using array methods
const products = [
  { id:1, name:'T-shirt', category:'clothing', price:499, stock: 25 },
  { id:2, name:'Sneakers', category:'footwear', price:2499, stock: 5 },
  { id:3, name:'Jeans', category:'clothing', price:1299, stock: 8 },
  { id:4, name:'Socks', category:'clothing', price:199, stock: 50 },
  { id:5, name:'Watch', category:'accessories', price:3999, stock: 2 },
  { id:6, name:'Sandals', category:'footwear', price:799, stock: 12 }
];

function getLowStockProducts(threshold=10) {
  return products.filter(p => p.stock <= threshold);
}

function sortProductsByPrice(order='asc'){
  return [...products].sort((a,b)=> order === 'asc' ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue(){
  return products.reduce((sum,p)=> sum + (p.price * p.stock), 0);
}

function groupByCategory(){
  return products.reduce((acc, p) => {
    if(!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

const out = document.getElementById('output');
const sections = [
  {title:'Low stock (<=10)', data: getLowStockProducts()},
  {title:'Sorted by price (asc)', data: sortProductsByPrice('asc')},
  {title:'Total inventory value (₹)', data: calculateTotalInventoryValue()},
  {title:'Grouped by category', data: groupByCategory()}
];

sections.forEach(s => {
  const h = document.createElement('h3');
  h.textContent = s.title;
  out.appendChild(h);
  const pre = document.createElement('pre');
  pre.textContent = typeof s.data === 'object' ? JSON.stringify(s.data, null, 2) : String(s.data);
  out.appendChild(pre);
});

console.group('Q6 Inventory');
console.log('lowStock', getLowStockProducts());
console.log('sortedAsc', sortProductsByPrice('asc'));
console.log('totalValue', calculateTotalInventoryValue());
console.log('grouped', groupByCategory());
console.groupEnd();
