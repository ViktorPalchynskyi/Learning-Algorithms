const longestConsecutiveSequence = (a) => {
    if (!Array.isArray(a)) {
        throw new Error('Input must be an array.');
    }

    if (a.length === 0) {
        return 0;
    }

    const set = new Set(a);
    let maxLength = 0;

    for (const n of set) {
        if (!set.has(n - 1)) {
            let curNum = n;
            let curLength = 1;

            while (set.has(curNum + 1)) {
                curNum++;
                curLength++;
            }

            maxLength = Math.max(maxLength, curLength);
        }
    }

    return maxLength;
};


console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([0, 9, 1, 3, 2, 8, 4, 7, 6, 5]));
console.log(longestConsecutiveSequence([5, 5, 5]));
