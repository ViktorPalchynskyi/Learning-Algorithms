const arrayIntersection = (a1, a2) => {
    if (!Array.isArray(a1) || !Array.isArray(a2)) {
        throw new Error('Input must be an array.');
    }

    if (a1.length === 0 || a2.length === 0) {
        return [];
    }

    const set = new Set(a1);

    return [...new Set(a2.filter((n) => set.has(n)))];
};

console.log(
    arrayIntersection(
        [22, 41, 2, 3, 4, 5, 6],
        [123, 3421, 42123, 44, 31, 22, 2, 6, 41]
    )
);
console.log(arrayIntersection([1, 2, 3], [3, 4, 2])); 
console.log(arrayIntersection([1, 2, 2, 3], [2, 3, 3, 4])); 
console.log(arrayIntersection([], [1, 2, 3])); 
console.log(arrayIntersection([1, 2, 3], [])); 
