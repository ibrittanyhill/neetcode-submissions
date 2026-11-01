class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // a Set lets us check whether a number exists quickly without searching the entire array each time
        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            // check whether it's the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentLength = 1;

                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }

                longest = Math.max(longest, currentLength);
            }
        }

        return longest;
    }
}
