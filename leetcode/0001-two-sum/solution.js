/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const res = target - num;
        if (hashmap.has(res)) {
            return [hashmap.get(res), i];
        }
        hashmap.set(num, i);
    }

    return [-1, -1]
};
