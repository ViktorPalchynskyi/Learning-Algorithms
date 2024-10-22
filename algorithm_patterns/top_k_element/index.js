class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Добавляем элемент в кучу
    add(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    // Удаляем минимальный элемент (корень)
    removeMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    // Всплываем элемент вверх для сохранения свойства кучи
    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element >= parent) break;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }

    // Опускаем элемент вниз для сохранения свойства кучи
    sinkDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild < element) swap = leftChildIdx;
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = element;
    }

    // Получаем минимальный элемент (корень)
    min() {
        return this.heap[0];
    }
}

function findTopKElements(nums, K) {
    const minHeap = new MinHeap();

    // Добавляем первые K элементов в кучу
    for (let i = 0; i < K; i++) {
        minHeap.add(nums[i]);
    }

    // Проходим по оставшимся элементам массива
    for (let i = K; i < nums.length; i++) {
        if (nums[i] > minHeap.min()) {
            minHeap.removeMin();
            minHeap.add(nums[i]);
        }
    }

    // Возвращаем содержимое кучи как топ K элементов
    return minHeap.heap;
}

// Пример использования
let nums = [3, 2, 1, 5, 6, 4];
let K = 2;
console.log(findTopKElements(nums, K)); // Выведет: [5, 6]

nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
K = 4;
console.log(findTopKElements(nums, K)); // Выведет: [4, 5, 5, 6]

// function findTopKElements(nums, K) {
//     return nums.sort((a, b) => b - a).slice(0, K);
// }

// let nums = [3, 2, 1, 5, 6, 4];
// let K = 2;
// console.log(findTopKElements(nums, K));
