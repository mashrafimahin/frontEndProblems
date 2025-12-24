//! Problem: Reverse Index Mapping
//* ------------------------------------------------------ *//
//! Problem Statement
//?   > You are given an array of unique strings.
//?   > Your task is to return an object where:
//?   > Each key is the array value
//?   > Each value is the index from the end

//! Rules (Interview Rules)
//?   > Do NOT reverse the array
//?   > Do NOT use Object.fromEntries
//?   > Use clean logic
//?   > Time complexity should be O(n)

//! Hints (Not the Solution)
//?   > The last element always maps to 0
//?   > The first element maps to array.length - 1
//?   > Think: reverseIndex = length - 1 - currentIndex

//! Solution
const newArray = (arr) => {
  // default empty object
  let obj = {};
  const currentLength = arr.length - 1;
  // checkpoint
  if (!arr) return null;
  // loop
  for (let i = arr.length - 1; i >= 0; i--) {
    // check for duplicate
    if (!obj[arr[currentLength - i]]) {
      // add key value pair inside object
      obj[arr[currentLength - i]] = i;
    }
  }
  // print result
  return obj;
};

//! Input
const input = ["a", "b", "c", "d"];

//! Expected Output
// {
//   a: 3,
//   b: 2,
//   c: 1,
//   d: 0
// }

//! Function Call
newArray(input);
