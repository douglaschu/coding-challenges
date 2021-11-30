/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  //edge cases: remove monkeying around
  if (nums == false) return 0;

  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      //skip the values not equal to val
      nums[pointer] = nums[i];
      pointer++; //increment pointer
      //if nums[i] === val, the pointer will skip it
    }
  }
  return pointer; //pointer will tell you the length of a theoretical array without creating a new one, or deleting it.
};

console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2, 2], 2)); //5

/**
 * thinkFWD video notes
 *
 * not as simple as creating an array, iterating through it, and pushing the ones not equal to the value into the new array
 * BUT! we can't make extra space for another array
 *
 * 1. We have to go through every single number, so it needs a for loop.
 * 2. check the numbers to do... something
 *      a. delete it
 *      b. move it around
 * 3. What javascript can we use?
 *      a. splice
 *          i. interviewers may not like higher order functions
 *      b. no higher order functions
 *
 * Using pointers
 * Set your pointer to skip instances of val
 *
 */

const removeElementSplice = (nums, val) => {
  //edge cases: remove gibberish input
  if (nums == false) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
