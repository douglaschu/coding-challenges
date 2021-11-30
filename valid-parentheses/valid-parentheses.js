/**
 * @param {string} s
 * @return {boolean}
 */
//what data structure?
//let's use a map/reference object (js)
let isValid = (s) => {
  let parentheses = {
    //using a map, key/value pairs, like a phone book or a dictionary
    "(": ")",
    "[": "]",
    "{": "}",
    //key: open paren, value: closed paren
    //what storage mechanism do we want to create for this?
  };

  //keep it simple: create a stack structure - a stack of plates: last in first out
  //input: ()[]{()}
  //stack: [ ), ],  ] the key only gets added ?????

  let stack = [];

  //loop, or iterate through stack

  for (let character of s) {
    if (parentheses[character]) {
      //checks for matching key in the bracket object (checking if current char is an open parenthesis)
      stack.push(parentheses[character]); //push it into stack
    } else {
      if (stack.pop() !== character) return false; //returns last item
    }
  }
  return !stack.length;
  //return the answer
  //if the string was valid, the code above should have removed all brackets leaving the result an empty array. If an empty array signifies a true value, then we should just take the opposite of the length which is !0 or true.
};

console.log(isValid("{}")); //true
console.log(isValid("(){}[]")); //true
console.log(isValid("{]")); //false
console.log(isValid("({})}")); //false
console.log(isValid("{}")); //true

let isAlsoValid = (s) => {
  //use a stack data structure
  //create an array and push and pop from the end of the array

  const stack = []; //look up stack
  const parens = "() {} []"; //a string to compare the stack elements to
  let i = 0; //create a variable to store the index number

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    //pull out last two elements in stack
    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potentialParens = open + closed; //check if the 2 elements pulled off the stack are valid parentheses by first storing them in a variable, then:

    if (parens.includes(potentialParens)) {
      stack.pop();
      stack.pop(); //pop off the last two off the stack if they're valid
    } //if the stack is empty, it's a valid parentheses
  }

  return stack.length === 0;
};

console.log("andy gala solution");
console.log(isAlsoValid("{}")); //true
console.log(isAlsoValid("(){}[]")); //true
console.log(isAlsoValid("{]")); //false
console.log(isAlsoValid("({})}")); //false
console.log(isAlsoValid("{}"));
