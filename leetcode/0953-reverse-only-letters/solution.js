/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let l = 0;
    let r = s.length - 1;
    let res = [];
    while (l < r) {
        // "7_28]"
        while (!str.includes(s[l]) && l < r) {
            res[l] = s[l];
            l++;
        }
        if (l === r) {
            break;
        }
        while (!str.includes(s[r]) && l < r) {
            res[r] = s[r];
            r--;
        }
        
        let tmp = s[l];
        res[l] = s[r];
        res[r] = s[l];
        l++;
        r--;
    }
    if (l === r) {
        res[l] = s[l];
    }

    return res.join("");
};
