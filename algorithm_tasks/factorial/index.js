const factorial = (numb) => {
    if (!Number.isInteger(numb) || numb < 0)
        throw new Error('Imput must be a non-negative integer.');

    if (numb === 0) return 1;

    return numb * factorial(numb - 1);
};

console.log(factorial(5));
