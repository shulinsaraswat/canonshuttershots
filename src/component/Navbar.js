import React, { Component } from 'react';
import logo from '../images/canonshuttershots_logo.png';
import '../css/navbar.css';

export default class Navbar extends Component{
    state = {
        activeSection: 'home',
    };

    navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    } 
    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll=()=>{
        const nav = document.querySelector(".portfolio-nav");
        if(nav){
            nav.classList.toggle("nav-scrolled", window.scrollY > 80);
        }

        const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
        const scrollTarget = window.scrollY + 140;
        const currentSection = isAtPageBottom ? 'contact' : this.navItems.reduce((active, item) => {
            const section = document.getElementById(item.id);
            if(section && section.offsetTop <= scrollTarget){
                return item.id;
            }
            return active;
        }, 'home');

        if(currentSection !== this.state.activeSection){
            this.setState({ activeSection: currentSection });
        }
    }

    render(){
        const { theme, onToggleTheme } = this.props;
        const { activeSection } = this.state;

        return(
            <nav className="navbar navbar-expand-lg portfolio-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.navItems.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <a
                                    className={`nav-link${activeSection === item.id ? ' selected' : ''}`}
                                    href={`#${item.id}`}
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                    {activeSection === item.id && <span className="sr-only"> (current)</span>}
                                </a>
                            </li>
                        ))}
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
