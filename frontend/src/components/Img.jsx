import React from "react";

const images = [
  "/assets/images/products.jpg",
  "/assets/images/product1.jpg",
  "/assets/images/product2.jpg",
  "/assets/images/product3.jpg",
  "/assets/images/product4.jpg",
  "/assets/images/product5.jpg",
];

const SixImageGallery = () => {
  return (
  <div className="gallery-wrapper">
  <div className="gallery-section">
    {images.map((src, index) => (
      <span style={{ "--i": index }} key={index}>
        <img src={src} alt={`Image ${index + 1}`} />
      </span>
    ))}
  </div>

  <div className="gallery-text">
    <h2>Explore Our Products</h2>
    <p>
      Experience the innovation behind our products — rotating to reveal what’s possible. 
      Built with purpose, style, and modern functionality.
    </p>
  </div>
</div>

  );
};

export default SixImageGallery;
