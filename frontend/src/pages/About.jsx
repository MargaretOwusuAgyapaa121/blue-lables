import React from "react";



const About = () => {
  return (
    <section className="about-section">
      <div className="about-hero" data-aos="fade-down">
        <h1>About Us</h1>
        <p>
          At <strong>YourBrand</strong>, we are committed to delivering impactful, sustainable, and innovative solutions tailored to our customers' evolving needs.
        </p>
      </div>

      <div className="about-mission">
        <div className="mission-text" data-aos="fade-right">
          <h2>Our Mission</h2>
          <p>
            To secure a leading position in the Ghanaian market and expand across West Africa by offering high-quality, customer-centric products and services. We aim to be known for excellence, trust, and sustainability.
          </p>
        </div>
        <div className="mission-image" data-aos="fade-left">
          <img src="/assets/images/pro.jpg" alt="Our mission" />
        </div>
      </div>

      <div className="about-goals">
        <h2 data-aos="fade-up">Our Strategic Goals</h2>
        <div className="goals-grid">
          <div className="goal-card" data-aos="fade-up" data-aos-delay="100">
            <img src="/assets/images/abt.jpg" alt="Market Penetration" />
            <h4>Market Penetration</h4>
            <p>Achieve 20% market share in Ghana within the first year, expanding into West Africa next.</p>
          </div>

          <div className="goal-card" data-aos="fade-up" data-aos-delay="200">
            <img src="/assets/images/abt1.jpg" alt="Brand Awareness" />
            <h4>Brand Awareness</h4>
            <p>Reach 60% brand recognition within 12 months through bold marketing campaigns.</p>
          </div>

          <div className="goal-card" data-aos="fade-up" data-aos-delay="300">
            <img src="/assets/images/brand6.jpg" alt="Sales Growth" />
            <h4>Sales Growth</h4>
            <p>Grow sales by 25% annually through strong networks and tailored strategies.</p>
          </div>

          <div className="goal-card" data-aos="fade-up" data-aos-delay="400">
            <img src="/assets/images/products.jpg" alt="Customer Retention" />
            <h4>Customer Retention</h4>
            <p>Maintain 95% satisfaction by delivering excellent service and quality.</p>
          </div>

          <div className="goal-card" data-aos="fade-up" data-aos-delay="500">
            <img src="/assets/images/abt2.jpg" alt="Sustainability" />
            <h4>Sustainability & Innovation</h4>
            <p>Improve operations to protect the environment and anticipate customer needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
