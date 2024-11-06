var removeDuplicates = function (nums) {
    let k = 0;
    const count = {};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;

        if (count[nums[i]] <= 2) {
            nums[k] = nums[i];
            k++;
        }
    }

    console.log(nums);
    

    return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
// console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
