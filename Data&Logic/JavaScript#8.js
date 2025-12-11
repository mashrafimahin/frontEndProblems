//! Problem: The Problem
//? You receive corrupted user registration data from an outdated legacy system.

//? Tasks-:
//? 1️⃣ Normalize name
//? 2️⃣ Validate & clean email
//? 3️⃣ Fix age (invalid → return null)
//? 4️⃣ Clean skills list
//? 5️⃣ Clean address object
//? 6️⃣ Provide a final clean array
//? 7️⃣ Ignore completely broken records

//! Solution
function UpdateData(param) {
  //? email validator regex
  const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //? final output
  return param.map((elm) => {
    //* name
    const newName = elm.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    //* email
    const convertedMail = elm.email.trim().toLowerCase().replace(/\s+/, "");
    const newMail = convertedMail.match(emailValidator) ? convertedMail : null;
    //* age
    const newAge = Number(elm.age.trim()) || null;
    //* skills
    const newSkills = elm.skills
      .trim()
      .replace(/\s+/g, "")
      .split(",")
      .filter(
        (item, index, currentArray) => currentArray.indexOf(item) === index
      );
    //* address
    const newCity = elm.address !== null ? elm.address.city.trim() : null;
    const newZip = elm.address !== null ? elm.address.zip.trim() : null;
    const newAddress =
      (newCity || newZip !== null) && (newCity || newZip !== "")
        ? {
            city: newCity,
            zip: newZip,
          }
        : null;
    //* output
    return {
      name: newName,
      email: newMail,
      age: newAge,
      skills: newSkills,
      address: newAddress,
    };
  });
}

//! Input
const legacyUsers = [
  {
    name: "  mahin AHMED",
    email: " Mahin@GMail .com ",
    age: "20",
    skills: "js, react,  JS ,node",
    address: { city: " Dhaka ", zip: "1200 " },
  },
  {
    name: "  SARA    khan ",
    email: " invalid-email@com ",
    age: " nineteen ",
    skills: "music, coding, music",
    address: { city: "   ", zip: "" },
  },
  {
    name: "john  DOE",
    email: "john@example.com",
    age: "25",
    skills: "travel,travel, coding ,coding ",
    address: null,
  },
];

//! Function call
UpdateData(legacyUsers);
