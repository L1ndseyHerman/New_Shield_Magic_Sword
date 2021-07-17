import styles from './ChooseCharacterTypeButtonWithExplanation.module.css';

function ChooseCharacterTypeButtonWithExplanation(props)
{

    const characterTypeButtonPressed = () => {
        props.callback({screenName: "Element Selection Screen"}); 
     }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: "wheat"}} onClick={() => {characterTypeButtonPressed()}}>
                    Placeholder Text
                </button>
            </div>
            <p>
                Placeholder Text
            </p>
        </div>
    );
}

export default ChooseCharacterTypeButtonWithExplanation;