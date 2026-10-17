import React from "react"
import profilePic from "./eu.png"
export default function Header(){
    return(
        <header className="cardHeader">
            <img src={profilePic} className="profilePic" alt="me"></img> 
            <h3>DIGITAL BUSINESS CARD</h3>
            <h1>Birsan Ioan-Andrei</h1>
            <h2>ULBS Computer Engineering Student</h2>
        </header>
    )
}