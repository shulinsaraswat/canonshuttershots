import React from 'react';
// import hero from '../images/hero1.JPG';
import {Parallax} from 'react-parallax';
import hero from '../images/hero2.jpeg';
import logo from '../images/canonshuttershots_logo.png';
import Typewriter from 'typewriter-effect';
import '../css/hero.css';

export default function Hero(){
    return(
        <div id="home" className="hero-section">            
        <Parallax bgImage={hero} bgImageAlt="Sunflower field at golden hour" strength={300}>
            <div className="hero-frame">
                <div className="hero-shade"></div>
            </div>
        </Parallax>
            <div className="hero-content">
                <img className="hero-logo" src={logo} alt="Canon Shuttershots logo" />
                <p className="welcome">PHOTOGRAPHY BY SHULIN SARASWAT</p>
                <h1 className="heading-hero">Canon Shuttershots</h1>
                <p className="hero-subtitle">Nature, people, places, and wildlife captured with patience, curiosity, and a love for honest light.</p>
                <h2 className="typing" aria-label="Photography portfolio themes">
                <Typewriter
                    options={{
                        strings:['Nature Stories', 'People Portraits', 'Wildlife Moments', 'Places in Light'],
                        autoStart: true,
                        loop: true,
                        skipAddStyles: true,
                    }}
                />
                </h2>
                <div className="hero-actions">
                    <a className="hero-button hero-button-primary" href="#portfolio">View Portfolio</a>
                    <a className="hero-button hero-button-secondary" href="#about">About Shulin</a>
                </div>
                <div className="hero-stats" aria-label="Portfolio highlights">
                    <span><strong>04</strong>Collections</span>
                    <span><strong>Nature</strong>First love</span>
                    <span><strong>Light</strong>Driven</span>
                </div>                    
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
