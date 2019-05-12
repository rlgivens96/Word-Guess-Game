// We start by creating an array of words
var words= ["addams", "morticia", "wednesday", "uncle_fester", "lurch", "pugsley", "thing", "cousin_itt", "grandmama"];

var display = [wordSelection];
var win = wordSelection;
var output ="";
var userLetter="";

// This will generate a random word from the length of array 
var wordSelection = words[Math.floor(Math.random()*9)];

var setup = function () {
    for (var i=0; i< words.length; i++)
    {
        display[i] = "_";
        output = output + display[i];
    }
    document.getElementbyId("hangman").inneHTML = output;
    output ="";

}

var submit = function() {
    output = "";
    userLetter = ("letter").value;
    ("letter").value;

    for (var l=0; l< words.length; l++)
    {
        display[l] = userLetter.toLowerCase();
        win--;
    }
    output = output + display[l] + " ";
}
document.getElementbyId("hangman").innerHTML = output;
output="";
attemptsLeft--;

if (win < 1)
{
    document.getElementbyId("guesses").innerHTML = "Congrats you win!!";
}
else if (attempts < 1)
{
    document.getElementbyId("guesses").innerHTML = "Sorry try again";
}
else
{
    document.getElementbyId("guesses").innerHTML = "You have "
+ attemptsLeft + "guesses left...";
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
              }








