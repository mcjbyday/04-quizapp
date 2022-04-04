// TO DO
// DONE create timer
// DONE create question objects (prompt, startwer 1, startwer 2, startwer 3, startwer 4)
// create score
// DONE create content
// local storage
// enter player name

// hook into document's existing elements
let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let highscoreContainer = document.querySelector(".highscore_container");
let timerContainer = document.querySelector(".timer_container");
let main = document.querySelector(".main_container");
let promptContainer = document.querySelector(".prompt_container");
let answerContainer = document.querySelector(".answer_container");
let menuButtonStyle = "font-size: 20pt; color: white; background-color: rgba(82, 27, 107, 0.8); border-radius:20px; border: 1px solid white; padding: 8%;"
let answerButtonStyle = "font-size: 16pt; color: white; background-color: var(--dark3); border-radius:10px; border: 1px solid white; margin: 5px; padding: 8%;"
let viewSpacingStartPromptContainer = "font-size: 32pt;font-weight:900;display: flex;flex-direction: column;align-items: center;justify-content: space-around;min-height: 50vh;"
let viewSpacingGameplayPromptContainer = "font-size: 32pt;font-weight:900;display: flex;flex-direction: column;align-items: center;justify-content: space-around;min-height: 15vh;"

let questionCounter = 0;
var timerInSeconds = 60;

// setup prototype datastructure quiz content
let quizContent = [
    {prompt: "This is the prompt of question 1", options: ["Alpha", "Bravo", "Charlie", "Correct"], correctOption: "Correct"}];

// setup datastructure quiz content and prompts FULL
// let quizContent = [
//     {questionOrder: 0, prompt: "This is the prompt of question 1", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"},
//     {questionOrder: 1, prompt: "This is the prompt of question 2", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"},
//     {questionOrder: 2, prompt: "This is the prompt of question 3", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"},
//     {questionOrder: 3, prompt: "This is the prompt of question 4", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"}];

// setup local player storage data to save score from page to page
let playerData = [
  {playerName: "", playerScore: 0}];

// // initialize and set start button parameters
// let quizContent = [
//     {questionOrder: 0, prompt: "This is the prompt of question 1", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"}]

// Initialize promptcontainer spacing 
promptContainer.setAttribute("style",viewSpacingStartPromptContainer);

// Initialize start button in DOM and set properties
let startButton = document.createElement("button");
startButton.setAttribute("style",menuButtonStyle);
startButton.className = ("menu_button");
startButton.textContent = "Start Game";
startButton.id = ("start_game");
promptContainer.appendChild(startButton);

// start timer and display question only
startButton.addEventListener("click", function (event) {
  // adjust promptcontainer spacing for gameplay 
  promptContainer.setAttribute("style",viewSpacingGameplayPromptContainer),
  // kickoff timer 
  setTime(),
  // display question 1 
  displayQuestion();  
});


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
        // secondTag.innerText = "You've run out of time buddy";
        timerContainer.innerText = "Time's up!";
        
        //pseudo code for redirecting someone to a scoreboard page

        //location.href = "./scoreboard.html"
      }
  
    }, 1000);
  }



// on click, the timer starts currently
function displayQuestion() {
  
  //hide the start button on question and timer start;
  document.querySelector('#start_game').setAttribute("style", "display: none;");
  // set the prompt container to the question stem
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

}

function inputFeedback() {

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