// External Script 
console.log("External script");

// Variables
const constantVariable = "Constant"
let mutableVariable = "Mutable"
var originalVariable = "Original Syntax"

constantVariable = "Re-defining constantVariable will break"
mutableVariable = "This will not break"

// Types
const string = "This is a string"
const integer = 2
const float = 2.4
const boolean = true 
const array = [0, "second item", 2.3, false]
const object = {
    key: "value", 
}

// Operators
const four = 2 + 2
const six = four + 2 
const three = six - 3 
const eighteen = six * three 

// Conditionals 
if(six === 6) {
    console.log("The value of variable 'six' equals the value of integer 6")
}

if(six == "6") {
    console.log("The value of variable 'six' equals the value of integer 6")
}

if(six > eighteen) {
    console.log('The value of variable "six" is greater than "eighteen"')
} else {
    console.log('The value of variable "six" is not greater than "eighteen"')
}

// >=, <, <=, ... 

// Function Declarations
function doubleFunction(input) {
    return input * 2
}

const doubleFunctionModernSyntax = function (input) {
    return input * 2
}

const doubleEs6Syntax = (input) => {return input * 2}

// Function Scope
const input = 10;
const result = doubleFunction(4) // will equal 8 and not 20 because of scope 

// Existing Methods
const uppercaseString = string.toUpperCase(); 

// Arrays
const people = []
people.push("Username")
people.push("Username 2")
