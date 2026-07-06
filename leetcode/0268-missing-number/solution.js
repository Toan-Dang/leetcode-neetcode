/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const defaultSet = new Set(nums);
    for( let i = 0; i <= n ; i++) {
        if (!defaultSet.has(i)) {
           return i;
        }
    }
    
    return -1;
};
