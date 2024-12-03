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
console.log(`Hello my name is ${yourName}`);



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
 
