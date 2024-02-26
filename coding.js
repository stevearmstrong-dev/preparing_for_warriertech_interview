function fizzBuzz(num) {
    return (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num.toString();
}
var num = 15;
for (var i = 0; i <= num; i++) {
    console.log(fizzBuzz(i));
}
