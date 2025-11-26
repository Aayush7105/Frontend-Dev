// Q2: Online Food Ordering (map + Error Handling)
const menu = {
  burger: 80,
  pizza: 250,
  fries: 50,
  coke: 25,
  salad: 60
};

function calculateBill(orderItems) {
  // map to prices; throw if item invalid
  const prices = orderItems.map(item => {
    if (!menu.hasOwnProperty(item)) {
      throw new Error(`Invalid menu item: "${item}"`);
    }
    return menu[item];
  });
  // reduce to sum
  return prices.reduce((a, b) => a + b, 0);
}

// Render menu
const menuDiv = document.getElementById('menu');
menuDiv.innerHTML = '<strong>Menu:</strong> <ul>' + Object.entries(menu).map(([k,v])=>`<li>${k} — ₹${v}</li>`).join('') + '</ul>';

// Sample orders
const sampleOrders = [
  { name: 'Order A', items: ['burger','fries','coke'] },
  { name: 'Order B', items: ['pizza','salad'] },
  { name: 'Order C (invalid)', items: ['pizza','icecream'] }
];

const ordersDiv = document.getElementById('orders');
sampleOrders.forEach(o => {
  const el = document.createElement('div');
  try {
    const total = calculateBill(o.items);
    el.innerHTML = `<strong>${o.name}:</strong> items = [${o.items.join(', ')}] → Total = ₹${total}`;
  } catch (err) {
    el.innerHTML = `<strong>${o.name}:</strong> <span class="error">Error: ${err.message}</span>`;
    console.error(err);
  }
  ordersDiv.appendChild(el);
});
