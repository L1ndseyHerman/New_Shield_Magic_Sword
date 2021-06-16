function PlayerInfo(props)
{
    return(
        <div>
            <p style={{float: props.floatDirection}}>
                {props.constantText}{props.changingNumber}</p>
        </div>
    );
}
    
export default PlayerInfo;