import React, { Component } from 'react';
import logo from '../images/canonshuttershots_logo.png';
import '../css/navbar.css';

export default class Navbar extends Component{

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);

        var header= document.getElementById("navbarTogglerDemo02")
        var btns= header.getElementsByClassName("nav-link");
        for(var i=0; i<btns.length; i++){
            btns[i].addEventListener("click", function(){
                var current=document.getElementsByClassName("selected");
                current[0].className=current[0].className.replace("selected","");
                this.className+=" selected";
            });
        }
    } 
    componentWillUnmount(){
        window.removeEventListener("Scroll", this.handleScroll);
    }
    handleScroll=()=>{
        const nav = document.querySelector(".portfolio-nav");
        if(nav){
            nav.classList.toggle("nav-scrolled", window.scrollY > 80);
        }
    }

    render(){
        const { theme, onToggleTheme } = this.props;

        return(
            <nav className="navbar navbar-expand-lg portfolio-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link selected" href="#home">Home <span className="sr-only">(current)</span></a>
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
                <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
                    <i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`} aria-hidden="true"></i>
                    <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
                <a className="navbar-brand" href="#home" aria-label="Canon Shuttershots home">
                    <img className="brand-logo" src={logo} alt="Canon Shuttershots logo" loading="lazy"/>
                </a>
            </nav>
        );
    }
}
