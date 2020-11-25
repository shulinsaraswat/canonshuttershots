import React from 'react';
import wildlife from '../images/wildlife.jpg';
import people from '../images/people.jpeg';
import nature from '../images/nature.jpeg';
import place from '../images/place.jpeg';
import '../css/portfolio.css';

export default function Portfolio(){
    return(
            <div id="portfolio" data-aos="fade-up" style={{ paddingBottom:'17px'}}><br/>
                <h2 style={{textAlign:'center'}}>PORTFOLIO</h2>
                <hr style={{width:'8%', color:'#00a2c8', backgroundColor:'#00a2c8'}}></hr><br/>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 box-wrap">
                        <a href="https://shulinsaraswat.github.io/canonshuttershots-nature" style={{textDecoration:'none', color: '#212529'}}><div className="col mb-4">
                            <div className="card box">
                                    <img src={nature} className="card-img-top" alt="flower for nature"/>
                                    <div className="card-body">
                                        <h5 className="card-title">NATURE</h5>
                                        <p className="card-text">"Look deep into nature, and then we will understand everything better."</p>
                                        <a className="btn viewbtn rounded-pill shadow" href="https://shulinsaraswat.github.io/canonshuttershots-nature" 
                                            style={{textDecoration:'none', width:'50%'}}>
                                        <i className="fa fa-eye">&ensp;View</i>
                                        </a>
                                    </div>
                            </div>
                        </div></a>
                        <a href="https://shulinsaraswat.github.io/canonshuttershots-people" style={{textDecoration:'none', color: '#212529'}}><div className="col mb-4">
                            <div className="card box">
                                <img src={people} className="card-img-top" alt="group"/>
                                <div className="card-body">
                                    <h5 className="card-title">PEOPLE</h5>
                                    <p className="card-text">"A photograph is one that fully express what one feels, in the deepest sense, about what is being photographed."</p>
                                    <a className="btn viewbtn rounded-pill shadow" href="https://shulinsaraswat.github.io/canonshuttershots-people" 
                                        style={{textDecoration:'none', width:'50%'}}>
                                        <i className="fa fa-eye">&ensp;View</i>
                                    </a>
                                </div>
                            </div>
                        </div></a>
                        <a href="https://shulinsaraswat.github.io/canonshuttershots-place" style={{textDecoration:'none', color: '#212529'}}><div className="col mb-4">
                            <div className="card box">
                                <img src={place} className="card-img-top" alt="place"/>
                                <div className="card-body">
                                    <h5 className="card-title">PLACE</h5>
                                    <p className="card-text">"Fill up frame with feeling, energy, discovery, and risk, and leave room enough for someone else to get in there."</p>
                                    <a className="btn viewbtn rounded-pill shadow" href="https://shulinsaraswat.github.io/canonshuttershots-place" 
                                        style={{textDecoration:'none', width:'50%'}}>
                                        <i className="fa fa-eye">&ensp;View</i>
                                    </a>
                                </div>
                            </div>
                        </div></a>
                        <a href="https://shulinsaraswat.github.io/canonshuttershots-wildlife" style={{textDecoration:'none', color: '#212529'}}><div className="col mb-4">
                            <div className="card box">
                                <img src={wildlife} className="card-img-top" alt="lion"/>
                                <div className="card-body">
                                    <h5 className="card-title">WILDLIFE</h5>
                                    <p className="card-text">"Photograph takes an instant out of time, alerting life by holding it still."</p>
                                    <a className="btn viewbtn rounded-pill shadow" href="https://shulinsaraswat.github.io/canonshuttershots-wildlife" 
                                        style={{textDecoration:'none', width:'50%'}}>
                                        <i className="fa fa-eye">&ensp;View</i>
                                    </a>
                                </div>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
    );
}