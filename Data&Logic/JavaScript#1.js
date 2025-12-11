//! Problem: Capitalize the First Letter of Each Word
//? Given a string, return a new string where the first letter of each word is capitalized.
//? Words are separated by one or more spaces. Trim any leading or trailing spaces.
//* Example: "hello world from mahin" -> "Hello World From Mahin"

// solution
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

// input
const value = "hello world from mahin";
// expected output: "Hello World From Mahin"

// function call
Solve(value);
