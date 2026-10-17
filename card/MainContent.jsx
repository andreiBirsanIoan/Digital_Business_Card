import React from "react"
import About from "./About"
import Interests from "./Interests"
export default function MainContent(){
    function openLinkedIn() {
    window.open("https://www.linkedin.com/in/andrei-birsan-0a0815373/?isSelfProfile=true", "_blank");
  }
  function openEmail() {
    window.location.href = "mailto:birsanandrei67@gmail.com";
  }
    return(
    <main>
          <div className="aboutButtons">
            <button id="buttonEmail" className="button" onClick={openEmail}>Email</button>
            <button id="buttonLinkedIn" className="button" onClick={openLinkedIn}>LinkedIn</button>
        </div>
        
        <About />
        <Interests />
    </main>
    )
}