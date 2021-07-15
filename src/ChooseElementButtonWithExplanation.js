import styles from './ChooseElementButtonWithExplanation.module.css';

function ChooseElementButtonWithExplanation(props)
{
    var playerOneElementColor = "wheat";

    if (props.buttonText === "Fire")
    {
        playerOneElementColor = "firebrick";
    }
    else if (props.buttonText === "Earth")
    {
        playerOneElementColor = "darkolivegreen";
    }
    else if (props.buttonText === "Air")
    {
        playerOneElementColor = "darkorange";
    }
    else if (props.buttonText === "Water")
    {
        playerOneElementColor = "royalblue";
    }
    else if (props.buttonText === "Light")
    {
        playerOneElementColor = "gold";
    }
    else if (props.buttonText === "Dark")
    {
        playerOneElementColor = "rebeccapurple";
    }

  const computerElementNumber = Math.floor(Math.random() * 6);

  var computerElement = "None Yet";
  var computerElementColor = "wheat";

  if (computerElementNumber === 0)
  {
    computerElement = "Fire";
    computerElementColor = "firebrick";
  }
  else if (computerElementNumber === 1)
  {
    computerElement = "Earth";
    computerElementColor = "darkolivegreen";
  }
  else if (computerElementNumber === 2)
  {
    computerElement = "Air";
    computerElementColor = "darkorange";
  }
  else if (computerElementNumber === 3)
  {
    computerElement = "Water";
    computerElementColor = "royalblue";
  }
  else if (computerElementNumber === 4)
  {
    computerElement = "Light";
    computerElementColor = "gold";
  }
  else if (computerElementNumber === 5)
  {
    computerElement = "Dark";
    computerElementColor = "rebeccapurple";
  }

    const buttonText = props.buttonText; 

    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true, playerOneElement: buttonText, 
        playerOneElementColor: playerOneElementColor, computerElement: computerElement,
        computerElementColor: computerElementColor}); 
    }

    return(
        <div className={styles.elementButtonDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} 
                    onClick={() => {chooseElementButtonPressed()}}>{props.buttonText}</button>
            </div>
            <p>
                +1 damage to <span style={{color: props.explanationColor, 
                backgroundColor: "black"}}>{props.explanation}</span>.
            </p>
        </div>
    );
}
    
export default ChooseElementButtonWithExplanation;