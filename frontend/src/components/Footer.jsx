// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaSnapchat,
//   FaTiktok,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Brand */}
//         <div className="footer-brand">
//           <h2>ESTA K Trading</h2>
//           <p>© 2025 Estak Trading. All rights reserved.</p>
//         </div>

//         {/* Explore */}
//         <div className="footer-links">
//           <h4>Explore</h4>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>

//         {/* Location */}
//         <div className="footer-location">
//           <h4>Our Location</h4>
//           <p>Accra, Ghana</p>
//           <p>East Legon, AR 022</p>
//           <p>Email: estaktradingenterprise@gmail.com</p>
//         </div>

//         {/* Social */}
//         <div className="footer-social">
//           <h4>Follow Us</h4>
//           <div className="social-icons">
//             {/* Uncomment if you want to use more */}
//             {/* <a href="#"><FaFacebookF /></a> */}
//             <a href="https://x.com/estaktrading?t=RT4sLGtNpkJYLBCHk59WkPQ&s=0"><FaTwitter /></a>
//             {/* <a href="#"><FaInstagram /></a> */}
//             <a href="https://www.tiktok.com/@estaktradingenter?_t=ZM-8yMgrytvEgv&_r=1"><FaTiktok /></a>
//             <a href="https://www.snapchat.com/add/estaktradingent?share_id=sZTM8VKQRbE&locale=en-GB"><FaSnapchat /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const [showLocations, setShowLocations] = useState(false);

  const toggleLocations = () => {
    setShowLocations(!showLocations);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>ESTA K Trading</h2>
          <p>© 2025 Estak Trading. All rights reserved.</p>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Location */}
        <div className="footer-location">
          <h4>Our Location</h4>
          <p>Kumasi, Ghana</p>
          <p>Ashanti New Town, P93G+VRH</p>
          <p>Email: estaktradingenterprise@gmail.com</p>

          {/* Toggle Locations */}
          <button onClick={toggleLocations} className="view-offices-btn">
            {showLocations ? "Hide Branches" : "View All Branches"}
          </button>

          {showLocations && (
            <ul className="branch-list">
              <li>
                <strong>Central Region – Cape Coast</strong><br />
                📍 Mankessim <br />
                ☎️ +233 24 750 5999
              </li>
              <li>
                <strong>Ahafo Region</strong><br />
                📍 Tepa Market Store<br />
                ☎️ +233 054 318 4877
              </li>
              <li>
                <strong>Western Region – Takoradi</strong><br />
                📍 Market Circle, next to Vodafone<br />
                ☎️ +233 26 789 3210
              </li>
              <li>
                <strong>Bono Region – Sunyani</strong><br />
                📍 Main Road, near GPRTU<br />
                ☎️ +233 50 234 5678
              </li>
              <li>
                <strong>Tepa Branch</strong><br />
                📍 Behind Central Mosque, Tepa Market<br />
                ☎️ +233 27 345 6789
              </li>
            </ul>
          )}
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* <a href="#"><FaFacebookF /></a> */}
            <a href="https://x.com/estaktrading?t=RT4sLGtNpkJYLBCHk59WkPQ&s=0"><FaTwitter /></a>
            <a href="https://www.tiktok.com/@estaktradingenter?_t=ZM-8yMgrytvEgv&_r=1"><FaTiktok /></a>
            <a href="https://www.snapchat.com/add/estaktradingent?share_id=sZTM8VKQRbE&locale=en-GB"><FaSnapchat /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

