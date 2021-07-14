import shieldImage from './SmolShield.png';
import magicImage from './SmolMagic.png';
import swordImage from './SmolSword.png';

function PlayerInfoImage(props)
{
    if (props.choice === "Shield")
    {
        return(
            <img src={shieldImage} alt="Shield" />
        );
    }
    else if (props.choice === "Magic")
    {
        return(
            <img src={magicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Sword")
    {
        return(
            <img src={swordImage} alt="Sword" />
        );
    }
    //  Player1 didn't take any turns yet, or error:
    return(
        <div />
    );
}
    
export default PlayerInfoImage;