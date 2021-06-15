function ButtonWithExplanation(props)
{
    const buttonPressed = () => {
       props.callback({isNotNewGame: true, userChoice: "Shield", 
       disabledButton:[true, false, false]}); 
    }

    return(
        <div>
            <button id="shield" disabled={props.isDisabled} 
                onClick={() => {buttonPressed()}}>Shield</button>
            <label>Blocks two physical damage.</label>
        </div>
    );
}
    
export default ButtonWithExplanation;