//! Problem: Implement filter()

//! Rule:
//? Do NOT use built-in filter
//? Do NOT use libraries
//? Do NOT modify native prototype yet
//? Use plain loops
//? Support callback arguments

//! Solution
function myFilter(arr, value = 1) {
  // default array
  let myArr = [];
  // loop
  for (const elm of arr) {
    // checkpoint
    if (elm % value === 0) {
      myArr.push(elm);
    }
  }
  // return
  return myArr;
}

//! Input
const arr = [1, 2, 3, 4];
const value = 2;

//! Expected Output
// myFilter([1,2,3,4], (x) => x % 2 === 0)
// → [2,4]

///! Function Calls
myFilter(arr, value);
