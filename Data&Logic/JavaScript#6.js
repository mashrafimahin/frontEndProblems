//! Problem: Merge & Enrich User Data
//? 🎯 Tasks
//? 1️⃣ Normalize user names
//? 2️⃣ Convert ages into numbers
//? 3️⃣ Merge both datasets

//! solution
const Merge = (dsOne, dsTwo) => {
  // return combined object
  return dsOne.map((elm) => {
    // name edit
    const newName = elm.name
      .trim()
      .split(/\s+/)
      .map((char) => char[0].toUpperCase() + char.slice(1).toLowerCase())
      .join(" ");
    // age edit
    const newAge = Number(elm.age.trim());
    // get additional data
    const data = dsTwo.find((item) => item.userId === elm.id);
    // return edited values
    return {
      id: elm.id,
      name: newName,
      age: newAge,
      posts: data.posts,
      likes: data.likes,
    };
  });
};

//! Inputs
const users = [
  { id: 1, name: "mahin ahmed", age: "20 " },
  { id: 2, name: "  sara   khan ", age: " 19" },
  { id: 3, name: "JOHN   DOE", age: "22 " },
];

const activity = [
  { userId: 1, posts: 4, likes: 19 },
  { userId: 3, posts: 10, likes: 50 },
  { userId: 2, posts: 2, likes: 5 },
];

//! function call
Merge(users, activity);
