import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Scroll from './BackTopButton';


export default function Main(){
    return(
        <div>
            <Scroll showBelow={250} />
            {/* Navbar BEGIN */}
            <Navbar/>
            {/* Navbar END */}
            {/* Hero BEGIN */}
            <Hero/><hr style={{width:'75%'}}></hr>
            {/* Hero END */}
            {/* About BEGIN */}
            <About/><hr style={{width:'75%'}}></hr>
            {/* About END */}
            {/* Portfolio BEGIN */}
            <Portfolio/><hr style={{width:'75%'}}></hr>
            {/* Portfolio END */}
            {/* Contact BEGIN */}
            <Contact/><hr style={{width:'75%'}}></hr>
            {/* Contact END */}
            {/* Footer BEGIN */}
            <Footer/>
            {/* Footer END */}
        </div>
    );
}