const isPowerOfTwo = (n) => {
    if (!Number.isInteger(n) && n <= 0) return false;

    return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2)); 
console.log(isPowerOfTwo(3)); 
console.log(isPowerOfTwo(4)); 
console.log(isPowerOfTwo(16)); 
console.log(isPowerOfTwo(18)); 
