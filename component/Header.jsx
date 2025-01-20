import React from "react"
import headLogo from "../src/assets/headLogo.jpg"
import "./header.css"

export default function Header(props){
    return(
        <header>
            <nav className="navbar">
                <div className="main--navbardiv">
                <div className="meme--generatordiv">
                    <img className="header--logo" src={headLogo} alt="" />
                    <h1 className="meme--generator--text">Meme Generator</h1>
                </div>
                <div className="toggler">
                        <p className="toggler--light">Light</p>
                        <div
                            className="toggler--slider"
                            onClick={props.toggleDarkMode}
                        >
                            <div className="toggler--slider--circle"></div>
                        </div>
                        <p className="toggler--dark">Dark</p>
            </div>

                </div>

            </nav>
        </header>
    )
}