import React from 'react';
import './Development.css';
import Header from '../Header';
import Footer from '../Footer';

function Development() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>Development</h1>
      <div className="main"> 
      <div className="bio">
        <p>
        A work in progress. As a CS student at Florida State University, 
        I am constantly learning new tech and creative ways to implement it. 
        As you can tell, my UI/UX skills are subpar. Please leave feedback 
        on what I could do better in that sense. I made this site to practice 
        and learn more javascript skills and eventually showcase other projects. 
        I would love to collaborate with any developers on future projects and 
        share ideas. I have a lot of experience in C++, but always looking to 
        learn something new. Possibly building my next project in C#. 
        Please go to the contact page and leave a message letting 
        me know what you think of my progress.
        </p>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Development;
