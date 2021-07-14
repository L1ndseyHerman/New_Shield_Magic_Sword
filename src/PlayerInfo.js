import shieldImage from './SmolShield.png';
import magicImage from './SmolMagic.png';
import swordImage from './SmolSword.png';

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
            <img src={shieldImage} alt="Shield"></img>
            <img src={magicImage} alt="Magic"></img>
            <img src={swordImage} alt="Sword"></img>
        </div>
    );
}
    
export default PlayerInfo;