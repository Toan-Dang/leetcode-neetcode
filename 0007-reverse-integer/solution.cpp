class Solution {
public:
    int reverse(int x) {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);
    long p = 0;
    int y = abs(x);

    while (y > 0) {
        p = p * 10 + y % 10;
        y /= 10;
    }
    if (p < INT_MIN || p > INT_MAX) return 0;
    if (x > 0) return p;
    return -p;
    }
};
