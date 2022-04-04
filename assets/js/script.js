// TO DO
// DONE create timer
// DONE create question objects (prompt, startwer 1, startwer 2, startwer 3, startwer 4)
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
let answerContainer = document.querySelector(".answer_container");
let menuButtonStyle = "font-size: 20pt; color: white; background-color: rgba(82, 27, 107, 0.8); border-radius:20px; border: 1px solid white; padding: 8%;"
let answerButtonStyle = "font-size: 16pt; color: white; background-color: var(--dark3); border-radius:10px; border: 1px solid white; padding: 5%;"

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


// Initialize start button in DOM and set properties
let startButton = document.createElement("button");
startButton.setAttribute("style",menuButtonStyle);
startButton.className = ("menu_button");
startButton.textContent = "Start Game";
promptContainer.appendChild(startButton);

// TO DO make this disappear on click, and instead display question 1?
// on startbutton click, the timer starts currently
// TO DO make this click call the first question
// startButton.addEventListener("click", setTime);

// snippet 
// 
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


// on click, the timer starts currently
function displayQuestion() {
  
  // make a randomized order array for the available answer options
  let ansDispSeq = randomOrderPick();
  // get the answer array from the content file for HTML display
  let as = [quizContent[0].options[ansDispSeq[0]], quizContent[0].options[ansDispSeq[1]], quizContent[0].options[ansDispSeq[2]], quizContent[0].options[ansDispSeq[3]]];
  // loop through question's answer options and display them as selectable buttons
  for (i=0; i < as.length; i++) {
    let answerButton = document.createElement("button");
    answerButton.setAttribute("style", answerButtonStyle);
    answerButton.className = ("ans_button");
    answerButton.textContent = as[i];
    answerContainer.appendChild(answerButton);
  }
}


startButton.addEventListener("click", function (event) {
  setTime(),
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
  
    }, 100);
  }
