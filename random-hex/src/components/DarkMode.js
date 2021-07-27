import React, { useState } from 'react';
import '../styles/DarkMode.css'

function DarkMode() {
    const [bgColor, setColor] = useState("dayMode")

    let btnToggle = (e) => {
        let body = document.querySelector('header')
        // CHECKS IF BUTTON IS CURRENTLY ON DAY MODE
        if (e.target.innerText === "DAY MODE"){
            body.classList.replace("dayMode", "nightMode")
            // REPLACING DEFAULT CLASSNAME OF THE BODY FROM DAYMODE TO NIGHTMODE
            setColor("nightMode")
            // TRIGGERING USESTATE IN CHANGING TO NIGHTMODE
            e.target.innerText = "NIGHT MODE"
            // CHANGING BUTTON TEXT TO NIGHT MODE
        } else {
            // GOES OPPOSITE OF ABOVE AND REVERTS IT BACK TO DAYMODE
            body.classList.replace("nightMode", "dayMode")
            setColor("dayMode")
            e.target.innerText = "DAY MODE"
        }
    }


    return (
        <div className="mainDiv">
            <button id="toggleBtn" onClick={(e) => btnToggle(e)}>DAY MODE</button>
            {/* BUTTON TRIGGERS THE FUNCTION THAT TOGGLES CLASSNAME CHANGE AND USESTATE*/}

            <h1>{bgColor === "dayMode" ? "Good Morning!" : "Good Evening!"}</h1>
            {/* USED TERNARY OPERATOR TO CHANGE THE TEXT DISPLAYED BASED ON USESTATE */}
        </div>
    )
}

export default DarkMode;