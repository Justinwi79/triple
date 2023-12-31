import React from "react";
import { SocialData } from "../../data/SocialData";
import "./Social.css";
function Social() {
    const data = SocialData;
  return (
    <div className="social-contact">
        {data.map ((item) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon" alt=""/>
              </div>
            </a>
          );
        })} 
    </div>
  );
}

export default Social;