//! Problem: Normalize and Sanitize User Form Submissions

//? You are building a frontend for a signup form
//? A server receives user data in a very messy, inconsistent format.

//? 🎯 Task
//? ✔ Clean fullName
//? ✔ Clean email
//? ✔ Clean interests
//? ✔ Convert age to number

//! solution
const RefinedObject = (obj) => {
  // map object through each item
  return obj.map((elm) => {
    // 1. name edit
    const trimmedName = elm.fullName.trim().split(/\s+/);
    const newNameArray = trimmedName.map(
      (item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
    );
    const newName = newNameArray.join(" ");
    // 2. email edit
    const newMail = elm.email.trim().toLowerCase();
    // 3. interests edit
    const newInterests = elm.interests
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .split(/,/);
    // 4. age edit
    const newAge = Number(elm.age.trim());
    // 5. return new object
    return {
      fullName: newName,
      email: newMail,
      interests: newInterests,
      age: newAge,
    };
  });
};

//! input
const submissions = [
  {
    fullName: "   mahin    ahmed ",
    email: "  MAHIN@GMAIL.com   ",
    interests: " coding,  Music ,travel ",
    age: "20 ",
  },
  {
    fullName: " SARA khan",
    email: " SARA@Yahoo.COM",
    interests: "  MUSIC, Coding",
    age: " 19",
  },
  {
    fullName: "john  doe ",
    email: " JOHN@GMAIL.com  ",
    interests: "travel,travel , coding ",
    age: "  22 ",
  },
];

//! function call
RefinedObject(submissions);
