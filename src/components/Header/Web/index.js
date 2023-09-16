import React from "react";
import './Web.css';

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
          <div className="link"><a href="/">Home</a></div>
          <div className="link"><a href="/development">Development</a></div>
          <div className="link"><a href="/drone">Drone</a></div>
		      <div className="link"><a href="/portfolio">Portfolio</a></div>
          <div className="link"><a href="/contact">Contact</a></div>
      </div>
    </div>
  );
};

export default Web;

