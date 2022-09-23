// An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

// Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

function zeroPlentiful(arr){
    let count = 0;
     let len = 0;
     for (let e of arr) {
         if (e === 0) {
             ++len;
         }
         else if (len) {
             if (len < 4)
                 return 0;
             else {
                 len = 0;
                 ++count;
             }
         }
     }
     if (len) {
         if (len < 4)
             return 0;
         else {
             ++count;
         }
     }
     return count;
 }