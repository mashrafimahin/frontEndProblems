//! Problem: Clean Corrupted API Response
//? You're receiving user data from an API, but the data is messy and inconsistent.

//? Tasks:
//? 1️⃣ Fix names
//? 2️⃣ Fix ages
//? 3️⃣ Fix phone numbers
//? 4️⃣ Fix hobbies
//? 5️⃣ Return a clean array of objects

//! Solution
const CleanResponse = (obj) => {
  return obj.map((elm) => {
    // name edit
    const newName = elm.name
      .trim()
      .split(/\s+/)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    // age edit
    const newAge = Number(elm?.age.trim() ?? 0);
    // edit number
    const newNumber = elm.phone
      ? elm.phone.trim().split(/\s+/g).join("")
      : "N/A";
    // edit interest
    const newInterest = elm.hobbies
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .split(/,/)
      .filter(
        (value, index, arr) => arr.indexOf(value) === index && value !== ""
      );
    // return new object
    return {
      name: newName,
      age: newAge,
      phone: newNumber,
      hobbies: newInterest,
    };
  });
};

//! Inputs
const apiUsers = [
  {
    name: "   mahin   ahmed ",
    age: "20",
    phone: " 017 55 44  321 ",
    hobbies: "coding, music, travel",
  },
  {
    name: "  SARA    KHAN ",
    age: " 19 ",
    phone: null,
    hobbies: " Music, Coding ,  ",
  },
  {
    name: "john  doe",
    age: "",
    phone: " 015 888 33",
    hobbies: "travel,travel , coding",
  },
];

//! Function call
CleanResponse(apiUsers);
