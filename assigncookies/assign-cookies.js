/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

//pseudo-code:
//organize the queue of hungry kids
//sort them in some kind of order (smallest to largest)
//sort the sizes of available cookies (smallest to largest)
//record who is successfully given a cookie/fed
//record what place in the sorted line of hungry kids we finished on

const findContentChildren = (kids, cookies) => {
  let solution = 0; //how many kids fed
  let hungerIndex = 0; //where on the line we ended up when all the cookies were given out
  ///keeping track of where we are viz. the kids
  //what position we are on the sorted list of kids by hunger level
  //go through cookies, and see how many cookies will make how many kids happy, and record that

  //use javascript sort array function
  kids.sort((a, b) => a - b); //sort in increasing order
  cookies.sort((a, b) => a - b); //also sort in increasing order

  //for... of loop. go through all the cookies, see which of them their sizes are >= the child's greed factor
  for (let cookieSize of cookies) {
    if (cookieSize >= kids[hungerIndex]) {
      solution++; //if there's a happy kid, add 1 to the solution tally
      hungerIndex++; //mark where we are on the sorted queue of hungry kids by adding one to the positional index
    }
  }
  return solution; //and that's it. return the result.
};

console.log("3 kids, 2 cookies, but only small ones available.");
console.log(findContentChildren([1, 2, 3], [1, 1])); //expected: 1
console.log("2 kids, 3 cookies, both kids should go home happy");
console.log(findContentChildren([1, 2], [1, 2, 3])); //expected: 2
console.log("huge cookies for everyone!"); //oh no, a bunch of 8th graders showed up!!
console.log(
  findContentChildren(
    [1, 5, 2, 6, 3, 7, 4, 9, 9, 10, 10, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  )
); //expected: 12
