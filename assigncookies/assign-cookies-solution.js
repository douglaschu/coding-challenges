/**
 * @param {number[]} kids
 * @param {number[]} cookies
 * @return {number}
 */

//pseudo-code:
//organize the queue of hungry kids
//sort the kids in some kind of order (smallest to largest)
//organize the cookies
//sort the available cookies from smallest to largest
//record who is successfully given a cookie (kid's preference matches the size of the cookies)
//record what place in the sorted line of hungry kids that we finished on

const findContentChildren = (kids, cookies) => {
  let solution = 0; //how many kids are happy
  let hungerIndex = 0; //where on the line we ended up after giving out as many cookies as we could.

  //javascript sort array method
  kids.sort((a, b) => a - b); //sort the kids from smallest to largest cookie preference
  cookies.sort((a, b) => a - b); //also sort the cookies in ascending order

  //for... of loop: go through all the cookies, see which of their sizes >= the child on the array's hunger factor
  for (let cookieSize of cookies) {
    if (cookieSize >= kids[hungerIndex]) {
      solution++; //if there's a match of cookie size and cookie preference, add 1 to the solution tally
      hungerIndex++; //record the place on the line where we are after giving away the cookie
    }
  }
  return solution; //that's it. return the result!
};

//test 1
console.log("3 kids, 2 cookies, but only small size (size = 1) available.");
console.log(findContentChildren([1, 2, 3], [1, 1])); //expected output: 1

//test 2
console.log("2 kids, 3 cookies, both kids should go home happy");
console.log(findContentChildren([1, 2], [1, 2, 3])); //expected: 2

//test 3
console.log("huge cookies for everyone!");
console.log(
  findContentChildren([1, 5, 2, 6, 3, 4, 9, 9, 10, 10, 10, 10],
  [
    10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10,
  ])
); //expected: 12
