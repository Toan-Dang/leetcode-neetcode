class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        a = n * n
        b = n * (n + 1)
        return math.gcd(a, b)
