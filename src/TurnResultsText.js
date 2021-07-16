function TurnResultsText(props) 
{
    if (props.playerOneChoice !== "First Turn")
    {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <p>
                    Player1 chose {props.playerOneChoice} <span id="testingSpan1"
                    style={{color: props.playerOneElementColor, backgroundColor: "black"}}>
                    {props.playerOneElementalBonusText}</span> and Computer 
                    chose {props.computerChoice} <span id="testingSpan2" 
                    style={{color: props.computerElementColor, 
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