import styles from './NewGameButton.module.css';

function NewGameButton(props)
{
    const newGameButtonPressed = () => {
       props.callback({isNotNewGame: false, playerOneChoice: "First Turn", 
       disabledButtons:[false, false, false]}); 
    }

    return(
        <div className={styles.centeredDiv} style={{display: props.newGameButtonDisplay}}>
            <button onClick={() => {newGameButtonPressed()}}>New Game</button>
        </div>
    );
}
    
export default NewGameButton;