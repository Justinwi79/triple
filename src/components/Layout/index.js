import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import Button from '../Button'; 
import '../Images/wwwsignature.svg';
import Header from '../Header';


const Card = ({ title, section1, section2, section3, buttonLink, buttonLabel }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{section1}</p>
    <p>{section2}</p>
    <p>{section3}</p>
    <Link to={buttonLink}>
      <Button label={buttonLabel} link={buttonLink} />
    </Link>
  </div>
);

const Signature = require('../Images/wwwsignature.svg');

function Layout() {
  return (
    <div className ='body'>
      <div><Header /></div>
        <div>
        <div className='sig'>
        <img src={Signature} alt='' />
        </div>
            <div className="card-container">
                <Card
                title="Development"
                section1="Review my github and explore my development 
                interests here. Looking forward to collaborating with 
                other developers soon."
                buttonLabel="Click Here"
                buttonLink="/development"
                />
                <Card
                title="Drone"
                section1="A few drone photos from my work travels the past 
                few years and hope to add more soon"
                buttonLabel="Click Here"
                buttonLink="/drone"
                />
                <Card
                title="Portfolio"
                section1="Take a look at a couple projects I've worked on 
                back in school and a current one I plan on presenting to 
                a previous employer"
                buttonLabel="Click Here"
                buttonLink="/portfolio"
                />
            </div>
        </div>
    </div>
  );
}

export default Layout;
