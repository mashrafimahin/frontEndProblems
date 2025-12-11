//! Problem: Deep API Transformation + Conditional Logic
//? A job platform API returns messy applicant data. Your task is to transform it into a clean, interview-ready structure.

//? Tasks:
//? 1️⃣ Normalize applicant names
//? 2️⃣ Validate & clean email ** If invalid → return "invalid"
//? 3️⃣ Fix skills
//? 4️⃣ Work Experience ** If NaN → return 0
//? 5️⃣ Determine seniority level
//!     Create a new field:
//*         > if experience < 1 → "intern"
//*         > if experience 1–2 → "junior"
//*         > if experience 3–5 → "mid"
//*         > if experience > 5 → "senior"
//? 6️⃣ Ignore completely corrupted entries

//! Solution
const LevelGenerator = (value) => {
  // conditions
  if (value < 1) return "intern";
  else if (value >= 1 && value <= 2) return "junior";
  else if (value >= 3 && value <= 5) return "mid";
  else return "senior";
};

const RefineData = (param) => {
  // email regex validator
  const emailValidator = /^[a-zA-Z0-9.@&]+@[a-zA-Z0-9.@&]+\.[a-zA-Z0-9]{2,}/;
  // filtering
  const filteredArray = param.filter((elm) => elm.name !== " ");
  // return new object
  return filteredArray.map((elm) => {
    // name
    const newName = elm.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    // email
    const currentMail = elm.email.trim().toLowerCase();
    const newEmail = currentMail.match(emailValidator)
      ? currentMail
      : "invalid";
    // skills
    const newSkills = elm.skills
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .split(",")
      .filter(
        (currentItem, index, splittedArray) =>
          splittedArray.indexOf(currentItem) === index
      );
    // experience
    const exp = elm.totalExperience.trim();
    const newExp = isNaN(exp) ? 0 : Number(exp);
    // return refined object
    return {
      name: newName,
      email: newEmail,
      skills: newSkills,
      experience: newExp,
      level: LevelGenerator(newExp),
    };
  });
};

//! Inputs
const applicants = [
  {
    name: "   mahin   ahmed ",
    email: "  MAHIN@GMAIL.com   ",
    skills: " js, react , JS , node ",
    totalExperience: "2",
  },
  {
    name: "  sara    KHAN ",
    email: "invalid-email@com",
    skills: "  MUSIC, coding , music ",
    totalExperience: " six ",
  },
  {
    name: " ",
    email: " ",
    skills: "coding",
    totalExperience: "1",
  },
  {
    name: "john   DOE",
    email: " john@example.com ",
    skills: "travel,travel, coding ,coding ",
    totalExperience: "5",
  },
];

//! Funcion call
console.log(RefineData(applicants));
