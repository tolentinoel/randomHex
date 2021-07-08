import React, { useState } from 'react';
import '../styles/DarkMode.css'

function DarkMode() {

    const [bgColor, setColor] = useState("dayMode")

    let btnToggle = (e) => {
        let body = document.querySelector('header')
        if (e.target.innerText === "DAY MODE"){
            body.classList.replace("dayMode", "nightMode")
            setColor("nightMode")
            e.target.innerText = "NIGHT MODE"
        } else {
            body.classList.replace("nightMode", "dayMode")
            setColor("dayMode")
            e.target.innerText = "DAY MODE"
        }
    }


    return (
        <div>
            <button
                id="toggleBtn"
                onClick={(e) => btnToggle(e)}
            >DAY MODE</button>
            <p>{bgColor}</p>
        </div>
    )
}

export default DarkMode;