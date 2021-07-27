import PlayerInfoImage from "../PlayerInfoImage/PlayerInfoImage";
//import PlayerInfoImage from "./components/PlayerInfoImage/PlayerInfoImage";
//import PlayerInfoImage from ".../PlayerInfoImage";

function ThisTurnsPlayerInfo(props)
{
    //  #testingPars are needed for Jest testing.
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p id="testingPar1">
                {props.constantHealthText}{props.changingNumber}
            </p>
            <PlayerInfoImage choice={props.choice} floatDirection={props.floatDirection}
                element={props.element} />
        </div>
    );
}
    
export default ThisTurnsPlayerInfo;