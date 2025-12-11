//! Problem: Clean, Group & Rank Orders From API
//? You receive an API response containing orders.
//? Each order contains:
//*     User info (messy)
//*     Multiple products
//*     Price inconsistencies
//*     Category duplicates
//*     Optional discount fields
//? Some orders are invalid and must be removed
//? Your job is to build a clean & structured order dataset.

//! 🎯 TASKS
//? 1️⃣ Clean the orderId
//*     Trim spaces
//*     Must not be empty
//*     Otherwise remove the whole order
//? 2️⃣ Clean user name
//*     Convert to Title Case
//*     Remove multiple spaces
//? 3️⃣ Validate email
//*     If invalid → set "invalid"
//? 4️⃣ Clean products list
//*     Clean the title
//*     Extract and convert price
//*     Clean category
//*     Remove duplicates categories later
//? 5️⃣ Handle discount
//*     If "10%" → convert to number → 10
//*     If empty → 0
//? 6️⃣ Add total price (after discount)
//*     Formula:
//*     total = sum(productPrices) × (1 – discount/100)
//? 7️⃣ Add unique categories list
//? 8️⃣ Sort final orders by:
//*     Highest total price
//*     Then by user name alphabetically

//! Solution
const RefineData = (param) => {
  // price store
  let tempPrice = 0;
  // email validator
  const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // filter object
  const filteredArray = param.filter((item) => item.orderId.trim() !== "");
  // return refined object
  const newObject = filteredArray.map((elm) => {
    // clean price
    tempPrice = 0;
    // id
    const newId = elm.orderId.trim();
    // name
    const newName = elm.user.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    // email
    const currentMail = elm.user.email.trim().replace(/\s+/g, "");
    const newMail = currentMail.match(emailValidator) ? currentMail : "invalid";
    // products
    const newProducts = elm.products.map((item) => {
      // product name
      const newPName = item.title
        .trim()
        .toLowerCase()
        .split(/\s+/g)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      // product price
      const newPrice = item.price.toLowerCase().replace("usd", "").trim();
      // push price to temporary
      tempPrice += Number(newPrice);
      // prodduct category
      const newCategory = item.category.toLowerCase().trim();
      /// return current object
      return {
        title: newPName,
        price: Number(newPrice),
        category: newCategory,
      };
    });
    // discount
    const newDiscount =
      elm.discount.trim() !== ""
        ? Number(elm.discount.replace("%", "").trim())
        : 0;
    // total price
    const totalPrice = tempPrice * (1 - newDiscount / 100);
    // return new object
    return {
      orderId: newId,
      user: {
        name: newName,
        email: newMail,
      },
      products: newProducts,
      discount: newDiscount,
      totalPrice,
    };
  });
  // sorted array
  return newObject.sort((a, b) => b.totalPrice - a.totalPrice);
};

//! Inputs
const orders = [
  {
    orderId: " 001 ",
    user: {
      name: "   MAHIN   ahmed  ",
      email: "  mahin@ gmail.com ",
    },
    products: [
      { title: " iphone 14 ", price: " 999 USD", category: "mobile" },
      { title: " AirPods  ", price: "  199usd ", category: " audio " },
    ],
    discount: " 10% ",
  },
  {
    orderId: "002",
    user: {
      name: " sara KHAN ",
      email: "invalid gmail.com",
    },
    products: [
      { title: "   samsung s23  ", price: "850 USD", category: "mobile" },
      { title: " Galaxy Buds 2 ", price: "120Usd", category: "audio " },
    ],
    discount: "",
  },
  {
    orderId: "   ",
    user: {
      name: "  ",
      email: "",
    },
    products: [],
    discount: "",
  },
];

//! Function call
console.log(RefineData(orders));
