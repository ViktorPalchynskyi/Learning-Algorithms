const secondMaxVal = (a) => {
    if (!Array.isArray(a)) {
        throw new Error('Input must be an array.');
    }

    if (a.length < 2) {
        throw new Error('Array must contain at least two elements.');
    }

    const maxVal = Math.max(...a);
    const filteredArray = a.filter((n) => n !== maxVal);

    if (filteredArray.length === 0) {
        throw new Error('All elements in the array are the same.');
    }

    return Math.max(...filteredArray);
};

console.log(secondMaxVal([1, 2, 3, 40, 10, 22, 12]));
console.log(secondMaxVal([10, 20, 30]));
console.log(secondMaxVal([5, 5, 5]));
console.log(secondMaxVal([2]));
