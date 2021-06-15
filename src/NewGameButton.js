import './NewGameButton.css';
function NewGameButton(props)
{
    const newGameButtonPressed = () => {
       props.callback({isNotNewGame: false, userChoice: "First Turn", 
       disabledButton:[false, false, false]}); 
    }

    return(
        <div id="newGameDiv">
            <button onClick={() => {newGameButtonPressed()}}>New Game</button>
        </div>
    );
}
    
export default NewGameButton;