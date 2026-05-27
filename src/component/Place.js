import React from 'react';
import GalleryPage from './GalleryPage';
import place from '../images/place.jpeg';
import pl1 from '../images/place/pl1.jpeg';
import pl2 from '../images/place/pl2.jpeg';
import pl3 from '../images/place/pl3.jpeg';
import pl4 from '../images/place/pl4.jpeg';
import pl5 from '../images/place/pl5.jpeg';
import pl6 from '../images/place/pl6.jpeg';

const images = [
    { src: pl1, alt: 'Sree Virupaksha Temple in Hampi', location: 'Hampi, India', detail: 'Sree Virupaksha Temple' },
    { src: pl2, alt: 'Stone Chariot at Vitthala Temple in Hampi', location: 'Hampi, India', detail: 'Stone Chariot, Vitthala Temple' },
    { src: place, alt: 'Sree Virupaksha Temple detail in Hampi', location: 'Hampi, India', detail: 'Sree Virupaksha Temple' },
    { src: pl3, alt: 'Rock Beach in Pondicherry', location: 'Pondicherry, India', detail: 'Rock Beach' },
    { src: pl5, alt: 'Hemakuta Hill in Hampi', location: 'Hampi, India', detail: 'Hemakuta Hill' },
    { src: pl4, alt: 'Pondicherry Rock Beach shoreline', location: 'Pondicherry, India', detail: 'Rock Beach' },
    { src: pl6, alt: 'Indian Ocean view from Mirissa', location: 'Mirissa, Sri Lanka', detail: 'Indian Ocean' },
];

const relatedGalleries = [
    { label: 'Nature', href: '#/nature' },
    { label: 'People', href: '#/people' },
    { label: 'Wildlife', href: 'https://shulinsaraswat.github.io/canonshuttershots-wildlife' },
];

export default function Place(){
    return (
        <GalleryPage
            title="Places"
            eyebrow="Canon Shuttershots gallery"
            description="Temples, beaches, hills, and coastlines remembered through texture, weather, and the feeling of arriving somewhere slowly."
            coverImage={place}
            coverAlt="Temple architecture for the Places gallery"
            accent="var(--electric-blue)"
            images={images}
            relatedGalleries={relatedGalleries}
        />
    );
}
