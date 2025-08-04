import React from "react";

const OurStory = () => {
  return (
    <div className="our-story-wrapper">
      <header className="our-story-hero">
        <div className="hero-overlay">
          <h1>Our Story</h1>
          <p>Rooted in Vision. Built for Tomorrow.</p>
        </div>
      </header>

      <section className="our-journey">
        <div className="story-section">
          <h2>Where It All Began</h2>
          <p>
            In 2015, a bold idea took shape — to create solutions that empower communities across Africa.
            What started as a small home-based initiative has grown into a brand that stands for innovation,
            sustainability, and purpose-driven growth.
          </p>
        </div>

        <div className="story-section">
          <h2>Driven by Passion</h2>
          <p>
            We've built more than just a business. We’ve built trust, impact, and long-lasting partnerships. Our values —
            integrity, empathy, and excellence — are the foundation of everything we do.
          </p>
        </div>

        <div className="story-section">
          <h2>The Future is Now</h2>
          <p>
            As we expand across West Africa and beyond, our vision remains clear: to innovate fearlessly, inspire
            communities, and shape a better tomorrow.
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="timeline-title">Milestones</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2015</h3>
              <p>Founded with a mission to drive community-focused innovation.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2018</h3>
              <p>Launched our first platform, reaching 10,000+ users.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2021</h3>
              <p>Expanded into 3 West African countries.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>2024</h3>
              <p>Recognized among Africa’s Top 100 Innovative Startups.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
