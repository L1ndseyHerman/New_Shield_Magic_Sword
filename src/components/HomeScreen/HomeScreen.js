import React, { useState } from 'react';

import BeginGameButton from '../BeginGameButton/BeginGameButton';
import BottomNotes from '../BottomNotes/BottomNotes';

function HomeScreen(props)
{
    /*const beginGameButtonPressed = (beginGameButtonSettings) => {
        //(sessionStorage.getItem("playerOneHealth") || 20)
        //var tempScreenName = (beginGameButtonSettings.screenName || "None Yet");
        /*var tempScreenName = "Shield-Magic-Sword";
        if (typeof beginGameButtonSettings.screenName === undefined)
        {
            tempScreenName = "";
        }
        props.callback({screenName: beginGameButtonSettings.screenName});
        //props.callback({screenName: beginGameButtonSettings.screenName});
    }*/
    //const [screenName, setScreenName] = useState("Shield-Magic-Sword");

    const beginGameButtonPressed = (beginGameButtonSettings) => {
        //setScreenName("Character Type Selection Screen");
        //setScreenName(beginGameButtonSettings.screenName);
        //props.callback({screenName: {screenName}}); 
        props.callback({screenName: "Character Type Selection Screen"});
     }

    return (
        <main>   
            <div id="outermostDiv">
                <h1>{props.screenName}</h1>
                <BeginGameButton callback={beginGameButtonPressed} />
                <BottomNotes />
            </div>
        </main>
    );
}

export default HomeScreen;