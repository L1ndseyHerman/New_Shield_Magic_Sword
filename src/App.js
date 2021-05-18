//import React, { useState, useEffect } from 'react';
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

/*function disableButton(userChoice)
{
  if (userChoice === "Rock")
  {

  }
}*/

function App() {
  /*  
    This only updates things if the state changes, bec useState.
    For example, if you keep pressing the Rock button,
    it will check "Is Rock === Rock?", and since it is, no computer number is generated, the DOM
    doesn't update, etc. But if you press Paper, "Is Rock===Paper?" is false, and so the stuff updates.

    To make Rock update every button press, do useEffect.
  */

    /*const [userChoice, setUserChoice] = useState("An Error");
    var paragraphText = "";

    //useEffect(() => {
      //var userChoice = "An Error";
      //function setUserChoice(userChoice) {
        //var paragraphText = "";
  
        //if (userChoice !== "An Error")
        //{
          const computerChoice = makeComputerChoice();
          const winLooseTieText = checkWinLooseTie(userChoice, computerChoice);
          paragraphText = "Player1 chose " + userChoice +
          " and Computer chose " + computerChoice + ". " + winLooseTieText;
        //}
      //}
    });
    */


    
    /*useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }*/
    
    //const [userChoice, setUserChoice] = useEffect("An Error");
    /*useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });*/





    const [userChoice, setUserChoice] = useState("An Error");
    //var disabledButtons = [false, false, false];
    const [disabledButtons, setDisabledButton] = useState([false, false, false]);
    var paragraphText = "";
  
    if (userChoice !== "An Error")
    {
      const computerChoice = makeComputerChoice();
      const winLooseTieText = checkWinLooseTie(userChoice, computerChoice);
      paragraphText = "Player1 chose " + userChoice +
       " and Computer chose " + computerChoice + ". " + winLooseTieText;

       // New! Disabling the button that was just pressed:

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
        <footer id="theFooter">This app is a PWA now! Updated 05/14/21</footer>
      </main>
    );
}

export default App;
