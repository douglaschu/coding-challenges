/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to target.
//  You may assume that each input would have exactly one solution, and you may not use the same element twice.
//  You can return the answer in any order.

// go through the whole array
// pick the first value 
// go through the rest of the array
// check if there is a second value we can add to the first value that will give us the Target as the sum.

const twoSumBasic = (nums, target) => {
    for (let i = 0; i < nums.length; i++) { //first index can't give you the answer by itself
        for (let j = i + 1; j < nums.length; j++) { //start at the second index
            if (nums[i] + nums[j] === target) //the guts, the two sum calculation
            return [i, j] //answer must be outputted as array            
        }
    }
};

console.log("twoSum basic tests");
console.log(twoSumBasic([1, 2, 3, 6, 11, 7], 7)); //expected [0, 3] or [3, 0]
console.log(twoSumBasic([2, 7, 11, 15], 9)); //expected [0, 1] or [1, 0]
console.log(twoSumBasic([3, 2, 4], 6)); //expected [1, 2]
console.log(twoSumBasic([3, 3], 6)); //expected [0, 1]

//deluxe: hashmap time
//[1, 2, 3, 6, 11], 7
// start with first entry of the array (index [0]), which is 1 
// {6: 0, 5: 1, 4: 2, 1: 3, -4: 4}
// store the needed value to get to the target as a sum (a.k.a. the difference between target and number)

const twoSumDeluxe = (nums, target) => {
    let memory = {};
    for (let i = 0; i < nums.length; i++ ) {
        //if it's not there
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
