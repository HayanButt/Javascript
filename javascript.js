//Example of a comment
/*Example of
    a multiline comment */

//Example of storing variables with each method

var myName = "Hayan";
//Changing contents of myName
myName = "Hayyyyaaaan";
let lastName = "Butt";
const number = "42";
//outputting variables to the console
console.log(myName);
console.log(lastName);
console.log(number);

//difference between declaring and assigning a variable
//declaring variable 'a':
var a;
//outputting variable a to the console
console.log(a);
//assigning:
var b = 2;
//recalling variable 'a' and assigning data to it
a = 7;
//outputting variable a to the console
console.log(a);

//Maths functions
//Addition
var myVar1 = 1 + 1;
//Substraction
var myVar2 = 2 - 1;
//Multiplication
var myVar3 = 2 * 2;
//Division
var myVar4 = 10 / 5;
//Incrementation
var myVar5 = 34;
myVar5++
//Decrementation
var myVar6 = 34;
myVar6--
//Finding a remainder
var remainder;
remainder = 11 % 3; //gives 2 - used to determine if a number is even or odd

/*augmented math operations:
a = a + 12 is the same as */
a += 12;
b -= 5;

var c = 3
c *= 8

var d = 6
d /= 3

//Declare string variable
var firstname = "hayan"
var lastname = "butt"

//quotations inside a string using an escape character
var string = "hello \"there\""
console.log(string);

//quoting strings with single quotation
var string2 = 'hello "there"' //achieves the same thing as the escape character

/* other escape methods
\' - escaping a single quote
\" - escaping a double quote
\\ - escaping a backslash
\n - escaping a new line
\r - escaping a carriage return
\t - escaping a tab
\b - escaping a backsapce
\f - escaping a form feed
*/

var myVar = "Firstline\n\t\\Secondline\nThirdline";

//concatinating strings with plus sign
var strings = "first " + "second";
//augmented addition
var strings = "first";
strings += "second";
//two different variables together
var firststring = "this is the first string ";
var secondstring = "and this is the second";
string = firststring + secondstring;

//finding the length of a string
var nameLength = "0";
var name = "hayan";

nameLength = name.length;
console.log(nameLength); //shows character length, not the word length

/*bracket notation
- using bracket notation to find the specific letter in a string
*/
var firstName = "Hayan";
var firstLetter = "";
var thirdLetter = "";

firstLetter = firstName[0]; //JS starts counting from 0
console.log(firstLetter);
thirdLetter = firstName[2];
console.log(thirdLetter);

//Strings are immutable - cannot be altered once created

//bracket notation to find the last letter of a string
var firstName = "hayan";
var lastLetter = firstName[firstName.length - 1];

//bracket notation to find the nth to last number

//second to last letter
var firstName = "hayan";
var lastLetter = firstName[firstName.length - 2];
//third to last letter
var firstName = "hayan";
var lastLetter = firstName[firstName.length - 3];

//storing multiple values in arrays

var theArray = ["hello", 21];

//nested arrays - array within an array

var theArrays = [["first", 1], ["second", 2]];

// Accessing array data with indexes

var ourArray = [1,2,3];
var ourData = ourArray[0]; //will output 1

//modifying array data with indexes
var ourArray = [1,2,3];
ourArray[1] = 69; //will replace '2' in the array with '69'

//multi-dimentional arrays with indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
//targetting the number 8
var myData = myArray[2][1]; //first number points to the array, second number targets the values in the array chosen

//manipulating arrays with push() - adds to the end of an array

var ourArray = ["hayam", "butt", 21];
ourArray.push(["hello","world"]); //makes the array ["hayam", "butt", 21, ["hello", "world"]]

//manipulating arrays with pop() - removes the final element from an array
var ourArray = [1,2,3];
var ourNewArray = ourArray.push(); //variable contains the removed bit of the original array
console.log(ourNewArray);

//manipulating arrays with shift() - removes the first element from an array

var myArray = ["one", "two", "three"];
var myNewArray = myArray.shift();
console.log(myNewArray);

//manipulating arrays with unshift() - adds to the beginning of an array