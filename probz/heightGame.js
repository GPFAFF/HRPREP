
function playerScore(age, height) {
  var age = prompt("Please enter your age");
  var height = prompt("Please enter you height");
  score = height + (age * 5); 
  return score;
}

function playerOne() {
  var playerOneScore = playerScore()
  return playerOneScore;
}

function playerTwo() {
  var playerTwoScore = playerScore();
  return playerTwoScore;
}

function playerThree() {
  var playerThreeScore = playerScore();
  return playerThreeScore;
}

//playerThree();

function checkWinner(playerOneScore, playerTwoScore) {
  console.log(playerOneScore);
  console.log(playerTwoScore);
  playerOne();
  playerTwo();
  if (playerOneScore === playerTwoScore) {
    return "Both kids are the same age";
  } else if (playerOneScore > playerTwoScore) {
    return "Player One Wins"
  } else {
    return "Player Two Wins";
  }
}
checkWinner(playerOne, playerTwo);
