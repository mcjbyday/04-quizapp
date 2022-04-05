// TO DO
// track scoring
// local storage - update only at end of quiz
// scoreboard prototype - render DOM using local storage
// enter player name

// POLISH
// scoreboard styling
// timer display update for loss of time

// DONE
// create correct selections 
// update timer for incorrect answers
// create timer
// create question objects (prompt, startwer 1, startwer 2, startwer 3, startwer 4)
// content prototype
// write content

// hook into document's existing elements
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let highscoreContainer = document.querySelector(".highscore_container");
let timerContainer = document.querySelector(".timer_container");
let main = document.querySelector(".main_container");
let promptContainer = document.querySelector(".prompt_container");
let answerContainer = document.querySelector(".answer_container");
let menuButtonStyle = "font-size: 18pt; color: white; background-color: var(--dark3); border-radius:20px; border: 1px solid white; padding: 8%;";
let answerButtonStyle = "font-size: 14pt; color: white; background-color: var(--dark3); border-radius:10px; border: 1px solid white; margin: 5px; padding: 2%;";
let viewSpacingStartPromptContainer = "font-size: 32pt;font-weight:900;display: flex;flex-direction: column;align-items: center;justify-content: space-around;min-height: 50vh;";
let viewSpacingGameplayPromptContainer = "font-size: 32pt;font-weight:900;display: flex;flex-direction: column;align-items: center;justify-content: space-around;min-height: 15vh;";

// setup prototype datastructure quiz content
let quizContent = [
    {prompt: "Commonly used data types DO NOT include:", options: ["strings", "booleans", "alerts", "numbers"], correctOption: "alerts"},
    {prompt: "The condition in an if / else statement is enclosed within ____.", options: ["quotes", "curly braces", "parentheses", "square brackets"], correctOption: "parentheses"},
    {prompt: "Arrays in JavaScript can be used to store _____.", options: ["numbers and strings", "other arrays", "booleans", "any of these"], correctOption: "any of these"},
    {prompt: "A very useful tool used during development and debugging for printing content to the debugger is:", options: ["JavaScript", "terminal / bash", "for loops", "console.log"], correctOption: "console.log"}
  ];

let questionCounter = 0;
let questionTotal = quizContent.length;
console.log(questionTotal);
var timerInSeconds = 60;

// setup local player storage data to save score from page to page
let playerData = [
  {playerName: "", playerScore: 0}];

// Initialize promptcontainer spacing 
promptContainer.setAttribute("style",viewSpacingStartPromptContainer);

// Initialize start button in DOM and set properties
let introContent = document.createElement("p");
introContent.setAttribute("style", "font-size: 16pt; margin: 5px; padding: 2%;");
introContent.id = ("intro_content");
introContent.innerText = "Try to complete this quiz in 60 seconds. Incorrect answers will subtract 10 seconds. Good luck!";
promptContainer.appendChild(introContent);


// Initialize start button in DOM and set properties
let startButton = document.createElement("button");
startButton.setAttribute("style",menuButtonStyle);
startButton.className = ("menu_button");
startButton.textContent = "Start Game";
startButton.id = ("start_game");
answerContainer.appendChild(startButton);


startButton.addEventListener("click", function (event) {
  // adjust promptcontainer spacing for gameplay 
  document.querySelector('#start_game').setAttribute("style", "display: none;"),
  document.querySelector('#intro_content').remove();
  promptContainer.setAttribute("style",viewSpacingGameplayPromptContainer)
  playGame();
});

// start timer and display question one
function playGame() {
  // kickoff timer 
  setTime();
  // display question content
  displayQuestion();
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timerInSeconds--;
        timerContainer.innerText = timerInSeconds;
      if(timerInSeconds <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to change display on page
        // resets the counter
        timerContainer.innerText = "Time's up!"; 
        //pseudo code for redirecting someone to a scoreboard page
        //location.href = "./scoreboard.html"
      }
    }, 1000);
  }

// on click, the timer starts currently
function displayQuestion() {
  // set the prompt container to the question stem
  console.log("question number is " + questionCounter);
  promptContainer.innerText = "";
  promptContainer.innerText = quizContent[questionCounter].prompt;
  // make a randomized order array for the available answer options
  let ansDispSeq = randomOrderPick();
  // get the answer array from the content file for HTML display
  let as = [quizContent[questionCounter].options[ansDispSeq[0]], quizContent[questionCounter].options[ansDispSeq[1]], quizContent[questionCounter].options[ansDispSeq[2]], quizContent[questionCounter].options[ansDispSeq[3]]];
  // loop through question's answer options and display them as selectable buttons
  for (i=0; i < as.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.setAttribute("style", answerButtonStyle);
    answerButton.className = ("answer_item");
    answerButton.textContent = as[i];
    answerContainer.appendChild(answerButton);
  }
  inputFeedback();
}


function inputFeedback() {
  let ans = document.querySelectorAll('.answer_item');
  console.log("inputFeedback");
  // add event listeners to all the answer options, isDisplaying correct if they're correct, else not correct
  for (i = 0; i < ans.length; i++) {
    ans[i].addEventListener("click", function (event) {
      console.log(event.target);
      console.log(event.target.innerText);
      if (event.target.innerText === quizContent[questionCounter].correctOption) {
        console.log("that's correct mang");
        questionCounter++;
        hideQuestionSetNext();
      }
      else if (event.target.innerText != quizContent[questionCounter].correctOption) {
        console.log("not correct mang :(");
        timerInSeconds = timerInSeconds - 10;
        questionCounter++;
        hideQuestionSetNext();
      }
    });
  }
}

function storeScores () {
  // localStorage.setItem("scores", JSON.stringify(FOO)); // stringify a whole object

}

function hideQuestionSetNext() {
  let ans = document.querySelectorAll('.answer_item');
  ans.forEach(function(items) {
    items.remove();
  });
  if (questionCounter === questionTotal) {
    //pseudo code for redirecting someone to a scoreboard page
    //location.href = "./scoreboard.html"
    console.log("game over fam");
  }
  else {
    displayQuestion();
  }
}
  

function randomOrderPick() {
  let randOrder = [];
  let startOrder = [0,1,2,3];
  for (i = 0; i < 4; i++) {
    randomNumber = Math.floor(Math.random()*startOrder.length);
    // console.log("iteration" + i + "randomnumber =\n" + randomNumber);
    // console.log(randomNumber);
    randOrder.push(startOrder[randomNumber]);
    // console.log("iteration" + i + "randomOrder =\n"); 
    // console.log(randOrder); 
    startOrder.splice(randomNumber, 1);
    // console.log("iteration" + i + "startOrder =\n" + startOrder); 
    // console.log(startOrder); 
  }
  randOrder = randOrder.join("");
  return randOrder;
}