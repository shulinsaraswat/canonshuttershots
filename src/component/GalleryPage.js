import React from 'react';
import '../css/gallery.css';

export default function GalleryPage({
    title,
    eyebrow,
    description,
    coverImage,
    coverAlt,
    accent = 'var(--fresh-green)',
    images,
}) {
    return (
        <main className="gallery-page" style={{ '--gallery-accent': accent }}>
            <section className="gallery-hero">
                <img src={coverImage} alt={coverAlt} />
                <div className="gallery-hero-overlay"></div>
                <div className="gallery-hero-content">
                    <p className="section-kicker">{eyebrow}</p>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </section>

            <section className="gallery-body section-shell">
                <div className="container">
                    <div className="gallery-heading">
                        <p className="section-kicker">Selected frames</p>
                        <h2 className="section-title">{title} Gallery</h2>
                        <p className="section-intro">A focused set of images brought into the main Canon Shuttershots experience.</p>
                    </div>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <figure className="gallery-tile" key={`${image.alt}-${index}`}>
                                <img src={image.src} alt={image.alt} loading="lazy" />
                            </figure>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
