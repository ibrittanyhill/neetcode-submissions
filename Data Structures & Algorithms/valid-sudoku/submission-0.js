class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    /* 
     *  Algorithm:
     * 1. create a fresh Set
     * 2. skip empty cells
     * 3. return false on a duplicate
     * 4. otherwise add each number to the set
     */
    isValidSudoku(board) {
        // Check rows
        for (let row = 0; row < 9; row++) {
            const seen = new Set();

            for (const num of board[row]) {
                if (num === ".") continue;
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }

        // Check columns
        for (let col = 0; col < 9; col++) {
            const seen = new Set();

            for (let row = 0; row < 9; row++) {
                const num = board[row][col];

                if (num === ".") continue;
                if (seen.has(num)) return false;
                seen.add(num);
            }
        }

        // Check 3×3 boxes
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const seen = new Set();

                for (let row = boxRow; row < boxRow + 3; row++) {
                    for (let col = boxCol; col < boxCol + 3; col++) {
                        const num = board[row][col];

                        if (num === ".") continue;
                        if (seen.has(num)) return false;
                        seen.add(num);
                    }
                }
            }
        }

        return true;
    }
}
