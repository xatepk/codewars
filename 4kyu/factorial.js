// DESCRIPTION:
// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

const scale = (n, f) => {
    let carry = 0;
    let j = 0;
    while (carry > 0 || j < n.length) {
        const p = carry + ((j < n.length) ? f * n[j] : 0);
        n[j] = p % 10;
        carry = Math.floor(p / 10); 
        j += 1;
    }
};

const factorial = n => {
    const f = [1];
    for (let i = 2; i <= n; ++i) {
        scale(f, i);
    }
    return f.reverse().join('');
};