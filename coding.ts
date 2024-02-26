/**
 * Returns the "Fizz" string if the given number is divisible by 3,
 * the "Buzz" string if the given number is divisible by 5,
 * or the number itself as a string if it is not divisible by either 3 or 5.
 * 
 * @param num - The number to check.
 * @returns The "Fizz", "Buzz", or the number itself as a string.
 */
export function fizzBuzz(num: number): string {
    return (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num.toString();
}

/**
 * The `val` variable is set to 15.
 */
let value: number = 15;

/**
 * A loop that runs from 0 to `val` (inclusive). 
 * For each iteration, it calls the `fizzBuzz` function with the current number and logs the result to the console.
 */
for (let i = 0; i <= value; i++){
    console.log(fizzBuzz(i));
}