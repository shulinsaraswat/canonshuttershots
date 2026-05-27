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
    { src: pp1, alt: 'Candid people portrait at Quarry Lake', location: 'Vellore, India', detail: 'Quarry Lake' },
    { src: pp2, alt: 'People frame at Vagator Beach', location: 'Goa, India', detail: 'Vagator Beach' },
    { src: pp3, alt: 'People portrait at Aguada Fort', location: 'Goa, India', detail: 'Aguada Fort' },
    { src: pp4, alt: 'People moment at Quarry Lake', location: 'Vellore, India', detail: 'Quarry Lake' },
    { src: people, alt: 'Group portrait at Aguada Fort', location: 'Goa, India', detail: 'Aguada Fort' },
    { src: pp6, alt: 'People portrait at Toad Rock', location: 'Mount Abu, India', detail: 'Toad Rock' },
    { src: pp13, alt: 'People portrait with soft background at Quarry Lake', location: 'Vellore, India', detail: 'Quarry Lake' },
    { src: pp8, alt: 'People frame at Social Cafe', location: 'Bangalore, India', detail: 'Social Cafe' },
    { src: pp9, alt: 'People portrait at Vagator Beach', location: 'Goa, India', detail: 'Vagator Beach' },
    { src: pp10, alt: 'People image at Vagator Beach', location: 'Goa, India', detail: 'Vagator Beach' },
    { src: pp11, alt: 'People candid image at UB City', location: 'Bangalore, India', detail: 'UB City' },
    { src: pp12, alt: 'People frame at Toad Rock', location: 'Mount Abu, India', detail: 'Toad Rock' },
    { src: pp7, alt: 'People portrait at Nakki Lake', location: 'Mount Abu, India', detail: 'Nakki Lake' },
    { src: pp15, alt: 'People image at Aguada Fort', location: 'Goa, India', detail: 'Aguada Fort' },
    { src: pp14, alt: 'People image at Nakki Lake', location: 'Mount Abu, India', detail: 'Nakki Lake' },
    { src: pp17, alt: 'People portrait at VIT University', location: 'Vellore, India', detail: 'VIT University' },
    { src: pp16, alt: 'People portrait at Quarry Lake', location: 'Vellore, India', detail: 'Quarry Lake' },
];

const relatedGalleries = [
    { label: 'Nature', href: '#/nature' },
    { label: 'Places', href: '#/places' },
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
