// Q4: Employee and Manager classes demonstrating inheritance and polymorphism
class Employee {
  constructor(name, department){
    this.name = name;
    this.department = department;
  }

  work(){
    return `${this.name} works in ${this.department}.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize=0) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // override work
  work(){
    return `${this.name} manages the ${this.department} team of ${this.teamSize} people.`;
  }
}

// demonstrate runtime polymorphism
const out = document.getElementById('output');
const e1 = new Employee('Ravi', 'Engineering');
const e2 = new Manager('Priya', 'Engineering', 6);
const e3 = new Employee('Sam', 'HR');

const list = [e1, e2, e3];
const ul = document.createElement('ul');
list.forEach(obj => {
  const li = document.createElement('li');
  li.textContent = obj.work();
  ul.appendChild(li);
});
out.appendChild(ul);

// console log for clarity
console.group('Q4 Employee Inheritance');
list.forEach(o => console.log(o.constructor.name, ':', o.work()));
console.groupEnd();
