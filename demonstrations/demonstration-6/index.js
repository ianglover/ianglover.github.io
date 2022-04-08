// VARIABLES
const users = [{
    name: "Kayne Laing", 
    authenticated: true,
    credit: 1043
}, {
    name: "Percy Hurley", 
    authenticated: true,
    credit: -123
}, {
    name: "Bethany Benton", 
    authenticated: false,
    credit: 145
}, 
{
    name: "Hailie Rooney", 
    authenticated: false,
    credit: 14
},
{
    name: "Lowri Currie", 
    authenticated: true,
    credit: 93723
},]

// DOM REFERENCES
const usersContainerElement = document.querySelector('#users')

// FUNCTIONS
// MAP
const usersWithCreditAsDollars = users.map((user) => {
    const newUser = {
        name: user.name, 
        authenticated: user.authenticated, 
        credit: "$" + user.credit / 100
    }
    return newUser
})

// FILTER
const authenticatedUsers = users.filter((user) => {
    return user.authenticated
})

// SORT
const usersSortedByCredit = users.sort((user) => {
    return user.credit
})

// APPLICATION CODE
for (let index = 0; index < usersWithCreditAsDollars.length; index++) {
    // Create User Container
    const userContainerElement = document.createElement('div')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = usersWithCreditAsDollars[index].name
    // Create Authenticated Status Element
    const authenticatedElement = document.createElement('p')
    authenticatedElement.innerHTML = usersWithCreditAsDollars[index].authenticated
    // Create Credit Element
    const creditElement = document.createElement('p')
    creditElement.innerHTML = usersWithCreditAsDollars[index].credit
    userContainerElement.appendChild(nameElement)
    userContainerElement.appendChild(authenticatedElement)
    userContainerElement.appendChild(creditElement)
    usersContainerElement.appendChild(userContainerElement)
}
