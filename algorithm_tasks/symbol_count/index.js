const symbolCount = (string) => {
    if (string === null || string === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }

    if (typeof string !== 'string') {
        throw Error('Input must be a string.');
    }

    if (string.length === 0) {
        return {};
    }

    const counter = {};

    for (const s of string) {
        counter[s] = (counter[s] ?? 0) + 1;
    }

    return counter;
};

console.log(symbolCount('Alabama'));
console.log(symbolCount('Chiki-Briki'));
