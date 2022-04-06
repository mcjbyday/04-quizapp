// in HTML will need ids for following objects score-list and score-count
var scoreList = document.querySelector("#score_list");

var scores = [];

initializeScoreboard();

// inject / display the score list into HTML
function displayScores() {
  // makes sure the innerHTML is set to a blank string to start
  scoreList.innerText = "";
  // sort the scores from highest score to lowest score
  scores.sort((a,b) => b.playerScore - a.playerScore);
  // iterates through the score list
  for (var i = 0; i < scores.length; i++) {
    // declare the particular list item from the todos array
    var player = scores[i].playerName;
    var score = scores[i].playerScore;
    // for that list item make the list item in the DOM
    var li = document.createElement("li");
    var liSpanPlayer = document.createElement("span");
    var liSpanScore = document.createElement("span");
    // populate it's text as array value
    liSpanPlayer.textContent = player;
    liSpanScore.textContent = score;
    // li.textContent = player + ": " + score;
    // set a list item's custom data attribute to item number
    
    // find of new addition
    var index = scores.findIndex(element => {
        if (element.playerName === scores[i].playerName && element.playerScore === scores[i].playerScore) {
        return true;
        }
        return false;
    });
    li.setAttribute("data-index", index);
    // append the created items to their parents in the DOM
    scoreList.appendChild(li);
    li.appendChild(liSpanPlayer);
    li.appendChild(liSpanScore);
  }
}

// check local storage to see if there's some data to grab and display
function initializeScoreboard() {
  // check local storage to see if there's some data to grab and display
  var storedScores = JSON.parse(localStorage.getItem("playerData"));
  // if there is something, display it If not, go on with rendering.
  if (storedScores !== null) {
    scores = storedScores;
    displayScores();
  }
  else {
    scoreList.innerText = "No scores have been recorded at this time.";
  }
  
}