class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const isOpen = (char) => {
            return char === "{" || char === "[" || char === "(";
        };
        const match = {
            "]": "[",
            "}": "{",
            ")": "(",
        };

        for (const char of s) {
            if (isOpen(char)) {
                stack.push(char);
            } else {
                const top = stack.at(-1);

                if (match[char] !== top) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
