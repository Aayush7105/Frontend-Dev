// operators
// 1.Arithmetic
// 2.Relational/comparison operators
// 3.Logical
// 4.Bitwise
// 5.Ternary operator
// 6.unary operator
// 7.nullish Coalsecing ??
// 8.Assignment operator
// 9.type operator

//operators in js

// Arithmetic Operators
console.log("Arithmetic Operators");
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

// Relational Operators/Comparison Operators
console.log("Relational Operators");
console.log("Equal to:", num1 == num2);
console.log("Not Equal to:", num1 != num2);
console.log("Strict Equal to:", num1 === num2);
console.log("Strict Not Equal to:", num1 !== num2);
console.log("Greater than:", num1 > num2);
console.log("Less than:", num1 < num2);
console.log("Greater than or Equal to:", num1 >= num2);
console.log("Less than or Equal to:", num1 <= num2);

// Logical Operators
console.log("Logical Operators");
let bool1 = true;
let bool2 = false;
console.log("AND:", bool1 && bool2);
console.log("OR:", bool1 || bool2);
console.log("NOT:", !bool1);

// Assignment Operators
console.log("Assignment Operators");
let assign1 = 5;
console.log("Initial Value:", assign1);
assign1 += 3;
console.log("After += 3:", assign1);
assign1 -= 2;
console.log("After -= 2:", assign1);
assign1 *= 4;
console.log("After *= 4:", assign1);
assign1 /= 2;
console.log("After /= 2:", assign1);
assign1 %= 3;
console.log("After %= 3:", assign1);

//Bitwise Operators
console.log("Bitwise Operators");
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary
console.log("AND:", bit1 & bit2); // 0001 => 1
console.log("OR:", bit1 | bit2); // 0111 => 7
console.log("XOR:", bit1 ^ bit2); // 0110 => 6
console.log("NOT:", ~bit1); // 1010 => -6 (two's complement)
console.log("Left Shift:", bit1 << 1); // 1010 => 10
console.log("Right Shift:", bit1 >> 1); // 0010 => 2

//Ternary Operator
console.log("Ternary Operator");
let ternaryResult =
  num1 > num2 ? "num1 is greater" : "num2 is greater or equal";
console.log(ternaryResult);

//Typeof Operator
console.log("Typeof Operator");
console.log("Type of num1:", typeof num1);

console.log("Type of arr:", typeof arr);

console.log("Type of c:", typeof c);
console.log("Type of bool1:", typeof bool1);
console.log("Type of bal:", typeof bal);
console.log("Type of a1:", typeof a1);
console.log("Type of arr1:", typeof arr1);

// Math Operations
console.log(Math.sqrt(16)); //finding square root
console.log(Math.pow(2, 3)); //exponentiation
console.log(Math.abs(-10)); //absolute value
console.log(Math.max(2, 5, 1)); //maximum value
console.log(Math.min(2, 5, 1)); //minimum value
console.log(Math.round(11.34)); //rounding
console.log(Math.floor(11.99)); //floor value
console.log(Math.ceil(11.01)); //ceiling value
console.log(Math.trunc(11.99)); //truncation
console.log(Math.random()); //random number
console.log(Math.sign(-5)); //sign
