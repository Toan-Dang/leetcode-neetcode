/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = new Map();
    dic.set("I", 1);
    dic.set("V", 5);
    dic.set("X", 10);
    dic.set("L", 50);
    dic.set("C", 100);
    dic.set("D", 500);
    dic.set("M", 1000);

    dic.set("IV", 4);
    dic.set("IX", 9);
    dic.set("XL", 40);
    dic.set("XC", 90);
    dic.set("CD", 400);
    dic.set("CM", 900);

    let res = 0;
    for (let i = 0; i< s.length; i++) {
        if (i + 1 <= s.length) {
            const c = s[i] + s[i+1];
            if (dic.has(c)) {
                res += dic.get(c);
                i++;
            } else {
                res += dic.get(s[i])
            }
        } else {
            res += dic.get(s[i])
        }
    }

    return res;
};
