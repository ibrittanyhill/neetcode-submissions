class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array(temperatures.length).fill(0),
            stack = [];

        for (let currentDayIndex = 0; currentDayIndex < temperatures.length; currentDayIndex++) {
            const currentDayTemp = temperatures[currentDayIndex];

            // Check whether today's temperature is warmer than the most recent day in the stack
            while (stack.length > 0 && currentDayTemp > temperatures[stack.at(-1)]) {
                const prevIndex = stack.pop();
                res[prevIndex] = currentDayIndex - prevIndex;
            }

            stack.push(currentDayIndex);
        }

        return res;
    }
}
