//! Problem: Clean Up and Transform User Data
const users = [
  { name: "mahin ", age: " 20", role: " student" },
  { name: "   SARA", age: "19 ", role: "Developer " },
  { name: "john", age: "  22", role: " Student" },
];

//? expected output:
// [
//   { name: "Mahin", age: 20, role: "student" },
//   { name: "Sara", age: 19, role: "developer" },
//   { name: "John", age: 22, role: "student" }
// ]

//* solution
const Solve = (param) => {
  // checkpoint
  if (!param) return [];

  // if parameter exists
  const newArray = param.map((elm) => {
    // name edit
    const RefineName = elm.name.trim();
    const nameToUpperCase =
      RefineName[0].toUpperCase() + RefineName.slice(1).toLowerCase();
    // push data to new array called result
    return {
      name: nameToUpperCase,
      age: Number(elm.age),
      role: elm.role.trim().toLowerCase(),
    };
  });

  // return final statement
  return newArray.sort((a, b) => a.age - b.age);
};

// function call
Solve(users);
// test case success!
