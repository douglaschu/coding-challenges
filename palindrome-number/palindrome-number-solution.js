/**
 * @param {number} x
 * @return {boolean}
 */

let isPalindromeString = (x) => {
  let reversedString = "";
  let xString = x.toString(); //xString = '123';

  for (let i of xString) {
    reversedString = i + reversedString;
    //pass 1: '1' + ''
    //pass 2: '2' + '1' = '21' (like 'a' + 'b' = 'ab')
    //pass 3: '3' + '21' = '321'
  }

  return reversedString === xString;
};

let isPalindrome = (x) => {
  //edge case: eliminate all negative numbers
  if (x < 0) return false;
  let reverse = 0;

  for (
    let i = x;
    i >= 1;
    i = Math.floor(i / 10) //incrementing is the secret sauce
  )
    reverse = reverse * 10 + (i % 10);

  return reverse === x;
};


console.log(isPalindrome(123)); //false
console.log(isPalindrome(808)); //true
