const fibonachi = (numb) => {
    if (!Number.isInteger(numb) || numb < 0)
        throw new Error('Imput must be a non-negative integer.');

    if (numb === 0) return 0;

    if (numb === 1) return 1;

    return fibonachi(numb - 1) + fibonachi(numb - 2);
};
console.log(fibonachi(0)); 
console.log(fibonachi(1)); 
console.log(fibonachi(5)); 
console.log(fibonachi(10)); 
