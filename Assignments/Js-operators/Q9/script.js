const result = [];

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
  else if (i % 2 === 0) result.push("Even");
  else result.push("Odd");
}

console.log(result);
