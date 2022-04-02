// STEP 1: VARIABLES
const airtableApiKey = "keyUdTIA7XPdyI7Vi"

const airtableDatabaseUrl = "https://api.airtable.com/v0/appNBOMaj7ch0wKcM/Illustrations"

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

// STEP 2: GET REFERENCES TO DOM
const illustrationContainerElement = document.querySelector('#illustrations')

// STEP 4: APPLICATION 
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
jsonPromise.then((data) => {
    const records = data.records 
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Image[0].url
        // Create Container Element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        // Create Image Element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
        // Create Title Element
        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title
        // Add Container Element to DOM
        illustrationContainerElement.appendChild(containerElement)
        // Add Image Element to the Container Element
        containerElement.appendChild(imageElement)
        // Add Title Element to the Container Element
        containerElement.appendChild(titleElement)
    }
})


