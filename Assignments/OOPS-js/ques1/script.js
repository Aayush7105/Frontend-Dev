// Q1: Student Result Processing (reduce + Classes)
class Student {
  constructor(name, marks){
    this.name = name;
    this.marks = marks; // array
  }

  calculateAverage(){
    if(!this.marks || this.marks.length === 0) return 0;
    const total = this.marks.reduce((acc, m) => acc + m, 0);
    return total / this.marks.length;
  }

  getGrade(){
    const avg = this.calculateAverage();
    if(avg >= 90) return 'A';
    if(avg >= 75) return 'B';
    if(avg >= 50) return 'C';
    return 'F';
  }
}

// Create 3 students and display results
const students = [
  new Student('Alice', [95, 92, 88]),
  new Student('Bob', [78, 82, 80]),
  new Student('Charlie', [45, 52, 48])
];

const out = document.getElementById('output');
const table = document.createElement('table');
const thead = document.createElement('thead');
thead.innerHTML = '<tr><th>Name</th><th>Marks</th><th>Average</th><th>Grade</th></tr>';
table.appendChild(thead);
const tbody = document.createElement('tbody');

students.forEach(s => {
  const tr = document.createElement('tr');
  const marksText = s.marks.join(', ');
  const avg = s.calculateAverage();
  tr.innerHTML = `<td>${s.name}</td><td>${marksText}</td><td>${avg.toFixed(2)}</td><td>${s.getGrade()}</td>`;
  tbody.appendChild(tr);
});
table.appendChild(tbody);
out.appendChild(table);

// Also log to console
console.group('Q1 Students');
students.forEach(s => console.log(s.name, s.marks, 'avg=', s.calculateAverage(), 'grade=', s.getGrade()));
console.groupEnd();
