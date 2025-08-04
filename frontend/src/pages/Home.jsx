import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import SixImageGallery from "../components/Img";

const Home = () => {
  return (
    <div className="advanced-home">

      {/* Hero Section */}
      <header className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src="/assets/images/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Discover the Future with YourBrand</h1>
          <p>Modern solutions tailored to Africa’s evolving needs.</p>
          <Link to="/about" className="hero-btn">
            About Us <FaArrowRight />
          </Link>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="section our-story">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            From a humble beginning to a regional force, our story is rooted in purpose, passion, and progress.
          </p>
          <Link to="/our-story" className="section-link">Read More <FaArrowRight /></Link>
        </div>
      </section>

      {/* Logo Identity Section */}
      <section className="section logo-identity">
        <div className="section-content">
          <h2>Our Identity</h2>
          <img src="/assets/images/logo/logobg.jpg" alt="Company Logo" className="logo-image" />
          <p>
            Our logo stands for innovation, integrity, and impact. It's more than a mark — it's a mission.
          </p>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="section product-demo">
        <div className="section-content">
          <h2>How to Use Our Product</h2>
          <p>See it in action and learn how you can make the most of it.</p>
          <video controls poster="/assets/images/product1.jpg" className="product-video">
            <source src="/assets/images/video/video1.mp4" type="video/mp4" />
            Your browser does not support this video.
          </video>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section credibility">
        <div className="section-content">
          <h2>Credibility & Trust</h2>
          <p>
            Trusted by industry leaders and loved by communities. Discover the impact we've made.
          </p>
          <Link to="/credibility" className="section-link">Explore Our Credibility <FaArrowRight /></Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery-preview">
        <div className="section-content">
          <h2>Visual Impact</h2>
          <p>Our product</p>
          <SixImageGallery />
          <Link to="/gallery" className="section-link">View Full Gallery <FaArrowRight /></Link>
        </div>
      </section>

      {/* Ambassador Section */}
      <section className="section ambassador-section">
        <div className="section-content ambassador-content">
          <h2>Meet Our Ambassador</h2>
          <div className="ambassador-flex">
            <img
              src="/assets/images/ambassador.jpg"
              alt="Brand Ambassador"
              className="ambassador-image"
            />
            <div className="ambassador-text">
              <p>
                Our ambassador represents the heart of our mission — connecting communities through innovation.
                With passion and purpose, they champion the values of integrity, growth, and transformation.
              </p>
              <Link to="/gallery" className="ambassador-link">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action Section */}
      <section className="section contact-cta">
        <div className="section-content">
          <h2>Let’s Connect</h2>
          <p>We’re ready to answer your questions or explore partnership opportunities.</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
