import styles from './ButtonWithExplanation.module.css';

function ButtonWithExplanation(props)
{
    var theDisabledButtons = [false, false, false];
    var index;
    for (index = 0; index < theDisabledButtons.length; index++) {
        //  This will compare "0" to 0!
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
            <button style={{background: props.buttonColor}} disabled={props.isDisabled} 
                onClick={() => {buttonPressed()}}>{props.buttonText}</button>
            <label>{props.explanation}</label>
        </div>
    );
}
    
export default ButtonWithExplanation;