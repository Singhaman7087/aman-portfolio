import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${formData.name}! Your message has been submitted.`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <p className="section-subtitle">Get In Touch</p>

      <h2>Contact Me</h2>

      <p className="section-description">
        Have a project or opportunity? Feel free to send me a message.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Talk</h3>

          <p>
            I'm always interested in new projects, ideas and
            opportunities.
          </p>

          <div className="contact-item">
            <strong>📧 Email</strong>
            <span>your-email@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>📍 Location</strong>
            <span>India</span>
          </div>

          <div className="contact-item">
            <strong>💻 GitHub</strong>
            <span>github.com/yourusername</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;