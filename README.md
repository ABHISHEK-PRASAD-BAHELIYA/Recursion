# Recursion

Use what you have learnt about recursion so far to tackle two classic problems that can leverage recursion: Fibonacci and Merge Sort

# Fibonacci CLI

This is a simple Node.js script that generates the Fibonacci sequence up to a given number of elements.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## How to Run

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/fibonacci-cli.git
   cd fibonacci-cli
   ```

2. Run the script with Node.js:

   ```sh
   node fibs.js <number>
   ```

   Replace `<number>` with the number of elements you want in the Fibonacci sequence.

## Examples

```sh
node fibonacci.js -2
# Output: Please enter a valid number of elements to be given an answer.

node fibonacci.js 1
# Output: [0]

node fibonacci.js 2
# Output: [0, 1]

node fibonacci.js 3
# Output: [0, 1, 1]

node fibonacci.js 8
# Output: [0, 1, 1, 2, 3, 5, 8, 13]
```
