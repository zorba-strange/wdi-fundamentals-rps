////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//hold player's moves
var playersMoves = {}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move === null || move === undefined) {
      return getInput();
    } else {
      playersMoves.user = move
      return playersMoves
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === null || move === undefined) {
      return randomPlay();
    } else {
      playersMoves.comp = move
      return playersMoves
    }
}

function getWinner(playersMoves) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    //show who has choosen what
    console.log("The Computer has thrown " + playersMoves.comp);
    console.log("The User has thrown " + playersMoves.user);
    if (playersMoves.user === playersMoves.comp){
      console.log("It is a tie!");
      return "tie";
    }
    //check to see if the computer has won
    if (playersMoves.user === "rock" && playersMoves.comp === "paper") {
      console.log("The Computer has won this round!");
      return "comp";
    } else if (playersMoves.user === "paper" && playersMoves.comp === "scissors") {
      console.log("The Computer has won this round!");
      return "comp";
    } else if (playersMoves.user === "scissors" && playersMoves.comp === "rock") {
      console.log("The Computer has won this round!");
      return "comp";
      //If not, then the user has won.
    } else {
      console.log("The User has won this round!")
      return "user";
    }
  }

function playToFive() {
  //track wins and ties
  var user = 0
  var comp = 0
  //play until someone gets five wins
  while(true){
    getPlayerMove(getInput());
    getComputerMove(randomPlay());
    //check too see if the user won
    if(user === 5) {
      gameWinner = "User";
      break;
    }
    // check to see if the comptuer won the round
    if (comp === 5) {
      gameWinner = "Computer";
      break;
    }
    //track round winner and the get the game winner
    var roundWinner = getWinner(playersMoves);
    var gameWinner;
    //check to see if user or computer have won the round and update their number of wins
    if (roundWinner === "user") {
      user += 1;
      console.log("User " + user + " |  Comptuer " + comp);
    } else if (roundWinner === "comp") {
      comp += 1;
      console.log("User " + user + " |  Comptuer " + comp);
    }
  }
  //print of the winner of the game
  console.log("The Winner of the Rock Paper Scissors is the " + gameWinner);
}

console.log(playToFive());
