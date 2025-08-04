import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSnapchat, FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info-box">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@yourbrand.com</p>
          <p><strong>Phone:</strong> +233 53 316 4966 / +233 24 474 9756 / +233 24 405 0146</p>
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
