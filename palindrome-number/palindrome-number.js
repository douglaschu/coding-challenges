/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindrome = (x) => {
  //edge case: eliminate all negative numbers
  if (x < 0) return false;

  let reverse = 0;

  for (
    let i = x;
    i >= 1;
    i = Math.floor(i / 10) //increment is where the spice is
  )
    reverse = reverse * 10 + (i % 10);
  //i%10 gives remainder element
  //remainder multiplied by 10
  //next
  //continuously extracts the integer digits that are to the left of the decimal point (greater than 1)

  return reverse === x;
};

let isPalindromeString = (x) => {
  let reversedString = "";
  let xString = x.toString(); //xString = '123'

  for (let i of xString) {
    reversedString = i + reversedString;
    //pass 1: '' + '1'
    //pass 2: '2' + '1' = '21' (like 'a' + 'b' = 'ab')
    //pass 3: '3' + '21' - '321'
  }
  return reversedString === xString;
};

console.log(isPalindrome(123));
console.log(1 % 10);
console.log(isPalindromeString(123));
