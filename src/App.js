import React, { useState, useEffect } from 'react';
import './App.css';
 
function makeComputerChoice()
{
  var computerNumber = Math.floor(Math.random() * 2); 
  var lastComputerChoice = String(localStorage.getItem("lastComputerChoice") || "An Error");

  if ((lastComputerChoice === "Shield") && (computerNumber === 0))
  {
    return "Magic";
  }
  else if ((lastComputerChoice === "Shield") && (computerNumber === 1))
  {
    return "Sword";
  }
  else if ((lastComputerChoice === "Magic") && (computerNumber === 0))
  {
    return "Shield";
  }
  else if ((lastComputerChoice === "Magic") && (computerNumber === 1))
  {
    return "Sword";
  }
  else if ((lastComputerChoice === "Sword") && (computerNumber === 0))
  {
    return "Shield";
  }
  else if ((lastComputerChoice === "Sword") && (computerNumber === 1))
  {
    return "Magic";
  }
  //  Means this is the first turn, so choose whatever: 
  else 
  {
    computerNumber = Math.floor(Math.random() * 3); 
  
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
}

//  This function repeats the same checks as the one above it! 
//  ToDo: Make a class or something so that these checks are only needed once.

//  The number this returns is how much health playerOne looses this turn
function checkPlayerOneHealthLost(userChoice, computerChoice)
{
  if (userChoice === "Shield" && computerChoice === "Shield")
  {
    return 0;
  }
  else if (userChoice === "Shield" && computerChoice === "Magic")
  {
    return 1;
  }
  else if (userChoice === "Shield" && computerChoice === "Sword")
  {
    return 0;
  }

  else if (userChoice === "Magic" && computerChoice === "Shield")
  {
    return 0;
  }
  else if (userChoice === "Magic" && computerChoice === "Magic")
  {
    return 1;
  }
  else if (userChoice === "Magic" && computerChoice === "Sword")
  {
    return 2;
  }

  else if (userChoice === "Sword" && computerChoice === "Shield")
  {
    return 0;
  }
  else if (userChoice === "Sword" && computerChoice === "Magic")
  {
    return 1;
  }
  else if (userChoice === "Sword" && computerChoice === "Sword")
  {
    return 2;
  }

  return "This is an error. Click a button to start a game.";
}


function checkComputerHealthLost(userChoice, computerChoice)
{
  if (userChoice === "Shield" && computerChoice === "Shield")
  {
    return 0;
  }
  else if (userChoice === "Shield" && computerChoice === "Magic")
  {
    return 0;
  }
  else if (userChoice === "Shield" && computerChoice === "Sword")
  {
    return 0;
  }

  else if (userChoice === "Magic" && computerChoice === "Shield")
  {
    return 1;
  }
  else if (userChoice === "Magic" && computerChoice === "Magic")
  {
    return 1;
  }
  else if (userChoice === "Magic" && computerChoice === "Sword")
  {
    return 1;
  }

  else if (userChoice === "Sword" && computerChoice === "Shield")
  {
    return 0;
  }
  else if (userChoice === "Sword" && computerChoice === "Magic")
  {
    return 2;
  }
  else if (userChoice === "Sword" && computerChoice === "Sword")
  {
    return 2;
  }

  return "This is an error. Click a button to start a game.";
}


function checkWinLooseTie(playerOneHealth, computerHealth)
{
  if ((playerOneHealth <= 0) && (computerHealth <= 0))
  {
    return "Tie.";
  }
  else if (playerOneHealth <= 0)
  {
    return "Computer wins.";
  }
  else if (computerHealth <= 0)
  {
    return "Player1 wins!";
  }
  //  Whoops, make it nothing if no Game Over yet:
  else 
  {
    return "";
  }
}


function App() 
{
  const [userChoice, setUserChoice] = useState("First Turn");
  const [disabledButtons, setDisabledButton] = useState([false, false, false]);
  var paragraphText = "";
  var playerOneHealth = 10;
  var computerHealth = 10;
  const [isNotNewGame, setIsNotNewGame] = useState(true);

  //  Already reset to 10 if it is :)
  if (isNotNewGame)
  {
    playerOneHealth = Number(localStorage.getItem("playerOneHealth") || 10);
    computerHealth = Number(localStorage.getItem("computerHealth") || 10);
  }

  if ((playerOneHealth <= 0) || (computerHealth <= 0))
  {
    paragraphText = "Try playing a new game.";
  }
  else 
  {
    if (userChoice !== "First Turn")
    {
      var computerChoice = makeComputerChoice();

      const playerOneHealthLost = checkPlayerOneHealthLost(userChoice, computerChoice);
      playerOneHealth = playerOneHealth - playerOneHealthLost;

      const computerHealthLost = checkComputerHealthLost(userChoice, computerChoice);
      computerHealth = computerHealth - computerHealthLost;

      var winLooseTieText = checkWinLooseTie(playerOneHealth, computerHealth);
    
      paragraphText = paragraphText + "Player1 chose " + userChoice +
      " and Computer chose " + computerChoice + ". " + winLooseTieText;
    }
  }

  //  The game appears to do double the damage wo this useEffect(), although more testing is
  //  needed....
  useEffect(() => {
    localStorage.setItem("playerOneHealth", playerOneHealth);
    localStorage.setItem("computerHealth", computerHealth);
    localStorage.setItem("lastComputerChoice", computerChoice);
  })


  return (
    <main>   
      <div id="whereIsTheOtherDiv">
        <h1>Shield-Magic-Sword</h1>
        <div id="buttonsAndDescriptionsDiv">
          <button id="shield" disabled={disabledButtons[0]} onClick={() => {setUserChoice("Shield");
            setDisabledButton([true, false, false]); setIsNotNewGame(true);}}>Shield</button>
          <label>Blocks two physical damage.</label>
          <button id="magic" disabled={disabledButtons[1]} onClick={() => {setUserChoice("Magic");
            setDisabledButton([false, true, false]); setIsNotNewGame(true);}}>Magic</button>
          <label>Deals one magic damage.</label>
          <button id="sword" disabled={disabledButtons[2]} onClick={() => {setUserChoice("Sword");
            setDisabledButton([false, false, true]); setIsNotNewGame(true);}}>Sword</button>
          <label>Deals two physical damage.</label>
        </div>
        <div id="healthAndTurnInfoDiv">
          <p id="playerOneHealth">Player1 health: {playerOneHealth}</p>
          <p id="computerHealth">Computer health: {computerHealth}</p>
        </div>
        <br/>
        <br/>
        <p>{paragraphText}</p>
        <div id="newGameDiv">
          <button onClick={() => {setIsNotNewGame(false);
            setUserChoice("First Turn"); setDisabledButton([false, false, false]);}}>New Game</button>
        </div>
        <p id="thePar">Starting Version 2.1, which will be CSS changes and maybe Unit Tests,
          not gameplay changes. If you are a software developer who wants to look at 
          previous versions, you can go to
          my <a href="https://github.com/L1ndseyHerman/New_Shield_Magic_Sword/">
          GitHub</a>, change the branch from &quot;master&quot; to the version you are looking for,
          and run the code in Visual Studio Code.</p>
        <p>And check out <a href="https://l1ndseyherman.github.io/">My Other Website</a>.</p>
        <footer>This is a React JS Progressive Web App. Updated 06/07/21.</footer>
      </div>
    </main>
  );
}

export default App;
