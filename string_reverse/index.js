const stringReverse = (string) => {
    if (typeof string !== 'string') {
        throw Error('Input must be a string.');
    }

    if (string.length === 0) {
        return string;
    }

    return [...string].reverse().join('');
};

console.log(stringReverse('Hello, there!'));
console.log(stringReverse('I am a robot.'));
// console.log(stringReverse());