import styles from './ChooseElementButton.module.css';

function ChooseElementButton(props)
{
    var color = "Error";

    if (props.explanation === "Fire")
    {
        color = "firebrick";
    }
    else if (props.explanation === "Earth")
    {
        color = "darkolivegreen";
    }
    else if (props.explanation === "Air")
    {
        color = "darkorange";
    }
    else if (props.explanation === "Water")
    {
        color = "royalblue";
    }
    else if (props.explanation === "Light")
    {
        color = "gold";
    }
    else 
    {
        color = "rebeccapurple";
    }

    const buttonText = props.buttonText; 

    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true, playerOneElement: buttonText}); 
    }

    return(
        <div className={styles.elementButtonDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button style={{background: props.buttonColor}} 
                    onClick={() => {chooseElementButtonPressed()}}>{props.buttonText}</button>
            </div>
            <p>
                +1 damage to <span style={{color: color, 
                backgroundColor: "black"}}>{props.explanation}</span>.
            </p>
        </div>
    );
}
    
export default ChooseElementButton;