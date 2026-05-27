import React from 'react';
import GalleryPage from './GalleryPage';
import nature from '../images/nature.jpeg';
import hero1 from '../images/hero1.JPG';
import nr1 from '../images/nature/nr1.jpg';
import nr2 from '../images/nature/nr2.jpeg';
import nr3 from '../images/nature/nr3.jpeg';
import nr4 from '../images/nature/nr4.jpeg';
import nr5 from '../images/nature/nr5.jpeg';
import nr6 from '../images/nature/nr6.jpeg';
import nr7 from '../images/nature/nr7.jpeg';
import nr11 from '../images/nature/nr11.jpeg';
import nr12 from '../images/nature/nr12.JPG';
import banner from '../images/banner.jpeg';

const images = [
    { src: nr1, alt: 'Nature frame from Kandy', location: 'Kandy, Sri Lanka', camera: 'Canon EOS' },
    { src: nr2, alt: 'Nature detail in soft light', location: 'Kandy, Sri Lanka', camera: 'Canon EOS' },
    { src: nr3, alt: 'Nature landscape frame', location: 'Kandy, Sri Lanka', camera: 'Canon EOS' },
    { src: hero1, alt: 'Sunflower field at golden hour', location: 'Bangalore, India', camera: 'Canon EOS' },
    { src: nr5, alt: 'Munnar nature view', location: 'Munnar, India', camera: 'Canon EOS' },
    { src: nr4, alt: 'Bangalore nature frame', location: 'Bangalore, India', camera: 'Canon EOS' },
    { src: nr12, alt: 'Hampi nature frame', location: 'Hampi, India', camera: 'Canon EOS' },
    { src: nr7, alt: 'Vellore nature frame', location: 'Vellore, India', camera: 'Canon EOS' },
    { src: banner, alt: 'Wide nature banner landscape', location: 'Hampi, India', camera: 'Canon EOS' },
    { src: nr6, alt: 'Nature scene in Bangalore', location: 'Bangalore, India', camera: 'Canon EOS' },
    { src: nr11, alt: 'Hampi landscape detail', location: 'Hampi, India', camera: 'Canon EOS' },
];

const relatedGalleries = [
    { label: 'People', href: 'https://shulinsaraswat.github.io/canonshuttershots-people' },
    { label: 'Places', href: 'https://shulinsaraswat.github.io/canonshuttershots-place' },
    { label: 'Wildlife', href: 'https://shulinsaraswat.github.io/canonshuttershots-wildlife' },
];

export default function Nature(){
    return (
        <GalleryPage
            title="Nature"
            eyebrow="Canon Shuttershots gallery"
            description="Fields, flowers, landscapes, and quiet details from the natural world, collected into the main Canon Shuttershots portfolio."
            coverImage={nature}
            coverAlt="Flower detail for the Nature gallery"
            accent="var(--fresh-green)"
            images={images}
            relatedGalleries={relatedGalleries}
        />
    );
}
