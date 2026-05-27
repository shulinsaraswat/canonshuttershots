import React, {Component} from 'react';
import '../css/contact.css';

const links = [
    { href: 'https://www.instagram.com/canon_shuttershots/', icon: 'fa-instagram', label: 'Instagram' },
    { href: 'https://shulinsaraswat.github.io/ss/', icon: 'fa-desktop', label: 'Personal site' },
    { href: 'https://www.linkedin.com/in/shulinsaraswat/', icon: 'fa-linkedin-square', label: 'LinkedIn' },
    { href: 'mailto:shulin.saraswat5@gmail.com', icon: 'fa-envelope', label: 'Email' },
];

export default class Contact extends Component{
    render(){
        return(
            <section id="contact" className="contact-section section-shell" data-aos="fade-up">
                <div className="container">
                    <div className="contact-card">
                        <p className="section-kicker">Let us connect</p>
                        <h2 className="section-title">Want to talk photography?</h2>
                        <p className="section-intro">For collaborations, feedback, prints, or just a good conversation about frames and light, find me here.</p>
                        <div className="contact-links" aria-label="Contact links">
                            {links.map((link) => (
                                <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'} key={link.label} aria-label={link.label}>
                                    <i className={`fa fa-2x ${link.icon}`} aria-hidden="true"></i>
                                    <span>{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
