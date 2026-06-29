/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let cnt = 0;
    patterns.forEach((item) => {
        if (word.includes(item)) {
            cnt++;
        }
    })
    return cnt;
};
