function PlayerInfo(props)
{
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p>
                {props.constantHealthText}{props.changingNumber}
            </p>
            <p>
                {props.constantElementText}{props.element}
            </p>
        </div>
    );
}
    
export default PlayerInfo;