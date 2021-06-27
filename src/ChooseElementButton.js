import styles from './ChooseElementButton.module.css';

function ChooseElementButton(props)
{
    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true}); 
    }

    return(
        <div className={styles.elementButtonDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} 
                    onClick={() => {chooseElementButtonPressed()}}>{props.buttonText}</button>
            </div>
            <p>+1 damage to {props.explanation}.</p>
        </div>
    );
}
    
export default ChooseElementButton;