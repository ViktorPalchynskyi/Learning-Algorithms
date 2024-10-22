function subsets(nums) {
    const res = [];

    function backtack(start, currentSubset) {
        res.push([...currentSubset]);

        for (let i = start; i < nums.length; i++) {
            currentSubset.push(nums[i]);
            backtack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    backtack(0, []);
    return res;
}

let nums = [1, 2, 2];
console.log(subsets(nums));

function findSubsetsThatSumToTarget(nums, target) {
    const res = [];

    function backtack(start, currentSubset, currentSum) {
        if (currentSum === target) {
            res.push([...currentSubset]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            const loopSum = currentSum + nums[i];

            if (loopSum > target) continue;

            currentSubset.push(nums[i]);
            backtack(i, currentSubset, loopSum);
            currentSubset.pop();
        }
    }

    backtack(0, [], 0);
    return res;
}

// let nums = [2, 3, 6, 7];
// let target = 7;
// console.log(findSubsetsThatSumToTarget(nums, target));
