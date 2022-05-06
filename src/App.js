import React, { useState } from "react";
import './App.css';
import { FiMenu } from "react-icons/fi"



const App = ()=>{

    const[navbar, setnav] = useState(false)

    const handleToggle = () => {
        setnav(!navbar)
      }

    return(

        <div className="mainContainer">
            <header className="hearderContainer">
                
                <div className="navContainer">
                    <nav className={`nav ${navbar ? " showMenu" : ""}`} >
                    
                        <a href="Home">Home</a>
                        <a href="Magic">Magic</a>
                        <a href="Developer space" >Developers Space</a>
                        <a href="Contact" >Contact</a>

                    
                    </nav>
                </div>

                
                <button className="buger" onClick={handleToggle}> 
                    <FiMenu style={{ color: "black", width: "40px", height: "40px" }} />
                    </button>

            
            </header>

        </div>
    )
}

export default App;