import React from 'react';
import wildlife from '../images/wildlife.jpg';
import people from '../images/people.jpeg';
import nature from '../images/nature.jpeg';
import place from '../images/place.jpeg';
import '../css/portfolio.css';

const collections = [
    {
        title: 'Nature',
        label: 'Light, color, stillness',
        description: 'Fields, flowers, and landscapes framed around quiet details and changing light.',
        image: nature,
        alt: 'Sunlit flower for the nature collection',
        href: '#/nature',
        accent: 'var(--fresh-green)',
    },
    {
        title: 'People',
        label: 'Portraits and candid frames',
        description: 'Human moments captured through expression, mood, and the small pauses between poses.',
        image: people,
        alt: 'Group portrait for the people collection',
        href: '#/people',
        accent: 'var(--royal-purple)',
    },
    {
        title: 'Places',
        label: 'Travel, texture, memory',
        description: 'Corners of cities and landscapes that hold a sense of movement, discovery, and atmosphere.',
        image: place,
        alt: 'Place collection preview',
        href: 'https://shulinsaraswat.github.io/canonshuttershots-place',
        accent: 'var(--electric-blue)',
    },
    {
        title: 'Wildlife',
        label: 'Patience in motion',
        description: 'Animals and natural moments held in the instant before they disappear.',
        image: wildlife,
        alt: 'Lion for the wildlife collection',
        href: 'https://shulinsaraswat.github.io/canonshuttershots-wildlife',
        accent: 'var(--sunset-orange)',
    },
];

export default function Portfolio(){
    return(
        <section id="portfolio" className="portfolio-section section-shell" data-aos="fade-up">
            <p className="section-kicker">Selected galleries</p>
            <h2 className="section-title">Explore the portfolio</h2>
            <p className="section-intro">Four focused collections, each built around a different rhythm of photography: observing nature, reading people, remembering places, and waiting for wildlife.</p>
            <div className="container">
                <div className="portfolio-grid">
                    {collections.map((collection) => (
                        <article className="portfolio-card" style={{'--card-accent': collection.accent}} key={collection.title}>
                            <a href={collection.href} aria-label={`View ${collection.title} collection`}>
                                <img src={collection.image} alt={collection.alt} />
                                <div className="portfolio-card-overlay">
                                    <span>{collection.label}</span>
                                    <h3>{collection.title}</h3>
                                    <p>{collection.description}</p>
                                    <strong>View collection <i className="fa fa-long-arrow-right" aria-hidden="true"></i></strong>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
