//! Problem: Throttle

//! Task:
//? Task 1 — Throttled Scroll (Browser Logic)
//? Task 2 — Throttled Button Click

//! Task 1 Solution
// Throttle Function
const Throttle = (fn, delay = 500) => {
  // default timer
  let lastValue = 0;
  // callback
  return function (...agrs) {
    // current time value
    const currentTime = Date.now();
    // condition
    if (currentTime - lastValue >= delay) {
      lastValue = currentTime;
      fn.apply(this, agrs);
    }
  };
};
// Print function
const PrintFun = () => console.log("Scroll event fired");
// Throttle Version
const newThrottle = Throttle(PrintFun, 2000);
// Event Listeners
//* window.addEventListener("scroll", newThrottle);

//! Task 2 Solution
// Add DOM Element
//* const Btn = document.querySelector("#btn");
// Throttle Function
//? Same as task 1 Throttle Function
// Print function
//? Same as task 1 Print Function
// Throttle Version
const btnThrottle = Throttle(PrintFun, 2000);
// Event Listeners
//* Btn.addEventListener("click", btnThrottle);
