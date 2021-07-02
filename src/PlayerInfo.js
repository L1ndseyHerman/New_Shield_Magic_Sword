function PlayerInfo(props)
{
    /*var color = "Error";

    if (props.element === "Fire")
    {
        color = "firebrick";
    }
    else if (props.element === "Earth")
    {
        color = "darkolivegreen";
    }
    else if (props.element === "Air")
    {
        color = "darkorange";
    }
    else if (props.element === "Water")
    {
        color = "royalblue";
    }
    else if (props.element === "Light")
    {
        color = "gold";
    }
    else 
    {
        color = "rebeccapurple";
    }*/

    //const color = props.elementColor;

    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p>
                {props.constantHealthText}{props.changingNumber}
            </p>
            <p>
                {props.constantElementText}
                <span style={{color: props.elementColor, backgroundColor: "black"}}>
                    {props.element}
                </span> 
            </p>
        </div>
    );
}
    
export default PlayerInfo;