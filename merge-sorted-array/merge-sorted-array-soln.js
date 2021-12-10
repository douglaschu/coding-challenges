/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let merge = (nums1, m, nums2, n) => {
    let firstPointer = m - 1;
    let secondPointer = n - 1;
    let indexPointer = m + n - 1;

    while (secondPointer >= 0) {
        let fValue = nums1[firstPointer];
        let sValue = nums2[secondPointer];
        
        if (fValue > sValue) {
            nums1[indexPointer] = fValue;
            indexPointer--; 
            firstPointer--;
        } else {
            nums1[indexPointer] = sValue;
            indexPointer--;
            secondPointer--;
        }
    } console.log(nums1);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //expected: [1, 2, 2, 3, 5, 6]

console.log(merge([-67, -3, 1, 4, 8, 0,0,0,0,0,0, 0], 5, [-99, -7, 2, 5, 6, 11, 204], 7));