import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSnapchat, FaTiktok } from "react-icons/fa";



const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Let's connect.</p>
        </div>
      </header>

      <section className="contact-container">
        <div className="contact-form-box">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info-box">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@yourbrand.com</p>
          <p><strong>Phone:</strong> +233 53 316 4966  /  +233 24 474 9756  / +233 24 405 0146</p>
          <p><strong>Address:</strong> 12 Osu Avenue, Accra, Ghana</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/estaktrading?t=RT4sLGtNpkJYLBCHk59WkPQ&s=0" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com/@estaktradingenter?_t=ZM-8yMgrytvEgv&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
               <a href="https://www.snapchat.com/add/estaktradingent?share_id=sZTM8VKQRbE&locale=en-GB" target="_blank" rel="noopener noreferrer">
              <FaSnapchat />
            </a>
            
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
