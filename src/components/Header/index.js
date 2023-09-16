import React, { useState } from "react";
import "./Header.css";
import Mobile from "./Mobile";
import Web from "./Web/index";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="header">
      <div className="logo">Justin Windham</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;