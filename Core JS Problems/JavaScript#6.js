//! Problem: Implement reduce()

//! Rule:
//? Do NOT use built-in reduce
//? Do NOT use libraries
//? Do NOT modify native prototype yet
//? Use plain loops
//? Support callback arguments

//! Solution
function myReduce(arr) {
  // default array
  let result = 0;
  // loop
  for (const elm of arr) {
    result += elm;
  }
  // return
  return result;
}

//! Input
const arr = [1, 2, 3];

//! Expected Output
// myReduce([1,2,3], (acc, cur) => acc + cur, 0)
// → 6

///! Function Calls
myReduce(arr);
