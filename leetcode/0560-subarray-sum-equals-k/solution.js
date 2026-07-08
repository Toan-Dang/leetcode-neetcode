/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const newMap = new Map();
    newMap.set(0,1);
    let ans = 0;
    let curr = 0;
    for(const num of nums) {
        curr += num;
        ans += newMap.get(curr - k) || 0;
        newMap.set(curr, (newMap.get(curr)||0) + 1);
    }

    return ans;
};
