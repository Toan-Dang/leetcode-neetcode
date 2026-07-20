/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const getSum = (num) => {
        let sum = 0;
        while(num > 0) {
            sum += num % 10;
            num = Math.floor(num/10);
        }

        return sum;
    }

    const newMap = new Map();
    let res = -1;
    nums.forEach((item) => {
        const check = getSum(item);
        if (newMap.has(check)) {
            res = Math.max(res, item + newMap.get(check));
        }
        newMap.set(check, Math.max( newMap.get(check) || 0 , item))
    })
    return res;
};
