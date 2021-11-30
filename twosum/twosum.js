






//PR'ALBUM:
//  Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  You can return the answer in any order.

// [1, 2, 3, 6, 11], 7

// go through whole array
// pick the first value 1
//go through rest of array
// check if there is as value that will give me "bingo"

//'brute force' solution
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    //first index can't give you the answer by itself
    for (let j = i + 1; j < nums.length; j++) {
      //need to start at second index
      if (nums[i] + nums[j] === target)
        //the guts: the math-logic of the problem
        return [i, j]; //need to output as array
    }
  }
};

console.log("twoSum basic tests");
console.log(twoSum([1, 2, 3, 6, 11, 7], 7)); //expected [0, 3] or [3, 0]
console.log(twoSum([2, 7, 11, 15], 9)); //expected [0, 1] or [1, 0]
console.log(twoSum([3, 2, 4], 6)); //expected [1, 2]
console.log(twoSum([3, 3], 6)); //expected [0, 1]

// space - 0(1)
// time o(n)^2 (go through array twice -- nested loop). that's slow

//use a hashmap, it's faster (like a dictionary)? that means object
// dictionary = LOOKUP
// because we want a better data structure
// use a javascript object
// arrays have to be swallowed whole -- sorted, pushed, popped, sliced, all based on index
// say 'i'm not as experienced at hashmaps, so i'll explain the best I can
// how it works:
// start with first entry of array: 1
// I need to find a 4 to get the sum
// store the needed (key) value, difference b/w target and entry #. check if each entry in the array
// It's NOT.
// store that in an array of needed values
// array of needed values, parallel structure
// [1, 2, 3, 6, 11] compare to { 4:0, 3:1, } (needed value:index number)

const twoSumDeluxe = (nums, target) => {
  let memory = {};
  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[target - nums[i]] = i;
    } else {
      return [i, memory[nums[i]]];
    }
  }
};

console.log("deluxe");
console.log(twoSumDeluxe([1, 2, 3, 6, 11, 7], 7)); //expected [0, 3] or [3, 0]
console.log(twoSumDeluxe([2, 7, 11, 15], 9)); //expected [0, 1] or [1, 0]
console.log(twoSumDeluxe([3, 2, 4], 6)); //expected [1, 2]
console.log(twoSumDeluxe([3, 3], 6)); //expected [0, 1]

// could make it even MORE efficient -- what if we didn't have to store every value in the array, like big numbers?
//    sort the array first
// lowest to highest, left to right
// we don't have to go through the whole thing
// getting closer to how we'd solve this problem holistically, like human beings
// with a sorted array:
// 1. you're starting at the lowest number (index 1, leftmost.)
// 2. add the biggest number to it (index = nums-1, rightmost.)
//      going back to ex: 1 + 11 > 5. NO GOOD
// 3. if that doesn't work, move on to next-biggest number (penultimate)
//      1 + 6 > 5. ALSO NO GOOD
// 4. then the next
//      1 + 3 = 5? No. 1 + 3 < 5. Too far. We don't need to check the last pair.
// 5. Move onto the next indexed entry as the comparison point.
//      if you use 'pointers', you don't need to sort through n value
// 6. Compare 'left pointer' a.k.a. new comparison point to next number.
//      2 + 3 = 5. BINGO.
// HE DIDN'T GIVE THE SOLUTION ARRRGH DAMN IT FUCK

const twoSumPremium = (nums, target) => {
  {
    let memory = {};
    for (let i = 0; i < nums.length; i++) {
      if (memory[nums[i]] === undefined) {
        memory[target - nums[i]] = i;
      } else {
        return [i, memory[nums[i]]];
      }
    }
  }
};

// for...of loop
// nums = [2, 7, 11, 15], target = 9
// return [0, 1]
// index = 0, num = 2
// storage = {
//  '7': 0 (first stored entry in formerly empty object)
//}

const twoSumAlternate = (nums, target) => {
  let storage = {}; //create empty object

  for (let [index, num] of nums.entries()) {
    //iterate through entries, extract index and nums values
    if (storage[num] !== undefined)
      // check if number exists by checking for a match in values
      return [storage[num], index]; // return that number and its index
    storage[target - num] = index; // put that returned number & its index into that EMPTY storage object we created
  }
}; //conclusion: I don't understand how this works. I'm going to leave it out of the taping.
