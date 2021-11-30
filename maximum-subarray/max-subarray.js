/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 let merge = function(nums1, m, nums2, n) {
    
  //make pointers using variables. initial value is initial pointer position
  //three pointers
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1; //or nums1.length -1

  //get those pointers movin with a while loop
  //you want the pointers to move conditionally. stop once one or both pointers reach a certain point.
  while (second >= 0) {
    //while location (index) of second pointer is truthy
    let firstValue = nums1[first];
    let secondValue = nums2[second];

    if ((firstValue > secondValue)) {
      nums1[i] = firstValue; //set value of nums1[i] to be the value of pointer
      i--;
      first--; //decrement the greater value pointer and i
    } else {
      nums1[i] = secondValue;
      i--;
      second--;
    }
  } //that's it! no return, remember
};

/**
 * brute force: create new array to store numbers, then repopulate nums1
 * 
 * 
 * Pointers
 * 
 * pointer F: on nums1 @ index[m-1]
 * pointer S: on nums2 @ index[n-1]
 * pointer I: on nums1 @ index[m + n] or index[nums1.length]
 *      (we want pointer I at the end of nums1)
 * 
 * example 1:
 * 1. step 1
 * check: is the first value >= second value?
 * if not, replace nums1[i] with nums2[s]
 * decrement s & i
 * 
 * 2. step 2
 * is f >= s? no. 
 * replace nums1[i'] with nums2[s']
 * decrement s & i for the 2nd time. 
 * 
 * 3. step 3
 * if f >= s? yes. 
 * update nums1[i''] with nums1[s''] instead.
 * decrement f & i this time
 * 
 * 4. step 4
 * if f >= s? yes. (f = s = 2)
 * Go ahead and update value with nums2[s''']. 
 * Decrement s & i
 * s is now out of range! 
 * there are no more values in nums2. 
 * we can assume the array is now merged! 
 * 
 * time and space complexity: o(n): T, o(1): S
 * pointers are very efficient. 
 
 */
