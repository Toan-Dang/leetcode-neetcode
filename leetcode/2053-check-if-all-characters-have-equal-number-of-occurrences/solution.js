/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const newMap = new Map();
    for (const str of s) {
        newMap.set(str, (newMap.get(str) || 0) + 1);
    }
    const res = newMap.get(s[0]);
    for (const [key, value] of newMap) {
        if (value !== res) {
            return false;
        }
    }
    return true;
};
