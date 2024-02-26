export function fizzBuzz(num: number): string {
    return (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num.toString();
}

/**
 * The `val` variable is set to 15.
 */
let val: number = 15;

/**
 * A loop that runs from 0 to `val` (inclusive). 
 * For each iteration, it calls the `fizzBuzz` function with the current number and logs the result to the console.
 */
for (let i = 0; i <= val; i++){
    console.log(fizzBuzz(i));
}