const generateFibsRecurse = (n) => {
    return n <= 0 ? "Please enter a valid number"
            : n === 1 ? [0]
            : n === 2 ? [0, 1]
            : [...generateFibsRecurse(n -1), generateFibsRecurse(n-1)[n -2] + generateFibsRecurse(n-1)[n-3]];
}

console.log(generateFibsRecurse(-1)); // returns "Please enter a valid number of elements to be given an answer."
console.log(generateFibsRecurse(1)); // returns [0]
console.log(generateFibsRecurse(2)); // returns [0, 1]
console.log(generateFibsRecurse(3)); // returns [0, 1, 1]
console.log(generateFibsRecurse(7)); // returns [0, 1, 1, 2, 3, 5, 8]
