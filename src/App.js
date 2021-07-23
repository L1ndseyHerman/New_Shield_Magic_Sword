import React, { useState, useEffect } from 'react';

import BeginGameButton from './components/BeginGameButton/BeginGameButton';
import BottomNotes from './components/BottomNotes/BottomNotes';

import ChooseCharacterTypeButtonWithExplanation from './components/ChooseCharacterTypeButtonWithExplanation/ChooseCharacterTypeButtonWithExplanation';

import ChooseElementButtonWithExplanation from './components/ChooseElementButtonWithExplanation/ChooseElementButtonWithExplanation';

import GameButtonWithExplanation from './components/GameButtonWithExplanation/GameButtonWithExplanation';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import TurnResultsText from './components/TurnResultsText/TurnResultsText';
import NewGameButton from './components/NewGameButton/NewGameButton';
 
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

function checkBonusElementDamage(thisPlayersElement, theOtherPlayersElement)
{

  if ((thisPlayersElement === "Fire") && (theOtherPlayersElement === "Earth"))
  {
    return 1;
  }
  else if ((thisPlayersElement === "Earth") && (theOtherPlayersElement === "Air"))
  {
    return 1;
  }
  else if ((thisPlayersElement === "Air") && (theOtherPlayersElement === "Water"))
  {
    return 1;
  }
  else if ((thisPlayersElement === "Water") && (theOtherPlayersElement === "Fire"))
  {
    return 1;
  }
  else if ((thisPlayersElement === "Light") && (theOtherPlayersElement === "Dark"))
  {
    return 1;
  }
  else if ((thisPlayersElement === "Dark") && (theOtherPlayersElement === "Light"))
  {
    return 1;
  }
  else 
  {
    return 0;
  }
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
  //  Reordered these const/variables a little to be kind of in order of the screens they happen on? 
  const [screenName, setScreenName] = useState("Shield-Magic-Sword");

  const [playerOneCharacterType, setPlayerOneCharacterType] = useState("None Yet");
  const [computerCharacterType, setComputerCharacterType] = useState("None Yet");

  const [playerOneElement, setPlayerOneElement] = useState("None Yet");
  const [computerElement, setComputerElement] = useState("None Yet");
  //  Wheat is the default button color in index.css, so I'm using it as the default color here too.
  const [playerOneElementColor, setPlayerOneElementColor] = useState("wheat");
  const [computerElementColor, setComputerElementColor] = useState("wheat");

  const [playerOneChoice, setPlayerOneChoice] = useState("First Turn");
  const [disabledButtons, setDisabledButtons] = useState([false, false, false]);
  var playerOneHealth = 20;
  var computerHealth = 20;

  const [isNotNewGame, setIsNotNewGame] = useState(true);
  var buttonsAndExplanationsDivDisplay = "block";
  var newGameButtonDisplay = "none";

  //  Already reset to 20 if it is :)
  if (isNotNewGame)
  {
    playerOneHealth = Number(sessionStorage.getItem("playerOneHealth") || 20);
    computerHealth = Number(sessionStorage.getItem("computerHealth") || 20);
  }

  if (playerOneChoice !== "First Turn") 
  {
    var computerChoice = makeComputerChoice();

    var playerOneHealthLost = checkThisPlayersHealthLost(playerOneChoice, computerChoice);
  
    var playerOneLoosesThisMuchHealthDueToComputerCharacterType = 0;
    var computerCharacterTypeText = "";

    if (playerOneChoice === "Shield" && playerOneCharacterType === "Bodyguard"
      && computerChoice === "Magic")
    {
      playerOneLoosesThisMuchHealthDueToComputerCharacterType = 
        playerOneLoosesThisMuchHealthDueToComputerCharacterType - 1;
      computerCharacterTypeText = computerCharacterTypeText +
        "(-1 Magic Damage because Player1 is a Bodyguard.) ";
    }
    if (computerChoice === "Magic" && computerCharacterType === "Mage")
    {
      playerOneLoosesThisMuchHealthDueToComputerCharacterType = 
        playerOneLoosesThisMuchHealthDueToComputerCharacterType + 1;
      computerCharacterTypeText = computerCharacterTypeText +
        "(+1 Magic Damage because Computer is a Mage.) ";
    }
    if (computerChoice === "Sword" && computerCharacterType === "Assassin")
    {
      playerOneLoosesThisMuchHealthDueToComputerCharacterType = 
        playerOneLoosesThisMuchHealthDueToComputerCharacterType + 1;
      computerCharacterTypeText = computerCharacterTypeText +
        "(+1 Physical Damage because Computer is an Assassin.) ";
    }

    var computerElementalBonusDamage = 0;
    if (computerChoice === "Magic")
    {
      computerElementalBonusDamage = checkBonusElementDamage(computerElement, playerOneElement);
    }

    playerOneHealth = playerOneHealth - playerOneHealthLost - computerElementalBonusDamage
      - playerOneLoosesThisMuchHealthDueToComputerCharacterType;

    var computerElementalBonusText = "";
    if (computerElementalBonusDamage > 0)
    {
      computerElementalBonusText = "(+1 bonus elemental damage)";
    }

    var computerHealthLost = checkThisPlayersHealthLost(computerChoice, playerOneChoice);

    var computerLoosesThisMuchHealthDueToPlayerOneCharacterType = 0;
    var playerOneCharacterTypeText = "";

    if (computerChoice === "Shield" && computerCharacterType === "Bodyguard"
      && playerOneChoice === "Magic")
    {
      computerLoosesThisMuchHealthDueToPlayerOneCharacterType = 
        computerLoosesThisMuchHealthDueToPlayerOneCharacterType - 1;
      playerOneCharacterTypeText = playerOneCharacterTypeText +
        "(-1 Magic Damage because Computer is a Bodyguard.) ";
    }
    if (playerOneChoice === "Magic" && playerOneCharacterType === "Mage")
    {
      computerLoosesThisMuchHealthDueToPlayerOneCharacterType = 
        computerLoosesThisMuchHealthDueToPlayerOneCharacterType + 1;
      playerOneCharacterTypeText = playerOneCharacterTypeText +
        "(+1 Magic Damage because Player1 is a Mage.) ";
    }
    if (playerOneChoice === "Sword" && playerOneCharacterType === "Assassin")
    {
      computerLoosesThisMuchHealthDueToPlayerOneCharacterType = 
        computerLoosesThisMuchHealthDueToPlayerOneCharacterType + 1;
      playerOneCharacterTypeText = playerOneCharacterTypeText +
        "(+1 Physical Damage because Player1 is an Assassin.) ";
    }

    var playerOneElementalBonusDamage = 0;
    if (playerOneChoice === "Magic")
    {
      playerOneElementalBonusDamage = checkBonusElementDamage(playerOneElement, computerElement);
    }
    computerHealth = computerHealth - computerHealthLost - playerOneElementalBonusDamage -
    computerLoosesThisMuchHealthDueToPlayerOneCharacterType;

    var playerOneElementalBonusText = "";
    if (playerOneElementalBonusDamage > 0)
    {
      playerOneElementalBonusText = "(+1 bonus elemental damage)";
    }

    var winLooseTieText = checkWinLooseTie(playerOneHealth, computerHealth);
  }

  if ((playerOneHealth <= 0) || (computerHealth <= 0))
  {   
    buttonsAndExplanationsDivDisplay = "none";
    newGameButtonDisplay = "block";
  }

  //  This is so you can't refresh the page in the middle of a game to get a more favorable element.
  //  No cheating, lol. If you go back to the elementSelectScreen, the score resets.
  useEffect(() => {
    sessionStorage.setItem("playerOneHealth", 20);
    sessionStorage.setItem("computerHealth", 20);
    sessionStorage.setItem("lastComputerChoice", "First Turn");
  }, [screenName])

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

  const beginGameButtonPressed = (beginGameButtonSettings) => {
    setScreenName(beginGameButtonSettings.screenName);
  }

  const chooseCharacterTypeButtonPressed = (characterTypeButtonSettings) => {
    setScreenName(characterTypeButtonSettings.screenName);
    setPlayerOneCharacterType(characterTypeButtonSettings.playerOneCharacterType);
    setComputerCharacterType(characterTypeButtonSettings.computerCharacterType);
  }

  const chooseElementButtonPressed = (chooseElementButtonSettings) => {
    setScreenName(chooseElementButtonSettings.screenName);
    setPlayerOneElement(chooseElementButtonSettings.playerOneElement);
    setPlayerOneElementColor(chooseElementButtonSettings.playerOneElementColor);
    setComputerElement(chooseElementButtonSettings.computerElement);
    setComputerElementColor(chooseElementButtonSettings.computerElementColor);
  }

  //  This could come from a GameButtonWithExplanation or a NewGameButton.
  const gameButtonOrNewGameButtonPressed = (currentGameOrNewGameSettings) => {
    setIsNotNewGame(currentGameOrNewGameSettings.isNotNewGame);
    setPlayerOneChoice(currentGameOrNewGameSettings.playerOneChoice);
    setDisabledButtons(currentGameOrNewGameSettings.disabledButtons); 
    setScreenName(currentGameOrNewGameSettings.screenName);
  }

  //  I'm just doing these statements in order, so the "if" is the first screen when 
  //  the website loads/the browser refreshes, then the "else if" is the next "page", then the 
  //  next "else if" is the next one, etc. 
  if (screenName === "Shield-Magic-Sword")
  {
    return (
      <main>   
        <div id="outermostDiv">
          <h1>{screenName}</h1>
          <BeginGameButton callback={beginGameButtonPressed} />
          <BottomNotes />
        </div>
      </main>
    );
  }

  else if (screenName === "Character Type Selection Screen")
  {
    return (
      <main>   
      <div id="outermostDiv">
        <h1>{screenName}</h1>
        <p>
          Choose a character type. The computer will randomly choose one.
        </p>
        <br/>
        <div id="buttonsAndExplanationsDiv">
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="darkolivegreen"
            buttonText="Bodyguard" 
            explanation="Block +1 Magic Damage when using Shield." 
            callback={chooseCharacterTypeButtonPressed} />
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="royalblue"
            buttonText="Mage" 
            explanation="Deal +1 Magic Damage when using Magic." 
            callback={chooseCharacterTypeButtonPressed} />
          <ChooseCharacterTypeButtonWithExplanation 
            buttonColor="firebrick"
            buttonText="Assassin" 
            explanation="Deal +1 Physical Damage when using Sword."
            callback={chooseCharacterTypeButtonPressed} />
        </div>
      </div>
    </main>
    );
  }

  else if (screenName === "Element Selection Screen")
  {
    return (
      <main>   
      <div id="outermostDiv">
        <h1>{screenName}</h1>
        <p>
          Choose an element. The computer will randomly choose one.
        </p>
        <br/>
        <div id="buttonsAndExplanationsDiv">
          <ChooseElementButtonWithExplanation 
            buttonText="Fire" 
            explanation="Earth"
            buttonColor="firebrick" 
            explanationColor="darkolivegreen"
            callback={chooseElementButtonPressed} />
          <ChooseElementButtonWithExplanation 
            buttonText="Earth" 
            explanation="Air"
            buttonColor="darkolivegreen" 
            explanationColor="darkorange"
            callback={chooseElementButtonPressed} />
          <ChooseElementButtonWithExplanation 
            buttonText="Air" 
            explanation="Water"
            buttonColor="darkorange" 
            explanationColor="royalblue"
            callback={chooseElementButtonPressed} />
          <ChooseElementButtonWithExplanation 
            buttonText="Water" 
            explanation="Fire"
            buttonColor="royalblue" 
            explanationColor="firebrick"
            callback={chooseElementButtonPressed} />
          <ChooseElementButtonWithExplanation 
            buttonText="Light" 
            explanation="Dark"
            buttonColor="gold" 
            explanationColor="rebeccapurple"
            callback={chooseElementButtonPressed} />
          <ChooseElementButtonWithExplanation 
            buttonText="Dark" 
            explanation="Light"
            buttonColor="rebeccapurple" 
            explanationColor="gold"
            callback={chooseElementButtonPressed} />
        </div>
      </div>
    </main>
    );
  }

  else if (screenName === "Game Screen")
  {
    return (
      <main>   
        <div id="outermostDiv">
          <h1>{screenName}</h1>
          <p>
            The rules of this game are that you can't make the same choice twice in a row,
            and neither can the computer. Use that to your advantage....
          </p>
          <br/>
          <div id="buttonsAndExplanationsDiv" style={{display: buttonsAndExplanationsDivDisplay}}>
            <GameButtonWithExplanation 
              buttonColor="darkolivegreen"
              buttonText="Shield" 
              explanation="Blocks two physical damage."
              buttonNumber="0" 
              isDisabled={disabledButtons[0]} 
              disabledButtonArray={disabledButtons} 
              callback={gameButtonOrNewGameButtonPressed} />
            <GameButtonWithExplanation 
              buttonColor="royalblue"
              buttonText="Magic" 
              explanation="Deals one magic damage."
              buttonNumber="1" 
              isDisabled={disabledButtons[1]} 
              disabledButtonArray={disabledButtons} 
              callback={gameButtonOrNewGameButtonPressed} />
            <GameButtonWithExplanation 
              buttonColor="firebrick"
              buttonText="Sword" 
              explanation="Deals two physical damage."
              buttonNumber="2" 
              isDisabled={disabledButtons[2]} 
              disabledButtonArray={disabledButtons}  
              callback={gameButtonOrNewGameButtonPressed} />
          </div>
          <div id="healthDiv">
            <PlayerInfo 
              floatDirection="left"
              constantHealthText="Player1 health: " 
              changingNumber={playerOneHealth} 
              constantElementText="Player1 element: "
              element={playerOneElement} 
              elementColor={playerOneElementColor}
              characterType={playerOneCharacterType}
              choice={playerOneChoice} />
            <PlayerInfo 
              floatDirection="right"
              constantHealthText="Computer health: " 
              changingNumber={computerHealth}  
              constantElementText="Computer element: "
              element={computerElement} 
              elementColor={computerElementColor}
              characterType={computerCharacterType}
              choice={computerChoice} />
          </div>
          <TurnResultsText 
            playerOneElementColor={playerOneElementColor}
            playerOneChoice={playerOneChoice} 
            playerOneCharacterTypeText={playerOneCharacterTypeText}
            playerOneElementalBonusText={playerOneElementalBonusText}
            computerElementColor={computerElementColor}
            computerChoice={computerChoice}
            computerCharacterTypeText={computerCharacterTypeText}
            computerElementalBonusText={computerElementalBonusText}
            winLooseTieText={winLooseTieText} />
          <NewGameButton 
            newGameButtonDisplay={newGameButtonDisplay}
            callback={gameButtonOrNewGameButtonPressed} />
        </div>
      </main>
    );
  }

}

export default App;
