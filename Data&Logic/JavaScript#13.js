//! Problem: Clean, Normalize & Analyze Users + Orders API

//! 🎯 Tasks:
//? 1️⃣ Clean user data
//?     name → title case
//?     email → lowercase + validate
//?     city/country → trim + capitalize first letter
//? 2️⃣ Clean orders
//?     fix title case
//?     extract & convert price
//?     fix date format → YYYY-MM-DD
//? 3️⃣ Link orders with users
//?     Join by:
//?         user.id === order.userId
//? 4️⃣ Compute user stats
//?     For each user:
//?         totalOrders
//?         totalSpent
//?         averageOrderValue
//? 5️⃣ Add a "tier" based on total spent
//?     Total Spent	Tier
//?         < 500	"bronze"
//?         500–1500	"silver"
//?         1500–5000	"gold"
//?         > 5000	"platinum"
//? 6️⃣ Final output

//! Solution
const GenerateTier = (value) => {
  if (value < 500) return "bronze";
  else if (value >= 500 && value < 1500) return "silver";
  else if (value >= 1500 && value < 5000) return "gold";
  else return "platinum";
};

const RefinedObject = (valOne, valTwo) => {
  // email validator
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // return new merge object
  return valOne.map((elm) => {
    // default data
    const orders = [];
    let subTotal = 0;
    // new Id
    const newId = elm.id.trim();
    // name
    const newName = elm.name
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    // email
    const currentMail = elm.email.trim().toLowerCase().replace(/\s+/g, "");
    const newMail = currentMail.match(emailValidate) ? currentMail : "invalid";
    // address
    const currentCity = elm.address.city.trim().toLowerCase();
    const newCity = currentCity[0].toUpperCase() + currentCity.slice(1);
    const currentCountry = elm.address.country.trim().toLowerCase();
    const newCountry =
      currentCountry[0].toUpperCase() + currentCountry.slice(1);
    // order
    const findOrders = valTwo.find(
      (item) => item.userId === Number(newId).toString()
    );
    // check and refine orders
    if (findOrders !== undefined) {
      findOrders.items.map((item) => {
        // edit name
        const newTitle = item.title
          .trim()
          .toLowerCase()
          .split(/\s+/g)
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ");
        // edit price
        const currentPrice = item.price
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "");
        const newPrice = Number(currentPrice.replace("usd", ""));
        // push data
        orders.push(newTitle);
        subTotal += newPrice;
        // return new values
        return {
          title: newTitle,
          price: newPrice,
        };
      });
    } else
      return {
        id: newId,
        name: newName,
        email: newMail,
        address: {
          city: newCity,
          country: newCountry,
        },
        totalOrders: 0,
        totalSpent: 0,
        avgOrderValue: 0,
        tier: "bronze",
        orders: [],
      };
    // return new object
    return {
      id: newId,
      name: newName,
      email: newMail,
      address: {
        city: newCity,
        country: newCountry,
      },
      totalOrders: orders.length,
      totalSpent: subTotal,
      avgOrderValue: subTotal / orders.length,
      tier: GenerateTier(subTotal),
      orders,
    };
  });
};

//! Inputs
const users = [
  {
    id: " 01 ",
    name: "  MAHIN   AHMED ",
    email: "  mahin @gmail.com ",
    address: { city: "   dhaka ", country: " BANGLADESH " },
  },
  {
    id: "02",
    name: "   sara khan ",
    email: " invalid gmail.com",
    address: { city: "lahore  ", country: " pakistan" },
  },
];

const orders = [
  {
    userId: "1",
    items: [
      { title: " iphone 14 ", price: "999 USD " },
      { title: " AirPods ", price: "199usd" },
    ],
    date: "2024/01/15",
  },
  {
    userId: "2",
    items: [
      { title: " samsung s23 ", price: "850 usd" },
      { title: " galaxy buds2  ", price: "120 Usd" },
    ],
    date: "15-01-2024",
  },
  {
    userId: "1",
    items: [{ title: " Macbook Air ", price: " 1249 usd" }],
    date: "2024-03-10",
  },
];

//! Function call
RefinedObject(users, orders);
