import React from "react";


const OurLogo = () => {
  return (
    <div className="our-logo-page">
      <header className="logo-hero">
        <div className="logo-overlay">
          <h1>Our Logo</h1>
          <p>Symbolizing Innovation, Identity & Purpose</p>
        </div>
      </header>

      <section className="logo-showcase">
        <div className="logo-container">
          <img src="/assets/images/logo/logobg.jpg" alt="Company Logo" />
          <div className="logo-info">
            <h2>More Than Just a Logo</h2>
            <p>
              Our logo reflects who we are — forward-thinking, deeply rooted in community,
              and committed to innovation. Every shape, color, and line speaks to our mission
              and our passion for impactful change.
            </p>
            <p>
              Designed with intention, it blends simplicity and symbolism to express growth, trust, and creativity.
            </p>
          </div>
        </div>
      </section>

      <section className="logo-values">
        <h2>The Meaning Behind the Mark</h2>
        <div className="value-cards">
          <div className="card">
            <h3>Color</h3>
            <p>The blue represents trust, depth, and forward vision — key to our identity.</p>
          </div>
          <div className="card">
            <h3>Shape</h3>
            <p>The smooth lines echo harmony and inclusivity across every region we serve.</p>
          </div>
          <div className="card">
            <h3>Typography</h3>
            <p>Modern and clean, our font reflects clarity, professionalism, and innovation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurLogo;
