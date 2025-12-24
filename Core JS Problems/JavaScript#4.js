//! Problem: Implement map()

//! Rule:
//? Do NOT use built-in map
//? Do NOT use libraries
//? Do NOT modify native prototype yet
//? Use plain loops
//? Support callback arguments

//! Solution
function myMap(arr, callback) {
  // default array
  let myArr = [];
  // loop
  for (let i = 0; i < arr.length; i++) {
    myArr.push(callback(arr[i], i, arr));
  }
  // return
  return myArr;
}

//! Input
const arr = [1, 2, 3];
const value = 2;

//! Expected Output
// myMap([1,2,3], (x) => x * 2)
// → [2,4,6]

///! Function Calls
myMap(arr, (x) => x * value);
