import React from 'react';
// import hero from '../images/hero1.JPG';
import {Parallax} from 'react-parallax';
import hero from '../images/hero2.jpeg';
import Typewriter from 'typewriter-effect';
import '../css/hero.css';

export default function Hero(){
    return(
        <div id="home">            
        <Parallax bgImage={hero} strength={500}>
            <div style={{height:'670px'}}>
                <div style={{transform:"translate(-50%,-50%)"}}></div>
            </div>
        </Parallax>
            <div className="centered">
                <h4 className="welcome">WELCOME TO</h4>
                <h1 className="heading-hero" data-aos="fade-left" data-aos-delay="400"><strong>Canon Shuttershots</strong></h1>
                <h2 className="typing">
                <Typewriter
                    options={{
                        strings:['a Photographer', 'a Numismatist', 'an IoT enthusiast', 'a Developer'],
                        autoStart: true,
                        loop: true,
                        skipAddStyles: true,
                    }}
                />
                </h2>                    
            </div>
            <a href="#about">
                <div className="lead-down">
                    <span>
                        <i className="fa fa-chevron-down" aria-hidden="true">
                        </i>
                    </span>
                </div>
            </a>     
        </div>
    );
}