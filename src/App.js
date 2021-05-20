import React, { useState } from 'react';
import './App.css';

function makeComputerChoice()
{
  const computerNumber = Math.floor(Math.random() * 3); 

  if (computerNumber === 0)
  {
    return "Rock";
  }
  else if (computerNumber === 1)
  {
    return "Paper";
  }
  else 
  {
    return "Scissors";
  }
}

function checkWinLooseTie(userChoice, computerChoice)
{
  if (userChoice === "Rock" && computerChoice === "Rock")
  {
    return "Tie.";
  }
  else if (userChoice === "Rock" && computerChoice === "Paper")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Rock" && computerChoice === "Scissors")
  {
    return "Player1 wins!";
  }

  else if (userChoice === "Paper" && computerChoice === "Rock")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Paper" && computerChoice === "Paper")
  {
    return "Tie.";
  }
  else if (userChoice === "Paper" && computerChoice === "Scissors")
  {
    return "Computer wins!";
  }

  else if (userChoice === "Scissors" && computerChoice === "Rock")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Scissors" && computerChoice === "Paper")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Scissors" && computerChoice === "Scissors")
  {
    return "Tie.";
  }

  return "This is an error. Click a button to start a game.";
}

function App() 
{
  const [userChoice, setUserChoice] = useState("An Error");
  const [disabledButtons, setDisabledButton] = useState([false, false, false]);
  var paragraphText = "";

  if (userChoice !== "An Error")
  {
    const computerChoice = makeComputerChoice();
    const winLooseTieText = checkWinLooseTie(userChoice, computerChoice);
    paragraphText = "Player1 chose " + userChoice +
     " and Computer chose " + computerChoice + ". " + winLooseTieText;
  }

  return (
    <main>   
      <div id="whereIsTheOtherDiv">
        <h1>Rock-Paper-Scissors</h1>
        <button id="shield" disabled={disabledButtons[0]} onClick={() => {setUserChoice("Rock");
          setDisabledButton([true, false, false]);}}>Rock</button>
        <button id="magic" disabled={disabledButtons[1]} onClick={() => {setUserChoice("Paper");
          setDisabledButton([false, true, false]);}}>Paper</button>
        <button id="sword" disabled={disabledButtons[2]} onClick={() => {setUserChoice("Scissors");
          setDisabledButton([false, false, true]);}}>Scissors</button>
        <p>{paragraphText}</p>
        <p id="thePar">This game is in-between versions. Check out version 
          one <a href="https://github.com/L1ndseyHerman/New_Shield_Magic_Sword/tree/Version-1-Branch">
          Here</a>.</p>
        <p>And check out <a href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
        <footer id="theFooter">This is a React JS Progressive Web App. Updated 05/19/21.</footer>
      </div>
    </main>
  );
}

export default App;
