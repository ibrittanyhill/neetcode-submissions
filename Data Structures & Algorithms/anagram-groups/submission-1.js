class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {};

        for (const str of strs) {
            const sorted = str.split('').sort().join('');

            if (hash[sorted] === undefined) {
                hash[sorted] = [str]
            } else {
                hash[sorted].push(str)
            }
        }

        return Object.values(hash);
    }
}
