import styles from './NewGameButton.module.css';
function NewGameButton(props)
{
    const newGameButtonPressed = () => {
       props.callback({isNotNewGame: false, userChoice: "First Turn", 
       disabledButtons:[false, false, false]}); 
    }

    return(
        <div id={styles.newGameDiv}>
            <button onClick={() => {newGameButtonPressed()}}>New Game</button>
        </div>
    );
}
    
export default NewGameButton;