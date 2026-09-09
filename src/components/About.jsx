import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="section-subtitle">Who I Am</p>

      <h2>About Me</h2>

      <p className="section-description">
        I am a passionate developer interested in web development,
        JavaScript, React.js and building real-world projects.
        I enjoy learning new technologies and creating useful
        digital experiences.
      </p>
    </motion.section>
  );
}

export default About;