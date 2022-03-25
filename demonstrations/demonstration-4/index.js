// VARIABLES
const colorsArray = ["red", "#164C45", "purple", "#E3C75F", "#BDA523"];

const newDate = new Date();
const currentDate = {
  utcYear: newDate.getUTCFullYear(), 
  year: newDate.getFullYear(),
  month: newDate.getMonth(),
  day: newDate.getDay(),
  hour: newDate.getHours(),
  minute: newDate.getMinutes(),
  second: newDate.getSeconds(),
};

const steps = [
  currentDate.year,
  currentDate.day,
  currentDate.month,
  currentDate.second,
  currentDate.hour,
  currentDate.minute,
  currentDate.hour,
  currentDate.utcYear
];

// DOM REFERENCES
const applicationElement = document.querySelector('div#app')

// FUNCTIONS
const createDivElement = () => {
    return document.createElement('div')
}

const createParagraphElement = () => {
    return document.createElement('p')
}

// APPLICATION 
for (let index = 0; index < steps.length; index++) {
    // DO SOMETHING TO EACH STEP 
    const divElement = createDivElement() 
    const paragraphElement = createParagraphElement()  
    paragraphElement.innerHTML = steps[index]
    const colorIndex = steps[index] % 4;
    const divElementColor = colorsArray[colorIndex]
    divElement.style.backgroundColor = divElementColor
    divElement.classList.add("step")
    if(steps[index] % 2 === 0) {
        divElement.style.background = "linear-gradient(" + divElementColor + "," +  colorsArray[1] + ")"
    }

    applicationElement.appendChild(divElement)
    divElement.appendChild(paragraphElement)
}