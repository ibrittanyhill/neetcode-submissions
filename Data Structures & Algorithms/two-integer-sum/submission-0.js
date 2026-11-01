class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];

            if (hash[difference] !== undefined) return [i, hash[difference]]

            hash[nums[i]] = i
        }
    }
}
