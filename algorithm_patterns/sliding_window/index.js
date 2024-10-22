function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }
    console.log('start', currentSum);

    maxSum = currentSum;

    for (let i = k; i < arr.length; i++) {
        // console.log('arr[i] - arr[i - k]',arr[i], arr[i - k]);
        console.log('sum', currentSum);

        currentSum += arr[i] - arr[i - k];

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
// console.log(maxSumSubarray(arr, k));

function longestUniqueSubstring(s) {
    let maxLength = 0;
    let windowStart = 0;
    const charIndex = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (charIndex.has(char)) {
            windowStart = Math.max(
                windowStart,
                charIndex.get(char) + 1
            );

            console.log('windowStart', windowStart);
        }

        charIndex.set(char, i);
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

let s = 'abczabczv';
// console.log(longestUniqueSubstring(s));

function findMaxSum(arr, number) {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum >= number) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// console.log(findMaxSum([2, 3, 1, 2, 4, 3], 7));

function totalFruit(tree) {
    let start = 0;
    let maxFruit = 0;
    const fruitCounter = new Map();

    for (let end = 0; end < tree.length; end++) {
        const fruit = tree[end];
        fruitCounter.set(fruit, (fruitCounter.get(fruit) ?? 0) + 1);

        while (fruitCounter.size > 2) {
            const startFruit = tree[start];
            fruitCounter.set(startFruit, fruitCounter.get(startFruit) - 1);

            if (fruitCounter.get(startFruit) === 0) {
                fruitCounter.delete(startFruit)
            }

            start
        }

        maxFruit = Math.max(maxFruit, end - start + 1);
    }

    return maxFruit;
}

let fruits = [1, 2, 1, 2, 3, 2, 2];
console.log(totalFruit(fruits));
