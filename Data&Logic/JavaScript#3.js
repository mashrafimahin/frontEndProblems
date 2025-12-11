//! Problem: Analyze Product Sales Data
//? Given an array of products with name, price, sold quantity, and category, calculate the total revenue for products in the "electronics" category.
//? First, compute the total revenue for each product (price * sold).
//? Then, filter the products by category "electronics"
//? Finally, sum the total revenues of the filtered products and return an object with the filtered items and total revenue.

// solution
const FilteredArray = (param, target) => {
  return param.filter((elm) => elm.category === target);
};

const TotalRevenue = (param) => {
  return param.map((elm) => {
    const totalRevenue = elm.price * elm.sold;
    return {
      ...elm,
      totalRevenue,
    };
  });
};

const TotalElectronicsRevenue = (param) => {
  // function call first to get updated array
  const updatedArray = TotalRevenue(param);
  const filterArray = FilteredArray(updatedArray, "electronics");
  // get data
  const profit = filterArray.reduce((acc, current) => {
    return current.totalRevenue + acc;
  }, 0);

  return { items: [...filterArray], totalRevenue: profit };
};

// input
const products = [
  { name: "laptop", price: 900, sold: 12, category: "electronics" },
  { name: "phone", price: 600, sold: 30, category: "electronics" },
  { name: "chair", price: 80, sold: 20, category: "furniture" },
  { name: "table", price: 150, sold: 10, category: "furniture" },
  { name: "headphone", price: 100, sold: 40, category: "electronics" },
];

// function calls
TotalElectronicsRevenue(products);
