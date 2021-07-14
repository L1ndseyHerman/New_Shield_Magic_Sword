import styles from './PlayerInfoImage.module.css';

import shieldImage from './SmolShield.png';
import leftMagicImage from './SmolLeftMagic.png';
import rightMagicImage from './SmolRightMagic.png';
import leftSwordImage from './SmolLeftSword.png';
import rightSwordImage from './SmolRightSword.png';

function PlayerInfoImage(props)
{
    //  Same Shield image for left-facing and right-facing
    if (props.choice === "Shield")
    {
        return(
            <img className={styles.padding} src={shieldImage} alt="Shield" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left")
    {
        return(
            <img className={styles.padding} src={leftMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right")
    {
        return(
            <img className={styles.padding} src={rightMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Sword" && props.floatDirection === "left")
    {
        return(
            <img className={styles.padding} src={leftSwordImage} alt="Sword" />
        );
    }
    else if (props.choice === "Sword" && props.floatDirection === "right")
    {
        return(
            <img className={styles.padding} src={rightSwordImage} alt="Sword" />
        );
    }
    //  Player1 didn't take any turns yet, or error:
    return(
        <div />
    );
}
    
export default PlayerInfoImage;