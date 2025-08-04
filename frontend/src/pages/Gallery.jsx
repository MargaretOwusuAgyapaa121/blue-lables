import React from "react";


const images = [
  "/assets/images/product5.jpg",
  "/assets/images/product4.jpg",
  "/assets/images/product3.jpg",
  "/assets/images/product5.jpg",
  "/assets/images/product1.jpg",
  "/assets/images/products.jpg",
  "/assets/images/brand7.jpg",
  "/assets/images/gallery/gallery16.jpg",
  "/assets/images/gallery/gallery17.jpg",
  "/assets/images/gallery/gallery1.jpg",
  "/assets/images/gallery/gallery2.jpg",
  "/assets/images/gallery/gallery12.jpg",
  "/assets/images/gallery/gallery13.jpg",
  "/assets/images/gallery/gallery18.jpg",
  "/assets/images/gallery/gallery17.jpg",
  "/assets/images/gallery/gallery8.jpg",
  "/assets/images/gallery/gallery10.jpg",
  "/assets/images/gallery/gallery9.jpg", 
  "/assets/images/gallery/gallery10.jpg",
  "/assets/images/gallery/gallery11.jpg",
  "/assets/images/gallery/gallery15.jpg",
  "/assets/images/gallery/gallery14.jpg",
  "/assets/images/gallery/gallery16.jpg",
  "/assets/images/gallery/gallery.jpg",
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
