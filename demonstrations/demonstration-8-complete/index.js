// Dom References
const clickEventElement = document.querySelector('#click')
const clickEventFeedbackElement = document.querySelector('#click-feedback')
const hoverEventElement = document.querySelector('#hover')
const hoverEventFeedbackElement = document.querySelector('#hover-feedback')
const mouseMoveEventElement = document.querySelector('#mousemove')
const mouseMoveEventFeedbackElement = document.querySelector('#mousemove-feedback')
const keyboardEventFeedbackElement = document.querySelector('#keyboard-feedback')
const formSubmitEventElement = document.querySelector('#form')
const formInputElement = document.querySelector('#form input')
const formSubmitEventFeedbackElement = document.querySelector('#form-feedback')
const clickOnceEventElement = document.querySelector('#click-once')
const clickOnceEventFeedbackElement = document.querySelector('#click-once-feedback')

// Application
// Click Events
clickEventElement.addEventListener('click', (event) => {
    console.log('click event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Click Event"
    // Add Feedback Element to Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})

clickEventElement.addEventListener('dblclick', (event) => {
    console.log('dblclick event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Double Click Event"
    // Add Feedback Element to Page
    clickEventFeedbackElement.appendChild(feedbackElement)
})

// Hover Events 
hoverEventElement.addEventListener('mouseenter', (event) => {
    console.log('mouseenter event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Enter Event"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})

hoverEventElement.addEventListener('mouseout', (event) => {
    console.log('mouseout event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Out Event"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)
})

hoverEventElement.addEventListener('mouseover', (event) => {
    console.log('mouseover event', event)
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse Over Event"
    // Add Feedback Element to Page
    hoverEventFeedbackElement.appendChild(feedbackElement)

})

// Mouse Move
mouseMoveEventElement.addEventListener('mousemove', (event) => {
    console.log('mousemove event', event)
    // Get Mouse Position on X Axis
    const mouseX = event.clientX
    // Get Mouse Position on Y Axis
    const mouseY = event.clientY
    // Clear Existing Feedback Element
    mouseMoveEventFeedbackElement.innerHTML = ""
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Mouse X: " + mouseX + ", Mouse Y: " + mouseY
    // Add Feedback Element to Page
    mouseMoveEventFeedbackElement.appendChild(feedbackElement)
})

// Keyboard Events
document.addEventListener('keydown', (event) => {
    console.log('keydown event', event)
    // Get Value of Keyboard Press
    const value = event.key
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Keyboard Input: " + value
    // Add Feedback Element to Page
    keyboardEventFeedbackElement.appendChild(feedbackElement)
})

// Input Event 
formSubmitEventElement.addEventListener('submit', (event) => {
    console.log('submit event', event)
    // Prevent Default Action for 'Submitting' a Form
    event.preventDefault() 
    // Save Current Value of Input
    const value = formInputElement.value
    // Create Feedback Element
    const feedbackElement = document.createElement('p')
    feedbackElement.innerHTML = "Submit Event: " + value
    // Add Feedback Element to Page
    formSubmitEventFeedbackElement.appendChild(feedbackElement)
    // Clear Input for Reuse
    formInputElement.value = ""
})
