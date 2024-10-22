function minOperations(x, y) {
    if (x === y) return x - y;

    let queue = [[x, 0]];
    const visited = new Set();

    while (queue.length > 0) {
        const [current, steps] = queue.shift();

        if (current === y) return steps;

        visited.add(current);

        if (current * 2 <= y * 2 && !visited.has(current * 2)) {
            queue.push([current * 2, steps + 1]);
        }

        if (current - 1 > 0 && !visited.has(current - 1)) {
            queue.push(current - 1, steps + 1);
        }
    }

    return -1;
}

console.log(minOperations(4, 6));
console.log(minOperations(5, 8));
