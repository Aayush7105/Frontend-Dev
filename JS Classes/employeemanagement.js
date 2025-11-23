// Employee Class
class Employee {
    constructor(id, name, department, salary) {   // salary = monthly salary
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus in %
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * (percent / 100));
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}, Monthly Salary: ₹${this.salary.toFixed(2)}`;
    }
}

// Creating Employee Objects
const e1 = new Employee(101, "Aarav", "IT", 50000);
const e2 = new Employee(102, "Mahi", "HR", 40000);
const e3 = new Employee(103, "Arjun", "Finance", 55000);
const e4 = new Employee(104, "Siya", "Marketing", 45000);
const e5 = new Employee(105, "Karan", "IT", 70000);

// Apply Bonus
e1.applyBonus(10);
e3.applyBonus(5);
e5.applyBonus(12);

// Store Employees in Array
const employees = [e1, e2, e3, e4, e5];

// Display Annual Salary of Each Employee
console.log("📌 Annual Salary of Employees:");
employees.forEach(emp => {
    console.log(`${emp.name}: ₹${emp.getAnnualSalary()}`);
});

// Total Annual Payout using reduce()
const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);

console.log("\n💰 Total Annual Payout of Company:");
console.log(`₹${totalPayout}`);
