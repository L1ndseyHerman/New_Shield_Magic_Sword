import React, { useState, useEffect } from 'react';
import BottomNotes from './BottomNotes';
import NewGameButton from './NewGameButton';
import ButtonWithExplanation from './ButtonWithExplanation';
import PlayerInfo from './PlayerInfo';
 
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

//  This function repeats the same checks as the one above it! 
//  ToDo: Make a class or something so that these checks are only needed once.
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
  const [disabledButtons, setDisabledButtons] = useState([false, false, false]);
  var turnResultsText = "";
  var playerOneHealth = 10;
  var computerHealth = 10;
  const [isNotNewGame, setIsNotNewGame] = useState(true);
  var buttonsAndExplanationsDivDisplay = "block";

  //  Already reset to 10 if it is :)
  if (isNotNewGame)
  {
    playerOneHealth = Number(localStorage.getItem("playerOneHealth") || 10);
    computerHealth = Number(localStorage.getItem("computerHealth") || 10);
  }

  if ((playerOneHealth <= 0) || (computerHealth <= 0))
  {   
    buttonsAndExplanationsDivDisplay = "none";
    turnResultsText = "Try playing a new game.";
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
    
      turnResultsText = turnResultsText + "Player1 chose " + userChoice +
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

  //  For button callbacks:
  const setUseStates = (newGameSettings) => {
    setIsNotNewGame(newGameSettings.isNotNewGame);
    setUserChoice(newGameSettings.userChoice);
    setDisabledButtons(newGameSettings.disabledButtons);
  }


  return (
    <main>   
      <div id="outermostDiv">
        <h1>Shield-Magic-Sword</h1>
        <div id="buttonsAndExplanationsDiv" style={{display: buttonsAndExplanationsDivDisplay}}>
          <ButtonWithExplanation buttonColor="darkolivegreen"
            buttonText="Shield" explanation="Blocks two physical damage."
            buttonNumber="0" isDisabled={disabledButtons[0]} disabledButtonArray={disabledButtons} 
            callback={setUseStates} />
          <ButtonWithExplanation buttonColor="royalblue"
            buttonText="Magic" explanation="Deals one magic damage."
            buttonNumber="1" isDisabled={disabledButtons[1]} disabledButtonArray={disabledButtons} 
            callback={setUseStates} />
          <ButtonWithExplanation buttonColor="firebrick"
            buttonText="Sword" explanation="Deals two physical damage."
            buttonNumber="2" isDisabled={disabledButtons[2]} disabledButtonArray={disabledButtons}  
            callback={setUseStates} />
        </div>
        <div id="healthDiv">
          <PlayerInfo constantText="Player1 health: " changingNumber={playerOneHealth} 
            floatDirection="left" />
          <PlayerInfo constantText="Computer health: " changingNumber={computerHealth} 
            floatDirection="right" />
        </div>
        <br/>
        <br/>
        <p>{turnResultsText}</p>
        <NewGameButton callback={setUseStates} />
        <BottomNotes />
      </div>
    </main>
  );
}

export default App;
