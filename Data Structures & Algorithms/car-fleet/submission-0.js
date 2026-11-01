class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        const stack = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        cars.sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < cars.length; i++) {
            const position = cars[i][0];
            const speed = cars[i][1];
            const time = (target - position) / speed;

            stack.push(time);

            if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
