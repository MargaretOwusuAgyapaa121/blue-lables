import React, { useState, useEffect } from "react";
import { AnimatePresence, createMotionComponent } from "framer-motion";

// ✅ Create the motion object manually (required in v12+)
const motion = createMotionComponent();

const images = [
  "/assets/images/banner.jpg",
  "/assets/images/banner.jpg",
  "/assets/images/banner.jpg",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence>
        <motion.div
          key={index}
          className="slider-image"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <div className="overlay">
            <motion.div
              className="hero-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1>Innovate Beyond Limits</h1>
              <p>2025 Ready. Future Focused.</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
