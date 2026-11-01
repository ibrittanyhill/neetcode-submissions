class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (const token of tokens) {
            if (!Number.isNaN(Number(token))) {
                stack.push(Number(token));
            } else {
                const b = stack.pop();
                const a = stack.pop();

                stack.push(operators[token](a, b));
            }
        }

        return stack.pop();
    }
}
