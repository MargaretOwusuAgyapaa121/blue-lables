import React from "react";


const images = [
  "/assets/images/product5.jpg",
  "/assets/images/product4.jpg",
  "/assets/images/product3.jpg",
  "/assets/images/product5.jpg",
  "/assets/images/product1.jpg",
  "/assets/images/products.jpg",
  "/assets/images/brand7.jpg",
  "/assets/images/bd.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <header className="gallery-hero">
        <video
          className="gallery-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/images/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>Gallery</h1>
          <p>Explore our product</p>
        </div>
      </header>

      <section className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
