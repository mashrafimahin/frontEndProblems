//! Problem: Paginated API Merge + Analytics

//! Tasks:
//? 1️⃣ Merge all pages into a single dataset (page1 + page2 + page3)
//? 2️⃣ Clean each user
//?     id → trim
//?     name → Title Case
//?     age → convert to number, invalid age → null
//?     score → convert to number, missing → 0
//? 3️⃣ Add Grade
//?     Score Range	Grade
//?         90–100	"A"
//?         80–89	"B"
//?         70–79	"C"
//?         60–69	"D"
//?         < 60	"F"
//? 4️⃣ Final Output Sorted
//?     Sort by:
//?         Highest score
//?         If tie → alphabetically by name

//! Solution
const GenerateGrade = (value) => {
  if (value <= 100 && value >= 90) return "A";
  else if (value <= 89 && value >= 80) return "B";
  else if (value <= 79 && value >= 70) return "C";
  else if (value <= 69 && value >= 60) return "D";
  else if (value < 60) return "F";
};

const CleanUsers = (page1, page2, page3) => {
  // merge inside new array
  const merge = [...page1, ...page2, ...page3];
  // edit each object inside array
  const newObj = merge.map((elm) => {
    // id
    const newId = elm.id.trim();
    // name
    const newName = elm.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    // age
    const currentAge = elm.age.trim();
    const newAge = currentAge !== "" ? Number(currentAge) : null;
    // score
    const currentScore = elm.score.trim();
    const newScore = currentScore !== "" ? Number(currentScore) : 0;
    // return new obj
    return {
      id: newId,
      name: newName,
      age: newAge,
      score: newScore,
      grade: GenerateGrade(newScore),
    };
  });
  // return new sorted array
  return newObj.sort((a, b) => {
    if (a.score === b.score) {
      return a.name.localeCompare(b.name);
    }
    return b.score - a.score;
  });
};

//! Inputs
const one = [
  { id: " 01 ", name: "   mahin   AHMED ", age: "20", score: " 89 " },
  { id: " 02 ", name: " SARA   khan", age: "19", score: "  92" },
];
const two = [{ id: "03", name: " JOHN   doe ", age: " 21 ", score: " 75 " }];
const three = [
  { id: " 04", name: "    emma WATSON ", age: "  20  ", score: " " },
];

//! Function Call
CleanUsers(one, two, three);
