// Product Class Definition
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    // Method to display details
    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Creating multiple product objects
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Shoes", 1200, "Fashion"),
    new Product(3, "Book", 450, "Education"),
    new Product(4, "Smartphone", 23000, "Electronics")
];

// Applying discount to a product (Example: apply 10% discount on Laptop)
products[0].applyDiscount(10);

// Display details of all products
console.log("📌 All Products:");
products.forEach(p => console.log(p.getDetails()));

// Filter products with price > 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\n🔥 Products with price > 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
