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
let startwersContainer = document.querySelector(".startwer_container");
let menuButtonStyle = "font-size: 20pt; color: white; background-color: rgba(82, 27, 107, 0.8); border-radius:20px; border: 1px solid white; padding: 8%;"

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

// initialize and set start button parameters
// let quizContent = [
//     {questionOrder: 0, prompt: "This is the prompt of question 1", altOption1: "Alpha", altOption2: "Bravo", altOption3: "Charlie", correctOption: "Correct"},


// // Initialize start button in DOM and set properties
// let startButton = document.createElement("button");
// startButton.setAttribute("style",menuButtonStyle);
// startButton.className = ("menu_button");
// startButton.textContent = "Start Game";
// promptContainer.appendChild(startButton);

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
  // TO DO will iterate through this list
  // let 
  // let q = quizContent[0].prompt;
  let ansDispSeq = randomOrderPick();
  let as = [quizContent[0].options[ansDispSeq[0]], quizContent[0].options[ansDispSeq[1]], quizContent[0].options[ansDispSeq[2]], quizContent[0].options[ansDispSeq[3]]];
  // let startwerButton = document.createElement("button");
  // console.log(as);
  // startwerButton.setAttribute("style",menuButtonStyle);
  // startwerButton.className = ("menu_button");
  // startwerButton.textContent = "Start Game";
  // promptContainer.appendChild(startButton);
}


// startButton.addEventListener("click", function () {
//   setTime,
//   displayQuestion;  
// });

// function displayQuestion() {

// }

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//         timerInSeconds--;
//         timerContainer.innerText = timerInSeconds;
  
//       if(timerInSeconds <= 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to change display on page
//         // resets the counter
//         // secondTag.innerText = "You've run out of time buddy";
//         timerContainer.innerText = "Time's up!";
        
//         //pseudo code for redirecting someone to a scoreboard page

//         //location.href = "./scoreboard.html"
//       }
  
//     }, 100);
//   }
