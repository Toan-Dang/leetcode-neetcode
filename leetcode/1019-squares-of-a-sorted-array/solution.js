/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let res = new Array(nums.length);
    for (i = nums.length -1; i >= 0; i--) {
        const ld = nums[l] * nums[l];
        const rd = nums[r] * nums[r];
        if (ld > rd) {
            res[i] = ld;
            l++;
        } else {
            res[i] = rd;
            r--;
        }
    }
    
    return res;
};
