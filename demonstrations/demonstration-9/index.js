// Variables
const fontOne = `'Cormorant Garamond', serif`;
const fontTwo = `'Proza Libre', sans-serif`;

// DOM References
const bodyElement = document.querySelector("body");
const userOutputElement = document.querySelector("#user-output");
const userInputElement = document.querySelector("form#user-input");
const copyTextElement = document.querySelector("#copy-text");
const fontSelectorOneElement = document.querySelector("button#font-1");
const fontSelectorTwoElement = document.querySelector("button#font-2");

// Functions

// Application
userInputElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const targetElement = event.target;
  const inputElement = targetElement.querySelector("input");
  const value = inputElement.value;
  userOutputElement.innerHTML = value;
  inputElement.value = "";
});

userOutputElement.addEventListener("mouseenter", () => {
  userOutputElement.style.border = "1px solid black";
  copyTextElement.classList.add("active");
});

userOutputElement.addEventListener("mouseleave", () => {
  userOutputElement.style.border = "1px solid rgba(0,0,0,0)";
  copyTextElement.classList.remove("active");
});

userOutputElement.addEventListener("click", () => {
  const innerHTML = userOutputElement.innerHTML;
  navigator.clipboard.writeText(innerHTML);
});

fontSelectorOneElement.addEventListener("click", () => {
  userOutputElement.style.fontFamily = fontOne;
});

fontSelectorTwoElement.addEventListener("click", () => {
  userOutputElement.style.fontFamily = fontTwo;
});

document.addEventListener("mousemove", (event) => {
  const mouseXPosition = event.clientX;
  const mouseYPosition = event.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const xPercentage = mouseXPosition / windowWidth;
  const yPercentage = mouseYPosition / windowHeight;
  if (xPercentage > 0.5) {
    bodyElement.style.backgroundColor =
      "rgba(100, 100, 100, " + yPercentage + ")";
  }
});
