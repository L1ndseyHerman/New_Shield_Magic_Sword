import styles from './ChooseElementButton.module.css';

function ChooseElementButton(props)
{
    const chooseElementButtonPressed = () => {
       props.callback({pressedNextScreenButton: true}); 
    }

    return(
        <div className={styles.elementButtonDiv}>
            <div class="centeredDivPerfectButtonSize">
                <button onClick={() => {chooseElementButtonPressed()}}>Next Screen</button>
            </div>
            <p>Placeholder Text</p>
        </div>
    );
}
    
export default ChooseElementButton;