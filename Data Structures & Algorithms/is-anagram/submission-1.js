class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const hash = {};

        for (const charS of s) {
            if (hash[charS] !== undefined) {
                hash[charS]++;
            } else {
                hash[charS] = 1;
            }
        }

        for (const charT of t) {
            if (hash[charT] !== undefined) {
                hash[charT]--;
            }
        }

        return Object.values(hash).every((i) => i === 0);
    }
}
