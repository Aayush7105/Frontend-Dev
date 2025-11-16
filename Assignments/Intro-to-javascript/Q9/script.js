const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const ops = ["+", "-", "*", "/"];
const op = ops[Math.floor(Math.random() * ops.length)];

let answer;

switch (op) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    answer = (num1 / num2).toFixed(2);
    break;
}

console.log(`${num1} ${op} ${num2} = ${answer}`);
