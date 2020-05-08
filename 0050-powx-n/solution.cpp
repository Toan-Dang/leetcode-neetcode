class Solution {
public:
    double myPow(double a, int n) {
        double s;
    if (n == 0)
        return 1;
    s = myPow(a, n / 2);
    if (n % 2 == 0) 
        return s * s;
    else
    {
        if (n > 0)
            return a * s * s;
        else
            return (s * s) / a;
    }
    }
};
