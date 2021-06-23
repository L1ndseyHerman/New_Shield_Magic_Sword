
function BeginGameButton(props)
{
    const beginGameButtonPressed = () => {
       props.callback({pressedNextScreenButton: true}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize">
            <button onClick={() => {beginGameButtonPressed()}}>Begin Game</button>
        </div>
    );
}
    
export default BeginGameButton;