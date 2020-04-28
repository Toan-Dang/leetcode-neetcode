class Solution {
public:
    string toLowerCase(string str) {
        for (int i = 0; i < str.length(); i++) {
        if ('A' <= str[i] && str[i] <= 'Z') {
            str[i] += 32;
        }
    }
        return str;
    }
};
