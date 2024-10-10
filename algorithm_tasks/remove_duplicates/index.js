const removeDuplicates = (arr) => {
    if (!Array.isArray(arr))
        throw new Error('Argument must be an array.');

    if (arr.length === 0) return [];

    return Array.from(new Set(arr));
};

console.log(removeDuplicates([12, 42, 22, 22, 10, 10]));
