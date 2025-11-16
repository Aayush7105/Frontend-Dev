const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30
);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const average = scores.reduce((sum, v) => sum + v, 0) / scores.length;

const passed = scores.filter((v) => v >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Passed:", passed);
