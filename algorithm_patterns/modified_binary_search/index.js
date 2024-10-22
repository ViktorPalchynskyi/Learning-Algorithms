function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target >= nums[right] && target < nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Пример использования
// let nums = [4, 5, 6, 7, 0, 1, 2];
// let target = 0;
// console.log(search(nums, target)); // Выведет: 4

// target = 3;
// console.log(search(nums, target)); // Выведет: -1

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    if (nums[left] < nums[right]) {
        return nums[left];
    }

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

// let nums = [4, 5, 6, 7, 0, 1, 2];
// console.log(findMin(nums)); // Выведет: 0

// nums = [3, 4, 5, 1, 2];
// console.log(findMin(nums));

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Пример использования
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 6;
console.log(binarySearch(nums, target));  // Выведет: 5

target = 0;
console.log(binarySearch(nums, target));  // Выведет: -1