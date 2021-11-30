/**
 * @param {number} n
 * @return {string[]}
 */

//thinkFWD
//recursion: a function that calls itself, creating a tree of cases
let generateParentheses = (n) => {

    const result = [];

    const depthFirstSearch = (i, n, partial, openCount, closedCount) => {

        //backtracking case
        if (openCount > n) return;
        if (closedCount > openCount) return;

        //base case (end results/leaf layer, final pair)
        if (i === n * 2) {
            result.push(partial.join(""));
            return;
        }

        //add open parentheses
        partial.push('(');
        depthFirstSearch(i+1, n, partial, openCount + 1, closedCount);
        partial.pop();

        //add closed parentheses
        partial.push(')');
        depthFirstSearch(i+1, n, partial, openCount, closedCount + 1);
        partial.pop();
    }
    depthFirstSearch(0, n, [], 0, 0);
    return result;
};
console.log(generateParentheses(3));



