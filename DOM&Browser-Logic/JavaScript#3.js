//! Problem: Debounce VS Throttle

//? 🧠 Problem 1 — Debounced Search API
//? 🧠 Problem 2 — Throttled Scroll Analytics
//? 🧠 Problem 3 — Decide (Interview Question)
//*     > Why throttle is bad for search?
//*     > Why debounce is bad for scroll?

//! Solution: Problem 1
// Add DOM Element
//* const Input = document.querySelector('#input')
// Debounce
const Debounce = (fn, delay = 600) => {
  // default timer
  let timer;
  // callback
  return function (...args) {
    // clear previous timer
    clearTimeout(timer);
    // set new timer
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// API calling function
const callAPI = async (value) => {
  // api link
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  // fetch data
  await fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
// Debounce Version
const newDebounce = Debounce(callAPI, 1000);
// Conncect Debouce with Event Listeners
//* Input.addEventListeners('input', (e) => newDebounce(e.target.value))

//! Solution: Problem 2
// Throttle
const Throttle = (fn, delay = 500) => {
  // default timer
  let prevTime = 0;
  // callback
  return function (...args) {
    // new time
    const now = Date.now();
    // conditional statement
    if (now - prevTime >= delay) {
      prevTime = now;
      fn.apply(this, args);
    }
  };
};
// Execution Function
const Print = () => console.log("Scroll progress marked at " + window.scrollY);
// Throttle Version
const newThrottle = Throttle(Print, 1000);
// Run Throttle on Event Listenrs
//* window.addEventListener('scroll', newThrottle)

//! Solution: Problem 3
//? 1. If we add Throttle for search event then it will execute on fixed ddelay, what is not suitable for search any document. So Throttle is prohibited for search.
//? 2. If we use Debounce on button click event then it runs after stop clicking, what is time consuming for user and not suitable for click event. So we have to use Throttle instad of Debounce for execute the function on fixed delay.
