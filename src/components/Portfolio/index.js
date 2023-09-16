import React from 'react';
import './Portfolio.css';
import Header from '../Header';
import Footer from '../Footer';
import Image1 from '../Images/digspic.png';
import Image2 from '../Images/fsugeek.jpg';

function Portfolio(){
    return(
        <div>
            <div>
                <Header />
            </div>
            <h1>
                Portfolio
            </h1>
            <div className="layout-container">
                <div className="row">
                    <div className="image-container">
                        <img src={Image1} alt="Image 1" />
                    </div>
                    <div className="description">
                        <p>
                            This is a project I'm currently working on for a previous employer 
                            to help keep a record of daily activities and work performed 
                            in the field. Management will be able to access records of work 
                            performed at all operating sites. It will also benefit employees 
                            in the field by making ease of reporting to management. Thanks 
                            to a former classmate who helped me with the design, it's been 
                            a fun project to work on.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="description">
                        <p>
                            In the fall of 2022, I was part of a great group of CS students who 
                            were instructed to come up with a project for a SWE class. We decided 
                            to create a mobile app that FSU students can open and access information 
                            they need more easily than searching the school website. We never deployed 
                            it, but it turned out great. We created it using ReactNative to be cross 
                            platform and implemented more features than I can name in this description. 
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={Image2} alt="Image 2" />
                    </div>
                </div>
            </div>
  
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Portfolio;