/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const newMap = new Map();
    for( const num of nums) {
        for (const n of num) {
            newMap.set(n, (newMap.get(n) || 0) + 1);
        }
    }
    console.log(newMap);
    let res = [];
    const n = nums.length;
    for (const [key, value] of newMap) {
        if (value === n) {
            res.push(key);
        }
    }
    res.sort((a,b) => a-b)
    return res;
};
