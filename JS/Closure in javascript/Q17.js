
function slowSquare(n) {
  console.log("Heavy computation for:", n);
  return n * n;
}


const memoizedSquare = memoize(slowSquare, 3);

console.log(memoizedSquare(4)); 
console.log(memoizedSquare(4)); 
console.log(memoizedSquare(5)); 
console.log(memoizedSquare(6)); 
console.log(memoizedSquare(7)); 
console.log(memoizedSquare(4)); 
