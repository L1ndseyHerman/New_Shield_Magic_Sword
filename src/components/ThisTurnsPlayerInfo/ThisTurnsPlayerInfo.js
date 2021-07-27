import PlayerInfoImage from "../PlayerInfoImage/PlayerInfoImage";

function ThisTurnsPlayerInfo(props)
{
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p >
                {props.constantHealthText}{props.changingNumber}
            </p>
            <PlayerInfoImage choice={props.choice} floatDirection={props.floatDirection}
                element={props.element} />
        </div>
    );
}
    
export default ThisTurnsPlayerInfo;