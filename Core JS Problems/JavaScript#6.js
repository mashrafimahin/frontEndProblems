//! Problem: Implement reduce()

//! Rule:
//? Do NOT use built-in reduce
//? Do NOT use libraries
//? Do NOT modify native prototype yet
//? Use plain loops
//? Support callback arguments

//! Solution
function myReduce(arr, callback, initialValue) {
  // default array
  let acc = initialValue;
  // loop
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  // return
  return acc;
}

//! Input
const arr = [1, 2, 3];

//! Expected Output
// myReduce([1,2,3], (acc, cur) => acc + cur, 0)
// → 6

///! Function Calls
console.log(myReduce(arr, (acc, curr) => acc + curr, 0));
