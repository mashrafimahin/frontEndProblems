//! Problem: Debounce

//! Task:
//? ✅ Practice Task 1 — Typing Search (Browser Simulation)
//? ✅ Practice Task 2 — Debounced Button Click

//! Print Function for Debounce
const PrintValue = (value) => {
  console.log(value);
};

//! Task 1 Solution
// Add input DOM from html
//* const Input = document.querySelector('#input');
// Debounce Function
const DebounceTyping = (fn, delay = 500) => {
  // default timer
  let timer;
  // callback function
  return function (...args) {
    // clear timer
    clearInterval(timer);
    // set new timer
    timer = setInterval(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// Create Debounce Version
const TypingDebounce = DebounceTyping(PrintValue, 500);
// Run Typing Debounce with Event Listeners
//* Input.addEventListeners('input', (e) => TypingDebounce(this, e.target.value))

//! Task 2 Solution
// Add DOM Elements
//* const Btn = document.querySelector("#btn");
// Debounce Function
const DebounceClick = (fn, delay = 500) => {
  // default timer
  let interval;
  // callback
  return function (...args) {
    // clear interval
    clearInterval(interval);
    // set new interval
    interval = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// Debounce Run version
const DebounceOnClick = DebounceClick(PrintValue, 500);
// Run with Event Listeners
//* Btn.addEventListener("click", (e) => DebounceOnClick(this, e.target));
