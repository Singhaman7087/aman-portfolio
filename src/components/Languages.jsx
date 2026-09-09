import { motion } from "framer-motion";

function Languages() {
  const languages = [
    {
      name: "JavaScript",
      level: "Intermediate",
      percentage: "80%",
    },
    {
      name: "Java",
      level: "Intermediate",
      percentage: "70%",
    },
    {
      name: "HTML",
      level: "Advanced",
      percentage: "90%",
    },
    {
      name: "CSS",
      level: "Advanced",
      percentage: "85%",
    },
    {
      name: "Python",
      level: "Basic",
      percentage: "50%",
    },
  ];

  return (
    <section id="languages" className="section">
      <p className="section-subtitle">Programming</p>

      <h2>Languages</h2>

      <p className="section-description">
        Programming and web technologies I am currently
        learning and working with.
      </p>

      <div className="languages-container">
        {languages.map((language, index) => (
          <motion.div
            className="language-card"
            key={language.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="language-header">
              <h3>{language.name}</h3>
              <span>{language.level}</span>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: 0 }}
                whileInView={{ width: language.percentage }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>

            <p>{language.percentage}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Languages;