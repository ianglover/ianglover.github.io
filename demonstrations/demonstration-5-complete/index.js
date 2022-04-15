// STEP 1: VARIABLES
// Our API Key for Airtable
const airtableApiKey = "keyUdTIA7XPdyI7Vi";

// URL of Where our Data is Located
const tableUrl = "https://api.airtable.com/v0/appNBOMaj7ch0wKcM/Illustrations";

// URL with API Key Authentication
const authenticatedUrl = tableUrl + "?api_key=" + airtableApiKey;

// STEP 2: DOM REFERENCES
const bodyElement = document.querySelector("main#app");

// STEP 3: USING FUNCTIONS, VARIABLES, AND LOOPS

// Get a 'Promise' Representing the Data that Will be Returned
fetch(authenticatedUrl)
  // When 'Promise' is 'Resolved', get the JSON data
  .then((res) => res.json())
  // Use the JSON Data
  .then((data) => {
    const illustrations = data.records;
    for (let index = 0; index < illustrations.length; index++) {
      // Get Illustration
      const illustration = illustrations[index];
      //   Get Title
      const title = illustration.fields.Title;
      // Get Image Url
      const imageUrl = illustration.fields.Image[0].url;
      // Create Container Object
      const containerElement = document.createElement("div");
      containerElement.classList.add("container");
      // Create Image Element
      const imageElement = document.createElement("img");
      imageElement.classList.add("image");
      imageElement.setAttribute("src", imageUrl);
      // Create Title Element
      const titleElement = document.createElement("p");
      titleElement.classList.add("title");
      titleElement.innerHTML = title;
      // Add Elements to DOM
      bodyElement.appendChild(containerElement);
      containerElement.appendChild(imageElement);
      containerElement.appendChild(titleElement);
    }
    // get references to image elements
    const imageElements = document.querySelectorAll('img')
    // loop over image elements
    for (let index = 0; index < imageElements.length; index++) {
      // on the image element, add an event listener for mouseover
      imageElements[index].addEventListener('mouseover', (event) => {
        // add a class to the element that the event is triggered by called 'zoom'
        event.target.classList.add('zoom')
      })
    }
  })
  .catch((error) => {
    console.log(error);
  });
