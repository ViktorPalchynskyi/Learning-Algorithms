const romanToArabic = (s) => {
    if (typeof s !== 'string') {
        throw Error('Input must be a string.');
    }

    if (s.length === 0) {
        return 0;
    }

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const curVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        if (nextVal && curVal < nextVal) {
            res -= curVal;
        } else {
            res += curVal;
        }
    }

    return res;
};

console.log(romanToArabic('III')); // 3
console.log(romanToArabic('IV')); // 4
console.log(romanToArabic('IX')); // 9
console.log(romanToArabic('LVIII')); // 58
console.log(romanToArabic('MCMXCIV')); // 1994
