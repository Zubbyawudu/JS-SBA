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







