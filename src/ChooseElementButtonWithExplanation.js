import styles from './ChooseElementButtonWithExplanation.module.css';

function ChooseElementButtonWithExplanation(props)
{
    const buttonText = props.buttonText; 

    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true, playerOneElement: buttonText}); 
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