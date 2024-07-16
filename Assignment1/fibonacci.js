const generateFibonacci = n => {
    if (n <= 0) return "Please enter a valid number.";
    if (n === 1) return [0];

    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i -1]);
    }
    return arr;
}

console.log(generateFibonacci(-3)); // "Please enter a valid number of elements to be given an answer."
console.log(generateFibonacci(1));  // [0]
console.log(generateFibonacci(2));  // [0, 1]
console.log(generateFibonacci(3));  // [0, 1, 1]
console.log(generateFibonacci(7));  // [0, 1, 1, 2, 3, 5, 8, 13]