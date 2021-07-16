
function NewGameButton(props)
{
    const newGameButtonPressed = () => {
       props.callback({isNotNewGame: false, playerOneChoice: "First Turn", 
       disabledButtons:[false, false, false], screenName: "Element Selection Screen"}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize" style={{display: props.newGameButtonDisplay}}>
            <button onClick={() => {newGameButtonPressed()}}>New Game</button>
        </div>
    );
}
    
export default NewGameButton;