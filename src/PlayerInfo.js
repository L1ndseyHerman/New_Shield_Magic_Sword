function PlayerInfo(props)
{
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