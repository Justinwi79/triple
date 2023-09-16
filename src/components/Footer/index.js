import React from 'react';
import './Footer.css'; 
import Social from '../Social';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
			  <h3>HJWindhamTech</h3>
			  <p>Ponchatoula, LA</p>
			  <Social />
      </div>
      <div className="footer-column">
        <h3>Site Map</h3>
        <ul>
          	<li><a href="/">Home</a></li>
          	<li><a href="/development">Development</a></li>
          	<li><a href="/drone">Drone</a></li>
		  	    <li><a href="/portfolio">Portfolio</a></li>
          </ul>
      </div>
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
			    <li><a href="/contact">Contact</a></li>
          <li><a href="http://www.fsu.edu"  target="_blank" rel="noreferrer">FSU</a></li>
			    <li><a href="http://www.fontawesome.com"target="_blank" rel="noreferrer">Font Awesome</a></li>
          <li><a href="http://www.w3schools.com"target="_blank" rel="noreferrer">W3Schools</a></li>

        </ul>
      </div>
	  
    </footer>
  );
};

export default Footer;
