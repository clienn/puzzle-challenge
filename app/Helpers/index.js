export function initPuzzleGrid() {
    const n = Array.from({length: 16}, (v, i) => i);
    n.sort(() => Math.random() - 0.5);

    const grid = [];
    while(n.length) grid.push(n.splice(0, 4));

    return grid;
}

export function getCellZero(grid) {
    const dimension = grid.length;
    
    for (let i = 0; i < dimension; ++i) {
        for (let j = 0; j < dimension; ++j) {
            if (grid[i][j] == 0) {
                return {
                    x: j,
                    y: i
                };
            }
        }
    }

    return {
        x: -1,
        y: -1
    };
}