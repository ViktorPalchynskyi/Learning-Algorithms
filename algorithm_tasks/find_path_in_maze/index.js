const findPathInMaze = (maze, start, end) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

 
    const numRows = maze.length;
    const numCols = maze[0].length;

    if (
        !isValidPoint(maze, startRow, startCol) ||
        !isValidPoint(maze, endRow, endCol)
    ) {
        throw new Error('Invalid start or end point.');
    }


    const visited = Array.from({ length: numRows }, () =>
        Array(numCols).fill(false)
    );

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    function isValidPoint(maze, row, col) {
        return (
            row >= 0 &&
            row < numRows &&
            col >= 0 &&
            col < numCols &&
            maze[row][col] === 0
        );
    }

    const path = [];

    const dfs = (row, col) => {
        if (row === endRow && col === endCol) {
            path.push([row, col]);
            return true;
        }

        if (!isValidPoint(maze, row, col) || visited[row][col]) {
            return false;
        }

        visited[row][col] = true;
        path.push([row, col]);

        for (const [dRow, dCol] of directions) {
            if (dfs(row + dRow, col + dCol)) {
                return true;
            }
        }

        path.pop();
        return false;
    };

    if (dfs(startRow, startCol)) {
        return path;
    } else {
        return null;
    }
};

const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const start = [0, 0];
const end = [4, 4];

const path = findPathInMaze(maze, start, end);
console.log(path);
// Пример вывода: [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [3, 2], [4, 2], [4, 3], [4, 4]]
