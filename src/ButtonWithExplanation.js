import styles from './ButtonWithExplanation.module.css';

function ButtonWithExplanation(props)
{
    var theDisabledButtons = [false, false, false];
    var index;
    for (index = 0; index < theDisabledButtons.length; index++) {
        //  This will compare "0" to 0! Not sure why ESLint is giving "==" a warning, 
        //  ppl use that a lot in JavaScript, right?
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
       props.callback({isNotNewGame: true, userChoice: props.buttonText, 
       disabledButtons: theDisabledButtons}); 
    }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <div className={styles.centeredDiv}>
                <button style={{background: props.buttonColor}} disabled={props.isDisabled} 
                    onClick={() => {buttonPressed()}}>{props.buttonText}</button>
            </div>
            <p>{props.explanation}</p>
        </div>
    );
}
    
export default ButtonWithExplanation;