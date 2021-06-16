import styles from './ButtonWithExplanation.module.css';

function ButtonWithExplanation(props)
{
    const buttonPressed = () => {
       props.callback({isNotNewGame: true, userChoice: "Shield", 
       disabledButton:[true, false, false]}); 
    }

    return(
        <div className={styles.buttonWithExplanationDiv}>
            <button id="shield" disabled={props.isDisabled} 
                onClick={() => {buttonPressed()}}>Shield</button>
            <label>Blocks two physical damage.</label>
        </div>
    );
}
    
export default ButtonWithExplanation;