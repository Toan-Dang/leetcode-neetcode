class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& arr) {
         int j = 1;
        for (int i = 0; i < arr.size(); i += 2)
            if (arr[i] % 2 == 1) {
                while (arr[j] % 2 == 1)
                    j += 2;
                swap(arr[i], arr[j]);
        }
    
    return arr;
    }
};
