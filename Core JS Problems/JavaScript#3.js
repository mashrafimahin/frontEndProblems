//! Problem: Flatten Deeply Nested Array with Controller

//! Rules:
//? Flattening nested arrays in JavaScript with control variables—such as
//? specific depth, type checking, or conditional logic—is best achieved
//? using recursion or the built-in Array.prototype.flat() method for depth control.

//! Solution
const flat = (arr, n) => {
  return arr.reduce((acc, curr) => {
    // checkpoint
    if (Array.isArray(curr) && n > 0) {
      // push spread values inside accumulator
      acc.push(...flat(curr, n - 1));
    } else {
      // push primitive values
      acc.push(curr);
    }
    // return accumulator
    return acc;
  }, []);
};

//! Input
const arr = [1, [2, 3], 4, 5, [6, [7], 8], [9]];
const deep = 1;

//! Function Call
console.log(flat(arr, deep));
