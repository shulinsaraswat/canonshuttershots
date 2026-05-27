import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Scroll from './BackTopButton';


export default function Main(){
    const [theme, setTheme] = useState(() => localStorage.getItem('canon-theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('canon-theme', theme);
        document.body.dataset.theme = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
    };

    return(
        <div className="site-shell" data-theme={theme}>
            <Scroll showBelow={250} />
            <Navbar theme={theme} onToggleTheme={toggleTheme}/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}
