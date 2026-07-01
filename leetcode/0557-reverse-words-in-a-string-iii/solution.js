/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [];
    let res = [];
    for(let i =0; i<s.length; i++) {
        if (s[i]===" ") {
            res.push(arr.join(""));
            res.push(" ");
            arr = [];
        } else {
            arr.unshift(s[i]);
        }
 
    }
    res.push(arr.join(""));
    return res.join("");
};
