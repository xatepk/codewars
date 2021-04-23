// Description:
// You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

// As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

// Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

function countAdjacentPairs(searchString) {
    let count = 0;
    let str = searchString.replace(/ +/g, ' ').trim().toLowerCase().split(' ');
    
    let i=1;
    while (i < str.length) {
      if (str[i] === str[i-1]) {
        count+=1;
        i+=1;
        while (str[i] === str[i-1]) {
          i+=1;
        } 
      } else {
      i+=1;
    } 
    }
    return count;
  
  }