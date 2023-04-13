import React, { Component } from "react";
import Home from './Home';
import Speakers from "./Speakers";
import "../static/site.css";

const configValue = {
    showSignUp : true,
    showSpeakersSpeakingDay :  true
}

const configContext = React.createContext(configValue);

 type  Props  = {
    page : string
 }

 function pageToShow (page : string) {
    if ( page === "Home")
        return <Home />
    if ( page === "Speakers") 
        return <Speakers />
    else return <div> Page Not Found</div>
}

const Landing = ( { page } : Props) => {

  

    return (
        <div>
            Header, Singup comes header
            <configContext.Provider value={configValue}>
                <div>{pageToShow(page)}</div>
            </configContext.Provider>

        </div>
    )

}

export default Landing;