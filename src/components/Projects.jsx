import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website built with React.js.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "A weather application that displays weather information.",
    image: "/projects/weather.jpg",
    technologies: ["JavaScript", "API", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Todo App",
    description:
      "A simple and responsive task management application.",
    image: "/projects/todo.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <p className="section-subtitle">My Work</p>

      <h2>My Projects</h2>

      <p className="section-description">
        Here are some projects I have built while learning
        and improving my development skills.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="project-btn live"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;