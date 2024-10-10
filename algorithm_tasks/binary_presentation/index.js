const binaryPresentation = (n) => {
    if (typeof n !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }

    return n.toString(2);
};

console.log(binaryPresentation(19));
console.log(binaryPresentation(129));
console.log(binaryPresentation(0));
