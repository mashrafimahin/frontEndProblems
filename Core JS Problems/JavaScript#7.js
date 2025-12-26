//! Problem: Deep Clone

//! Task:
//? 1. Deep clone it
//? 2. Change scores[0]
//? 3. Original must NOT change

//! Solution
const deepClone = (value) => {
  // structured function
  const strFun = (param) => {
    return JSON.parse(JSON.stringify(param));
  };

  //? clone obj following data types
  // Primitive value
  if (typeof value !== "object" && value !== null) {
    return value;
  }

  // Array or Object
  if (Array.isArray(value) || typeof value === "object") {
    return strFun(value);
  }
};

//! Input
const obj = {
  id: 1,
  info: {
    name: "Mahin",
    scores: [90, 80, 70],
  },
};

//! Function Call
const cloneObj = deepClone(obj);
// change the array inside value
cloneObj.info.scores[0] = 0;
