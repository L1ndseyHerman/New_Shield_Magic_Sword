function ChooseElementButton(props)
{
    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize">
            <button onClick={() => {chooseElementButtonPressed()}}>Next Screen</button>
        </div>
    );
}
    
export default ChooseElementButton;