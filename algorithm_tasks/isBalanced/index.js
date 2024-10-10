const isBalanced = (str) => {
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }

    if (typeof str !== 'string') {
        throw Error('Input must be a string.');
    }

    if (str.length === 0) {
        return true;
    }

    const stack = [];
    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (const c of str) {
        if (bracketMap[c]) stack.push(c);

        if (Object.values(bracketMap).includes(c)) {
            if (stack.length === 0) return false;

            const topElement = stack.pop();

            if (bracketMap[topElement] !== c) return false;
        }
    }

    return stack.length === 0;
};

console.log(isBalanced("(Nani????)")); 
console.log(isBalanced("({[]})")); 
console.log(isBalanced("{(})")); 
console.log(isBalanced("[(])")); 
console.log(isBalanced("")); 