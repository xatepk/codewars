// Description:
// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or

// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Return the result in the form:

// [N, D] in Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia, Pascal
// Just "N D" in Haskell, PureScript
// "[N, D]" in Java, CSharp, TS, Scala, PowerShell, Kotlin
// "N/D" in Go, Nim
// {N, D} in C, C++, Elixir, Lua
// Some((N, D)) in Rust
// Some "N D" in F#, Ocaml
// c(N, D) in R
// (N, D) in Swift
// '(N D) in Racket
// If the result is an integer (D evenly divides N) return:

// an integer in Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia
// Just "n" (Haskell, PureScript)
// "n" Java, CSharp, TS, Scala, PowerShell, Go, Nim, Kotlin
// {n, 1} in C, C++, Lua
// Some((n, 1)) in Rust
// Some "n" in F#, Ocaml,
// (n, 1) in Swift
// n in Racket
// (n, 1) in Pascal
// If the input list is empty, return

// nil/None/null/Nothing
// {0, 1} in C, C++, Lua
// "0" in Scala, PowerShell, Go, Nim
// O in Racket
// "" in Kotlin
// [0, 1] in C++
// Example:
// [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]
// 1/2  +  1/3  +  1/4     =      13/12
// Note
// See sample tests for more examples and form of results.

function sumFracts(l) {
    if (Array.isArray(l[0])) {
      let n = l.length,
          a = Math.abs(l[0][1]);
      for (let i = 1; i < n; i++) {
          let b = Math.abs(l[i][1]),
              c = a;
          while (a && b) {
              a > b ? a %= b : b %= a;
          }
          a = Math.abs(c * l[i][1]) / (a + b);
      }
    let result = l.reduce(function(x,y) { 
      return x+a/y[1]*y[0]}, 0);
    
    function reduce(numer,denomin){
  
    var gcd = function gcd(a,b){
  
      return b ? gcd(b, a%b) : a;
  
    };
  
    gcd = gcd(numer,denomin);
  
    return [numer/gcd, denomin/gcd];
  
  }
    
    
      return result % a ? reduce(result,a) : result / a;
    } else {
      return null;
    }
     
  }