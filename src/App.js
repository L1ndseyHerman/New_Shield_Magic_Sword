import React, { useState, useEffect } from 'react';

import BeginGameButton from './BeginGameButton';
import BottomNotes from './BottomNotes';

import ChooseElementButton from './ChooseElementButton';

import TopInstructions from './TopInstructions';
import ButtonWithExplanation from './ButtonWithExplanation';
import PlayerInfo from './PlayerInfo';
import NewGameButton from './NewGameButton';

 
function makeComputerChoice()
{
  var computerNumber = Math.floor(Math.random() * 2); 
  var lastComputerChoice = String(sessionStorage.getItem("lastComputerChoice") || "An Error");
  

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

function checkThisPlayersHealthLost(thisPlayersChoice, theOtherPlayersChoice)
{
  if (thisPlayersChoice === "Shield" && theOtherPlayersChoice === "Shield")
  {
    return 0;
  }
  else if (thisPlayersChoice === "Shield" && theOtherPlayersChoice === "Magic")
  {
    return 1;
  }
  else if (thisPlayersChoice === "Shield" && theOtherPlayersChoice === "Sword")
  {
    return 0;
  }

  else if (thisPlayersChoice === "Magic" && theOtherPlayersChoice === "Shield")
  {
    return 0;
  }
  else if (thisPlayersChoice === "Magic" && theOtherPlayersChoice === "Magic")
  {
    return 1;
  }
  else if (thisPlayersChoice === "Magic" && theOtherPlayersChoice === "Sword")
  {
    return 2;
  }

  else if (thisPlayersChoice === "Sword" && theOtherPlayersChoice === "Shield")
  {
    return 0;
  }
  else if (thisPlayersChoice === "Sword" && theOtherPlayersChoice === "Magic")
  {
    return 1;
  }
  else if (thisPlayersChoice === "Sword" && theOtherPlayersChoice === "Sword")
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
  //  Make it nothing if no Game Over yet:
  else 
  {
    return "";
  }
}


function App() 
{
  const [playerOneChoice, setPlayerOneChoice] = useState("First Turn");
  const [disabledButtons, setDisabledButtons] = useState([false, false, false]);
  var turnResultsText = "";
  var playerOneHealth = 10;
  var computerHealth = 10;
  const [isNotNewGame, setIsNotNewGame] = useState(true);
  var buttonsAndExplanationsDivDisplay = "block";
  var newGameButtonDisplay = "none";
  const [onElementSelectScreen, setOnElementSelectScreen] = useState(false);
  const [onGameScreen, setOnGameScreen] = useState(false);

  //  Already reset to 10 if it is :)
  if (isNotNewGame)
  {
    playerOneHealth = Number(sessionStorage.getItem("playerOneHealth") || 10);
    computerHealth = Number(sessionStorage.getItem("computerHealth") || 10);
  }

  if (playerOneChoice !== "First Turn")
  {
    var computerChoice = makeComputerChoice();

    const playerOneHealthLost = checkThisPlayersHealthLost(playerOneChoice, computerChoice);
    playerOneHealth = playerOneHealth - playerOneHealthLost;

    const computerHealthLost = checkThisPlayersHealthLost(computerChoice, playerOneChoice);
    computerHealth = computerHealth - computerHealthLost;

    var winLooseTieText = checkWinLooseTie(playerOneHealth, computerHealth);
    
    turnResultsText = turnResultsText + "Player1 chose " + playerOneChoice +
    " and Computer chose " + computerChoice + ". " + winLooseTieText;
  }

  if ((playerOneHealth <= 0) || (computerHealth <= 0))
  {   
    buttonsAndExplanationsDivDisplay = "none";
    newGameButtonDisplay = "block";
  }

  useEffect(() => {
      //  Since there didn't use to be a choice, client may have previous localStorage data
      //  that needs to be cleared.
      localStorage.removeItem("playerOneHealth");
      localStorage.removeItem("computerHealth");
      localStorage.removeItem("lastComputerChoice");

      sessionStorage.setItem("playerOneHealth", playerOneHealth);
      sessionStorage.setItem("computerHealth", computerHealth);
      sessionStorage.setItem("lastComputerChoice", computerChoice);

      //  New! TechWithTim said this makes the useEffect() only run when the variables 
      //  you put in this array change, instead of all the variables.
  }, [computerChoice, computerHealth, playerOneHealth])

  //  For button callbacks:
  const setUseStates = (newGameSettings) => {
    setIsNotNewGame(newGameSettings.isNotNewGame);
    setPlayerOneChoice(newGameSettings.playerOneChoice);
    setDisabledButtons(newGameSettings.disabledButtons); 
  }

  const beginGameButtonPressed = (beginGameButtonSettings) => {
    setOnElementSelectScreen(beginGameButtonSettings.pressedNextScreenButton);
  }

  const chooseElementButtonPressed = (chooseElementButtonSettings) => {
    setOnGameScreen(chooseElementButtonSettings.pressedNextScreenButton);
  }

  //  I'm just doing these statements in order, so the "if" is the first screen when 
  //  the website loads/the browser refreshes, then the "else if" is the next "page", then the 
  //  next "else if" is the next one, etc. 
  if (!onElementSelectScreen) 
  {
    return (
      <main>   
        <div id="outermostDiv">
          <h1>Shield-Magic-Sword</h1>
          <BeginGameButton callback={beginGameButtonPressed} />
          <BottomNotes />
        </div>
      </main>
    );
  }

  else if (onElementSelectScreen && !onGameScreen)
  {
    return (
      <main>   
      <div id="outermostDiv">
        <h1>Element Selection Screen</h1>
        <p>This screen is in-progress, just choose whatever button for now.</p>
        <div id="buttonsAndExplanationsDiv">
          <ChooseElementButton callback={chooseElementButtonPressed} />
          <ChooseElementButton callback={chooseElementButtonPressed} />
          <ChooseElementButton callback={chooseElementButtonPressed} />
          <ChooseElementButton callback={chooseElementButtonPressed} />
          <ChooseElementButton callback={chooseElementButtonPressed} />
          <ChooseElementButton callback={chooseElementButtonPressed} />
        </div>
      </div>
    </main>
    );
  }

  else if (onGameScreen)
  {
    return (
      <main>   
        <div id="outermostDiv">
          <h1>Game Screen</h1>
          <TopInstructions />
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
          <NewGameButton newGameButtonDisplay={newGameButtonDisplay}
            callback={setUseStates} />
        </div>
      </main>
    );
  }


}

export default App;
