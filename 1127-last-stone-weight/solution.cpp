class Solution {
public:
 int lastStoneWeight(vector<int>& stones) {
    make_heap(stones.begin(), stones.end());
    while (true) {
        int t = stones.size();
        if (t == 1) return stones.front();
        if (t == 0) return 0;
        int k1 = stones[0];
        int k2 = t >= 3 ? (stones[1] > stones[2] ? stones[1] : stones[2]) : stones[1];
        if (k1 == k2) {
            pop_heap(stones.begin(), stones.end());
            stones.pop_back();
            pop_heap(stones.begin(), stones.end());
            stones.pop_back();
        } else {
        
            pop_heap(stones.begin(), stones.end());
            stones.pop_back();
            stones.front() = k1 - k2;
            make_heap(stones.begin(), stones.end());
        }
    }
}
};
