import React from 'react';
// import hero from '../images/hero1.JPG';
import hero from '../images/hero2.jpeg';
import Typewriter from 'typewriter-effect';
import '../css/hero.css';

export default function Hero(){
    return(
        <div id="home">            
                <img src={hero} style={{width:'100%', height:'670px'}} data-aos="fade-right" data-aos-delay="300"/>
                    <div className="centered">
                        <h4 className="welcome">WELCOME TO</h4>
                        <h1 className="heading-hero" data-aos="fade-left" data-aos-delay="400"><strong>Canon Shuttershots</strong></h1>
                        <h2 className="typing">
                        <Typewriter
                            options={{
                                strings:['a Developer', 'a Photographer', 'an IoT enthusiast', 'a Numismatist'],
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