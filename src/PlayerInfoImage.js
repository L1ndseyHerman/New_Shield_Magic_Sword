import styles from './PlayerInfoImage.module.css';

import shieldImage from './SmolShield.png';
import leftFireMagicImage from './SmolLeftMagicColorfulFire.png';
import rightFireMagicImage from './SmolRightMagicColorfulFire.png';
import leftEarthMagicImage from './SmolLeftMagicColorfulEarth.png';
import rightEarthMagicImage from './SmolRightMagicColorfulEarth.png';
import leftAirMagicImage from './SmolLeftMagicColorfulAir.png';
import rightAirMagicImage from './SmolRightMagicColorfulAir.png';
import leftWaterMagicImage from './SmolLeftMagicColorfulWater.png';
import rightWaterMagicImage from './SmolRightMagicColorfulWater.png';
import leftLightMagicImage from './SmolLeftMagicColorfulLight.png';
import rightLightMagicImage from './SmolRightMagicColorfulLight.png';
import leftDarkMagicImage from './SmolLeftMagicColorfulDark.png';
import rightDarkMagicImage from './SmolRightMagicColorfulDark.png';
import leftSwordImage from './SmolLeftSword.png';
import rightSwordImage from './SmolRightSword.png';

function PlayerInfoImage(props)
{
    //  Same Shield image for left-facing and right-facing
    if (props.choice === "Shield")
    {
        return(
            <img className={styles.leftPadding} src={shieldImage} alt="Shield" />
        );
    }

    //  6 Magic Elements * 2 directions
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Fire")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftFireMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Fire")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightFireMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Earth")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftEarthMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Earth")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightEarthMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Air")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftAirMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Air")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightAirMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Water")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftWaterMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Water")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightWaterMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Light")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftLightMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Light")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightLightMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "left" && props.element === "Dark")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftDarkMagicImage} alt="Magic" />
        );
    }
    else if (props.choice === "Magic" && props.floatDirection === "right" && props.element === "Dark")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightDarkMagicImage} alt="Magic" />
        );
    }

    //  2 Sword directions
    else if (props.choice === "Sword" && props.floatDirection === "left")
    {
        return(
            <img className={styles.leftAndTopPadding} src={leftSwordImage} alt="Sword" />
        );
    }
    else if (props.choice === "Sword" && props.floatDirection === "right")
    {
        return(
            <img className={styles.leftAndTopPadding} src={rightSwordImage} alt="Sword" />
        );
    }
    //  Player1 didn't take any turns yet, or error:
    return(
        <div />
    );
}
    
export default PlayerInfoImage;