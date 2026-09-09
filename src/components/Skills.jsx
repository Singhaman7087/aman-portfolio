import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Java", level: "70%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  return (
    <section id="skills" className="section skills-section">
      <p className="section-subtitle">What I Know</p>

      <h2>My Skills</h2>

      <p className="section-description">
        Technologies and tools I use to build modern web
        applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;