const findUniqueSymbol = (s) => {
    if (typeof s !== 'string') {
        throw Error('Input must be a string.');
    }

    if (s.length === 0) {
        return false;
    }

    const charCount = {};

    for (const c of s) {
        charCount[c] = (charCount[c] ?? 0) + 1;
    }

    for (const c of s) {
        if (charCount[c] === 1) {
            return c;
        }
    }

    return false;
}

console.log(findUniqueSymbol('Chiki-Briki'));
console.log(findUniqueSymbol('V damki'));
console.log(findUniqueSymbol('alabamalabamaZ'));