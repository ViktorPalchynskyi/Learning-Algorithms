const isPalindrome = (string) => {
    if (typeof string !== 'string') {
        throw Error('Input must be a string.');
    }

    if (string.length === 0) {
        return true;
    }

    if (string === null || string === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }

    const cleanedStr = string.toLowerCase().replace(/[\W_]/gu, '');

    return [...cleanedStr].reverse().join('') === cleanedStr;
};

console.log(getPalingrom('Mom'));
console.log(getPalingrom(',, , , , ,,dad -------'));
console.log(getPalingrom('Motor'));