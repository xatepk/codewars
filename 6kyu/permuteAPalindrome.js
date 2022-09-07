// DESCRIPTION:
// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// Example
// madam -> True
// adamm -> True
// junk -> False



function permuteAPalindrome (str) { 
    const counters = {};
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
        counters[char] = counters[char] ? counters[char] + 1 : 1;
    }
    
    let foundOdd = false;
    let isMaxOneOdd = true;
  
    Object.keys(counters).forEach((char) => {
      if (counters[char] % 2 === 1) {
        if (foundOdd) {
          isMaxOneOdd = false;
        }
        foundOdd = true;
      }
    });
    return isMaxOneOdd;
    
  }