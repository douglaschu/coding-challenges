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

    while (secondPointer >= 0) {
      //while location (index) of second pointer is truthy
      let fValue = nums1[firstPointer];
      let sValue = nums2[secondPointer];

      if (fValue > sValue) {
        nums1[indexPointer] = fValue;
        //set value of nums1[i] to be the value of pointer
        indexPointer--;
        firstPointer--;
        //moving to the next step: decrement the greater value pointer and index pointer
      } else {
        //flip
        nums1[indexPointer] = sValue;
        indexPointer--;
        secondPointer--;
      }
    }
  } console.log(nums1);
  //that's it! no return, remember
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //expected: [1, 2, 2, 3, 5, 6]
