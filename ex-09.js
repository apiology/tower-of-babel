const max = process.argv[2];
let FizzBuzz = function*(){
  let i = 0;
  while (i < max) {
    i++;
    // for every number that is divisible by 3 you write Fizz and
    // for ever number that is divisible by 5 you write Buzz and
    // for every number that is divisible by both 3 and 5 you
    // write FizzBuzz.
    let result = '';
    if (i % 3 == 0) {
      result += 'Fizz';
    }
    if (i % 5 == 0) {
      result += 'Buzz';
    }
    if (result == "") {
      result += i;
    }
    yield result;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // 16
  // 17
  // Fizz
  // 19
  // Buzz
  // Fizz
  // 22
  // 23
  // Fizz
  // Buzz
  // 26
  // Fizz
  // 28
  // 29
  // FizzBuzz
  // ...
}
