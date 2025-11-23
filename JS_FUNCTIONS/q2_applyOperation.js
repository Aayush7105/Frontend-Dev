function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const nums = [1, 2, 3, 4];

const doubled = applyOperation(nums, num => num * 2);
const squared = applyOperation(nums, num => num * 2);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
