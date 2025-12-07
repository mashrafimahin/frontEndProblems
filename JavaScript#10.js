//! Problem: Multi-Source API Merge + Conflict Handling
//? You are building a dashboard that receives two different API responses:
//?     > User basic info API
//?     > User activity stats API
//? But both APIs are messy, inconsistent, and sometimes missing data.
//? Your job is to merge, clean, normalize, and fix conflicts.

//! Tasks:
//? 1️⃣ Clean the user’s name
//? 2️⃣ Normalize email
//? 5️⃣ Merge activity data
//? 3️⃣ Fix ages
//? 4️⃣ Clean interests list
//? 6️⃣ Determine user category
//?   Add a new field based on followers:
//?     > followers < 50 → "new"
//?     > 50–200 → "rising"
//?     > 200–500 → "popular"
//?     > 500 → "influencer"
//? 6️⃣ Determine user category

//! Solution
const CategorySelector = (value) => {
  if (value < 50) return "new";
  else if (value >= 50 && value < 200) return "rising";
  else if (value >= 200 && value < 500) return "popular";
  else return "influencer";
};

const MergeObject = (obj1, obj2) => {
  // email validation
  const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // filter current object
  const filteredObj = obj1.filter(
    (item) => item.name.trim() !== "" && item.email.trim() !== ""
  );
  // generate new object
  return filteredObj.map((elm) => {
    // name
    const newName = elm.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

    // email
    const currentMail = elm.email.trim().toLowerCase().replace(/\s+/g, "");
    const newMail = currentMail.match(emailValidator) ? currentMail : "invalid";

    // age
    const currentAge = elm.age.trim();
    const newAge = isNaN(currentAge) ? null : Number(currentAge);

    // interest
    const newInterest = elm.interests
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .split(",")
      .filter(
        (curentItem, index, currentArray) =>
          currentArray.indexOf(curentItem) === index && curentItem !== ""
      );

    //  additional data matching
    const additionalData = obj2.find((item) => item.userId === elm.id);

    // refined object
    return {
      name: newName,
      email: newMail,
      age: newAge,
      interests: newInterest,
      posts: additionalData.posts,
      likes: additionalData.likes,
      followers: additionalData.followers,
      category: CategorySelector(additionalData.followers),
    };
  });
};

//! Inputs
const usersAPI = [
  {
    id: 1,
    name: "   mahin    ahmed ",
    email: "  MAHIN@GMAIL .com ",
    age: "20 ",
    interests: " coding, MUSIC , travel ",
  },
  {
    id: 2,
    name: "   SARA   KHAN",
    email: " invalid@com ",
    age: " nineteen ",
    interests: " music, coding ,  ",
  },
  {
    id: 3,
    name: " ",
    email: " ",
    age: "  ",
    interests: "coding",
  },
  {
    id: 4,
    name: "john   DOE",
    email: " john@example.com ",
    age: "25",
    interests: "travel,travel, coding ,coding ",
  },
];

const activityAPI = [
  { userId: 1, posts: 4, likes: 19, followers: 80 },
  { userId: 4, posts: 20, likes: 180, followers: 620 },
  { userId: 2, posts: 1, likes: 2, followers: 10 },
];

//! Function Call
MergeObject(usersAPI, activityAPI);
