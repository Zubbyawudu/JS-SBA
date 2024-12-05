// I. Variables & Datatypes 

//A. Q + A

//-------How do we assign a value to a variable?
//-- We assign a by declaring the variable using three keywords like (var , let , const) .Example Below 
let x = 10
//-------How do we change the value of a variable?
// -- We change the value of a variable by reassigning it to a new value. Example 
x = 15 

//-------How do we assign an existing variable to a new variable?
//-- We assign an existing variable to a new variable below 
let y = x
//however when we use const in declaring the variable , we cannot reassign it to another variable .

//-------Remind me, what are declare, assign, and define?

// --- Declare , to declare in JS simply means to create a variable by giving it a name . It always comes with the keywords ('const' and 'let' ).Example : 
let declare 

// --- Assign , this refers to giving a value to a variable . example 
let sam = 120 // therefore 120 has been assigned to the variable declare

// --- Define , this refers to creating and assigning value to a variable . Example
const joe = 15 // in this case , we defined a constant joe and added a value 15 .


//What is pseudo coding and why should you do it?

// --- Pseudo Coding can be defined as the step by step description of an algorithm . It is important to pseudo code because it helps the programmer in planning the solution to the problem as well as the reader in understanding the approach to the problem ..
 

//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// --- 80% of time should be spent through critical thinking and through problem analysis in order to be able to come up with a suitable and appropriate solution to the problem and use the 20% remaining to write the actual code in order to get the work done / get the problem solved . 




//B. Strings

//For all other questions that involve writing code, you can solve them via the following instructions.
//Create a variable called firstVariable
//Assign it the value of the string "Hello World"
//Change the value of this variable to some number
//Store the value of firstVariable in a new variable called secondVariable
//Change the value of secondVariable to any string.
//What is the value of firstVariable?
//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// -----------------Solution-------------------//
let firstVariable = "Hello World" // declared and assigned the value of "string" 
firstVariable = 20 // changed the value to some number. 

let secondVariable = firstVariable // assigning the value of firstVariable to secondVariable
secondVariable = "Hello Planet" // reassigning secondVariable to a second string . 

firstVariable = 20 // firstVariable still remains 20 because the value never changed .
// concatenating strings . 
let yourName = "Zubairu Awudu"
let greeting = "Hello, my name is "
let message = greeting.concat(yourName)
console.log(message);



//C. Booleans

//Using the provided variable definitions, replace the blanks so that all log statements print (true) in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');

console.log(a <= b && b <= c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a === a && a <= d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');



//D. The farm

//Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow"
//Write code that will print out "mooooo" if the it is equal to cow
animal = "moooooo"
console.log(animal);
//Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
let goat = "beee"
if (goat === animal) {
  console.log("you are a cow");
  
} else {
  console.log("Hey! You're not a cow.");
  
}
 


//E. Driver's Ed

//Make a variable that holds a person's age; be semantic
let zubsAge = 26
//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let minimumAge = 16
if (zubsAge >= minimumAge) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
  
}




//II. Loops

//Remember: USE let when you initialize your for loops!

//This is GOOD: for(let i = 0; i < 100; i++)

//This is NO GOOD: for(i = 0; i < 100; i++)


//A. The basics

//Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i < 10; i++)
  

//Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i < 401; i++)
  
//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for(let i = 12; i < 4000; i+=3)

//B. Get even

//1. Print out the numbers that are within the range of 1 - 100
//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number" 
//-------------SOLUTION ----------- //
// for (let i = 1; i <= 100; i++){
//   if (i % 2 === 0){
//     // console.log(`${i} <-- is an even number`);
//   } else{
//     // console.log(i);

//   }
// }


// C. Give me Five

//1.For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
//3. For numbers divisible by both three and five, be sure your code prints both messages

//-------------SOLUTION-----------------//
// for (let i = 0; i <= 100; i++){
//   let highFive = 5
//   let crowd = 3
//   if (i % 5 === 0){
//     console.log(`I found a ${highFive}. High five!`);
//   }else if(i % 3 === 0){
//     console.log(`I found a ${crowd}. Three is a crowd`);
    
//   }else{
//     console.log(`I found a ${crowd}. Three is a crowd , I found a ${highFive}. High five! `);
//   }
// }


// D. Savings account

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.
//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

//--------------- SOLUTION ---------------------- //
// to calculate the sum of numbers
let bank_account = 0;
for(let i = 1; i <=10; i++ ){
  bank_account += i;
}

// console.log(bank_account);

// bonus pay and total sum in account 
let totalSum = 0;
for(let i = 1; i <=100; i++ ){
  totalSum += i
}

bank_account = totalSum * 2
// console.log(bank_account);

  


//III. Arrays & Control flow

//A. Talk about it:

//What are the things in an array called?
//Answer -- Arrays carry collection of elements stores them in index and values . 

//Do Arrays guarantee those things will be in order?
// Answer ---   Yes arrays keep the things in order by giving each index positions that start at zero . This makes it each to keep sequence and also makes iteration easy . 


//What real-life thing could you model with an array?
// Answer --- Looking at an auto mechanic shop , all the tools and equipment stored in the shop can be classified in an array .. 
//      Example  let autoMechanicShop = ["vehicle lift","wrench ","screwdriver bag", " jack "...]


//B. Easy Does It

//Create an array that contains three quotes and store it in a variable called quotes

// Answer ----- let quotes = [ "Opportunities don't happen, you create them","The only approval you need is your own","You must do the things you think you cannot do"]


//C. Accessing elements

//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
let randomThing =  randomThings.at(0) // using the at() method 


//Change the value of "Hello" to "World"
randomThings[2] = "World"// Used the direct reassigning method

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log(randomThings);



//D. Change values

//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
let ourKlass = ourClass.at(2) //using the at() method 

//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat" // Used the direct reassigning method

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")// Used the .push() because it adds a new value to the array . 
console.log(ourClass);


//E. Mix It Up

//Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
//Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]
//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon","Banks")

//Remove the 5 from the beginning of the array.
myArray.shift(0)

//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray);
//Remove the string of your choice from the end of the array.
myArray.pop(5)

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
let revarr = myArray.reverse() // mutating the array , to mutate simply means to change the concept/ assignment of the value in the array . 
console.log(revarr); // the reverse method return the same elements/values in the array but re-arranges them in a form it flips the array and outputs the result in a reverse approach. 


//F. Biggie Smalls

//Create a variable that contains an integer.
//Write an if ... else statement that:
//1.console.log()s "little number" if the number is entered is less than 100
//console.log()s big number if the number is greater than or equal to 100.

//------------------- SOLUTION -------------------//
let s = 200
let num = 100
if ( s < 100) {
  console.log("little number");
} else {
  console.log("big number");
  
}

//G. Monkey in the Middle

//Write an if ... else if ... else statement:
//console.log() little number if the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".

//------------------- SOLUTION -------------------//

let x = 4
if (x < 5) {
  console.log("little number");
  
} else if( x > 10) {
  console.log("big number");
  
}else{
  console.log("monkey");
}



//H. What's in Your Closet?

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Kristyn is rocking that " +  kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6 , 0 , "raybans")
console.log(kristynsCloset);

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat"
console.log(kristynsCloset);


// 4.Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0];


// 5. In the same way, access one item from Thom's pants array.
thomsCloset[1][2];
console.log(thomsCloset[1][2]);

// 6.Access one item from Thom's accessories array.
thomsCloset[2][1];
console.log(thomsCloset[2][1]);

// 7.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking awesome in a " + thomsCloset[0][0]+"," 
+ thomsCloset[1][2] + " and " + thomsCloset[2][1] );

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas."
console.log(thomsCloset[1]);

//----------------------IV. Functions---------------------//

// ------ A. printGreeting
//Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

function printGreeting(response){
  return response
}
console.log(printGreeting("Good day "));

// -------- B  printCool
//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
  return name
}
console.log(printCool("Zubairu Awudu")+ " is cool");

// ------- C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number) {
  return number**3
  
}
console.log(calculateCube(3));

// ----- D. isVowel
//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(letter) {
  return letter ==="a" || letter ==="e" || letter ==="i" || letter ==="o" || letter ==="u" ;
  
}
console.log(isVowel("e"));


// ----- E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(a , b) {
  return [a.length , b.length]
}
console.log(getTwoLengths("joe","richard"));


// ----- F. getMultipleLengths
//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(arr){
  return arr.map(string => string.length)// .map() method creates a new array with a results of a provided function on calling the elements in the array . 
}
console.log(getMultipleLengths(["raymond","transport","jamie","fox"]));


// ----- G. maxOfThree

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

function maxOfThree(x , y, z) {
  return Math.max(x , y, z)// math.max() method is used to find the largest number . 
}
console.log(maxOfThree(6,9,12,3));

// ----- H. printLongestWord
//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(arr) {
  let longestWord = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i].length > longestWord.length){
      longestWord = arr[i];
    }
  }
  return longestWord

}
console.log(printLongestWord([ "racializations","raymond","transport","jamie","fox","photosynthesis"]));


//-------------------------OBJECTS-----------------------//

// ----- A. Make a user object

//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
let user = {
  name: "James Cooper",
  email:"zubss221@gmail.com",
  age:26,
  purchased: []
}


// ----- B. Update the user

//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "cooper007@gmail.com"


//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

newAge = user.age++



// C. Adding keys and values
//You have decided to add your user's location to the data that you want to collect.
//Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Japan"



// -------- D. Shopaholic!
//Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates")

//Our user has purchased an item! They have purchased some "peace of mind". 
//Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind")

//Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs")

//Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);


// ------ E. Object-within-object

//Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name:"Kayla Banks",
  age:40,
  location: "India",
  purchased : []
}
console.log(user);

// 2. Console.log just the friend's name
console.log(user.friend.name);

// 3. Console.log just the friend's location
console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
user.friend.age = 55
console.log(user.friend);

// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring")
console.log(user.friend);

// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte")
console.log(user.friend);

// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);




//F. Loops
//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.

for (let i = 0 ;i < user.purchased.length; i++)
  console.log(user.purchased[i]);


//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i = 0 ;i < user.friend.purchased.length; i++)
  console.log(user.friend.purchased[i]);

//------------------- Hungry for More? ----------------//

// ------ Cat Combinator

// 1. Mama cat
//Define an object called cat1 that contains the following properties:
//name
//breed
//age (a number)
//console.log the cat's age
//console.log the cat's breed


//------Solution-------//
let cat1 ={
  name:"mowgli",
  breed: "caucasian",
  age: 10
}
console.log(cat1.age);
console.log(cat1.breed);


// 2. Papa cat
//Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)

//------Solution-------//
let cat2 ={
  name:"ramen",
  breed: "german",
  age: 12
}

//----- 3. Combine Cats!

// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them. 
// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between


//------Solution-------//

function combineCats( mama,papa) {
  let kitten = {
    name: cat1.name + cat2.name,
    age : 1 ,
    breed: cat1.breed + " - " + cat2.breed
  }
  return kitten

}
console.log(combineCats(cat1,cat2));



// -------- 4. Cat brain bender
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// The above console.log is two levels deep of combineCats.
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

//-----------------------Solution------------------//









