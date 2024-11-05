const arr = [1, 1, 2];

var removeDuplicates = function (nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    nums.length = k;

    return k;
};

console.log(removeDuplicates(arr));

console.log(arr);
