//Input: n = 15
//Output: [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

// @param {number} n
// @return {string[]}

//solution 1: basic
const fizzBuzz = function (n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("Fizzbuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzBuzz(100);

//solution 2: array

const fizzBuzzTwo = (n) => {
  let array = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) array.push("FizzBuzz");
    else if (i % 3 == 0) array.push("Fizz");
    else if (i % 5 == 0) array.push("Buzz");
    else array.push("" + i);
  }
  return array;
};

console.log("two: arrays");
console.log(fizzBuzzTwo(100));

//solution 3: custom rules

const fizzBuzzDeluxe = (
  string1 = "Fizz",
  string2 = "Buzz",
  multiple1 = 3,
  multiple2 = 5,
  n = 100
) => {
  let array = [];
  for (i = 1; i <= n; i++) {
    if (i % multiple1 == 0 && i % multiple2 == 0) array.push(string1 + string2);
    else if (i % multiple1 == 0) array.push(string1);
    else if (i % multiple2 == 0) array.push(string2);
    else array.push("" + i);
  }
  return array;
};

console.log("three: custom rules");
console.log(fizzBuzzDeluxe('fizz', 'buzz', 4, 7, 28));
