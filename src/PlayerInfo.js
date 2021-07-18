import PlayerInfoImage from "./PlayerInfoImage";


function PlayerInfo(props)
{
    //  #testingPars are needed for Jest testing.
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p id="testingPar1">
                {props.constantHealthText}{props.changingNumber}
            </p>
            <p id="testingPar2">
                {props.constantElementText}
                <span style={{color: props.elementColor, backgroundColor: "black"}}>
                    {props.element}
                </span> 
            </p>
            <p id="testingPar3">
                {props.characterType}
            </p>
            <PlayerInfoImage choice={props.choice} floatDirection={props.floatDirection}
                element={props.element} />
        </div>
    );
}
    
export default PlayerInfo;