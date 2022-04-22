// Variables
const fontOne = `'Cormorant Garamond', serif`;
const fontTwo = `'Proza Libre', sans-serif`;

// Dom References
const bodyElement = document.querySelector("body");
const userOutputElement = document.querySelector("#user-output");
const userInputElement = document.querySelector("form#user-input");
const copyTextElement = document.querySelector("#copy-text");
const fontSelectorOneElement = document.querySelector("#font-1");
const fontSelectorTwoElement = document.querySelector("#font-2");

// Functions

// Application
document.addEventListener("mousemove", (event) => {});

userInputElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElement = event.target.querySelector("input");
  const value = inputElement.value;
  userOutputElement.innerHTML = value;
  inputElement.value = "";
  console.log(event);
});

userOutputElement.addEventListener("mouseenter", (event) => {
  userOutputElement.style.border = "1px solid black";
  copyTextElement.classList.add("active");
});

userOutputElement.addEventListener("mouseleave", (event) => {
  userOutputElement.style.border = "1px solid rgba(0,0,0,0)";
  copyTextElement.classList.remove("active");
});

document.addEventListener("mousemove", (event) => {
  const mouseYPosition = event.clientY;
  const windowHeight = window.innerHeight;
  const yPercentage = mouseYPosition / windowHeight;
  bodyElement.style.backgroundColor = `rgba(150,150,150,${yPercentage + 0.1})`;
});

userOutputElement.addEventListener("click", (event) => {
  navigator.clipboard.writeText(userOutputElement.innerHTML);
});

fontSelectorOneElement.addEventListener("click", (event) => {
  userOutputElement.style.fontFamily = fontOne;
});

fontSelectorTwoElement.addEventListener("click", (event) => {
  userOutputElement.style.fontFamily = fontTwo;
});
