//! Problem: Capitalize the First Letter of Each Word
const value = "hello world from mahin";
//? expected output: "Hello World From Mahin"

//* solution
const Solve = (param) => {
  // error handling
  if (!param) return;

  // capitalize part
  const removeSpace = param.trim();
  const SliceIntoParts = removeSpace.split(/\s+/);
  const Capitalize = SliceIntoParts.map(
    (elm) => elm[0].toUpperCase() + elm.slice(1)
  );
  return Capitalize.join(" ");
};

// function call
Solve(value);
// test case success!
