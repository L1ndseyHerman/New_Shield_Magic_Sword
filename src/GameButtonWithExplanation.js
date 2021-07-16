import styles from './GameButtonWithExplanation.module.css';

function GameButtonWithExplanation(props)
{
    var theDisabledButtons = [false, false, false];
    var index;
    for (index = 0; index < theDisabledButtons.length; index++) {
        
        //  This will compare "0" to 0! Not sure why ESLint is giving "==" a warning, 
        //  ppl use that a lot in JavaScript, right?

        // eslint-disable-next-line 
        if (index == props.buttonNumber)
        {
            theDisabledButtons[index] = true;
        }
        else 
        {
            theDisabledButtons[index] = false;
        }
    }

    const buttonPressed = () => {
       props.callback({isNotNewGame: true, playerOneChoice: props.buttonText, 
       disabledButtons: theDisabledButtons, screenName: "Game Screen"}); 
    }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} disabled={props.isDisabled} 
                    onClick={() => {buttonPressed()}}>{props.buttonText}</button>
            </div>
            <p>{props.explanation}</p>
        </div>
    );
}
    
export default GameButtonWithExplanation;