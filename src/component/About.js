import React, { Component} from 'react';
import about from '../images/about.jpg';
import '../css/about.css';


export default class About extends Component{
    
    render(){
        return(
            // About BEGIN
            <div id="about" className="about-section" data-aos="fade-up"><br/>
                <p className="section-kicker">Behind the lens</p>
                <h2 className="about-title">ABOUT ME</h2>
                <hr className="section-line"></hr><br/>
                <div className="container conatinerSmall">
                    <div className="about-card" data-aos="fade-up" >
                        <div className="row no-gutters align-items-stretch">
                            <div className="col-md-4">
                                <img src={about} className="about-photo" alt="Shulin Saraswat with a camera"/>
                            </div>
                            <div className="col-md-8">
                                <div className="about-copy">
                                    <p>
                                        Hi, I am Shulin Saraswat, the eye behind <strong>Canon Shuttershots</strong>. Photography is my way of slowing the world down: noticing the light before it moves, the expression before it changes, and the small details that make a place feel alive.
                                    </p>
                                    <p>
                                        My portfolio moves through nature, wildlife, people, and places because each one asks for a different kind of patience. Sometimes it is a field of sunflowers catching the day. Sometimes it is a candid portrait, a city corner, or a quiet animal moment that disappears if you rush it.
                                    </p>
                                    <p>
                                        Outside photography, I come from a developer and IoT background, and that technical curiosity follows me into every frame. I like the craft as much as the click: composition, timing, color, and the tiny decisions that turn a memory into an image.
                                    </p>
                                    <p className="about-quote"><strong>
                                        Capture the good times, develop from the negatives, and when the frame does not work, take another shot.
                                    </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
