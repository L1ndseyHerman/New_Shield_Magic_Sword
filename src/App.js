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
      <h1>Rock-Paper-Scissors</h1>
      <button disabled={disabledButtons[0]} onClick={() => {setUserChoice("Rock");
        setDisabledButton([true, false, false]);}}>Rock</button>
      <button disabled={disabledButtons[1]} onClick={() => {setUserChoice("Paper");
        setDisabledButton([false, true, false]);}}>Paper</button>
      <button disabled={disabledButtons[2]} onClick={() => {setUserChoice("Scissors");
        setDisabledButton([false, false, true]);}}>Scissors</button>
      <p>{paragraphText}</p>
      <p id="thePar">Try to beat the computer at Rock-Paper-Scissors. You cannot make the same choice more than
      once in a row.</p>
      <p>And check out <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
      <footer id="theFooter">This app is a PWA now! Updated 05/17/21</footer>
    </main>
  );
}

export default App;
