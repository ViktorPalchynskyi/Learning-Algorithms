const findPermutations = (s) => {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string.');
    }

    if (s.length === 1) {
        return [s];
    }

    const permutations = [];

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i + 1);
        const remainingPermutations =
            findPermutations(remainingChars);

        for (const p of remainingPermutations) {
            permutations.push(currentChar + p);
        }
    }
    console.log(permutations);
    

    return permutations;
};

console.log(findPermutations('ABC'));
// console.log(findPermutations("AB"));
// console.log(findPermutations("A"));
