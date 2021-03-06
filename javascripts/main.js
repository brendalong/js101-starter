// show snippet save as console-log.sublime-snippet

// <snippet>
// 	<content><![CDATA[
// console.log("${1}", ${2:value});
// ]]></content>
// 	<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
// 	<tabTrigger>console</tabTrigger>
// 	<!-- Optional: Set a scope to limit where the snippet will trigger -->
// 	<!-- <scope>source.python</scope> -->
// </snippet>

// end show snippet

console.log("Hello World");

const greeting = "Hey Chief, you look great today!";
console.log("greeting", greeting);


const hoursInYear = 24 * 365;
console.log("hoursInYear", hoursInYear);


//build on values
const minsInDecade = (hoursInYear * 60) * 10;
console.log("minsInDecade", minsInDecade);


//how many seconds old am I?
let age = 8;
let secondsInYear = hoursInYear * 60 * 60;
let ageInSeconds = secondsInYear * age;
console.log("ageInSeconds", ageInSeconds);


// if older than a value, one is wise, else green
const wiseVal = 35;
if (age > wiseVal){
	console.log("You are very wise");
}else {
	console.log("You are young and green");
}

// toFixed
let myNum = 2.56897654;
let shortNum = myNum.toFixed(2);
console.log("shortNum", shortNum);




///////////////////////////////////////////////////////
// Strings
let phrase = "The quick brown fox jumps over the lazy dog.";
// for demo of find/reg expression
// var phrase = "The lazy brown fox jumps over the lazy dog.";

// show difference of number as string and as number

// In JavaScript, the first position of a string (index) is 0, like arrays
console.log("T", phrase.indexOf("T"));
console.log("x", phrase.indexOf("x"));

let phrase2 = "How now brown cow?";
let position = phrase2.charAt(8);
console.log(position); // Will console.log "b"


let phrase3 = "The lazy dog";
let newPhrase3 = phrase3.replace("lazy", "excited");
console.log(newPhrase3);

let phrase4 = "The lazy dog likes the weird fox";
let newPhrase4 = phrase4.replace(/o/g, "i");
console.log(newPhrase4);

// DOM interaction
let phraseString = document.getElementById("phrase").innerHTML;
console.log("phraseString", phraseString);

// Add to the current element
let phrase = document.getElementById("phrase");
phrase.innerHTML += " And this is a NEW phrase";
//try it with template literal
//phrase.innerHTML = `${phrase}, and this is the NEW phrase`;

let addToDOM = document.getElementById("demo")
addToDOM.innerHTML = "Hi there, NSS ninjas."

let classStuff = document.getElementsByClassName("lotsOfClass");
//creates an HTML collection of items. Looks like array but does not act like one.
console.log("classStuff", classStuff);
console.log("The second one", classStuff[1]);



///////////////////////////////////////////////////////
// lets talk arrays - storage container
let myJunkDrawer = [3, "dime", true, null, "28"];
console.log("myJunkDrawer", myJunkDrawer);
// index starts with zero
console.log("second item", myJunkDrawer[1]);

myJunkDrawer.push("baseball");
console.log("myJunkDrawer after push", myJunkDrawer);
// Add new items to the beginning of an array
myJunkDrawer.unshift("what is unshift");
console.log("myJunkDrawer after unshift", myJunkDrawer);
let thing = myJunkDrawer.pop();
console.log("thing", thing);
console.log("myJunkDrawer after pop", myJunkDrawer);


///////////////////////////////////////////////////////////
// Objects
let songArray = []; //square brackets
let myObject = {}; // curly braces

let song = {
  title: "Call Me Maybe",
  artist: "Carley Rae Jepsen",
  album: "Cool Songs",
  awards: ["big award", "one hit"], // value is an array
  type: {    //value is another object
    style: "pop",
    listenability: "none",
    producers: {
      name: "Freddie Jones",
      name2: "Sally Smith"
    }
  },
  listAwards: function() {
    console.log("Show Me The Awards");
  }
}
songArray.push(song);
// how to invoke the song's listAwards function?
songArray[0].listAwards();

let mindBlown = "hidden Object";
console.log("Window", window );

// find out the key (name) for items in object
console.log("Object.keys(song)", Object.keys(song));



//////////////////////////////////////////////////////////////////
// Loops

// Write a for loop that increments the counter variable by 10 each time, and displays the value.
for (let i = 0; i < 100; i += 10) {
  console.log("count by ten", i);
};

//difference of var and let: inside and outside for loop.

// Write a for loop that divides the counter variable by 2 each time, and displays the value.
for (var i = 100; i > 1; i = i / 2) {
  console.log("div by 2", i);
};

// Augment the loop to insert each new value into an array
var halfVals = [];
for (var i = 100; i > 1; i = i / 2) {
  halfVals.push(i);
};
console.log("halfVals", halfVals);


// Write a loop that starts at 100 and decrements a variable by 1. 
// If the number is even, add the number to the beginning of an array, 
// else add it to the end of the array.

let evenOdds = [];
for (var i = 100; i >= 0; i--) {
  if (i % 2 === 0) {
    evenOdds.unshift(i);
  } else {
    evenOdds.push(i);
  }
};
console.log("evenOdds with >=", evenOdds );


/////////////////////////////////////////////////////////////////////////
// Switch statement

// switch (expression) {
//   case value1:
//     //Statements executed when the result of expression matches value1
//     [break;]
//   case value2:
//     //Statements executed when the result of expression matches value2
//     [break;]
//   ...
//   case valueN:
//     //Statements executed when the result of expression matches valueN
//     [break;]
//   default:
//     //Statements executed when none of the values match the value of the expression
//     [break;]
// }

let value = 10;
switch (true) {
  case value < 1:
    console.log("Small number");
    break
  case value < 5:
    console.log("Medium number");
    break
  case value < 15:
    console.log("Large number");
    break //without break it will log "Dunno" also
  default:
    console.log("Dunno");
}

// This is the same as:
// if( value < 1 ) {
//   console.log("Small number");
// } else if( value < 5 ) {
//   console.log("Medium number");
// } else if( value < 15 ) {
//   console.log("Large number");
// } else {
//   console.log("Dunno");
// }














