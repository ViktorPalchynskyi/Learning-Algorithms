const sentenceReverse = (string) => {
    if (string === null || string === undefined) {
        throw new Error('Input cannot be null or undefined.');
    }

    if (typeof string !== 'string') {
        throw Error('Input must be a string.');
    }

    if (string.length === 0) {
        return '';
    }

    return string.split(' ').reverse().join('');
};

console.log(sentenceReverse('Hello, there!'));
console.log(sentenceReverse('I am a robot.'));
