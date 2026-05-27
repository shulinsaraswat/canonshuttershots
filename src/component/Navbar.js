import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/canonshuttershots_logo.png';
import '../css/navbar.css';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

const galleryItems = [
    { path: '/nature', label: 'Nature', description: 'Open gallery' },
    { path: '/people', label: 'People', description: 'Open gallery' },
    { path: 'https://shulinsaraswat.github.io/canonshuttershots-place', label: 'Places', description: 'Standalone gallery' },
    { path: 'https://shulinsaraswat.github.io/canonshuttershots-wildlife', label: 'Wildlife', description: 'Standalone gallery' },
];

export default function Navbar({ theme, onToggleTheme }){
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState(isHome ? 'home' : 'portfolio');
    const [isPortfolioMenuClosed, setIsPortfolioMenuClosed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.portfolio-nav');
            if(nav){
                nav.classList.toggle('nav-scrolled', window.scrollY > 80);
            }

            if(!isHome){
                setActiveSection('portfolio');
                return;
            }

            const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
            const scrollTarget = window.scrollY + 140;
            const currentSection = isAtPageBottom ? 'contact' : navItems.reduce((active, item) => {
                const section = document.getElementById(item.id);
                if(section && section.offsetTop <= scrollTarget){
                    return item.id;
                }
                return active;
            }, 'home');

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const scrollToSection = (sectionId) => {
        window.setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
    };

    const handleNavClick = (event, sectionId) => {
        event.preventDefault();

        if(isHome){
            scrollToSection(sectionId);
            return;
        }

        navigate('/');
        scrollToSection(sectionId);
    };

    const handleGalleryClick = (event, gallery) => {
        event.preventDefault();
        setIsPortfolioMenuClosed(true);

        if(gallery.path.startsWith('http')){
            window.location.href = gallery.path;
            return;
        }

        navigate(gallery.path);
    };

    return(
        <nav className="navbar navbar-expand-lg portfolio-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            {item.id === 'portfolio' ? (
                                <div
                                    className={`portfolio-menu${isPortfolioMenuClosed ? ' dropdown-closed' : ''}`}
                                    onMouseLeave={() => setIsPortfolioMenuClosed(false)}
                                    onFocus={() => setIsPortfolioMenuClosed(false)}
                                >
                                    <a
                                        className={`nav-link${activeSection === item.id ? ' selected' : ''}`}
                                        href="#portfolio"
                                        aria-current={activeSection === item.id ? 'page' : undefined}
                                        onClick={(event) => handleNavClick(event, item.id)}
                                    >
                                        {item.label}
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        {activeSection === item.id && <span className="sr-only"> (current)</span>}
                                    </a>
                                    <div className="portfolio-dropdown" aria-label="Portfolio galleries">
                                        {galleryItems.map((gallery) => {
                                            const isActiveGallery = location.pathname === gallery.path;
                                            return (
                                                <a
                                                    className={isActiveGallery ? 'active-gallery' : ''}
                                                    href={gallery.path.startsWith('http') ? gallery.path : `#${gallery.path}`}
                                                    key={gallery.path}
                                                    onClick={(event) => handleGalleryClick(event, gallery)}
                                                    aria-current={isActiveGallery ? 'page' : undefined}
                                                >
                                                    <span>{gallery.label}</span>
                                                    <small>{gallery.description}</small>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <a
                                    className={`nav-link${activeSection === item.id ? ' selected' : ''}`}
                                    href={`#${item.id}`}
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                    onClick={(event) => handleNavClick(event, item.id)}
                                >
                                    {item.label}
                                    {activeSection === item.id && <span className="sr-only"> (current)</span>}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
                <i className={`fa ${theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'}`} aria-hidden="true"></i>
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <a className="navbar-brand" href="#home" aria-label="Canon Shuttershots home" onClick={(event) => handleNavClick(event, 'home')}>
                <img className="brand-logo" src={logo} alt="Canon Shuttershots logo" loading="lazy"/>
            </a>
        </nav>
    );
}
