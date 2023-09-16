import React from "react";
import './Mobile.css'
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
    <FontAwesomeIcon icon={faXmarkCircle} style={{color: "#ffffff",}} />
    </div>
    <div className="mobile-option">
    <a href="/development" >
          <i class=""></i>Development
        </a>
    </div>
    <div className="mobile-option">
        <a href="/drone">
        <i class=""></i>Drone
        </a>
    </div>
    <div className="mobile-option">
        <a href="/portfolio">
        <i class=""></i>Portfolio
        </a>
    </div>
    <div className="mobile-option">
        <a href="/contact">
        <i class=""></i>Contact
        </a>
    </div>
  </div>
  );
}

export default Mobile;