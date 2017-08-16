"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'];

var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'pink';


// TODO: change this to your favorite color from the list

console.log("Random color picked is : " + color);


// TODO: Create a block of if/else statements to check for every color except indigo and violet.
if (color == 'red') {
    console.log(color + " like a rose");
} else if (color == 'orange') {
 console.log(color + " like the grand canyon");
} else if (color == 'yellow'){
    console.log(color + " like a canary");
} else if (color == 'green'){
    console.log(color + " like a frog");
} else if (color == 'blue') {
    console.log(color + " like the sky");
} else {
    console.log("I do not know anything by that color");
}

var message = (color == favorite) ? "This is my favorite color." : "This is not my favorite color.";


console.log(message);

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.
// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
