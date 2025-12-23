//! Problem: Deep Flatten an Array

//? Problem Statement
//? --------------------
//? You are given a deeply nested array.
//? Flatten it into a single-level array, without using flat(Infinity).

//! Solution
const flatArray = (value) => {
  return value.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatArray(curr) : curr);
  }, []);
};

//! Inputs
const input = [1, [2, [3, [4, 5]], 6], 7];

//! Expected Output
// [1, 2, 3, 4, 5, 6, 7]

//! Function Calls
console.log(flatArray(input));
