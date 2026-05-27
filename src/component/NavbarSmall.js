import React, { Component } from 'react';
import logo from '../images/canonshuttershots_logo.png';
import '../css/navbarSmall.css';
import PetsIcon from '@mui/icons-material/Pets';
import NatureIcon from '@mui/icons-material/Nature';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';


export default class NavbarSmall extends Component{
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
        if(window.scrollY>120){
            document.querySelector(".navbarSmall").className="navbar navbar-expand-lg navbar-light sticky-top navbarSmall activeSmall";
        } else{
            document.querySelector(".navbarSmall").className="navbar navbar-expand-lg navbar-light sticky-top navbarSmall hideSmall";
        }
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light sticky-top navbarSmall">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link selected" href="#/nature"><span><i className="material-icons "><NatureIcon/></i></span><span className="icon-text"> &emsp;Nature</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/people"><span><i className="material-icons "><PeopleAltIcon/></i></span><span className="icon-text"> &emsp;People</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/places"><span><i className="material-icons "><PlaceIcon/></i></span><span className="icon-text"> &emsp;Place</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://shulinsaraswat.github.io/canonshuttershots-wildlife"><span><i className="material-icons "><PetsIcon/></i></span><span className="icon-text"> &emsp;Wildlife</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/"><span><i className="material-icons "><HomeIcon/></i></span><span className="icon-text"> &emsp;Home Page</span></a><br/>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="#/">
                    <img className="brand-logo" src={logo} alt="Canon Shuttershots logo" loading="lazy"/>
                </a>
            </nav>
        );
    }
}
