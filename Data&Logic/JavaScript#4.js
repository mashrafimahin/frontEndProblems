//! Problem: Deep Data Grouping + Aggregation
//? You are given a list of orders from an e-commerce shop.
//? Each order contains the buyer’s name, items they bought, and payment status.

//? Task-:
//? ✔️ Clean data
//? ✔️ Group orders by customer
//? ✔️ Compute total spending
//? ✔️ Return final analytics

//! solution
// takes simple array as parameter
const CleanData = (order) => {
  //  return full refined object
  return order.map((elm) => {
    // name refine
    const trimName = elm.customer.trim();
    const newName = trimName[0].toUpperCase() + trimName.slice(1).toLowerCase();
    // items refine
    const newObject = elm.items;
    // return the values
    return {
      newName,
      orders: newObject,
    };
  });
};

// takes two parameters to filter orders
const Filtering = (nestedObj) => {
  // direct filter
  return nestedObj.filter(
    (elm) => elm.status.trim().toLowerCase() !== "pending"
  );
};

// takes filtered array as parameter
const TotalValue = (newOrder) => {
  // direct return values
  return newOrder.map((elm) => {
    return elm.items
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
  });
};

// takes main input from function call
const Analytics = (order) => {
  // empty object
  const Result = {};
  // get data
  const FilteredArray = Filtering(order);
  const ReArrangedArray = CleanData(FilteredArray);
  const TotalRevennue = TotalValue(FilteredArray);
  // Arrange data
  TotalRevennue.map((key, index) => {
    Result[ReArrangedArray[index].newName] = {
      orders: ReArrangedArray[index].orders,
      totalSpent: key,
    };
  });

  return Result;
};

// input
const orders = [
  {
    customer: "  mahin",
    items: [
      { name: "Laptop", price: 900, quantity: 1 },
      { name: "Mouse", price: 40, quantity: 2 },
    ],
    status: " Paid ",
  },
  {
    customer: "SARA ",
    items: [
      { name: "Phone", price: 600, quantity: 1 },
      { name: "Headphone", price: 100, quantity: 1 },
    ],
    status: "paid",
  },
  {
    customer: "john ",
    items: [{ name: "Table", price: 150, quantity: 1 }],
    status: " pending",
  },
  {
    customer: "alex",
    items: [{ name: "Keyboard", price: 80, quantity: 1 }],
    status: "paid",
  },
];

// funcion call
Analytics(orders);
