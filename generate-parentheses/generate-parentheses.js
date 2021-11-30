/**
 * @param {number} n
 * @return {string[]}
 */

let generateParentheses = (n) => {
  const solution = []; //empty array for solution

  //function to generate combos
  const generateCombo = (leftPCount, rightPCount, partial) => {
   
    //(, ), partial string
    //exit conditions
    if (leftPCount > rightPCount) return; //exit if more L than R (wrong input)
    if (!leftPCount && !rightPCount) solution.push(partial); //if all parentheses get successfully pushed into solutions array, that's 1 of the combos

    //start building up the solutions array
    if (leftPCount > 0)
      generateCombo(leftPCount - 1, rightPCount, partial + "("); //builds left side
    if (rightPCount > 0)
      generateCombo(leftPCount, rightPCount - 1, partial + ")");
    //generate all possible parentheses combos, filter for the valid syntax pairs
  };
  //invoke helper function
  generateCombo(n, n, "");
  return solution;
};

// leftPCount = 3
// rightPCount = 3
// partial = ''

//1st call
//run thru if statements
//a. is L > R? no
//b. is L = R = 0? no
//c. is L > 0? yes, therefore: run generateCombo, take off on L and add '(' into partial
//c. status update
//c. i. LeftPCount = 2
//c. ii. rightPCount = 3
//c. iii. partial = '('
//d. is R > 0? yes, run generateCombo, R-1, add ')' to partial
//if statement a. (L > R?) lets us screen out any invalid syntax paren pairs

//andy gala non-recursive backtracking method (SLOW)
const isValid = (str) => {
  const stack = [];
  let i = 0;
  let len = str.length;
  while (i < len) {
    let currentParen = str[i];
    stack.push(currentParen);

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];
    if (open + closed === "()") {
      stack.pop();
      stack.pop();
    }
    i++;
  }
  return stack.length === 0;
};

let generateParensSlow = (n) => {
  //store result
  const result = [];

  //'depthFirstSearch' recursive helper function (depth first search?)
  //depth first search is an algorithm for searching tree structures
  //start at the root node, goes as far as it can down each branch before it backtracks
  //version investigated as early as the late 1800s by a French engineer named Charles Pierre Tremaux, who developed it as a way to navigate mazes.
  const depthFirstSearch = (i, n, partial) => {
    //partial??
    //check at leaf, or base level
    if (i === n * 2) {
      if (isValid(partial.join(""))) {
        result.push(partial.join(""));
      }
      return;
    }
    //depthFirstSearch recursive case

    //add open paren
    partial.push("(");
    depthFirstSearch(i + 1, n, partial);
    partial.pop();
    //add closed paren
    partial.push(")");
    depthFirstSearch(i + 1, n, partial);
    partial.pop();

    //
  };

  depthFirstSearch(0, n, []);
  return result;
};

let generateParensBacktrack = (n) => {
  //store result
  const result = [];

  //'depthFirstSearch' recursive helper function (depth first search?)
  const depthFirstSearch = (i, n, partial, openCount, closedCount) => {
    //so many parameters! don't worry
    //i = how far down tree
    //n = number of pairs to work with

    
    //backtracking case (must go first)
    if (openCount > n) return;
    if (closedCount > openCount) return;

    //base case
    if (i === n * 2) {
      //if it gets to the bottom/leaf/base level, it's valid
      result.push(partial.join("")); //array.join prints array as string
      return;
    }

    //depthFirstSearch recursive case

    //add open paren
    partial.push("(");
    depthFirstSearch(i + 1, n, partial, openCount + 1, closedCount);
    partial.pop();
    //add closed paren
    partial.push(")");
    depthFirstSearch(i + 1, n, partial, openCount, closedCount + 1);
    partial.pop();
  };
  //call depth first search to start at the top of the tree
  depthFirstSearch(0, n, [], 0, 0);
  return result;
};

console.log(generateParentheses(3));
console.log(generateParensSlow(3));
console.log(generateParensBacktrack(3));

let test = ['sandbag', 'dog', 'cabbage'];
test.join('');
return test;