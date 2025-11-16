const secret = Math.floor(Math.random() * 50) + 1;
const guess = 25;

if (guess === secret) {
  console.log("Correct guess!");
} else if (Math.abs(guess - secret) <= 3) {
  console.log("Very close!");
} else {
  console.log(guess > secret ? "Too high" : "Too low");
}

console.log("Secret:", secret);
