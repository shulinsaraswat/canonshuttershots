import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../css/navbar.css';

export default class Navbar extends Component{

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    } 
    componentWillUnmount(){
        window.removeEventListener("Scroll", this.handleScroll);
    }
    handleScroll=()=>{
        if(window.scrollY>120){
            document.querySelector(".navbar").className="navbar navbar-expand-lg navbar-light sticky-top active";
        } else{
            document.querySelector(".navbar").className="navbar navbar-expand-lg navbar-light sticky-top hide";
        }
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="/canonshuttershots/">
                    <img src={logo} width="50" height="30" alt="cs logo" loading="lazy"/>
                </a>
            </nav>
        );
    }
}