import PlayerInfoImage from "./PlayerInfoImage";


function PlayerInfo(props)
{
    //  #testingPar1 and #testingPar2 are needed for Jest testing.
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
            <PlayerInfoImage choice={props.choice} floatDirection={props.floatDirection}
                element={props.element} />
        </div>
    );
}
    
export default PlayerInfo;