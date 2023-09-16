import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import './Drone.css';
import Header from '../Header';
import Footer from '../Footer';

function Drone(){
    return(
        <div>
            <div>
                <Header />
            </div>
            <h3>
                Some photos from NC and PA
            </h3>
            <p>
                More images and videos coming soon!
            </p>
            <>
                <ImageSlider slides={SliderData} />;
            </>
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Drone;