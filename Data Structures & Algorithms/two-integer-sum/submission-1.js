class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num;

            if (hash[num] !== undefined) {
                return [hash[num], i]
            } else {
                hash[diff] = i;
            }
        }
     }

}
