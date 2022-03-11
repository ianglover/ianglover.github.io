// Loops 

const names = ["Name One", "Ian", "Name Three", "Name Four", "name Five"]

const isUserIan = function(input) {
    return input === "Ian"
}

for (let index = 0; index < names.length; index++) {
  console.log(isUserIan(names[index]))
}
