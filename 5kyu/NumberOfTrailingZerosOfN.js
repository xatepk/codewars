// DESCRIPTION:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

function zeros(n) {
    let degree = 1;
    let count = 0;
    while(n/Math.pow(5, degree) >= 1) {
      count+= Math.floor(n/Math.pow(5, degree));
      degree++;
    }
   return count;
}