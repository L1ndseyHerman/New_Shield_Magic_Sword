import styles from './ChooseCharacterTypeButtonWithExplanation.module.css';

function ChooseCharacterTypeButtonWithExplanation(props)
{

    const computerCharacterTypeNumber = Math.floor(Math.random() * 3);
    var computerCharacterType = "None Yet";

    if (computerCharacterTypeNumber === 0)
    {
      computerCharacterType = "Bodyguard";
    }
    else if (computerCharacterTypeNumber === 1)
    {
      computerCharacterType = "Mage";
    }
    else if (computerCharacterTypeNumber === 2)
    {
      computerCharacterType = "Assassin";
    }

    const buttonText = props.buttonText;

    const characterTypeButtonPressed = () => {
        props.callback({screenName: "Element Selection Screen", playerOneCharacterType: buttonText,
        computerCharacterType: computerCharacterType}); 
     }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} 
                    onClick={() => {characterTypeButtonPressed()}}>
                    {props.buttonText}
                </button>
            </div>
            <p>
                {props.explanation}
            </p>
        </div>
    );
}

export default ChooseCharacterTypeButtonWithExplanation;