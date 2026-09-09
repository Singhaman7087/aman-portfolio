import { motion } from "framer-motion";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="intro">Hello, I'm</p>

        <h1>Aman Singh</h1>

        <h2>Frontend Developer</h2>

        <p className="hero-text">
          I create modern, responsive and user-friendly
          websites using React.js and JavaScript.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImage}
          alt="Aman Singh"
          className="profile-image"
        />
      </motion.div>

    </section>
  );
}

export default Hero;