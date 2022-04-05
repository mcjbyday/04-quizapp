// TO DO
// create correct selections 
// create scoring
// create content
// local storage
// enter player name

// DONE
// create timer
// create question objects (prompt, startwer 1, startwer 2, startwer 3, startwer 4)
// content prototype

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



// setup prototype datastructure quiz content
let quizContent = [
    {prompt: "This is the prompt of question 1", options: ["Alpha", "Bravo", "Charlie", "Correct"], correctOption: "Correct"},
    {prompt: "This is the prompt of question 2", options: ["Delta", "Echo", "Foxtrot", "Correct"], correctOption: "Correct"}];

let questionCounter = 0;
let questionTotal = quizContent.length;
console.log(questionTotal);
var timerInSeconds = 60;
let isDisplaying = false;

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
  document.querySelector('#start_game').setAttribute("style", "display: none;"),
  promptContainer.setAttribute("style",viewSpacingGameplayPromptContainer),
  isDisplaying = true,
  playGame();
});

function playGame() {
  // kickoff timer 
  setTime();
  // isDisplaying = true;
  displayQuestion();
  inputFeedback(); 
  // hideQuestion();
  
  // console.log("game over fam")
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
        // secondTag.innerText = "You've run out of time buddy";
        timerContainer.innerText = "Time's up!";
        
        //pseudo code for redirecting someone to a scoreboard page
        //location.href = "./scoreboard.html"
      }
  
    }, 1000);
  }


// on click, the timer starts currently
function displayQuestion() {
  if (isDisplaying === false) {
    return;
  }
  // set the prompt container to the question stem
  console.log("question number is " + questionCounter);
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
  isDisplaying = true;
}


function inputFeedback() {
  if (isDisplaying === true) {
    let ans = document.querySelectorAll('.answer_item');
    // console.log(ans);
    // add event listeners to all the answer options, isDisplaying correct if they're correct, else not correct
    for (i=0;i < ans.length; i++) {
      ans[i].addEventListener("click", function (event) {
        console.log(event.target);
        console.log(event.target.innerText);
        if (event.target.innerText === quizContent[questionCounter].correctOption) {
          console.log("that's correct mang");
          questionCounter++;
          hideQuestion();
        }
        else if (event.target.innerText != quizContent[questionCounter].correctOption) {
          console.log("not correct mang :(");
          questionCounter++;
          hideQuestion();
        }
      });
    }
  }
}

function hideQuestion() {
  if (isDisplaying === true) {
    promptContainer.innerText = "Next question...";
    let ans = document.querySelectorAll('.answer_item');
    ans.forEach(function(items) {
      items.setAttribute("style", "display: none;");
    });
    isDisplaying = false;
    return;
  }
  isDisplaying = true;
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