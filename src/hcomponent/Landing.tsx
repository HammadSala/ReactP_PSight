import React, { Component } from "react";
import Home from './Home';
import Speakers from "./Speakers";
import "./imgcss.css"
import Menu from "./Menu";
import { Header } from "./Header";

const configValue = {
    showSignUp : true,
    showSpeakersSpeakingDay :  true
}

export const configContext = React.createContext(configValue);

 type  Props  = {
    page : string,
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
            <Header />
            <Menu />
            <configContext.Provider value={configValue}>
                {/* <Header />
                <Menu /> */}
                <div>{pageToShow(page)}</div>
            </configContext.Provider>

        </div>
    )

}

export default Landing;