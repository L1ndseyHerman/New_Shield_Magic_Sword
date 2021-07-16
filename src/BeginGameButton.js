
function BeginGameButton(props)
{
    const beginGameButtonPressed = () => {
       props.callback({screenName: "Element Selection Screen"}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize">
            <button onClick={() => {beginGameButtonPressed()}}>Begin Game</button>
        </div>
    );
}
    
export default BeginGameButton;