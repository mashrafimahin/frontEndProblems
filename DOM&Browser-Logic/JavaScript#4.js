//! Problem: DOM Performance + Browser Events

//! Tasks:
//? 1️⃣ Scroll Progress Indicator (Throttle)
//? 2️⃣ Search Highlight System (Debounce + DOM)

//! Solution: Probem 1
// Percentage Function
const percent = () => {
  const Top = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight;
  const client = document.documentElement.clientHeight;
  const scrollableHeight = height - client;
  const x = (Top / scrollableHeight) * 100;
  document.documentElement.style.setProperty("--size", x + "%");
  console.log(x);
};
// Throttle
const Throttle = (fn, delay) => {
  let lastTimer = 0;
  // callback
  return function (...args) {
    // new time
    let now = Date.now();
    // condition
    if (now - lastTimer >= delay) {
      lastTimer = now;
      fn.apply(this, args);
    }
  };
};
// Throttle Version
const newThrottle = Throttle(percent, 500);
// Event Listeners
//* window.addEventListener("scroll", newThrottle);
// Call once on load
//* percent();

//! Solution: Probem 2
// Add DOM Elements
//* const Input = document.querySelector("#in");
// Print Function
const Print = (value) => console.log(value);
// Debounce
const Debounce = (fn, delay = 500) => {
  // default timer
  let timer;
  // callback
  return function (...args) {
    // clear record
    clearTimeout(timer);
    // set record
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// Debounce version
const newDebounce = Debounce(Print, 1000);
// Event Listeners
//* Input.addEventListener("input", (e) => newDebounce(e.target.value));
