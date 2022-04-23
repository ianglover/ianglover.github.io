const a = document.querySelector("#user-output"),
  b = document.querySelector("form#user-input");
b.addEventListener("submit", (e) => {
  e.preventDefault();
  const t = e.target.querySelector("input");
  e = t.value;
  const u = document.createElement("li");
  (u.innerHTML = e), a.appendChild(u), (t.value = "");
});
