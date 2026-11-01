class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};

        for (const num of nums) {
            hash[num] = (hash[num] || 0) + 1;
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, frequency] of Object.entries(hash)) {
            buckets[frequency].push(+num);
        }

        const res = [];

        for (let i = buckets.length - 1; i > 0; i--) {
            for (const num of buckets[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
