import React from "react";


const Credibility = () => {
  return (
    <div className="credibility-page">
      <header className="credibility-hero">
        <div className="hero-overlay">
          <h1>Why Trust Us</h1>
          <p>Our commitment to quality, transparency, and impact</p>
        </div>
      </header>

      <section className="credibility-intro">
        <h2>Built on Trust, Proven by Results</h2>
        <p>
          For over a decade, we've earned the confidence of our clients and communities
          by consistently delivering value, upholding integrity, and exceeding expectations.
          Our credibility isn't just claimed — it's demonstrated through recognition, results,
          and real impact.
        </p>
      </section>

      <section className="credibility-stats">
        <div className="stat-box">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-box">
          <h3>50,000+</h3>
          <p>Happy Users Across Africa</p>
        </div>
        <div className="stat-box">
          <h3>15+</h3>
          <p>Industry Awards</p>
        </div>
        <div className="stat-box">
          <h3>100%</h3>
          <p>Transparent Operations</p>
        </div>
      </section>

      <section className="credibility-logos">
        <h2>As Featured In</h2>
        <div className="logo-grid">
          <img src="/assets/images/CERT/FDA.jpg" alt="Forbes" />
          <img src="/assets/images/CERT/gra-cet.jpg" alt="BBC" />
          <img src="/assets/images/CERT/reg.jpg" alt="TechCrunch" />
          {/* <img src="/assets/images/CERT/FDA.jpg" alt="CNN" /> */}
        </div>
      </section>
    </div>
  );
};

export default Credibility;
