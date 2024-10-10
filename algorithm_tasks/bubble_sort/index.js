const bubbleSort = (a) => {
    if (!Array.isArray(a))
        throw new Error('Argument must be an array.');

    if (a.length === 0) return [];

    const n = a.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return a;
};

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); 
console.log(bubbleSort([5, 3, 8, 4, 2])); 
console.log(bubbleSort([1])); 
