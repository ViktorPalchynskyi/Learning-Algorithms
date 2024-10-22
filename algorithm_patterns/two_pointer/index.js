function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const leftNumber = numbers[left];
        const rightNumber = numbers[right];
        const sum = leftNumber + rightNumber;

        if (sum === target) {
            return [leftNumber, rightNumber];
        }

        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));


function removeDuplicates(nums) {
    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    return uniqueIndex + 1;
}


const nums = [1, 1, 2];
console.log(removeDuplicates(nums));  // Выведет: 2
console.log(nums);  