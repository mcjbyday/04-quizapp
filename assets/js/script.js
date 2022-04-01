// TO DO
// DONE create timer
// DONE create question objects (prompt, answer 1, answer 2, answer 3, answer 4)
// create score
// create content
// local storage
// enter player name

// hook into document's existing elements
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let highscoreContainer = document.querySelector(".highscore_container");
let timerContainer = document.querySelector(".timer_container");
let main = document.querySelector(".main_container");
let promptContainer = document.querySelector(".prompt_container");
let answersContainer = document.querySelector(".answer_container");
let menuButtonStyle = "font-size: 12pt; color: white; background-color: rgba(82, 27, 107, 0.8); border-radius:5px; border: 1px solid white;"

var timerInSeconds = 60;

startButton = document.createElement("button");

let quizContent = [
    {questionOrder: 0, prompt: "This is the prompt of question 1", altoption1: "A", altoption2: "B", altoption3: "C", correctoption: "Correct"},
    {questionOrder: 1, prompt: "This is the prompt of question 2", altoption1: "A", altoption2: "B", altoption3: "C", correctoption: "Correct"},
    {questionOrder: 2, prompt: "This is the prompt of question 3", altoption1: "A", altoption2: "B", altoption3: "C", correctoption: "Correct"},
    {questionOrder: 3, prompt: "This is the prompt of question 4", altoption1: "A", altoption2: "B", altoption3: "C", correctoption: "Correct"}];
    

startButton.setAttribute("style",menuButtonStyle);
startButton.className = ("menu_button");
startButton.textContent = "Start Game";
promptContainer.appendChild(startButton);

startButton.addEventListener("click", setTime);



function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timerInSeconds--;
        timerContainer.innerText = timerInSeconds;
  
      if(timerInSeconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to change display on page
        // resets the counter
        // secondTag.innerText = "You've run out of time buddy";
      }
  
    }, 100);
  }
