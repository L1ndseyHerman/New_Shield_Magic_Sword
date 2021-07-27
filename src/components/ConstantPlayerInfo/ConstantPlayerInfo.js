function ConstantPlayerInfo(props)
{
    //  #testingPars are needed for Jest testing.
    return(
        <div style={{width: "150px", float: props.floatDirection}}>
            <p id="testingPar2">
                {props.constantElementText}
                <span style={{color: props.elementColor, backgroundColor: "black"}}>
                    {props.element}
                </span> 
            </p>
            <p id="testingPar3">
                {props.characterType}
            </p>
        </div>
    );
}

export default ConstantPlayerInfo;