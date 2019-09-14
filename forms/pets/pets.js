let pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

//A. Write the command to remove "Vinny" from the array 
pets.splice(pets.indexOf("Vinny"),1)
console.log(pets)

//B. Write the command to remove "Marty" from the array.
pets.splice(pets.indexOf("Marty"),1)
console.log(pets)

//C. Write the command to add "Nancy" to the front of the array.
var newLength = pets.unshift('Nancy')
console.log(pets) 

//D. Write the command to add your name to the end of the array.
var newLength = pets.push('Alissa');
console.log(pets)

//E. Write the command that gives the indexOf where "Riley" is located.
let posRiley = pets.indexOf('Riley');
console.log(posRiley)

//F. Write the command that gives the indexOf where "Cindy" is located (this should return-1).
let posCindy = pets.indexOf('Cindy')
console.log(posCindy)

//G. Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console.
let withMarmaduke = [pets, 'Marmaduke']
console.log(withMarmaduke)


//Option 2 Extra XP
//a. Use the .shift() array method and show the removed array item in a console.log statement.
var firstElement = pets.shift();
console.log(pets)
console.log(firstElement);


//b. Using the .unshift() array method, add the name 'Barney' to the array.
console.log(pets.unshift('Barney'));
console.log(pets);

//c. Using an array method, add this array to the end of the original pet name array to make a new array named allPets. 
let pets2 = ['Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed']
let allPets = pets.concat(pets2);
console.log(allPets)

//d. Use the .shift() array method again and show the array item that was removed this time in a console.log statement.
var firstElement = allPets.shift();
console.log(allPets)

//e. Using the array method .join(), create a string variable named 'pets' that holds all of the pet names, separated by commas.
console.log(allPets.join());
console.log(allPets)

//f. Using the .unshift() array method, add the name 'Agnes' to the array. 
console.log(allPets.unshift('Agnes'));
console.log(allPets)
