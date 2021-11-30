/**
 * @param {string} s
 * @return {boolean}
 */
//input: ()[]{()}
//output: true
//input: )(
//output: false

 let isValid = (s) => {
   
    let parentheses = { //use map to store correct parentheses pair data
        '(': ')',
        '[': ']',
        '{': '}',
    }

    //stack
    let stack = [];

    //now to loop, or iterate through stack

    for (let character of s) {
        if (parentheses[character]) { //check for matching key-value pair in the map
            stack.push(parentheses[character]); //push it into the stack
        } else {
            if (stack.pop() !== character) return false; 
        }
    }

    return !stack.length;
};

console.log(isValid("{}")); //true
console.log(isValid("(){}[]")); //true
console.log(isValid("{]")); //false
console.log(isValid("({})}")); //false
console.log(isValid("[{()}]")); //true

