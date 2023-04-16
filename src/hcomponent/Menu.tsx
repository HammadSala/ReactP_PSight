import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Home from "./Home";
import Speakers from "./Speakers";

const Menu  = () =>{

  const [ currentPage, setCurrentPage ] = useState("Speakers")

  function pageToShow () {
    if ( currentPage === "Home")
        return <Home />
    if ( currentPage === "Speakers") 
        return <Speakers />
    else return <div> Page Not Found</div>
}
  useEffect (
    () =>{ 
      console.log("useEffecct called")
      pageToShow();}
    ,[currentPage]
  )

    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button><a className="nav-link" onClick={() =>setCurrentPage("Home")}>Home</a></button>
                
              
            </li>
            <li className="nav-item">
              <button><a className="nav-link" onClick={() => setCurrentPage("Speakers")}>Speakers</a></button>
                
             
            </li>
          </ul>
        </div>
      </nav>
    );
  
}

export default Menu;