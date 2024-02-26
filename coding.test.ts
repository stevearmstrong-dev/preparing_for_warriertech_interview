import { fizzBuzz } from './coding';

test('fizzBuzz should return "Fizz" for multiples of 3', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
  expect(fizzBuzz(6)).toBe('Fizz');
  expect(fizzBuzz(9)).toBe('Fizz');
});

test('fizzBuzz should return "Buzz" for multiples of 5', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
  expect(fizzBuzz(10)).toBe('Buzz');
  expect(fizzBuzz(20)).toBe('Buzz');
});

test('fizzBuzz should return "FizzBuzz" for multiples of both 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
  expect(fizzBuzz(30)).toBe('FizzBuzz');
  expect(fizzBuzz(45)).toBe('FizzBuzz');
});

test('fizzBuzz should return the number as a string for non-multiples of 3 and 5', () => {
  expect(fizzBuzz(1)).toBe('1');
  expect(fizzBuzz(2)).toBe('2');
  expect(fizzBuzz(4)).toBe('4');
});