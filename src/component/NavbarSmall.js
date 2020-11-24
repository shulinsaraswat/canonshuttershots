import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../css/navbarSmall.css';
import PetsIcon from '@material-ui/icons/Pets';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';


export default class NavbarSmall extends Component{
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
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
                            <a className="nav-link" href="/nature"><span><i className="material-icons "><EcoIcon/></i></span><span className="icon-text"> &emsp;Nature</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/people"><span><i className="material-icons "><PeopleAltIcon/></i></span><span className="icon-text"> &emsp;People</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/place"><span><i className="material-icons "><PlaceIcon/></i></span><span className="icon-text"> &emsp;Place</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/wildlife"><span><i className="material-icons "><PetsIcon/></i></span><span className="icon-text"> &emsp;Wildlife</span></a><br/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"><span><i className="material-icons "><HomeIcon/></i></span><span className="icon-text"> &emsp;Home Page</span></a><br/>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand" href="/">
                    <img src={logo} width="50" height="30" alt="cs logo" loading="lazy"/>
                </a>
            </nav>
        );
    }
}