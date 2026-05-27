import React from 'react';
import GalleryPage from './GalleryPage';
import people from '../images/people.jpeg';
import pp1 from '../images/people/pp1.jpeg';
import pp2 from '../images/people/pp2.jpeg';
import pp3 from '../images/people/pp3.jpeg';
import pp4 from '../images/people/pp4.jpeg';
import pp6 from '../images/people/pp6.jpeg';
import pp7 from '../images/people/pp7.jpeg';
import pp8 from '../images/people/pp8.jpg';
import pp9 from '../images/people/pp9.jpeg';
import pp10 from '../images/people/pp10.jpeg';
import pp11 from '../images/people/pp11.jpg';
import pp12 from '../images/people/pp12.jpeg';
import pp13 from '../images/people/pp13.jpeg';
import pp14 from '../images/people/pp14.jpeg';
import pp15 from '../images/people/pp15.jpeg';
import pp16 from '../images/people/pp16.jpeg';
import pp17 from '../images/people/pp17.jpeg';

const images = [
    { src: pp1, alt: 'Candid people portrait', location: 'Portrait Study' },
    { src: pp2, alt: 'People frame in natural light', location: 'Candid Frame' },
    { src: pp3, alt: 'People portrait outdoors', location: 'Outdoor Portrait' },
    { src: pp4, alt: 'People moment in warm light', location: 'Travel Portrait' },
    { src: people, alt: 'Group portrait for the People gallery', location: 'Group Portrait' },
    { src: pp6, alt: 'People portrait in profile', location: 'Portrait Study' },
    { src: pp13, alt: 'People portrait with soft background', location: 'Candid Frame' },
    { src: pp8, alt: 'People frame with outdoor setting', location: 'Outdoor Portrait' },
    { src: pp9, alt: 'People portrait with natural expression', location: 'Candid Frame' },
    { src: pp10, alt: 'People image in dramatic composition', location: 'Portrait Study' },
    { src: pp11, alt: 'People candid image', location: 'Candid Frame' },
    { src: pp12, alt: 'People frame in travel setting', location: 'Travel Portrait' },
    { src: pp7, alt: 'People portrait with expressive pose', location: 'Portrait Study' },
    { src: pp15, alt: 'People image with natural backdrop', location: 'Outdoor Portrait' },
    { src: pp14, alt: 'People image in soft light', location: 'Candid Frame' },
    { src: pp17, alt: 'People portrait with moody framing', location: 'Portrait Study' },
    { src: pp16, alt: 'People portrait closing frame', location: 'Candid Frame' },
];

const relatedGalleries = [
    { label: 'Nature', href: '#/nature' },
    { label: 'Places', href: 'https://shulinsaraswat.github.io/canonshuttershots-place' },
    { label: 'Wildlife', href: 'https://shulinsaraswat.github.io/canonshuttershots-wildlife' },
];

export default function People(){
    return (
        <GalleryPage
            title="People"
            eyebrow="Canon Shuttershots gallery"
            description="Portraits, candid frames, and human moments captured through expression, mood, and the small pauses between poses."
            coverImage={people}
            coverAlt="Group portrait for the People gallery"
            accent="var(--royal-purple)"
            images={images}
            relatedGalleries={relatedGalleries}
        />
    );
}
