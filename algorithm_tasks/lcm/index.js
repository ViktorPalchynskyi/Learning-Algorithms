const { gcd } = require('../gcd/index.js');

const lcm = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }

    return Math.abs(a * b) / gcd(a, b);
};

console.log(lcm(12, 18));
console.log(lcm(4, 5));
console.log(lcm(3, 7));
console.log(lcm(0, 5));
console.log(lcm(-6, 9));
