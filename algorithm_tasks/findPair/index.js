const findPair = (arr, target) => {
    if (!Array.isArray(arr))
        throw new Error('Argument must be an array.');

    if (arr.length === 0) return [];

    const res = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const complement = target - element;

        if (seen.has(complement)) {
            res.push([complement, element]);
        }

        seen.add(element);
    }

    return res;
};

console.log(findPair([10, 20, 30, 40, 50, 60, 30, 0], 60));
