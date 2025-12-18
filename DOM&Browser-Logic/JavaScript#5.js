const form = document.querySelector("#loginForm");

// dynamic form entries (industry level)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  console.log(data);
});

// get data from dynamic form (advanced)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  console.log(data.get("email"));
});
