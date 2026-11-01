class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freqMap = {};

        for (const char of s) {
            freqMap[char] = (freqMap[char] || 0) + 1;
        }

        for (const char of t) {
            if (freqMap[char] !== undefined) {
                freqMap[char]--
            }
        }

        return Object.values(freqMap).every((val) => val === 0);

    }
}
