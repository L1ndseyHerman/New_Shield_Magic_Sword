
function BeginGameButton(props)
{
    const beginGameButtonPressed = () => {
       props.callback({screenName: "Character Type Selection Screen"}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize">
            <button onClick={() => {beginGameButtonPressed()}}>Begin Game</button>
        </div>
    );
}
    
export default BeginGameButton;