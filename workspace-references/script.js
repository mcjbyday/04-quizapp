// DONE make a timer that starts at 60 and goes down to 0
// TODO A 'next button' that will switch to the next object in an array of objects and display each object on the page.
// DONE Then you could change the display on the page when the timer hits 0


var firstTag = document.querySelector("#firsttag");
var secondTag = document.querySelector("#secondtag");
firstTag.innerText = " ";
secondTag.innerText = " ";
var timerInSeconds = 60;
var disp1 = document.querySelector("#objectpropdisplay1");
var disp2 = document.querySelector("#objectpropdisplay2");


let someBooksFoods = [
    {favBook: "Bible",favFood: "Eggs"},
    {favBook: "Communist Manifesto", favFood: "Corn"},
    {favBook: "Twilight", favFood: "Potatos"},
    {favBook: "Animal Farm", favFood: "Prunes"} ]

let currentBookFood = 0;


specialButton.addEventListener("click", nextBookFood)

setTime();


function showBookFood() {
    disp1 = someBooksFoods[currentBookFood].favBook;
    disp2 = someBooksFoods[currentBookFood].favFood;
}

function nextBookFood() {
    currentBookFood++;
    showBookFood();
    if (currentBookFood === someBooksFoods.length) {
        currentBookFood = 0;
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
