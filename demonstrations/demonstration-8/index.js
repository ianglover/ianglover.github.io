// DOM References
const clickEventElement = document.querySelector('button#click')
const clickEventFeedbackElement = document.querySelector('div#click-feedback')
const hoverEventElement = document.querySelector('div#hover')
const hoverEventFeedbackElement = document.querySelector('div#hover-feedback')
const mousemoveEventElement = document.querySelector('div#mousemove')
const mousemoveFeedbackElement = document.querySelector('div#mousemove-feedback')
const keyboardEventElement = document.querySelector('body')
const keyboardFeedbackElement = document.querySelector('div#keyboard-feedback')
const inputEventElement = document.querySelector('form#input')
const inputElement = document.querySelector('form#input input')
const inputFeedbackElement = document.querySelector('div#input-feedback')

// Application Code 
clickEventElement.addEventListener('click', (event) => {
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Button Clicked"
    // Add the New Element to the Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})

clickEventElement.addEventListener('dblclick', () => {
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Button Double-Clicked"
    // Add the New Element to the Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})

// Hover Events
hoverEventElement.addEventListener('mouseenter', () => {
    console.log('mouseenter')
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Enter"
    // Add the New Element to the Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})

hoverEventElement.addEventListener('mouseover', () => {
    console.log('mouseover')
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Over"
    // Add the New Element to the Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})

hoverEventElement.addEventListener('mouseout', () => {
    console.log('mouseout')
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Out"
    // Add the New Element to the Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})

// Mouse Move Events
mousemoveEventElement.addEventListener('mousemove', (event) => {
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = 'pageX: ' + event.pageX + ", pageY: " + event.pageY
    // Remove Existing Content from Feedback Container
    mousemoveFeedbackElement.innerHTML = ""
    // Add the New Element to the Page
    mousemoveFeedbackElement.appendChild(feedbackElement)
})

// Keypress Events 
keyboardEventElement.addEventListener('keydown', (event) => {
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Key Pressed: " + event.key
    // Add Feedback Element to Page
    keyboardFeedbackElement.appendChild(feedbackElement)
})

inputEventElement.addEventListener('submit', (event) => {
    console.log('submit')
    // Prevent Normal Submit Event Behavior
    event.preventDefault()
    // Get Form Value
    const value = inputElement.value 
    // Create a New Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Input value: " + value
    // Add to Page
    inputFeedbackElement.appendChild(feedbackElement)
    // Clear Input
    inputElement.value = ""
})