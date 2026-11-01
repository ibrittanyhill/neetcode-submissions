class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]] !== undefined) {
                hash[nums[i]]++;
            } else {
                hash[nums[i]] = 1;
            }
        }

        const entries = Object.entries(hash);

        entries.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            res.push(entries[i][0]);
        }

        return res;
    }
}
