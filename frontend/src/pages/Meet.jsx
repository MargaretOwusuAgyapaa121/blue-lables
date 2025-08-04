import React from "react";


const MeetCEO = () => {
  return (
    <section className="ceo-section">
      <div className="ceo-hero" data-aos="fade-down">
        <h1>Meet Our CEO</h1>
        <p>
          Leadership, vision, and dedication the cornerstones of our company’s success.
        </p>
      </div>

      <div className="ceo-content">
        <div className="ceo-image" data-aos="fade-right">
          <img src="/assets/images/ceo/ceo.jpg" alt="CEO Portrait" />
        </div>
        <div className="ceo-bio" data-aos="fade-left">
        <h2>Mr. and Mrs. Adu Dankwah</h2>
<h4>Founder & Chief Executive Officer</h4>
<p>
  With over a decade of experience in business development and innovation, Mr. and Mrs. Adu Dankwah have been at the forefront of driving meaningful, lasting change. Their leadership is fueled by a clear vision: to empower communities, build sustainable systems, and deliver modern solutions tailored to Africa’s evolving landscape.
</p>
<p>
  Under their guidance, <strong style={{"color":"#1D3665"}}>ESTA-K Trading Ent.</strong> has grown from a small local venture into a respected name across West Africa  recognized for its commitment to quality, customer satisfaction, and forward-thinking strategies.
</p>
<p>
  Beyond the boardroom, they are deeply passionate about mentoring young talent and championing sustainable growth leading with both purpose and heart every step of the way.
</p>

        </div>
      </div>
    </section>
  );
};

export default MeetCEO;
