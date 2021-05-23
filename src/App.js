import React, { useState, useEffect } from 'react';
import './App.css';

function makeComputerChoice()
{
  const computerNumber = Math.floor(Math.random() * 3); 

  if (computerNumber === 0)
  {
    return "Shield";
  }
  else if (computerNumber === 1)
  {
    return "Magic";
  }
  else 
  {
    return "Sword";
  }
}

function checkWinLooseTie(userChoice, computerChoice)
{
  if (userChoice === "Shield" && computerChoice === "Shield")
  {
    return "Tie.";
  }
  else if (userChoice === "Shield" && computerChoice === "Magic")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Shield" && computerChoice === "Sword")
  {
    return "Player1 wins!";
  }

  else if (userChoice === "Magic" && computerChoice === "Shield")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Magic" && computerChoice === "Magic")
  {
    return "Tie.";
  }
  else if (userChoice === "Magic" && computerChoice === "Sword")
  {
    return "Computer wins!";
  }

  else if (userChoice === "Sword" && computerChoice === "Shield")
  {
    return "Computer wins!";
  }
  else if (userChoice === "Sword" && computerChoice === "Magic")
  {
    return "Player1 wins!";
  }
  else if (userChoice === "Sword" && computerChoice === "Sword")
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
  var [playerOneHealth, setPlayerOneHealth] = useState(10);
  var [computerHealth, setComputerHealth] = useState(10);

  //  Gets it from local, temp browser storage, or something.
  React.useEffect(() => {
    const playerOneStoredHealth = Number(localStorage.getItem("playerOneHealth") || 10)
    setPlayerOneHealth(playerOneStoredHealth)
  }, [])

  React.useEffect(() => {
    localStorage.setItem("playerOneHealth", playerOneHealth)
  }, [playerOneHealth])

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
        <h1>Shield-Magic-Sword</h1>
        <div id="buttonsAndDescriptionsDiv">
          <button id="shield" disabled={disabledButtons[0]} onClick={() => {setUserChoice("Shield");
            setDisabledButton([true, false, false]); setPlayerOneHealth(p1h => p1h - 1)}}>Shield</button>
          <label>Blocks two physical damage.</label>
          <button id="magic" disabled={disabledButtons[1]} onClick={() => {setUserChoice("Magic");
            setDisabledButton([false, true, false]);}}>Magic</button>
          <label>Deals one magic damage.</label>
          <button id="sword" disabled={disabledButtons[2]} onClick={() => {setUserChoice("Sword");
            setDisabledButton([false, false, true]);}}>Sword</button>
          <label>Deals two physical damage.</label>
        </div>
        <div id="healthAndTurnInfoDiv">
          <p id="playerOneHealth">Player1 health: {playerOneHealth}</p>
          <p id="computerHealth">Computer health: {computerHealth}</p>
        </div>
        <br/>
        <br/>
          <p>{paragraphText}</p>
          <p id="thePar">This game is in-between versions. Check out Version 
            One <a href="https://github.com/L1ndseyHerman/New_Shield_Magic_Sword/tree/Version-1-Branch">
            Here</a>.</p>
          <p>And check out <a href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
          <footer id="theFooter">This is a React JS Progressive Web App. Updated 05/22/21.</footer>
      </div>
    </main>
  );
}

export default App;
