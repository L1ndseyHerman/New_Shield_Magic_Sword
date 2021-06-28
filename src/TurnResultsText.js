function TurnResultsText(props)
{
    var playerOneColor = "Error";

    if (props.playerOneElement === "Fire")
    {
        playerOneColor = "firebrick";
    }
    else if (props.playerOneElement === "Earth")
    {
        playerOneColor = "darkolivegreen";
    }
    else if (props.playerOneElement === "Air")
    {
        playerOneColor = "darkorange";
    }
    else if (props.playerOneElement === "Water")
    {
        playerOneColor = "royalblue";
    }
    else if (props.playerOneElement === "Light")
    {
        playerOneColor = "gold";
    }
    else 
    {
        playerOneColor = "rebeccapurple";
    }

    var computerColor = "Error";

    if (props.computerElement === "Fire")
    {
        computerColor = "firebrick";
    }
    else if (props.computerElement === "Earth")
    {
        computerColor = "darkolivegreen";
    }
    else if (props.computerElement === "Air")
    {
        computerColor = "darkorange";
    }
    else if (props.computerElement === "Water")
    {
        computerColor = "royalblue";
    }
    else if (props.computerElement === "Light")
    {
        computerColor = "gold";
    }
    else 
    {
        computerColor = "rebeccapurple";
    }

    if (props.playerOneChoice !== "First Turn")
    {
        return(
            <div>
                <p>
                    Player1 chose {props.playerOneChoice} <span style={{color: playerOneColor, 
                    backgroundColor: "black"}}>
                    {props.playerOneElementalBonusText}</span> and Computer 
                    chose {props.computerChoice} <span style={{color: computerColor, 
                    backgroundColor: "black"}}>{props.computerElementalBonusText}
                    </span>. {props.winLooseTieText}
                </p>
            </div>
        );
    }
    else 
    {
        return(
            <div>
                <p></p>
            </div>
        )
    }
}

export default TurnResultsText;