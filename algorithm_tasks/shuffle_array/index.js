const shuffleArray = (a) => {
    if (!Array.isArray(a)) {
        throw new Error('Input must be an array.');
    }

    for (let i = a.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [a[i], a[randomIndex]] = [a[randomIndex], a[i]];
    }

    return a;
};

const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr)); 

