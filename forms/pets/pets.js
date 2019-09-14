let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Rikey', 'Saddie', 'Marge', 'Sam']


//A. Write the command to remove "Vinny" from the array 
pets.splice(pets.indexOf("Vinny"),1)
console.log(pets)

//B. Write the command to remove "Marty" from the array.
pets.splice(pets.indexOf("Marty"),1)
console.log(pets)

//C. Write the command to add "Nancy" to the front of the array.
var newLength = pets.unshift('Nancy')
console.log(pets) 