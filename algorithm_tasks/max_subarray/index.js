const maxSubArray = (a) => {
    if (!Array.isArray(a)) {
        throw new Error('Input must be an array.');
    }

    if (a.length === 0) {
        throw new Error('Array cannot be empty.');
    }

    let maxCurrent = 0;
    let maxGlobal = 0;

    for (let i = 0; i < a.length; i++) {
        maxCurrent = Math.max(a[i], maxCurrent + a[i]);

        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2, 3, 4, 5]));
console.log(maxSubArray([-1, -2, -3, -4]));
