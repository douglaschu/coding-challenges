/**
 * @param {string} s
 * @return {string}
 */

let longestPalindrome = (s) => {
    let result = "";

    if (!s) return result; //if string is empty

    for (i = 0; i < s.length; i++) {
        //look through the inputted string
        for (let j = 0; j < 2; j++) {
            //skip or keep going if the string is even or odd
            let left = i;
            let right = i + j;

            while (left >= 0 && right <= s.length && s[left] == s[right]) {
                //if both sides match, expand the window and keep going
                left--;
                right++;
            }

            let start = left + 1; //start on the first character
            let end = right;
            let subString = s.slice(start, end); //gives string from beginning to end of index
            if (result.length < subString.length) {
                result = subString;
            }

        }
    }
    return result;
};

console.log(longestPalindrome("racecar")); //racecar
console.log(longestPalindrome("racecars")); //racecar
console.log(longestPalindrome("babad")); //bab or aba
console.log(longestPalindrome("cbbd")); //bb
console.log(longestPalindrome("a")); //a
console.log(longestPalindrome("ac")); //a
console.log(longestPalindrome(""));



