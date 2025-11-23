// Book Class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue Book
    issueBook() {
        if (this.isIssued) {
            console.log(`❌ Book "${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`✔ Book "${this.title}" has been issued successfully.`);
        }
    }

    // Return Book
    returnBook() {
        if (!this.isIssued) {
            console.log(`❌ Book "${this.title}" is not currently issued.`);
        } else {
            this.isIssued = false;
            console.log(`✔ Book "${this.title}" has been returned successfully.`);
        }
    }

    // Display book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Issued: ${this.isIssued}`;
    }
}


// Creating Book Objects
const b1 = new Book("The Alchemist", "Paulo Coelho", "ISBN001");
const b2 = new Book("Atomic Habits", "James Clear", "ISBN002");
const b3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "ISBN003", true);
const b4 = new Book("Steve Jobs", "Walter Isaacson", "ISBN004");

// Store books in array
const library = [b1, b2, b3, b4];


// Display Available (Not Issued) Books
console.log("📚 Available Books:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));


// Function to Issue Book Based on ISBN
function issueBookByISBN(isbn) {
    const book = library.find(b => b.ISBN === isbn);

    if (!book) {
        console.log("❌ Book not found.");
    } else {
        book.issueBook();
    }
}

// Testing Issue
console.log("\n🔍 Trying to issue ISBN002...");
issueBookByISBN("ISBN002");

console.log("\n🔍 Trying to issue ISBN003...");
issueBookByISBN("ISBN003");


// Display again after issuing
console.log("\n📚 Available Books After Issue:");
library
    .filter(book => !book.isIssued)
    .forEach(book => console.log(book.getDetails()));
