//! Problem: Clean & Rank Products from API Response

//? You are given an API response containing product data.
//?Your job is to clean, normalize, and rank the products based on a set of rules.

//? Tasks:
//? 1. Clean the name
//? 2. Clean and convert price
//? 3. Clean rating
//? 4. Clean stock
//? 5. Clean categories
//? 6. Add a new property: priority
//*     | Condition                          | Priority   |
//?     | ---------------------------------- | ---------- |
//*     | stock > 10                         | `"high"`   |
//*     | stock between 5 and 10 (inclusive) | `"medium"` |
//*     | stock < 5                          | `"low"`    |
//? 7. Final Output

//! Solution
const GenerateProirity = (value) => {
  if (value > 10) return "high";
  else if (value >= 5 && value <= 10) return "medium";
  else return "low";
};

const MergeObject = (param) => {
  // new refined object
  const newObject = param.map((elm) => {
    // name
    const newName = elm.name.trim();
    // price
    const newPrice = elm.price.trim().replace(/\s+/g, "").slice(0, 3);
    // rating
    const newRating = elm.rating == "" ? null : Number(elm.rating);
    // stock
    const currentStock = elm.stock.trim().replace(/\s+/g, "").toLowerCase();
    const newStock = currentStock.includes("outofstock")
      ? 0
      : Number(currentStock.replace(/pcs/g, ""));
    // categories
    const newCategory = elm.categories
      .map((item) => (item !== null ? item.toLowerCase().trim() : null))
      .filter(
        (item, index, array) => item !== "" && array.indexOf(item) === index
      );
    // priority
    const newProirity = GenerateProirity(newStock);

    // new output boilerplate
    return {
      id: elm.id,
      name: newName,
      price: Number(newPrice),
      rating: newRating,
      stock: newStock,
      categories: newCategory,
      priority: newProirity,
    };
  });
  // filtering as proirity
  return newObject.sort((a, b) => b.stock - a.stock);
};

//! Inputs
const products = [
  {
    id: 1,
    name: "  iPhone 14 ",
    price: " 999USD ",
    rating: "4.9",
    stock: " 12 pcs ",
    categories: [" smartphone ", " apple ", " mobile  "],
  },
  {
    id: 2,
    name: "samsung galaxy s23",
    price: "850usd",
    rating: "4.8",
    stock: "5 PCS",
    categories: ["  mobile", " android", "Samsung", ""],
  },
  {
    id: 3,
    name: "OnePlus 11  ",
    price: "730 Usd",
    rating: "",
    stock: "  out of stock ",
    categories: ["Android", " mobile", null],
  },
];

//! Function call
MergeObject(products);
