const x = 16.75;

const rounded = Math.round(x);
const sqrt = Math.sqrt(x);
const power = Math.pow(x, 3);
const random = Math.floor(Math.random() * 41) + 10;

console.log(`
Rounded: ${rounded}
Square Root: ${sqrt}
Power (x^3): ${power}
Random (10-50): ${random}
`);
