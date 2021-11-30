/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
    //remove edge cases
    if (nums == false) return 0;

    let pointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val ){
            //skip values != val
            nums[pointer] = nums[i];
            pointer++; //increment pointer
        }
    }
    return pointer;
};

console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2, 2], 2)); //5
console.log(removeElement(0, 3)); 