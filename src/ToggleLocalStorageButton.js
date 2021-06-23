function ToggleLocalStorageButton(props)
{
    const toggleLocalStorageButtonPressed = () => {
       props.callback({toggledLocalStorage: true}); 
    }

    return(
        <div class="centeredDivPerfectButtonSize">
            <button onClick={() => 
                {toggleLocalStorageButtonPressed()}}>Toggle Local Storage</button>
        </div>
    );
}
    
export default ToggleLocalStorageButton;