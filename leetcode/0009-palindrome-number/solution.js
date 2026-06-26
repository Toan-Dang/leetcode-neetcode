/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = Array.from(String(x), Number);
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
};
