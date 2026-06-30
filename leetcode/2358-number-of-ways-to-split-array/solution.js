/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const n = nums.length;
    let total = 0;
    let ans =0;
    for(let i = 0; i < n; i++) {
        total += nums[i];
    }
    let left =0;
    let right = 0;
    for (i = 0; i< n-1;i++) {
        left += nums[i];
        right = total - left;
        if (left >= right) {
            ans++;
        }
    }

    return ans;
};
