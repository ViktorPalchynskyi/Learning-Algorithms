const mediana = (a) => {
    if (!Array.isArray(a)) {
        throw new Error('Input must be an array.');
    }

    if (a.length === 0) {
        throw new Error('Array cannot be empty.');
    }

    const sorted = [...a].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid] + sorted[mid - 1]) / 2;
    }

    return sorted[mid];
};

console.log(mediana([3, 1, 2])); // 2 (нечётное число элементов)
console.log(mediana([3, 1, 2, 4])); // 2.5 (чётное число элементов)
console.log(mediana([10, 5, 6, 7, 8, 9])); // 7.5 (чётное число элементов)
console.log(mediana([1])); // 1 (единственный элемент)
