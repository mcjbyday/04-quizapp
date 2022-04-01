// DONE make a timer that starts at 60 and goes down to 0
// DONE A 'next button' that will switch to the next object in an array of objects and display each object on the page.
// DONE Then you could change the display on the page when the timer hits 0
// use local storage to contain your scores
// potential secondary 'end game' page that leverages grab local storage to display results 

// pattern for adding elements via selctors
// doc.create
// set the content
// append it to the right parent


var firstTag = document.querySelector("#firsttag");
var secondTag = document.querySelector("#secondtag");
firstTag.innerText = " ";
secondTag.innerText = " ";
var timerInSeconds = 60;
var disp1 = document.querySelector("#objectpropdisplay1");
var disp2 = document.querySelector("#objectpropdisplay2");
var specialButton = document.querySelector("#special-button");
var startButton = document.querySelector("#start-button");

surpriseText = document.createElement("h3");


let someBooksFoods = [
    {favBook: "Bible", favFood: "Eggs"},
    {favBook: "Communist Manifesto", favFood: "Corn"},
    {favBook: "Twilight", favFood: "Potatos"},
    {favBook: "Animal Farm", favFood: "Prunes"} ];

let currentBookFood = 0;

showBookFood();

startButton.addEventListener("click", setTime)

// setTime();

specialButton.addEventListener("click", nextBookFood);

function gameOver() {
    
    surpriseText.innerText = "THAT'S A WRAP JACK";
    document.body.appendChild(surpriseText);
}

function showBookFood() {
    if (someBooksFoods[currentBookFood] != undefined) {
        disp1.innerText = someBooksFoods[currentBookFood].favBook;
        disp2.innerText = someBooksFoods[currentBookFood].favFood;
    }
}

function nextBookFood() {
    currentBookFood++;
    showBookFood();
    if (currentBookFood === (someBooksFoods.length - 1)) {
        // neverending version
        // currentBookFood = 0;
        //  version with finality
        gameOver();
        specialButton.setAttribute("style","display:none;")

    }
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timerInSeconds--;
      firstTag.innerText = timerInSeconds + " seconds left on this timer fam.";
  
      if(timerInSeconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to change display on page
        // resets the counter
        secondTag.innerText = "You've run out of time buddy";
      }
  
    }, 100);
  }
