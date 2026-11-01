class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}

        for (let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split('').sort().join('');

            if (hash[sorted] !== undefined) {
                hash[sorted].push(strs[i])
            } else {
                hash[sorted] = [strs[i]]
            }
        }
        return Object.values(hash)
    }
}
