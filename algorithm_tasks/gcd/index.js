const gcd = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }

    if (b === 0) return Math.abs(a);

    return gcd(b, a % b);
};

// console.log(gcd(48, 18));
// console.log(gcd(56, 98));
// console.log(gcd(101, 10));
// console.log(gcd(0, 5));
// console.log(gcd(-36, 60));

module.exports = { gcd };
