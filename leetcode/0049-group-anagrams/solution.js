/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const newMap = new Map();
    for (const str of strs) {
        const s = str.split('').sort().join('');
        if (!newMap.has(s)) {
            newMap.set(s, []);
        }
        newMap.get(s).push(str);
    }

    const ans = [];
    for (const [k,v] of newMap) {
        ans.push(v);
    }
    return ans;
};
