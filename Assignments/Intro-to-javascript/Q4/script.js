const marks = [85, 90, 78, 88, 92];

if (marks.some((m) => m < 35)) {
  console.log("Detained");
} else {
  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = total / marks.length;

  if (percentage >= 85) console.log("Promoted with Distinction");
  else if (percentage >= 50) console.log("Promoted");
  else console.log("Detained");
}
