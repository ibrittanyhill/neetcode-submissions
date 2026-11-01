class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        let product = 1;

        // Products to the left
        for (let i = 0; i < nums.length; i++) {
            output[i] = product;
            product *= nums[i];
        }

        // Multiply by products to the right
        product = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= product;
            product *= nums[i];
        }

        return output;
    }
}
