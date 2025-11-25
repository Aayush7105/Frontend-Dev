// q6_productFetcher.js
// E-Commerce Dashboard: Product Card Fetcher
// Fetches from https://fakestoreapi.com/products and logs title, price, image.
// Uses async/await with try/catch. If run in browser, optionally creates DOM cards.

async function fetchProductsAndLog() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url); // In Node: Node 18+ has global fetch. Otherwise use node-fetch in older Node.
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const products = await response.json();
    for (const p of products) {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log("---------------------------");
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.");
    console.error("Reason:", err.message);
  }
}

// Optional browser-only: create product cards
// Uncomment and run in a browser environment (not Node) to create DOM elements.
/*
function createProductCards(products) {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fill,minmax(200px,1fr))";
  container.style.gap = "12px";
  products.forEach(p => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ddd";
    card.style.padding = "8px";
    card.style.borderRadius = "8px";
    const img = document.createElement("img");
    img.src = p.image;
    img.style.maxWidth = "100%";
    img.alt = p.title;
    const title = document.createElement("h4");
    title.textContent = p.title;
    const price = document.createElement("p");
    price.textContent = `$${p.price}`;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });
  document.body.appendChild(container);
}
*/

// Run fetch function:
fetchProductsAndLog();
