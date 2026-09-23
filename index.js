let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = [ 'rock', 'paper', 'scissors'];
  //rock, paper, scissors
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw" ;
  msg.style.backgroundColor = "rgb(2, 20, 33)";
//   msg.classList.remove("pop");

// setTimeout(() => {
//   msg.classList.add("pop");
// }, 10);
}

const playGame = (userChoice) => {
console.log("User choice = ", userChoice );
//generate random values
const compChoice = genCompChoice();
console.log("Computer Choice = ",  compChoice );


const showWinner = (userWin , userChoice  , compChoice ) => {
  if(userWin){
    userScore++;
    userpara.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    comppara.innerText = compScore;
    console.log("You lose!");
    msg.innerText = `You Lose! your ${compChoice} beats ${userChoice}`;
     msg.style.backgroundColor = "Red";
  }
//   msg.classList.remove("pop");

// setTimeout(() => {
//   msg.classList.add("pop");
// }, 10);

}

if(userChoice === compChoice){
  //Draw
  drawGame();
} else {
  let userWin = true;
  if (userChoice === "rock"){
    userWin = compChoice === "paper"? false : true;
  } else if(userChoice === "paper") {
    userWin = compChoice === "scissors"? false : true;
} else {
  //rock scissor
  userWin = compChoice === "rock"? false : true;
}
showWinner(userWin, userChoice, compChoice );
}
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
  const userChoice = choice.getAttribute("id")
  playGame(userChoice);
  });
});