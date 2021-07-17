import styles from './ChooseCharacterTypeButtonWithExplanation.module.css';

function ChooseCharacterTypeButtonWithExplanation(props)
{

    const buttonText = props.buttonText;

    const characterTypeButtonPressed = () => {
        props.callback({screenName: "Element Selection Screen", playerOneCharacterType: buttonText}); 
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