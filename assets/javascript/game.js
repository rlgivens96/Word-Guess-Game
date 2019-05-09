// We start by creating an array of words
var words = [
    "javascript",
    "html",
    "css",
    "bootstrap",
    "vanderbilt",
    "bootcamp"
];

// This will generate a random word from the length of array 
var word = words[Math.floor(Math.random()*words.length)]

// This will loop around creating the empty spaces for the word therefore setting up the asnwer array
var answerArray = [];
for (var i=0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remaingLetters = word.length;

// This is the game loop 
while (remainingLetters > 0) {
// She player the progress 
    alert(answerArray.join("  "));
// User enters a guess
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // user exits the game loop
        break;
} else if (guess.length !=== 1) {
    alert("Please enter a single letter.");
} else {
    // This is where the game gets updated with the new stats
// We are creating a new loop for a new variable which is h
    for(var h=0; h < word.length; h++) {  
// this is representing the letter we are looking at matches the players guess
if (word[h] === guess) {
// if it does then we use this to update the asnwer array with the current guess
    answerArray[h] = guess; 
    remainingLetters--;
        }
    }
}
}

// This is the message that lets the user know they won
alert(answerArray.join(" "));
alert("CONGRATS!!! The answer was " + word);



