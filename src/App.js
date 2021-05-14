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



function App() {
  /*  
    This only updates things if the state changes, bec useState.
    For example, if you keep pressing the Rock button,
    it will check "Is Rock === Rock?", and since it is, no computer number is generated, the DOM
    doesn't update, etc. But if you press Paper, "Is Rock===Paper?" is false, and so the stuff updates.

    To make Rock update every button press, do useEffect.
  */
    const [userChoice, setUserChoice] = useState("An Error");
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
        <button onClick={() => setUserChoice("Rock")}>Rock</button>
        <button onClick={() => setUserChoice("Paper")}>Paper</button>
        <button onClick={() => setUserChoice("Scissors")}>Scissors</button>
        <p>{paragraphText}</p>
        <p id="thePar">Try to beat the computer at Rock-Paper-Scissors. You cannot make the same choice more than
        once in a row.</p>
        <p>And check out <a id="aLink1" href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
        <footer id="theFooter">This app is a PWA now! Updated 05/14/21</footer>
      </main>
    );
}

export default App;
