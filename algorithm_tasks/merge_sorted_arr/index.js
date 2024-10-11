const mergeSortedArrays = (a1, a2) => {
    if (!Array.isArray(a1) || !Array.isArray(a2)) {
        throw new Error('Input must be an array.');
    }

    let i = 0;
    let j = 0;
    const res = [];

    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            res.push(a1[i]);
            i++;
        } else {
            res.push(a2[j]);
            j++;
        }
    }

    while (i < a1.length) {
        res.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        res.push(a2[j]);
        j++;
    }

    return res;
};

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2));
